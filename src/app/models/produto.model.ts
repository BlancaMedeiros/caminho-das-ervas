import { CategoriaType } from "../types/categoria.type";

export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  categoria?: string;
}