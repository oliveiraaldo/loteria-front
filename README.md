# Loteria Front-end em React

Este é o front-end da aplicação de loteria que consome uma API construída para gerar bilhetes de loteria e realizar sorteios de prêmios.

## Requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## Tecnologias Utilizadas

- React: Biblioteca JavaScript para construir a interface do usuário.
- Tailwind CSS: Framework CSS para estilização rápida e eficiente.
- Axios: Biblioteca para realizar requisições HTTP.

## Configuração Inicial do Projeto

1. **Clone o repositório**:

   ```sh
   git clone https://github.com/oliveiraaldo/loteria-front
   cd loteria-front
   ```

2. **Instalar as dependências**:

   ```sh
   npm install
   # ou
   yarn install
   ```

3. **Configurar o Tailwind CSS**:
   Primeiro, instale o Tailwind CSS e as dependências necessárias:

   ```sh
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

   No arquivo `tailwind.config.js`, atualize o conteúdo para adicionar os caminhos onde você utilizará o Tailwind:

   ```js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

   Adicione as diretivas do Tailwind ao arquivo `src/index.css`:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

4. **Iniciar o servidor de desenvolvimento**:

   ```sh
   npm start
   # ou
   yarn start
   ```

## Estrutura do Projeto

- **src/components**: Contém os componentes reutilizáveis do React:
  - `Header.js`: Cabeçalho da aplicação.
  - `BilheteForm.js`: Formulário para gerar bilhetes.
  - `Sorteio.js`: Componente para realizar o sorteio das dezenas premiadas.
  - `Conferencia.js`: Mostra os bilhetes gerados e compara com o bilhete sorteado.

- **src/services**: Contém a lógica de conexão com a API:
  - `api.js`: Configuração do Axios para se comunicar com a API da loteria.

## Como Utilizar

1. **Gerar Bilhetes**: Utilize o formulário para informar quantos bilhetes deseja gerar e quantas dezenas cada bilhete terá. Clique em "Gerar Bilhetes".

2. **Realizar Sorteio**: Após gerar os bilhetes, clique no botão "Realizar Sorteio" para sortear as dezenas premiadas.

3. **Conferir Bilhetes**: Abaixo dos resultados do sorteio, você verá uma tabela com a conferência dos bilhetes gerados e as dezenas que foram sorteadas.
