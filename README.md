<div align="center">
  
# **Projeto Programação Orientada À Objetos 2**
</div>

### Alunos: Christopher Thompson, Gabriel Guido, Guilherme Mafra e José Luiz Dantas
### Prof. Otávio Lube
### Turma: CC4M

<br>

# **1. Introdução**
## Descrição do minimundo 

O InovaWeek é um evento anual da Universidade Vila Velha que reúne estudantes, professores e profissionais de diversas áreas para discutir inovação científica e empreendedorismo. Além disso o evento tem como objetivo principal fomentar a inovação científica, incentivando os participantes a desenvolverem projetos inovadores. O Inovaweek proporciona uma gama de atividades e oportunidades para os participantes, incluindo: exposições de projetos, palestras e workshops e além de tudo possibilita o networking (permite aos participantes se conectarem com outros profissionais e estudantes interessados em inovação). Esta apresentação vale nota para o corrente semestre do ano. Além do mais, os alunos apresentarem trabalhos em grupos que  exibem os trabalhos dos estudantes durante um determinado período de tempo. O evento, atualmente, dura 3 dias, mas poderia variar esses dias. A nota do grupo é calculada como a média de avaliações feitas pelos professores em visitas aos estudante, ademais três professores são incumbidos desta avaliação, porém estes critérios podem variar e, inclusive os alunos poderiam começar a avaliar os estandes.


 <br>

 


<br>

# **2. Iniciando o Projeto**
Para iniciarmos o projeto é necessario fazer as seguintes instalações:

#### Criar um projeto em TypeScript e colocar para funcionar no Prisma 
```
mkdir hello-prisma 
cd hello-prisma
```
#### Iniciando o node
``` 
npm init -y
```
#### Instalando o TypeScript
```
npm install typescript --save-dev
```
#### Inicializando e configurando o TypeScript
```
npx tsc --init
```
#### Instalando o Prisma CLI
```
npm install prisma --save-dev
```
#### Inicializando o Prisma
```
npx prisma init --datasource-provider sqlite
```
#### Migrando os dados para o Banco de Dados utilizando o Prisma Migrate
```
npx prisma migrate dev --name init
```
Todos esses Códigos e seus tutorias podem ser encontrados no site do [Prisma](https://www.prisma.io/docs/getting-started/quickstart)


# **3. Rodando o Projeto**

>```
>   npx ts-node script.ts
>```

# 4 Linguagens utilizadas no projeto:
- Prisma
- Draw.io
- TypeScript
