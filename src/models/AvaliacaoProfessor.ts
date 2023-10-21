import Professor from "./Professor";
import Grupo from "./Grupo";

export default class AvaliacaoProfessor
{
    numero_avaliacao: number;
    matricula_avaliador_professor: number;
    numero_grupo_avaliado: number;
    nota: number;

    constructor(numero_avaliacao: number, matricula_avaliador_professor: number, numero_grupo_avaliado: number, nota: number)
    {
        this.numero_avaliacao = numero_avaliacao;
        this.matricula_avaliador_professor = matricula_avaliador_professor; 
        this.numero_grupo_avaliado = numero_grupo_avaliado;
        this.nota = nota;
    }

    public inserirNumero(numero_avaliacao: number)
    {
        this.numero_avaliacao = numero_avaliacao;
    }

    public retornarNumero()
    {
        return this.numero_avaliacao;
    }

    public inserirMatricula(matricula_avaliador_aluno: number)
    {
        this.matricula_avaliador_professor = matricula_avaliador_aluno;
    }

    public retornarMatricula()
    {
        return this.matricula_avaliador_professor;
    }

    public inserirNumeroGrupo(numero_grupo_avaliado: number)
    {
        this.numero_grupo_avaliado = numero_grupo_avaliado;
    }

    public retornarNumeroGrupo()
    {
        return this.numero_grupo_avaliado;
    }

    public inserirNota(nota: number)
    {
        this.nota = nota;
    }

    public retornarNota()
    {
        return this.nota;
    }

}