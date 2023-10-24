# 21º Projeto: Talker Manager

<p align="center">
<img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/21%20-%20TalkerManager.jpg?raw=true" alt="Header" />
<hr/>

<p align="center">
<a href="#descrição-do-projeto">Descrição do Projeto</a> •
<a href="#nesse-projeto-aprendi-e-coloquei-em-prática">Aprendizado</a> •
<a href="#de-acordo-com-os-requisitos-do-projeto-designados-pela-trybe-aprendi-como">Requisitos</a> •
<a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a> •
<a href="#como-rodar-a-aplicação">Rodar a Aplicação</a>
</p>
<hr/>

## Descrição do Projeto
Neste projeto de BackEnd desenvolvi uma API de um CRUD para palestrantes.<br>


## Nesse projeto, aprendi e coloquei em prática:
- Criar os endpoints do CRUD para criar, ler, atualizar e deletar cadastros
- Criar validações para login utilizando validação por token
- Criar validações para a criação de cadastros de novos palestrantes

## De acordo com os requisitos do projeto designados pela Trybe aprendi como:
- ✅ Crie o endpoint GET /talker
- ✅ Crie o endpoint GET /talker/:id
- ✅ Crie o endpoint POST /login
- ✅ Adicione as validações para o endpoint /login
- ✅ Crie o endpoint POST /talker
- ✅ Crie o endpoint PUT /talker/:id
- ✅ Crie o endpoint DELETE /talker/:id
- ❌ Crie o endpoint GET /talker/search?q=searchTerm
<br>
<hr/>

## Tecnologias Utilizadas

### BackEnd:
- Docker
- Node.js

<a href="https://hub.docker.com/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/Docker2.png?raw=true" width="50" height="50" alt="MySQL Icon" /></a>
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github Imgs/NodeJS2.png?raw=true" width="50" height="50" alt="NodeJS Icon" /></a>

## Como rodar a aplicação?

- Confirme que o Docker está rodando no seu computador
- Clone o repositório: <br>
`git clone git@github.com:prtpj1/project-talker-manager.git`
- Acesse a pasta do projeto: <br>
`cd project-talker-manager`
- Suba o container para o Docker: <br>
`docker-compose up -d`
- Acesse o terminal do container no Docker: <br>
`docker exec -it talker_manager bash`
- Instale as dependências: <br>
`npm install`
- No terminal do container rode a aplicação: <br>
`npm run dev`
- Abra o programa para fazer requisições HTTP. Eu usei o Insomnia, mas você pode usar: o Postman, Extensões do VSCode ou qualquer outra que preferir. <br><br>
- Crie as requisições do CRUD:<br>

### ♻️ Listar todos os palestrantes:

➡️ Endpoint: **GET** `http://localhost:3000/talker`<br><br>

### ♻️ Procurar um palestrante pela id (*o id é o numero no final do endpoint*):
➡️ Endpoint: **GET** `http://localhost:3000/talker/1`<br><br>

### ♻️ Efetuar o login (*pode inventar o email e a senha*):
➡️ Endpoint: **POST** `http://localhost:3000/login` <br>
```json
{
  "email": "email@gmail.com",
  "password": "123456"
}
```
⚠️ **Copie o token que será gerado após o login**<br><br>

### ♻️ Criar um cadastro novo de um palestrante:
➡️ Endpoint: **POST** `http://localhost:3000/talker` <br>
⚠️Em **Headers** adicione um novo campo com o nome **"Authorization"** e no valor coloque o token que foi gerado quando você fez o login<br>
Em **Body** selecione JSON e coloque o JSON abaixo definindo nome, idade, avaliação e data da palestra:<br>
```json
{
  "age": 00, 
  "name": "nome do palestrante", 
  "talk": {
    	"rate": 0, 
    	"watchedAt": "00/00/2023"
  }
}
```
<br>

### ♻️ Editar o cadastro de um palestrante através do id:
➡️ Endpoint: **PUT** `http://localhost:3000/talker/2` 
⚠️Em **Headers** adicione um novo campo com o nome **"Authorization"** e no valor coloque o token que foi gerado quando você fez o login
No endpoint que lista todos os cadastros, copie um dos cadastros e cole no **Body** JSON. Coloque o id do palestrante no endereço do endpoint e altere quais campos do cadastro desejar.
```json
{
  "name": "Outro nome",
  "age": 56,
  "talk": {
    	"watchedAt": "22/10/2019",
    	"rate": 4
  }
}
```
<br>

### ♻️ Apagar o cadastro de um palestrante através do id:
➡️ Endpoint: **DELETE** `http://localhost:3000/talker/6`<br>
⚠️Em **Headers** adicione um novo campo com o nome **"Authorization"** e no valor coloque o token que foi gerado quando você fez o login e apague o cadastro

_*OBS: Se tiver alguma dificuldade com as instruções e quiser dar um feedback me mande uma mensagem*_
