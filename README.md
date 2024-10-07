# 21º Projeto: Talker Manager
<p align="center">
  <img src="https://github.com/prtpj1/prtpj1/blob/main/Headers/21%20-%20TalkerManager.jpg?raw=true" alt="Header" />
</p>

---
<p align="center">
<a href="#project-description">Project Description</a> •
<a href="#in-this-project-i-learned-and-put-into-practice">Learning</a> •
<a href="#according-to-the-project-requirements-designated-by-trybe-i-learned-how-to">Requirements</a> •
<a href="#stacks">Stacks</a> •
<a href="#how-to-run-the-application">How to run the application</a>
</p>

---
<p align="center">
<a href="#descrição-do-projeto">Descrição do Projeto</a> •
<a href="#nesse-projeto-aprendi-e-coloquei-em-prática">Aprendizado</a> •
<a href="#de-acordo-com-os-requisitos-do-projeto-designados-pela-trybe-aprendi-como">Requisitos</a> •
<a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a> •
<a href="#como-rodar-a-aplicação">Rodar a Aplicação</a>
</p>

---
## Project Description
In this BackEnd project, I developed a CRUD API for speakers.

## In this project, I learned and put into practice
- Create CRUD endpoints to create, read, update, and delete records
- Create validations for login using token validation
- Create validations for the creation of new speaker records

## According to the project requirements designated by Trybe, I learned how to
- ✅ Create the endpoint `GET /talker`
- ✅ Create the endpoint `GET /talker/:id`
- ✅ Create the endpoint `POST /login`
- ✅ Add validations for the endpoint `/login`
- ✅ Create the endpoint `POST /talker`
- ✅ Create the endpoint `PUT /talker/:id`
- ✅ Create the endpoint `DELETE /talker/:id`
- ❌ Create the endpoint `GET /talker/search?q=searchTerm`

_*NOTE: In some projects, some requirements were not completed due to the accelerated dynamics of the course and not because I didn't know how to do them. At the time, I just needed a little more time.*_

_*I have not yet decided whether it is better to leave it this way to demonstrate my progress during my learning or if it would be better to complete the missing requirements in the course projects.*_

_*Feedback is welcome.*_

## Stacks
### BackEnd
- Docker
- Node.js

<a href="https://hub.docker.com/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/Docker2.png?raw=true" width="50" height="50" alt="MySQL Icon" /></a>
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/NodeJS2.png?raw=true" width="50" height="50" alt="NodeJS Icon" /></a>

## How to run the application?
- Ensure Docker is running on your computer
- Clone the repository: <br>
`git clone git@github.com:prtpj1/project-talker-manager.git`
- Access the project folder: <br>
`cd project-talker-manager`
- Start the Docker container: <br>
`docker-compose up -d`
- Access the terminal of the Docker container: <br>
`docker exec -it talker_manager bash`
- Install the dependencies: <br>
`npm install`
- Run the application in the container's terminal: <br>
`npm run dev`
- Open the program to make HTTP requests. I used Insomnia, but you can use Postman, VSCode extensions, or any other tool you prefer. <br><br>
- In the chosen program, create the CRUD requests as explained below.<br>

---
### ♻️ List all speakers:
➡️ Endpoint: **GET** `http://localhost:3000/talker`

---
### ♻️ Search for a speaker by id (*the id is the number at the end of the endpoint*):
➡️ Endpoint: **GET** `http://localhost:3000/talker/1`

---
### ♻️ Log in (*you can invent the email and password*):
➡️ Endpoint: **POST** `http://localhost:3000/login`
```json
{
  "email": "email@gmail.com",
  "password": "123456"
}
```
⚠️ **Copy the token that will be generated after logging in**

---
### ♻️ Create a new speaker registration:
➡️ Endpoint: **POST** `http://localhost:3000/talker`

