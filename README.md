# Clínica Rigatti - Sistema de Agendamentos

Este projeto é um sistema de agendamento de consultas desenvolvido para atender à demanda da Clínica Rigatti. Ele oferece uma interface simples e eficiente para pacientes e administradores realizarem e gerenciarem agendamentos.

## 🧠 Tecnologias Utilizadas

- **Next.js + TypeScript**
- **Styled Components**
- **React Hooks (useState, useEffect)**
- **LocalStorage (simulação de backend)**
- **Arquitetura modular com organização por pastas**
- **Deploy (vercel)**

## 📂 Estrutura de Pastas

Aqui está a organização das pastas, seguindo as melhores práticas para escalar projetos:

```/pages
  ├── index.tsx
  ├── login/index.tsx
  ├── dashboard.tsx
  ├── agendar.tsx
  └── admin.tsx

/components
  ├── Header.tsx
  ├── Footer.tsx
  ├── Container.tsx
  └── Button.tsx

/styles
  ├── GlobalStyles.ts
  ├── theme.ts
  └── Pages/
      ├── login/
      ├── dashboard/
      ├── agendar/
      └── admin/
```

### Funcionalidades:

- ✅ Login e roteamento por tipo de usuário
- 📝 CRUD básico de agendamentos (simulado)
- ✔️ Validação de formulário
- 🗂️ Visual administrativo com aprovação de consultas
- 🎨 Separação de layout e estilos

### Testes Simples

1. Acesse `/login` com qualquer nome → você será direcionado para `/dashboard`.
2. Acesse `/login` com o nome **admin** → você será direcionado para `/admin`.
3. Agende uma consulta e visualize-a no dashboard.
4. O usuário admin pode aprovar, reprovar e atualizar os agendamentos localmente.

## 🔧 Como Usar

Acesse a versão online já publicada:

[https://teste-clinica-rigatti.vercel.app/](https://teste-clinica-rigatti.vercel.app/)

Ou siga os seguintes passos abaixo:

1. Clone o repositório:

```bash
git clone https://github.com/r-vilemen/teste-clinica-rigatti.git
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Rode o projeto em ambiente de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

4. Acesse o projeto no navegador local:

```text
http://localhost:3000
```

### 📌 Desenvolvedor

Rodrigo Vilemen  
Contato: rodrigo.vilemen@hotmail.com  
Portfólio: [rvacode.vercel.app](https://rvacode.vercel.app)  
LinkedIn: [linkedin.com/in/rodrigo-vilemen](https://www.linkedin.com/in/rodrigo-vilemen/)  
GitHub: [github.com/r-vilemen](https://github.com/r-vilemen)
