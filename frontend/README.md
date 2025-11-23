# Frontend – 4Blue Chat

## Visão geral

Este é o frontend da aplicação de chat simulado do desafio 4Blue.
Implementado em React, com React Router para navegação entre telas, Context API para gerenciar usuário ativo e um ApiCaller centralizado para integração com o backend.

## Estrutura de Pastas

```md
frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── chatBubble/
│   │   │   ├── mensage.tsx
│   │   │   └── style.css
│   │   └── backIcon.tsx
│   ├── controller/
│   │   ├── ApiCaller.ts
│   │   └── types.ts
│   ├── pages/
│   │   ├── chat/
│   │   │   ├── chatPage.tsx
│   │   │   └── style.css
│   │   ├── chatHistory/
│   │   │   ├── chatHistoryPage.tsx
│   │   │   └── style.css
│   │   └── loginMock/
│   │       ├── loginPage.tsx
│   │       └── style.css
│   ├── providers/
│   │   └── userProvider.tsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── README.md
├── package.json
├── package-lock.json
├── vite.config.js
└── index.html
```

## Funcionalidades Principais

1. Login Mockado
    * Usuário escolhe entre “Usuário A” ou “Usuário B”.
    * Estado do usuário gerenciado via Context API.
2. Chat
    * Envio de mensagens via formulário.
    * Recebe resposta simulada do backend (diferente para cada usuário).
    * Integração com ApiCaller para requisições centralizadas.
3. Histórico
    * Exibe histórico de mensagens e respostas do usuário ativo.
    * Separação por datas e usuário.

## Setup

### Pré-requisitos

* React: 19.x
* React DOM: 19.x
* TypeScript: 5.x
* React Router DOM: 7.x
* date-fns: 4.x
* Node.js: >=18
* npm: >=9

### instalação

```bash
    cd frontend
    npm install
```

### Rodando o Frontend

```bash
    npm run dev
```

### Scripts do packge

```JSON
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
},
```

Aplicação rodará em `http://localhost:5173`

## Decisões Técnicas

1. Gerenciamento de Estado (Context API)
    * Escolhido por ser simples de configurar e suficiente para um projeto pequeno.
    * Redux ou Zustand seriam overkill, mais adequados para aplicações grandes com múltiplos estados globais complexos.
2. ApiCaller Centralizado
    * Responsável apenas por realizar chamadas HTTP e tratar erros básicos.
    * Não implementa caching, retries ou logging avançado.
    * Objetivo: páginas não precisarem lidar com async/await diretamente.
3. Estrutura de Componentes e Estilos
    * Estilos específicos ficam junto de cada componente ou página.
    * Estilos compartilhados globais ficam em src/App.css ou index.css.
4. Tipagem (TypeScript)
    * Tipagem aplicada somente em variáveis, funções e retornos internos.
    * Tipagem de requisições e respostas não é prioridade neste projeto.
5. Scripts do package.json
    * Mantidos apenas dev, build, preview e lint.
    * Scripts de teste ou checagem avançada não foram adicionados por conta do escopo básico do frontend.
