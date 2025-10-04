
#!/usr/bin/env python3
"""
Agentic Chat Bot - A simple conversational AI using Google's Gemini API

This script provides a command-line interface for chatting with Google's Gemini AI model.
"""

import os
import sys
from typing import Optional
import google.generativeai as genai
from dotenv import load_dotenv


class AgenticChatBot:
    """A simple chat bot powered by Google's Gemini AI."""
    
    def __init__(self, model_name: str = 'gemini-2.0-flash-exp'):
        """
        Initialize the chat bot.
        
        Args:
            model_name: The name of the Gemini model to use
        """
        self.model_name = model_name
        self.model: Optional[genai.GenerativeModel] = None
        self._setup_api()
    
    def _setup_api(self) -> None:
        """Set up the Google Generative AI API."""
        # Load environment variables
        load_dotenv()
        
        api_key = os.getenv('GOOGLE_API_KEY')
        if not api_key:
            print("❌ Error: GOOGLE_API_KEY not found in environment variables.")
            print("Please create a .env file with your API key or set the environment variable.")
            print("You can get an API key from: https://makersuite.google.com/app/apikey")
            sys.exit(1)
        
        try:
            genai.configure(api_key=api_key)
            self.model = genai.GenerativeModel(self.model_name)
            print(f"✅ Successfully initialized {self.model_name}")
        except Exception as e:
            print(f"❌ Error initializing Gemini API: {e}")
            sys.exit(1)
    
    def chat(self, max_turns: int = 5) -> None:
        """
        Start a chat session with the AI.
        
        Args:
            max_turns: Maximum number of conversation turns
        """
        print(f"\n🤖 Agentic Chat Bot (powered by {self.model_name})")
        print("=" * 50)
        print("Type 'quit', 'exit', or press Ctrl+C to end the conversation.")
        print("=" * 50)
        
        try:
            for turn in range(1, max_turns + 1):
                print(f"\n💬 Turn {turn}/{max_turns}")
                user_input = input("You: ").strip()
                
                if not user_input:
                    print("⚠️  Please enter a question or message.")
                    continue
                
                if user_input.lower() in ['quit', 'exit', 'bye']:
                    print("👋 Goodbye! Thanks for chatting!")
                    break
                
                try:
                    print("🔄 Thinking...")
                    response = self.model.generate_content(user_input)
                    
                    if response.text:
                        print(f"🤖 Gemini: {response.text}")
                    else:
                        print("⚠️  Sorry, I couldn't generate a response. Please try again.")
                        
                except Exception as e:
                    print(f"❌ Error generating response: {e}")
                    print("Please try again with a different question.")
                    
        except KeyboardInterrupt:
            print("\n\n👋 Chat interrupted. Goodbye!")
        except Exception as e:
            print(f"❌ Unexpected error: {e}")


def main():
    """Main function to run the chat bot."""
    try:
        bot = AgenticChatBot()
        bot.chat()
    except Exception as e:
        print(f"❌ Failed to start chat bot: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()