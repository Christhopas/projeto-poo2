import Aluno from "../models/Aluno"
import { PrismaClient } from "@prisma/client"

const prismaClient = new PrismaClient();

// preenchimento de dados dos alunos
export async function preencherAluno(aluno: Aluno) 
{
    const dadosAluno = await prismaClient.aluno.create({
        data: 
        {  
            nome_aluno: aluno.retornarNome(),
            matricula: aluno.retornarMatricula(),
            email: aluno.retornarEmail(),            
            curso: aluno.retornarCurso(),
        }
    })
}

export async function lerAluno(aluno: Aluno){
    const dadosAluno = await prismaClient.aluno.findUnique({
        where: 
        {
            matricula: aluno.retornarMatricula()
        }
    })
}

export async function agruparAluno(aluno: Aluno, numero_grupo: number){
    const dadosAluno = await prismaClient.aluno.update({
        where: 
        {
            matricula: aluno.retornarMatricula()
        },
        data: 
        {
            numero_grupo: numero_grupo
        }
    })
}

export async function deletarAluno(aluno: Aluno) {
    const dadosAluno = await prismaClient.aluno.delete({
        where: {
            matricula: aluno.retornarMatricula()
        }
    })
}
