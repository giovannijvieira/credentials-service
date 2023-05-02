#credentials-service Real estate creation service

INSTALAÇÃO
yarn ou npm i

criar .env
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
EXECUTAR O PROJETO
yarn dev ou npm run dev

Rotas
/credentials

[POST] - CRIA ACESSO AO BANCO DE DADOS PARA ENVIO DE CONTRATOS request.body nome,cnpj,password

COLLECTION
COLEÇÃO
