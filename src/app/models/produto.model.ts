import { CategoriaType } from "../types/categoria.type";

export interface produtoModel
{
    nome: string;
    preco: number;
    imagem: string;
    categoria: CategoriaType
}