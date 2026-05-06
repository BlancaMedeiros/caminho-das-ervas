const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const XLSX = require('xlsx');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com o banco de dados (ajuste o nome do arquivo se preferir meu_banco.db)
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) console.error("Erro ao abrir BD:", err.message);
    else console.log("Conectado ao banco de dados SQLite (database.db)!");
});

// 1. Função para importar da planilha
function importarPlanilha() {
    try {
        // Carrega o arquivo Excel
        const caminhoPlanilha = path.resolve(__dirname, 'produtos_loja.xlsx');
        const workbook = XLSX.readFile(caminhoPlanilha);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        
        // Converte para JSON
        const dados = XLSX.utils.sheet_to_json(sheet);

        if (dados.length === 0) {
            console.log("A planilha está vazia ou não pôde ser lida.");
            return;
        }

        db.serialize(() => {
            // Cria a tabela com os campos corretos
            db.run(`CREATE TABLE IF NOT EXISTS produtos (
                id INTEGER PRIMARY KEY AUTOINCREMENT, 
                nome TEXT, 
                descricao TEXT, 
                quantidade INTEGER, 
                preco REAL,
                categoria TEXT,
                imagem TEXT
            )`);

            // Limpa a tabela antes de importar para evitar duplicatas toda vez que o servidor rodar
            // Se quiser manter os dados antigos, comente a linha abaixo:
            db.run("DELETE FROM produtos");

            const stmt = db.prepare("INSERT INTO produtos (nome, descricao, quantidade, preco, categoria, imagem) VALUES (?, ?, ?, ?, ?, ?)");

            dados.forEach((prod) => {
                // IMPORTANTE: O nome após o 'prod.' deve ser EXATAMENTE igual ao cabeçalho da sua planilha
                // Exemplo: se no Excel está 'NOME', use prod.NOME. Se está 'Nome', use prod.Nome.
                const nome = prod.NOME || prod.Nome || prod.nome;
                const desc = prod.DESCRICAO || prod.Descricao || prod.descricao;
                const qtd = prod.QUANTIDADE || prod.Quantidade || prod.quantidade;
                const preco = prod.PRECO || prod.Preco || prod.preco;
                const categoria = prod.CATEGORIA || prod.Categoria || prod.categoria;
                const imagem = prod.IMAGEM || prod.Imagem || prod.imagem;

                stmt.run(nome, desc, qtd, preco, categoria, imagem);
            });

            stmt.finalize((err) => {
                if (err) console.error("Erro ao finalizar inserção:", err.message);
                else console.log(`${dados.length} produtos importados com sucesso!`);
            });
        });
    } catch (error) {
        console.error("Erro crítico ao processar planilha:", error.message);
        console.log("Certifique-se de que o arquivo 'produtos_loja.xlsx' está na raiz do projeto.");
    }
}

// 2. Rota para o Angular buscar os produtos
app.get('/api/produtos', (req, res) => {
    db.all("SELECT * FROM produtos", [], (err, rows) => {
        if (err) {
            console.error("Erro na consulta:", err.message);
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Inicialização do servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`--- Servidor rodando em http://localhost:${PORT} ---`);
    
    // CHAMADA DA FUNÇÃO: Agora ela será executada assim que o servidor subir
    importarPlanilha();
});