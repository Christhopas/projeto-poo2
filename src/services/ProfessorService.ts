import { PrismaClient } from "@prisma/client";
import Professor from "../models/Professor";

const prismaClient = new PrismaClient();


// Função pra preencher oss dados do professor
export async function preencherProfessor(professor: Professor) 
{
    const dadosProfessor = await prismaClient.professor.create({
        data : 
        {
            email: professor.retornarEmail(),
            nome_professor: professor.retornarNome(),
            matricula: professor.retornarMatricula(),
        }
    })
}

// Lê Professor no DB
export async function lerProfessor(professor: Professor) {
    const dadosProfessor = await prismaClient.professor.findUnique({
        where : {
            matricula : professor.retornarMatricula()
        }
    })
}



// Deletar professor no DB
export async function deletarProfessor(professor: Professor) {
    const dadosProfessor = await prismaClient.professor.delete({
        where: {
            matricula: professor.retornarMatricula()
        }
    })
}