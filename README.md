# Portfolio - Felipe Pacheco Bianchini

Portfolio profissional desenvolvido com Next.js 16, TypeScript e Tailwind CSS v4, apresentando projetos e experiências de Felipe Pacheco Bianchini, Full-Stack Developer.

## 🚀 Tecnologias

- **Next.js 16** - Framework React com App Router
- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Framework CSS utilitário
- **Framer Motion** - Animações suaves e modernas
- **Lucide React** - Ícones minimalistas
- **Next Themes** - Gerenciamento de tema dark/light

## 🎨 Características

- ✨ Design minimalista e profissional
- 🌓 Dark/Light mode com toggle
- 📱 Totalmente responsivo
- ⚡ Performance otimizada
- 🎭 Animações suaves com Framer Motion
- 🔍 SEO otimizado
- 🎯 Acessibilidade

## 📂 Estrutura do Projeto

```
portfolio/
├── app/
│   ├── components/          # Componentes React
│   │   ├── Navigation.tsx   # Header com navegação
│   │   ├── Footer.tsx       # Rodapé com links sociais
│   │   ├── HeroSection.tsx  # Seção hero da homepage
│   │   ├── SkillsSection.tsx # Seção de habilidades
│   │   ├── ProjectsSection.tsx # Seção de projetos
│   │   ├── ContactSection.tsx # Seção de contato
│   │   ├── ProjectCard.tsx  # Card de projeto
│   │   ├── SkillBadge.tsx   # Badge de tecnologia
│   │   ├── SectionTitle.tsx # Título de seção
│   │   └── ThemeProvider.tsx # Provider de tema
│   ├── projects/[slug]/     # Páginas de detalhes dos projetos
│   ├── about/               # Página sobre
│   ├── layout.tsx           # Layout raiz
│   ├── page.tsx             # Homepage
│   └── globals.css          # Estilos globais
├── lib/
│   ├── types.ts             # Tipos TypeScript
│   ├── site.config.ts       # Configurações do site
│   ├── projects.ts          # Dados dos projetos
│   ├── skills.ts            # Dados das habilidades
│   └── experiences.ts       # Dados das experiências
├── public/
│   └── cv/                  # Arquivos de CV (PT e EN)
└── package.json
```

## 🛠️ Instalação e Uso

### Requisitos

- Node.js 20+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/felipebianchini2006/portfolio.git

# Entre no diretório
cd portfolio

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build de Produção

```bash
# Crie o build de produção
npm run build

# Inicie o servidor de produção
npm start
```

### Linting

```bash
# Execute o linter
npm run lint
```

## 📄 Configuração

### Adicionar seus CVs

Coloque seus arquivos de CV na pasta `public/cv/`:
- `felipe-bianchini-cv-pt.pdf` - CV em Português
- `felipe-bianchini-cv-en.pdf` - CV em Inglês

### Personalizar Informações

Edite os arquivos em `lib/`:

- **`site.config.ts`** - Informações pessoais, email, redes sociais
- **`projects.ts`** - Adicione ou edite seus projetos
- **`skills.ts`** - Configure suas habilidades e tecnologias
- **`experiences.ts`** - Adicione experiências profissionais e educação

## 🎨 Customização de Cores

O tema principal usa azul (`#3b82f6`). Para alterar:

1. Edite as variáveis CSS em `app/globals.css`:
```css
:root {
  --primary: #3b82f6; /* Sua cor aqui */
}
```

## 📱 Páginas

- **`/`** - Homepage com Hero, Skills, Projects e Contact
- **`/projects/[slug]`** - Detalhes de cada projeto
- **`/about`** - Sobre, experiências e formação

## 🌐 Deploy

Este projeto pode ser facilmente deployado em:

- [Vercel](https://vercel.com) (recomendado)
- [Netlify](https://netlify.com)
- [AWS Amplify](https://aws.amazon.com/amplify/)

### Deploy na Vercel

```bash
# Instale a CLI da Vercel
npm install -g vercel

# Faça o deploy
vercel
```

## 📝 Licença

Este projeto é de uso pessoal. Sinta-se livre para usar como referência.

## 👤 Autor

**Felipe Pacheco Bianchini**

- GitHub: [@felipebianchini2006](https://github.com/felipebianchini2006)
- LinkedIn: [Felipe Pacheco Bianchini](https://www.linkedin.com/in/felipe-pacheco-bianchini/)
- Email: felipebianchini02@gmail.com

---

Desenvolvido com ❤️ usando Next.js, TypeScript e Tailwind CSS
