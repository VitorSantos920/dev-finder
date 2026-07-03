# DevFinder - Discover developers through data

Uma aplicação desenvolvida com **React**, **TypeScript** e **TanStack Query** para pesquisar perfis públicos do GitHub de forma rápida, oferecendo uma interface moderna, validação de entrada e gerenciamento eficiente do estado assíncrono.

O objetivo deste projeto foi **praticar conceitos fundamentais do ecossistema React moderno**, incluindo componentização, roteamento, consumo de APIs REST, validação de formulários, cache de requisições e organização escalável de código.

---

## Demonstração

![Preview](./.github/devfinder-preview.png)

---

## Funcionalidades

- 🔍 Pesquisa de usuários do GitHub
- 👤 Visualização das informações públicas de um perfil
- ⚡ Consumo da API pública do GitHub
- 📦 Cache automático de requisições com React Query
- ✅ Validação de formulário utilizando React Hook Form + Zod
- 🚦 Tratamento de usuários inexistentes
- 🧭 Navegação entre páginas utilizando React Router
- 📱 Interface responsiva
- ♻️ Componentes reutilizáveis

---

## Tecnologias

| Tecnologia        | Finalidade                                  |
| ----------------- | ------------------------------------------- |
| React 19          | Interface da aplicação                      |
| TypeScript        | Tipagem estática                            |
| Vite              | Build e ambiente de desenvolvimento         |
| React Router      | Roteamento                                  |
| TanStack Query    | Cache e gerenciamento de estado do servidor |
| React Hook Form   | Gerenciamento de formulários                |
| Zod               | Validação dos dados                         |
| Tailwind CSS v4   | Estilização                                 |
| Lucide React      | Ícones                                      |
| ESLint + Prettier | Padronização do código                      |

---

## Arquitetura

O projeto foi organizado seguindo o princípio de **separação de responsabilidades**, isolando cada camada da aplicação.

```text
src
│
├── components      # Componentes reutilizáveis
├── hooks           # Hooks customizados
├── pages           # Páginas da aplicação
├── routes          # Configuração das rotas
├── schemas         # Validações com Zod
├── services        # Comunicação com APIs
├── types           # Tipagens
├── lib             # Utilitários
└── styles          # Estilos globais
```

Essa organização reduz o acoplamento entre componentes e facilita a manutenção conforme a aplicação cresce.

---

## Fluxo da aplicação

```text
Usuário
      │
      ▼
Formulário de pesquisa
      │
      ▼
React Hook Form + Zod
      │
      ▼
React Router
      │
      ▼
/user/:username
      │
      ▼
useFetchProfile()
      │
      ▼
React Query
      │
      ▼
githubService
      │
      ▼
GitHub REST API
```

---

## Instalação

Clone o repositório:

```bash
git clone https://github.com/VitorSantos920/dev-finder.git
```

Entre na pasta:

```bash
cd dev-finder
```

Instale as dependências:

```bash
npm install
```

---

## Executando

Modo de desenvolvimento:

```bash
npm run dev
```

Build de produção:

```bash
npm run build
```

Visualizar o build:

```bash
npm run preview
```

---

## Conceitos praticados

Durante o desenvolvimento foram explorados conceitos como:

- Componentização
- Custom Hooks
- Server State Management
- Consumo de APIs REST
- Navegação entre páginas
- Validação declarativa
- Tratamento de erros
- Organização modular
- Tipagem com TypeScript

---

### Aprendizados

Este projeto serviu para consolidar conhecimentos sobre aplicações React modernas, principalmente na separação entre interface, regras de negócio e acesso aos dados.

Além disso, permitiu explorar ferramentas amplamente utilizadas no mercado, como React Query para gerenciamento de estado assíncrono, React Hook Form para formulários performáticos e Zod para validação tipada.

---

## Autor

**Vitor Santos**

GitHub: https://github.com/VitorSantos920
