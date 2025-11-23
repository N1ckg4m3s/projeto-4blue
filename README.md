# Projeto 4Blue – Chat Simulado

## Visão Geral

Protótipo fullstack de um sistema de chat simulado, construído como parte do desafio 4Blue.

* Frontend: React + Vite
* Backend: Django 5 + Django REST Framework
* Banco de dados: SQLite (padrão do Django)

O projeto permite que dois usuários (“Usuário A” e “Usuário B”) enviem mensagens para um bot, e visualizem o histórico de suas conversas.

## Estrutura do Projeto

```md
PROJETO-4Blue/
├── frontend/ # Frontend em React + Vite
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── providers/
│ │ └── controller/
│ ├── package.json
│ └── vite.config.js
├── backend/ # Backend em Django + DRF
│ ├── api/
│ ├── backend/
│ ├── db.sqlite3
│ └── manage.py
└── README.md # Este arquivo
```

## Funcionalidades

1. Login Simulado
    * Interface com botões para escolher “Usuário A” ou “Usuário B”.
    * Estado do usuário gerenciado pelo Context API do React.
2. Chat
    * Envio de mensagens para o backend.
    * Recebimento de resposta simulada do bot (customizada por usuário).
    * Mensagens exibidas em bolhas tipo chat.
3. Histórico
    * Tela que exibe todas as mensagens enviadas pelo usuário ativo.
    * Separação por data não implementada neste protótipo (opcional futura).
4. Backend
    * Dois endpoints principais:
        * POST /api/messages/ → envia mensagem e recebe resposta do bot.
        * GET /api/messages/history?user_id=... → retorna histórico de mensagens do usuário.
    * Modelo único Message para armazenar mensagens do usuário e do bot.

## Setup do Projeto

### Frontend

```md
    cd frontend
    npm install
    npm run dev
```

Frontend disponível em `<http://localhost:5173/>`.

### Backend

```md
    cd backend
    python -m venv venv
    .\venv\Scripts\activate # Windows
    pip install -r requirements.txt
    python manage.py migrate
    python manage.py runserver
```

API disponível em `<http://127.0.0.1:8000/>`.

## Decisões Técnicas

### Frontend

* Context API: suficiente para gerenciar o usuário ativo; Redux seria overkill.
* ApiCaller centralizado: simplifica chamadas HTTP e tratamento de erros.
* Estilos: específicos junto ao componente/página; globais em index.css e App.css.
* TypeScript: tipagem aplicada somente a variáveis e funções internas, não a requisições.

### Backend

* Django + DRF: framework rápido e maduro, DRF facilita criação de endpoints REST.
* Modelo simples: apenas Message necessário para armazenar mensagens.
* Utils separado: função de resposta do bot isolada em utils.py para manter views limpas.
* Endpoints mínimos: dois endpoints REST; sem autenticação ou tempo real.

## Dependências Principais

### Frontend

* React, Vite, React Router, ESLint, date-fns

### Backend

* Django 5.x
* Django REST Framework 3.x
* django-cors-headers 4.x
* SQLite

## Observações

* O projeto não implementa autenticação ou WebSocket/tempo real.
* Respostas do bot são mockadas, mas podem ser expandidas em api/utils.py.
* Estrutura modular facilita expansão: novas páginas, novos tipos de mensagem ou múltiplos usuários.