from flask import Blueprint, request, jsonify
from models import db, Produto

routes = Blueprint('routes', __name__)

# LISTAR PRODUTOS
@routes.route('/produtos', methods=['GET'])
def listar_produtos():
    produtos = Produto.query.all()
    return jsonify([p.to_dict() for p in produtos])

# BUSCAR POR ID
@routes.route('/produtos/<int:id>', methods=['GET'])
def buscar_produto(id):
    produto = Produto.query.get_or_404(id)
    return jsonify(produto.to_dict())

# CRIAR PRODUTO
@routes.route('/produtos', methods=['POST'])
def criar_produto():
    data = request.json

    novo = Produto(
        nome=data['nome'],
        descricao=data.get('descricao'),
        preco=data['preco'],
        imagem=data.get('imagem'),
        categoria=data.get('categoria')
    )

    db.session.add(novo)
    db.session.commit()

    return jsonify(novo.to_dict()), 201

# ATUALIZAR
@routes.route('/produtos/<int:id>', methods=['PUT'])
def atualizar_produto(id):
    produto = Produto.query.get_or_404(id)
    data = request.json

    produto.nome = data['nome']
    produto.descricao = data.get('descricao')
    produto.preco = data['preco']
    produto.imagem = data.get('imagem')
    produto.categoria = data.get('categoria')

    db.session.commit()

    return jsonify(produto.to_dict())

# DELETAR
@routes.route('/produtos/<int:id>', methods=['DELETE'])
def deletar_produto(id):
    produto = Produto.query.get_or_404(id)
    db.session.delete(produto)
    db.session.commit()

    return '', 204

@routes.route('/seed')
def seed():
    p1 = Produto(
        nome="Sabonete Natural",
        descricao="Feito com ervas naturais",
        preco=15.5,
        imagem="assets/sabonete.jpg",
        categoria="banho"
    )

    p2 = Produto(
        nome="Sabonete Relaxante",
        descricao="Aroma de lavanda",
        preco=18.0,
        imagem="assets/sabonete.jpg",
        categoria="banho"
    )

    db.session.add_all([p1, p2])
    db.session.commit()

    return {"msg": "dados inseridos"}