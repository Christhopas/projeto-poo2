import AvaliacaoAluno from "../models/AvaliacaoAluno"
import { PrismaClient } from "@prisma/client"

const prismaClient = new PrismaClient();

export async function preencherAvaliacaoAluno(avaliacaoAluno: AvaliacaoAluno) 
{
    const dadosAvaliacaoAluno = await prismaClient.avaliacaoAluno.create({
        data: 
        {  
            numero_avaliacao: avaliacaoAluno.retornarNumero(),
            matricula_avaliador_aluno: avaliacaoAluno.retornarMatricula(),
            numero_grupo_avaliado: avaliacaoAluno.retornarNumeroGrupo(),            
            nota: avaliacaoAluno.retornarNota(),
        }
    })
}
export async function lerAvaliacaoAluno(avaliacaoAluno: AvaliacaoAluno){
    const dadosAvaliacaoAluno = await prismaClient.avaliacaoAluno.findUnique({
        where: 
        {
            numero_avaliacao: avaliacaoAluno.retornarNumero()
        }
    })
}

export async function deletarAvaliacaoAluno(avaliacaoAluno: AvaliacaoAluno) {
    const dadosAvaliacaoAluno = await prismaClient.avaliacaoAluno.delete({
        where: {
            numero_avaliacao: avaliacaoAluno.retornarNumero()
        }
    })
}