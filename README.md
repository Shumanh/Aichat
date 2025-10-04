# 🤖 Agentic Chat Bot

A simple yet powerful conversational AI powered by Google's Gemini API. This command-line chat bot provides an interactive interface to communicate with Google's state-of-the-art language model.

## ✨ Features

- 🎯 **Simple CLI Interface**: Easy-to-use command-line chat experience
- 🔒 **Secure API Key Management**: Environment-based configuration
- 🛡️ **Robust Error Handling**: Graceful handling of API errors and edge cases
- 🎨 **Rich User Experience**: Emojis and clear formatting for better readability
- 🔄 **Flexible Conversation**: Support for multiple turns with early exit options
- 📝 **Type Hints**: Full type annotations for better code maintainability

## 🚀 Quick Start

### Prerequisites

- Python 3.7 or higher
- Google Generative AI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd agentic.chat.bot
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Set up your API key**
   
   Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
   
   **Option 1: Using .env file (Recommended)**
   ```bash
   cp env.example .env
   # Edit .env and add your API key
   ```
   
   **Option 2: Using environment variable**
   ```bash
   export GOOGLE_API_KEY="your_api_key_here"
   ```

4. **Run the chat bot**
   ```bash
   python api.py
   ```

## 💬 Usage

Once you start the chat bot, you can:

- Type any message or question to chat with Gemini
- Type `quit`, `exit`, or `bye` to end the conversation
- Press `Ctrl+C` to interrupt at any time
- Leave input empty and press Enter to get a prompt reminder

### Example Session

```
🤖 Agentic Chat Bot (powered by gemini-2.0-flash-exp)
==================================================
Type 'quit', 'exit', or press Ctrl+C to end the conversation.
==================================================

💬 Turn 1/5
You: What is artificial intelligence?
🔄 Thinking...
🤖 Gemini: Artificial intelligence (AI) is a branch of computer science...

💬 Turn 2/5
You: quit
👋 Goodbye! Thanks for chatting!
```

## 🛠️ Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GOOGLE_API_KEY` | Your Google Generative AI API key | ✅ Yes |

### Model Configuration

By default, the bot uses `gemini-2.0-flash-exp`. You can modify this in the `AgenticChatBot` class initialization:

```python
bot = AgenticChatBot(model_name='your-preferred-model')
```

## 📁 Project Structure

```
agentic.chat.bot/
├── api.py              # Main chat bot application
├── requirements.txt    # Python dependencies
├── .gitignore         # Git ignore rules
├── env.example        # Environment variables template
└── README.md          # This file
```

## 🔧 Development

### Code Style

The project follows Python best practices:
- Type hints for better code documentation
- Docstrings for all classes and methods
- Error handling for robust operation
- Clean, readable code structure

### Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Troubleshooting

### Common Issues

**API Key Not Found**
- Ensure your `.env` file exists and contains `GOOGLE_API_KEY`
- Check that the API key is valid and active

**Import Errors**
- Run `pip install -r requirements.txt` to install dependencies
- Ensure you're using Python 3.7+

**API Errors**
- Check your internet connection
- Verify your API key has sufficient quota
- Try again in a few moments if you hit rate limits

## 🤝 Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Open an issue on GitHub
3. Review the [Google AI Studio documentation](https://ai.google.dev/)

---

Made with ❤️ using Google's Gemini AI

