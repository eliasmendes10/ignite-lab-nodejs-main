Comandos Importantes - Instalações

npm i -g @nestjs/cli
nest new project-name

Prisma

npm i prisma -D
npm i @prisma/client
npx prisma init --datasource-provider SQLite

npx prisma migrate dev

Validação de dados
npm i class-validator class-transformer

#Como fazer a aplicação independente de banco de dados, "Aplicação funcionar sem banco de dados"
#Pensar no DB apenas em uma camada de persistencia de banco de dados.
#O Banco de dados é apenas uma ferramenta para conseguir persistir dados mas ele não deveria
#ser responsável e nem interferir em nenhuma funcionalidade ou regra de negócio da nossa aplicação
#Se está se chama Auto-acoplamento entre camadas


Kafka SASS
#https://console.upstash.com/