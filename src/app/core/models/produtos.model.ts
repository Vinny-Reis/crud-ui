import { Categorias } from "./categorias.model";

export class Produtos{

    id: string;
    descricao: string;
    valor: number;
    quantidade: number;
    categoria = new Categorias();
}