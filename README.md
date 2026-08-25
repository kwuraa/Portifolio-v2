# Portfólio v2

Este projeto é um portfólio pessoal em React com visual inspirado em interface de terminal/desktop, pensado para apresentar o perfil profissional, a stack tecnológica e os principais projetos do autor em uma experiência visual diferenciada e interativa.

## Visão geral

A aplicação foi desenvolvida com foco em:

- transmitir uma identidade tecnológica e criativa
- destacar competências em desenvolvimento front-end e aplicações web
- apresentar projetos públicos do GitHub em tempo real
- oferecer uma navegação dinâmica e responsiva em desktop e mobile

O layout simula janelas de terminal, com animações, drag-and-drop, textos com efeito de digitação e uma tela de inicialização estilo boot loader.

## Objetivo do projeto

O objetivo principal é servir como cartão de apresentação digital para o autor, permitindo que visitantes:

- conheçam o profissional e sua proposta
- vejam suas tecnologias preferidas
- acessem projetos em destaque
- entrem em contato via redes sociais e e-mail

## Stack tecnológica

- React 19
- Vite 8
- JavaScript
- Framer Motion
- React Icons
- @vercel/analytics
- @vercel/speed-insights

## Estrutura do projeto

```text
src/
├── App.jsx
├── App.css
├── index.css
├── main.jsx
├── assets/
├── components/
│   ├── BootLoader.jsx
│   ├── Footer.jsx
│   ├── MobileTerminal.jsx
│   ├── Navbar.jsx
│   ├── Profile.jsx
│   ├── Projects.jsx
│   ├── Terminal.jsx
│   ├── TypewreiterText.jsx
│   └── TerminalContents/
│       ├── AboutTerminalContent.jsx
│       ├── ServicesTerminalContent.jsx
│       └── WelcomeTerminalContent.jsx
├── hooks/
│   └── useTypewriter.jsx
├── styles/
│   ├── BootLoader.css
│   ├── Footer.css
│   ├── MobileTerminal.css
│   ├── Navbar.css
│   ├── Profile.css
│   ├── Projects.css
│   ├── Terminal.css
│   └── ...
└── ...
```

## Componentes principais

### App

Ponto central da aplicação. Controla:

- estado de carregamento inicial
- detecção de dispositivo mobile/desktop
- renderização dos componentes principais
- integração com analytics e speed insights

### Navbar

Menu de navegação com comportamento responsivo. Em telas maiores, o menu aparece como uma "pill" flutuante e desaparece ao rolar a página; em mobile, usa uma navegação de dock fixa.

### Terminal

Componente visual que reproduz a estética de janelas de terminal. Possui:

- título customizável
- animações de entrada
- drag-and-drop em desktop
- suporte para conteúdo dinâmico e hints de interação

### WelcomeTerminalContent

Exibe a saudação inicial, descrição profissional e mensagem de apresentação.

### AboutTerminalContent

Apresenta a stack tecnológica utilizando ícones de HTML5, CSS3, JavaScript, React, Node.js e banco de dados.

### ServicesTerminalContent

Lista serviços e áreas de atuação do profissional, incluindo landing pages, aplicações web e manutenção.

### Profile

Seção com foto de perfil e links para GitHub, LinkedIn e e-mail.

### Projects

Busca e renderiza repositórios do GitHub do usuário `kwuraa` com fallback para dados estáticos caso a API falhe. Cada card apresenta:

- nome do repositório
- descrição
- linguagem principal
- link para o GitHub
- preview opcional com screenshot do site/public page

### Footer

Rodapé final com status do sistema e mensagem de copyright.

## Recursos e interações

- Tela de carregamento com efeito de digitação
- Animações suaves em transições e hover
- Layout responsivo para desktop e mobile
- Integração com GitHub API para listar projetos
- Efeito visual de terminal e janelas arrastáveis
- Links para contato direto
- Monitoramento de desempenho e analytics com Vercel

## Fluxo de execução

1. A aplicação inicia com o carregamento da tela de boot.
2. O usuário é apresentado a uma interface principal em estilo terminal.
3. O menu navega entre home, projetos e contato.
4. Os projetos são carregados via GitHub API.
5. O usuário pode acessar repositórios e redes sociais externamente.

## Como rodar localmente

### Requisitos

- Node.js 18+
- npm

### Instalação

```bash
npm install
```

### Executar em modo desenvolvimento

```bash
npm run dev
```

A aplicação ficará disponível no endereço padrão do Vite, normalmente:

```text
http://localhost:5173
```

### Build para produção

```bash
npm run build
```

### Preview da build

```bash
npm run preview
```

## Scripts disponíveis

No arquivo `package.json`, existem os seguintes scripts:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

## Observações de implementação

- A página faz requisição à API pública do GitHub para listar repositórios.
- Caso a API não esteja disponível, o componente usa dados locais de fallback.
- A experiência visual foi pensada para ser forte em identidade e usabilidade, sem depender de bibliotecas adicionais pesadas.
- A estrutura foi montada para facilitar expansão com novas seções, projetos ou serviços.

## Possíveis melhorias futuras

- adicionar página detalhada por projeto
- integrar CMS ou dados dinâmicos de portfólio
- incluir projetos em destaque com categorias
- adicionar testes automatizados
- transformar em aplicação com roteamento para múltiplas páginas

## Contato

- GitHub: https://github.com/kwuraa
- LinkedIn: https://www.linkedin.com/in/matheus-morais-kawamura-765435248/
- E-mail: kwuraa@gmail.com

## Licença

Este projeto não possui uma licença pública definida no repositório até o momento.
