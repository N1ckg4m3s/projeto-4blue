# Backend – 4Blue Chat

## Visão Geral

Backend da aplicação de chat simulado do desafio 4Blue.
Construído em Python 3.14 com Django 5 e Django REST Framework.
Responsável por receber mensagens do frontend, salvar no banco de dados SQLite e retornar respostas simuladas diferentes para cada usuário.

## Estrutura de Pastas

```md
├── api
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializers.py
│   ├── tests.py
│   ├── urls.py
│   ├── utils.py
│   └── views.py
├── backend
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── README.md
├── db.sqlite3
└── manage.py
```

## Funcionalidades Principais

1. Endpoints
    * POST /api/messages/: recebe a mensagem do usuário, salva no banco e retorna uma resposta simulada do bot.
    * GET /api/messages/history?user_id=...: retorna todo o histórico de mensagens do usuário ativo.
2. Respostas Dinâmicas
    * Mensagens de retorno são diferentes dependendo do user_id.
    * Função centralizada em utils.py para fácil manutenção.
3. Banco de Dados
    * SQLite padrão do Django.
    * Modelo Message com campos: user_id, mensage, self_message (bool) e created_at.
4. Sem Autenticação
    * O backend não gerencia sessões ou autenticação.
    * Cada requisição contém apenas o user_id enviado pelo frontend.

## Setup

### Pré-requisitos

* Python ≥ 3.14
* pip
* venv

### Ativando `venv`

```bash
    cd backend
    python -m venv venv
    .\venv\Scripts\activate   # Windows
    # ou source venv/bin/activate   # Linux/Mac
```

### Instalação

**Com o `venv` ativo**

```bash
    pip install -r requirements.txt
```

### Rodando os testes

**Com o `venv` ativo**

```bash
    python manage.py test api
```

### Rodando o Servidor

**Com o `venv` ativo**

```bash
    python manage.py migrate
    python manage.py runserver
```

API disponível em `http://127.0.0.1:8000/`.

## Dependências Principais

* Django 5.x
* djangorestframework 3.x
* django-cors-headers 4.x
* SQLite (padrão do Django)

## Decisões Técnicas

1. Django + DRF
    * Framework maduro e rápido de configurar.
    * DRF facilita criação de endpoints REST simples.
2. Modelo Simples
    * Apenas um modelo Message necessário para atender o requisito.
    * self_message booleano indica se a mensagem foi enviada pelo usuário ou pelo bot.
3. Utils Separado
    * Função de resposta do bot isolada em utils.py para manter views limpas.
4. Endpoints Mínimos
    * Dois endpoints: POST para envio e GET para histórico.
    * Nenhuma lógica extra de autenticação ou tempo real para simplificar o escopo.
