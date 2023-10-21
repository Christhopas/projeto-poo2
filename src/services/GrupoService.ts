import { PrismaClient } from "@prisma/client";
import Grupo from "../models/Grupo";
import Aluno from "../models/Aluno";


const prismaClient = new PrismaClient();

export async function preencherGrupo(grupo: Grupo) {
    
    const dadosGrupo = await prismaClient.grupo.create({
        data: {
            numero_grupo: grupo.retornarNumero(),
            numero_estande: grupo.retornarEstande(),
            nome_grupo: grupo.retornarNome(),
            dia_apresentacao: grupo.retornarDia(),
            matricula_lider: grupo.retornarMatriculaLider(),
        }
    })

    await prismaClient.aluno.update({
        where: {
            matricula: grupo.retornarMatriculaLider(),
        },
        data: {
            numero_grupo: grupo.retornarNumero(),
        }
    })
}

export async function lerGrupo(grupo: Grupo) {
    return await prismaClient.grupo.findUnique({
        where: {
            numero_grupo: grupo.retornarNumero()
        }
    })
}

export async function deleteGrupo(grupo: Grupo) {
    const dadosGrupo = await prismaClient.grupo.delete({
        where: {
          numero_grupo: grupo.retornarNumero()
        }
    })
}