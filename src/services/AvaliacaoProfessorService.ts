import AvaliacaoProfessor from "../models/AvaliacaoProfessor"
import { PrismaClient } from "@prisma/client"

const prismaClient = new PrismaClient();

export async function preencherAvaliacaoProfessor(avaliacaoProfessor: AvaliacaoProfessor) 
{
    const dadosAvaliacaoProfessor = await prismaClient.avaliacaoProfessor.create({
        data: 
        {  
            numero_avaliacao: avaliacaoProfessor.retornarNumero(),
            matricula_avaliador_professor: avaliacaoProfessor.retornarMatricula(),
            numero_grupo_avaliado: avaliacaoProfessor.retornarNumeroGrupo(),            
            nota: avaliacaoProfessor.retornarNota(),
        }
    })
}
export async function lerAvaliacaoProfessor(avaliacaoProfessor: AvaliacaoProfessor){
    const dadosAvaliacaoProfessor = await prismaClient.avaliacaoProfessor.findUnique({
        where: 
        {
            numero_avaliacao: avaliacaoProfessor.retornarNumero()
        }
    })
}

export async function deletarAvaliacaoProfessor(avaliacaoProfessor: AvaliacaoProfessor) {
    const dadosAvaliacaoProfessor = await prismaClient.avaliacaoProfessor.delete({
        where: {
            numero_avaliacao: avaliacaoProfessor.retornarNumero()
        }
    })
}