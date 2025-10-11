# 🤖 Agentic Chat Bot (JavaScript)

This folder contains a Node.js port of the Python command-line chatbot that interfaces with Google's Gemini API.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Google Generative AI API key

### Installation

```bash
npm install
```

### Configure Environment

The CLI expects `GOOGLE_API_KEY` to be available. Create a `.env` file at the project root with:

```bash
GOOGLE_API_KEY=your_api_key_here
```

### Run the Chat Bot

```bash
npm start
```

## ✨ Features

- Interactive CLI with turn-based conversation (default 5 turns)
- Exit with `quit`, `exit`, or `bye`
- Uses the official `@google/generative-ai` SDK
- Graceful error handling similar to the Python implementation

## 📁 Structure

```
js-agent/
├── package.json
├── src/
│   ├── bot.js
│   └── cli.js
└── README.md
```

## 🧪 Future Enhancements

- Add tests around `AgenticChatBot`
- Parameterize model name via CLI options
- Integrate linting and formatting tools

## 📝 License

MIT (same as root project)

