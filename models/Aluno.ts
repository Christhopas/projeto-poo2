import Grupo from"./Grupo";
export default class Aluno
{
    private nome_aluno: string;
    private matricula: number;
    private email: string;
    private curso: string;
    private grupo?: Grupo;

    constructor(nome_aluno: string, matricula: number, email: string, curso: string)
    {
        this.nome_aluno = nome_aluno;
        this.matricula = matricula; 
        this.email = email;
        this.curso = curso;
    }

    public inserirNome(nome_aluno: string)
    {
        this.nome_aluno = nome_aluno;
    }

    public retornarNome()
    {
        return this.nome_aluno;
    }

    public inserirMatricula(matricula: number)
    {
        this.matricula = matricula;
    }

    public retornarMatricula()
    {
        return this.matricula;
    }

    public inserirEmail(email: string)
    {
        this.email = email;
    }

    public retornarEmail()
    {
        return this.email;
    }

    public inserirCurso(curso: string)
    {
        this.curso = curso;
    }

    public retornarCurso()
    {
        return this.curso;
    }

    public inserirGrupo(grupo: Grupo)
    {
        this.grupo = grupo;
    }

    public retornarGrupo()
    {
        return this.grupo;
    }
}