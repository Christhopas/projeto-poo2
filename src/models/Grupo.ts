import Aluno from "./Aluno"

export default class Grupo{
    private nome_grupo: string;
    private matricula_lider: number;
    private numero_grupo: number;
    private numero_estande: number;
    private dia_apresentacao: Date;

    constructor(nome_grupo: string, matricula_lider: number, numero_grupo: number, numero_estande: number, dia_apresentacao: Date){
        this.nome_grupo = nome_grupo;
        this.matricula_lider = matricula_lider;
        this.numero_grupo = numero_grupo;
        this.numero_estande = numero_estande;  
        this.dia_apresentacao = dia_apresentacao;
    }

    public inserirNome(nome_grupo: string){
        this.nome_grupo = nome_grupo;
    }
    
    public retornarNome(){
        return this.nome_grupo;
    }
    
    public inserirMatriculaLider(matricula_lider: number){
        this.matricula_lider = matricula_lider;
    }
    
    public retornarMatriculaLider(){
        return this.matricula_lider;
    }

    public inserirNumero(numero_grupo: number){
        this.numero_grupo = numero_grupo;
    }

    public retornarNumero(){
        return this.numero_grupo;
    }

    public inserirEstande(numero_estande: number){
        this.numero_estande = numero_estande;
    }

    public retornarEstande(){
        return this.numero_estande;
    }

    public inserirDia(dia_apresentacao: Date){
        this.dia_apresentacao = dia_apresentacao;
    }

    public retornarDia(){
        return this.dia_apresentacao;
    }
}