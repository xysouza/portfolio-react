# 🌐 Meu Portfólio Pessoal

Bem-vindo ao repositório do meu **portfólio pessoal**! 🚀  
Aqui você encontra meus trabalhos, habilidades e experiências como **desenvolvedor web**.

---

## 📖 Sobre o Projeto

Este portfólio é uma aplicação **moderna e responsiva**, construída com foco em **performance** ⚡ e **experiência do usuário** 🎨.  
Conta com uma interface intuitiva, animações suaves ✨ e design adaptável 📱💻.

---

## 🛠️ Tecnologias Utilizadas

- ⚛️ **React.js** → Interfaces dinâmicas e componentizadas  
- ⚡ **Vite** → Build rápido e eficiente  
- 🎨 **Chakra UI** → Componentes acessíveis e prontos para uso  
- 🎯 **Tailwind CSS** → Estilização rápida e flexível

---

## ✨ Funcionalidades

✅ **Seção Hero** → Introdução impactante sobre mim  
📂 **Seção de Projetos** → Destaque para meus principais trabalhos  
📱 **Design Responsivo** → Funciona em qualquer dispositivo  
🌗 **Modo Claro/Escuro** → Alternância de tema para melhor visualização  
🎬 **Animações Fluidas** → Experiência interativa com Framer Motion

---

## ⚙️ Como Rodar Localmente

Siga estas instruções para configurar e executar o projeto em sua máquina local para fins de desenvolvimento e teste.

### 📌 Pré-requisitos

Certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina.

-   [Node.js](https://nodejs.org/en/) (versão LTS recomendada)

### 📥 Instalação

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    # ou
    yarn install
    ```

### Executando o Projeto

1.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    # ou
    yarn dev
    ```

    O aplicativo estará disponível em `http://localhost:5173` (ou outra porta disponível).

2.  **Build para produção:**

    Para criar uma versão otimizada para produção:

    ```bash
    npm run build
    # ou
    yarn build
    ```

    Os arquivos de build serão gerados na pasta `dist/`.

3.  **Pré-visualizar o build de produção:**

    ```bash
    npm run preview
    # ou
    yarn preview
    ```

## Estrutura do Projeto

```
.
├── public/                 # Arquivos estáticos
├── src/
│   ├── assets/             # Imagens e outros recursos
│   ├── components/         # Componentes reutilizáveis (HeroSection, Projetos, UI)
│   │   ├── ui/             # Componentes de UI genéricos (color-mode, provider, toaster, tooltip)
│   ├── App.css             # Estilos globais do App
│   ├── App.jsx             # Componente principal da aplicação
│   ├── index.css           # Estilos CSS base
│   └── main.jsx            # Ponto de entrada da aplicação
├── .gitignore              # Arquivos e pastas a serem ignorados pelo Git
├── eslint.config.js        # Configuração do ESLint
├── index.html              # Arquivo HTML principal
├── jsconfig.json           # Configuração JavaScript para VS Code
├── package.json            # Metadados e dependências do projeto
├── vite.config.js          # Configuração do Vite
└── README.md               # Este arquivo
```
