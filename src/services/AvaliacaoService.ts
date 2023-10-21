import Avaliacao from "../models/Avaliacao"
import AvaliacaoAluno from "../models/AvaliacaoAluno"
import AvaliacaoProfessor from "../models/AvaliacaoProfessor"
import { PrismaClient } from "@prisma/client"

const prismaClient = new PrismaClient();

export async function preencherAvaliacao(avaliacao: Avaliacao, avaliacaoAluno: AvaliacaoAluno, avaliacaoProfessor: AvaliacaoProfessor) 
{
    const dadosAvaliacao = await prismaClient.avaliacao.create({
        data: 
        {  
            numero_avaliacao: avaliacao.retornarNumero(),
            numero_avaliacao_aluno: avaliacao.retornarAvaliacaoAluno(),
            numero_avaliacao_professor: avaliacao.retornarAvaliacaoProfessor(),
            numero_grupo_avaliado: avaliacao.retornarNumeroGrupo(),
            nota1: avaliacaoAluno.retornarNota(),
            nota2: avaliacaoProfessor.retornarNota(),
            notaFinal: (avaliacaoAluno.retornarNota() + avaliacaoProfessor.retornarNota() / 2),             
        }
    })    
}

export async function lerAvaliacao(avaliacao: Avaliacao) {
    return await prismaClient.avaliacao.findUnique({
        where: {
            numero_avaliacao: avaliacao.retornarNumero()
        }
    })
}

export async function deletarAvaliacao(avaliacao: Avaliacao) {
    return await prismaClient.avaliacao.delete({
        where: {
            numero_avaliacao: avaliacao.retornarNumero()
        }
    })
}