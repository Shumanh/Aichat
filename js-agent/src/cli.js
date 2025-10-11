#!/usr/bin/env node

import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import chalk from "chalk";

import { AgenticChatBot } from "./bot.js";

const MAX_TURNS = 5;
const EXIT_COMMANDS = new Set(["quit", "exit", "bye"]);

async function startChat() {
  let bot;
  try {
    bot = new AgenticChatBot();
    output.write(
      `\n${chalk.cyan("🤖 Agentic Chat Bot (powered by gemini-2.0-flash-exp)")}\n`
    );
    output.write(`${"=".repeat(50)}\n`);
    output.write(
      `${chalk.gray("Type 'quit', 'exit', or press Ctrl+C to end the conversation.")}\n`
    );
    output.write(`${"=".repeat(50)}\n`);
  } catch (error) {
    console.error(chalk.red(`❌ Error: ${error.message}`));
    process.exit(1);
  }

  const rl = readline.createInterface({ input, output });

  try {
    for (let turn = 1; turn <= MAX_TURNS; turn += 1) {
      output.write(`\n${chalk.magenta(`💬 Turn ${turn}/${MAX_TURNS}`)}\n`);
      const userInput = (await rl.question("You: ")).trim();

      if (!userInput) {
        output.write(chalk.yellow("⚠️  Please enter a question or message.\n"));
        continue;
      }

      if (EXIT_COMMANDS.has(userInput.toLowerCase())) {
        output.write(chalk.green("👋 Goodbye! Thanks for chatting!\n"));
        break;
      }

      try {
        output.write(chalk.gray("🔄 Thinking...\n"));
        const response = await bot.generateResponse(userInput);
        if (response) {
          output.write(`${chalk.cyan("🤖 Gemini:")} ${response}\n`);
        } else {
          output.write(
            chalk.yellow(
              "⚠️  Sorry, I couldn't generate a response. Please try again.\n"
            )
          );
        }
      } catch (error) {
        output.write(
          chalk.red(`❌ Error generating response: ${error.message}\n`)
        );
        output.write("Please try again with a different question.\n");
      }
    }
  } catch (error) {
    if (error instanceof Error && error.message === "AbortError") {
      output.write("\n👋 Chat interrupted. Goodbye!\n");
    } else {
      output.write(chalk.red(`❌ Unexpected error: ${error.message}\n`));
    }
  } finally {
    rl.close();
  }
}

startChat().catch((error) => {
  console.error(chalk.red(`❌ Fatal error: ${error.message}`));
  process.exit(1);
});

