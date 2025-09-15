# Meu Portfólio Pessoal

Bem-vindo ao repositório do meu portfólio pessoal! Este projeto foi desenvolvido para exibir meus trabalhos, habilidades e experiência como desenvolvedor web.

## Sobre o Projeto

Este portfólio é uma aplicação web moderna e responsiva, construída com foco em performance e experiência do usuário. Ele apresenta uma interface intuitiva, animações suaves e um design adaptável, garantindo uma ótima visualização em diferentes dispositivos.

## Tecnologias Utilizadas

O projeto foi construído utilizando um conjunto de tecnologias e bibliotecas modernas:

-   **React.js**: Biblioteca JavaScript para construção de interfaces de usuário.
-   **Vite**: Ferramenta de build rápida para desenvolvimento front-end.
-   **Chakra UI**: Biblioteca de componentes React simples, modular e acessível.
-   **Tailwind CSS**: Framework CSS utilitário para estilização rápida e customizável.
-   **Framer Motion**: Biblioteca para animações declarativas em React.
-   **React Icons**: Coleção popular de ícones para React.
-   **Next.js Themes**: Para gerenciamento de temas (claro/escuro).
-   **Sonner**: Para notificações toast elegantes.
-   **Lucide React**: Biblioteca de ícones.
-   **Vaul**: Componente de drawer para React.
-   **ESLint**: Para manter a qualidade e consistência do código.

## Funcionalidades

-   **Seção Hero**: Uma introdução impactante sobre mim.
-   **Seção de Projetos**: Destaque para meus principais projetos com descrições e links.
-   **Design Responsivo**: Otimizado para desktop, tablets e dispositivos móveis.
-   **Modo Claro/Escuro**: Alternância de tema para melhor experiência visual.
-   **Animações Fluidas**: Transições e interações animadas com Framer Motion.

## Como Rodar Localmente

Siga estas instruções para configurar e executar o projeto em sua máquina local para fins de desenvolvimento e teste.

### Pré-requisitos

Certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina.

-   [Node.js](https://nodejs.org/en/) (versão LTS recomendada)

### Instalação

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

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Se você tiver alguma dúvida ou quiser entrar em contato, sinta-se à vontade para me encontrar em:

-   **GitHub**: [Seu Usuário do GitHub](https://github.com/seu-usuario)
-   **LinkedIn**: [Seu Perfil do LinkedIn](https://www.linkedin.com/in/seu-perfil)
-   **Email**: seu.email@example.com