import { PrismaClient } from '@prisma/client'
import Aluno from './src/models/Aluno'
import Professor from './src/models/Professor'
import Estande from './src/models/Estande'
import Grupo from './src/models/Grupo'
import AvaliacaoAluno from './src/models/AvaliacaoAluno'
import AvaliacaoProfessor from './src/models/AvaliacaoProfessor'
import Avaliacao from './src/models/Avaliacao'
import { preencherAluno, agruparAluno } from './src/services/AlunoServices'
import { preencherProfessor } from './src/services/ProfessorService'
import { preencherEstande } from './src/services/EstandeService'
import { preencherGrupo } from './src/services/GrupoService'
import { preencherAvaliacaoAluno } from './src/services/AvaliacaoAlunoService'
import { preencherAvaliacaoProfessor } from './src/services/AvaliacaoProfessorService'
import { preencherAvaliacao } from './src/services/AvaliacaoService'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here

  // Criar os alunos
  const primeiro_aluno = new Aluno("Guilherme", 1909, "guilherme@powerrangers.com", "Ciencia da Computacao");
  const segundo_aluno = new Aluno("Bernardo Abutre", 23, "kkkkeusoualto@chama.br", "Gastronomia");
  const terceiro_aluno = new Aluno("Christopher", 44, "sumiu@cadeatete.com", "O que der na telha");


  // Criar o professor
  const primeiro_professor = new Professor("Bianca", "peteleu@peteleco.pt", 1011);

  // Criar o estande
  const primeiro_estande = new Estande(1)

  // Criar o grupo
  const primeiro_grupo = new Grupo("Os Farofeiros", primeiro_aluno.retornarMatricula(), 1, primeiro_estande.retornarNumero(), new Date());


  // Criar as avaliações 
  const primeira_avaliacao_aluno = new AvaliacaoAluno(1, terceiro_aluno.retornarMatricula(), primeiro_grupo.retornarNumero(), primeiro_aluno.fazerAvaliacao(1, 7));

  const primeira_avaliacao_professor = new AvaliacaoProfessor(1, primeiro_professor.retornarMatricula(), primeiro_grupo.retornarNumero(), primeiro_professor.fazerAvaliacao(1,8));

  const primeira_avaliacao = new Avaliacao(1, primeira_avaliacao_aluno.retornarNumero(), primeira_avaliacao_professor.retornarNumero(), primeiro_grupo.retornarNumero());

  //Para rodar os códigos de preencher o prisma com esses dados, copiar e rodar aqui cada um dos códigos de população especificados no readme
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



  
