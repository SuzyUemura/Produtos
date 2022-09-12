export class Produto {
    id: any;
    descricao: string;
    imagem : string;
    nome: string;
    unidade: string;

    constructor(Id: any)
    {
        this.id = Id;
        this.descricao = "";
        this.imagem = "";
        this.nome = "";
        this.unidade = "";
    }
}