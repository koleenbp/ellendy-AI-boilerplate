# Ellen Dy's Node.js + TypeScript AI Agent Boilerplate

Welcome to the **Node.js + TypeScript AI Agent Boilerplate**! 🚀  
This lightweight boilerplate is designed to help you quickly set up a backend AI agent using Node.js and TypeScript. It features an auto-compilation setup for TypeScript, so you can focus on building without worrying about manually compiling files.

## Features

- **TypeScript Support**: Write clean, typed JavaScript with TypeScript.
- **Auto-Compilation**: Automatically compile TypeScript files on save using `ts-node-dev`.
- **AI Agent Ready**: Includes an example setup for integrating with OpenAI’s API.
- **Lightweight**: No unnecessary frameworks—just plain Node.js.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/node-ts-ai-agent.git
cd node-ts-ai-agent
```

---

## 2. Install dependencies

```bash
npm install
```

## 3. Setup Environment Variables

Create a `.env` file in the root directory and add your `OPENAI_API_KEY`

```bash
OPENAI_API_KEY=sk-proj-xxxxxx
```

Replace your_openai_api_key with your actual OpenAI API key. You can obtain one from the [OpenAI Dashboard](https://platform.openai.com/api-keys).

## 4. Start Development Server

Run the development server with auto-compilation:

```bash
npm run dev
```

## 5. Build an Run Run Production

To build the project:

```bash
npm run build
```

To start the compiled project:

```bash
npm run start
```

---

### Project Structure

```bash
node-ts-ai-agent/
  ├── src/                # Source code
  │   └── index.ts        # Entry point for the AI agent
  ├── dist/               # Compiled JavaScript files       (auto-generated)
  ├── node_modules/       # Installed dependencies
  ├── package.json        # Project metadata and scripts
  ├── tsconfig.json        # TypeScript configuration
  ├── .env                # Environment variables (not included in repo)
```

---

### Scripts

`npm run dev`: Starts the development server with ts-node-dev, enabling auto-compilation and reload on save.

`npm run build`: Compiles TypeScript files into JavaScript in the dist/ folder.

`npm start`: Runs the compiled JavaScript files from the dist/ folder.

---

### Author

Ellen Dy Team

---

### License

This project is licensed under the [MIT License](https://opensource.org/license/mit).

Feel free to use, modify, and distribute this boilerplate in your own projects.
