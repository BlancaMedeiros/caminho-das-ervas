import { CategoriaType } from "../types/categoria.type";

export interface produtoModel
{
    id: number;
    nome: string;
    descricao: string;
    quantidade: number;
    preco: number;
    categoria: CategoriaType;
    imagem: string;
}