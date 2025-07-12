# Gestor de Podcasts 🎙️

Um gerenciador de podcasts desenvolvido com Node.js e TypeScript, seguindo boas práticas de desenvolvimento e arquitetura limpa.

## 📦 Estrutura do Projeto

```text

gestor-de-podcasts/
├── node_modules/
├── src/
│   ├── controllers/
│   │   └── podcast-controller.ts
│   ├── data/
│   │   └── podcasts.json
│   ├── interfaces/
│   │   └── podcast-interface.ts
│   ├── services/
│   │   └── podcast-service.ts
│   ├── utils/
│   │   └── http-utils.ts
│   ├── routes/
│   │   └── podcast-routes.ts
│   └── server.ts
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md

```

## 🚀 Como Executar

### Clone o repositório:

``` bash

git clone https://github.com/Pucapuka/Dio-meutudo-challange-Gerenciador-de-Podcasts.git
```
### Instale as dependências:



```bash

npm install
```
### Inicie o servidor:


```bash

npm run start:dev

```
### O servidor estará disponível em http://localhost:3000

## 🌐 Rotas da API
#### Podcasts
Método 	      Rota	                   Descrição
GET	         /podcasts	            Lista todos os podcasts
GET	         /podcasts/:videoId	    Obtém um podcast específico
POST	     /podcasts	            Adiciona um novo podcast
PUT	         /podcasts/:videoId	    Atualiza um podcast existente
DELETE	     /podcasts/:videoId	    Remove um podcast

#### Categorias
Método	      Rota	                           Descrição
GET	         /podcasts/categories	          Lista todas as categorias
GET	         /podcasts/category/:category	  Filtra podcasts por categoria


## 📝 Exemplos de Requisições
### Adicionar Podcast

```bash

POST /podcasts
Content-Type: application/json

{
    "podcastName": "Novo Podcast",
    "episode": "Episódio 1",
    "videoId": "abc123",
    "categories": ["tecnologia", "programação"]
}
```
### Atualizar Podcast

```bash

PUT /podcasts/abc123
Content-Type: application/json

{
    "episode": "Episódio 1 - Atualizado",
    "categories": ["tecnologia", "programação", "inovação"]
}
```

### Deletar Podcast

```bash

DELETE /podcasts/abc123
```

### Filtrar por Categoria

```bash

GET /podcasts/category/tecnologia
```

## 🛠️ Tecnologias Utilizadas

### - Node.js 
### - TypeScript 
### - HTTP módulo nativo
### - Dotenv (para variáveis de ambiente)
### - Jest (para testes)

## 🧪 Testando a API

### Você pode testar a API usando:

### - Postman - Importe a coleção de exemplos
### - cURL - Exemplos disponíveis abaixo 
### - Testes Automatizados - Execute **npm test**

### Exemplos com cURL

### Listar todos os podcasts:

```bash

curl http://localhost:3000/podcasts
```

### Adicionar novo podcast:

```bash

curl -X POST http://localhost:3000/podcasts \
-H "Content-Type: application/json" \
-d '{
    "podcastName": "Tech Talk",
    "episode": "Episode 42",
    "videoId": "xyz789",
    "categories": ["technology"]
}'
```
## 📌 Próximos Passos

### - Adicionar autenticação
### - Implementar banco de dados
### - Adicionar documentação Swagger
### - Criar interface web

## 🤝 Contribuição

Contribuições são bem-vindas! Siga os passos:

    Faça um fork do projeto

    Crie sua branch (git checkout -b feature/AmazingFeature)

    Commit suas mudanças (git commit -m 'Add some AmazingFeature')

    Push para a branch (git push origin feature/AmazingFeature)

    Abra um Pull Request

## 📄 Licença

Distribuído sob a licença MIT. Veja LICENSE para mais informações.

## ✉️ Contato

Paulo Anderson - solucoes.magic.ti@gmail.com

Link do Projeto: https://github.com/Pucapuka/Dio-meutudo-challange-Gerenciador-de-Podcasts.git