⚠️ In **Headers**, add a new field with the name **"Authorization"** and in the value put the token that was generated when you logged in.<br>
In **Body**, select JSON and place the JSON below defining the name, age, rating, and date of the talk:
```json
{
  "age": 10, 
  "name": "speaker name", 
  "talk": {
    	"rate": 0, 
    	"watchedAt": "00/00/2023"
  }
}
```

---
### ♻️ Edit a speaker registration by ID:
➡️ Endpoint: **PUT** `http://localhost:3000/talker/2`

⚠️ In **Headers**, add a new field with the name **"Authorization"** and in the value put the token that was generated when you logged in. 
At the endpoint that lists all registrations, copy one of the registrations and paste it into the **Body** JSON. Place the ID of the speaker in the endpoint address and change any fields of the registration you wish.
```json
{
  "name": "Another name",
  "age": 56,
  "talk": {
    	"watchedAt": "22/10/2019",
    	"rate": 4
  }
}
```

---
### ♻️ Delete a speaker registration by ID:
➡️ Endpoint: **DELETE** `http://localhost:3000/talker/6`

⚠️ In **Headers**, add a new field with the name **"Authorization"** and in the value put the token that was generated when you logged in to delete the registration.

_*Note: If you have any difficulty with the instructions and want to give feedback, send me a message*_

---
## Descrição do Projeto
Neste projeto de BackEnd desenvolvi uma API de um CRUD para palestrantes.

## Nesse projeto, aprendi e coloquei em prática
- Criar os endpoints do CRUD para criar, ler, atualizar e deletar cadastros
- Criar validações para login utilizando validação por token
- Criar validações para a criação de cadastros de novos palestrantes

## De acordo com os requisitos do projeto designados pela Trybe aprendi como
- ✅ Criar o endpoint `GET /talker`
- ✅ Criar o endpoint `GET /talker/:id`
- ✅ Criar o endpoint `POST /login`
- ✅ Adicionar as validações para o endpoint `/login`
- ✅ Criar o endpoint `POST /talker`
- ✅ Criar o endpoint `PUT /talker/:id`
- ✅ Criar o endpoint `DELETE /talker/:id`
- ❌ Criar o endpoint `GET /talker/search?q=searchTerm`

## Tecnologias Utilizadas
### BackEnd
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
- No programa escolhido, crie as requisições do CRUD como explicado abaixo.<br>

---
### ♻️ Listar todos os palestrantes:
➡️ Endpoint: **GET** `http://localhost:3000/talker`

---
### ♻️ Procurar um palestrante pela id (*o id é o numero no final do endpoint*):
➡️ Endpoint: **GET** `http://localhost:3000/talker/1`

---
### ♻️ Efetuar o login (*pode inventar o email e a senha*):
➡️ Endpoint: **POST** `http://localhost:3000/login`
```json
{
  "email": "email@gmail.com",
  "password": "123456"
}
```
⚠️ **Copie o token que será gerado após o login**

---
### ♻️ Criar um cadastro novo de um palestrante:
➡️ Endpoint: **POST** `http://localhost:3000/talker`

⚠️Em **Headers** adicione um novo campo com o nome **"Authorization"** e no valor coloque o token que foi gerado quando você fez o login<br>
Em **Body** selecione JSON e coloque o JSON abaixo definindo nome, idade, avaliação e data da palestra:
```json
{
  "age": 10, 
  "name": "nome do palestrante", 
  "talk": {
    	"rate": 0, 
    	"watchedAt": "00/00/2023"
  }
}
```

---
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

---
### ♻️ Apagar o cadastro de um palestrante através do id:
➡️ Endpoint: **DELETE** `http://localhost:3000/talker/6`

⚠️Em **Headers** adicione um novo campo com o nome **"Authorization"** e no valor coloque o token que foi gerado quando você fez o login e apague o cadastro

_*OBS: Se tiver alguma dificuldade com as instruções e quiser dar um feedback me mande uma mensagem*_
