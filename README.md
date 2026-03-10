# CPS Engenharia e Construções — Landing Page

Uma landing page profissional desenvolvida com **Angular** para apresentar os serviços e expertise de engenharia civil e construção.

## 🎯 Sobre o Projeto

A **CPS Engenharia e Construções** é uma empresa especializada em soluções de engenharia civil, técnica e construção em Maringá — PR. Esta landing page foi desenvolvida para apresentar o profissional, seus serviços e facilitar o contato direto via WhatsApp.

### Características Principais

- ✅ Design responsivo e moderno
- ✅ Componentes reutilizáveis em Angular
- ✅ Integração com WhatsApp para contato direto
- ✅ Seção "Sobre" com apresentação profissional
- ✅ Footer com informações de contato
- ✅ Otimizado para SEO e performance

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|---|---|---|
| **Angular** | 17+ | Framework frontend |
| **TypeScript** | 5.0+ | Linguagem de programação |
| **CSS3** | - | Estilização e responsividade |
| **Node.js** | 20+ | Runtime JavaScript |
| **npm** | 10+ | Gerenciador de pacotes |

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (v20 ou superior) — [Download](https://nodejs.org/)
- **npm** (v10 ou superior) — Vem com Node.js
- **Git** — [Download](https://git-scm.com/)
- **Angular CLI** (opcional, mas recomendado)
```bash
npm install -g @angular/cli
```

## 🚀 Como Instalar e Rodar Localmente

```
git clone https://github.com/ElysSanntos/cps-landing-page.git
cd cps-landing-page
```

## 2. Instalar Dependências

```bash
npm install
```

## 3. Iniciar o Servidor de Desenvolvimento

```bash
ng serve
```

Ou, se não tiver Angular CLI instalado:

```bash
npm start
```

## 4. Acessar a Aplicação

Abra seu navegador e acesse:

http://localhost:4200

A aplicação será recarregada automaticamente quando você fizer alterações nos arquivos.


### 📁 Estrutura do Projeto
cps-landing-page/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   ├── hero/
│   │   │   ├── about/
│   │   │   ├── services/
│   │   │   └── footer/
│   │   ├── shared/
│   │   │   └── whatsapp-float/
│   │   ├── app.component.ts
│   │   └── app.component.html
│   ├── assets/
│   │   └── images/
│   ├── styles.css
│   └── index.html
├── angular.json
├── tsconfig.json
├── package.json
└── README.md


### 🎨 Componentes Principais

### Header
Navegação principal da página com links para as seções.

### Hero
Seção de destaque com chamada para ação (CTA).

### About
Apresentação profissional com foto e credenciais do engenheiro.

### Services
Listagem dos serviços oferecidos.

### Footer
Informações de contato e links úteis.

### WhatsApp Float
Botão flutuante para contato direto via WhatsApp.


## 🔧 Scripts Disponíveis
````
# Iniciar servidor de desenvolvimento
ng serve

# Build para produção
ng build --configuration production

# Executar testes unitários
ng test

# Executar testes e2e
ng e2e

# Lint do código
ng lint

````

## 📱 Responsividade

A landing page é totalmente responsiva e foi testada em:
✅ Desktop (1920px, 1440px, 1024px)
✅ Tablet (768px, 834px)
✅ Mobile (375px, 414px, 480px)


## 🌐 Deploy
Opção 1: Vercel (Recomendado)
```
npm install -g vercel
vercel
```
Opção 2: Netlify

```
npm install -g netlify-cli
netlify deploy --prod --dir=dist/cps-landing-page
```
## 🤝 ContribuiçãoContribuições são bem-vindas! Para contribuir:

Fork o repositório
Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)
Commit suas mudanças (git commit -m 'Add some AmazingFeature')
Push para a branch (git push origin feature/AmazingFeature)
Abra um Pull Request


## Padrão de Commits

Utilize o padrão Conventional Commits:
- feat: Adiciona nova feature
- fix: Corrige um bug
- docs: Atualiza documentação
- style: Mudanças de formatação
- refactor: Refatoração de código
- test: Adiciona testes
- chore: Tarefas de manutenção

## 📄 Licença

Este projeto está licenciado sob a MIT License — veja o arquivo LICENSE [blocked] para detalhes.

## 👨‍💻 DesenvolvedorElisVerso — Desenvolvedor Full Stack

- 🔗 GitHub

## 📝 Changelog
v1.0.0 (10/03/2026)
 - ✅ Versão inicial da landing page
 - ✅ Componentes principais implementados
 - ✅ Responsividade completa
 - ✅ Integração WhatsApp


## 🙏 Agradecimentos

Obrigada por visitar este projeto! Se tiver dúvidas ou sugestões, abra uma Issue ou entre em contato.

Desenvolvido com ❤️ em Maringá
