import Estande from "../models/Estande";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export async function preencherEstande(estande: Estande) {
    
    const dadosEstande = await prismaClient.estande.create({
        data: {  
            numero_estande: estande.retornarNumero()
        }
    })

}

export async function lerEstande(estande: Estande) {
    const dadosEstande = await prismaClient.estande.findUnique({
        where: {
            numero_estande: estande.retornarNumero()
        }
    })
}



export async function deletarEstande(estande: Estande) {
    const dadosEstande = await prismaClient.estande.delete({
        where: {
            numero_estande: estande.retornarNumero()
        }
    })
}