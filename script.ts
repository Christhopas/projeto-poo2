import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here

  const avaliacao = await prisma.avaliacao.create({
    data: {
      id_avaliador: 3,
      numero_grupo_avaliado: 1,
      numero_estande_grupo: 1,
      nota: 10,
    }
  })
  console.log(avaliacao)

}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })



  