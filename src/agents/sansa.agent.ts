import { model, systemPrompt, Agent, output } from "@axarai/axar"

import * as readline from "readline"

import { SANSA_PROMPT } from "../prompts/sansa.prompt"

import { config } from "dotenv"
config()

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

@model("openai:gpt-4o-mini")
@systemPrompt(SANSA_PROMPT)
@output(String)
class TextAgent extends Agent<string, string> {}

const getTimestamp = () => {
  const date = new Date()
  return date.toISOString() + ": "
}

console.log(
  `
  ${getTimestamp()} 🤝 You are now connected to agent Sansa
  ${getTimestamp()} 💻 Begin chatting with Sansa by typing your message below...
  `
)

rl.on("line", async (input) => {
  const timestampedInput = `${getTimestamp()} ${input}`
  console.log(`${getTimestamp()} You: ${input}`)

  if (input.toLowerCase() === "exit") {
    console.log(`${getTimestamp()} 👋 Goodbye!`)
    rl.close()
  } else {
    console.log(`${getTimestamp()} ⏳ Sansa is thinking...`)

    try {
      const agentResponse = await new TextAgent().run(timestampedInput)
      console.log(`${getTimestamp()} 👧 Sansa: ${agentResponse}`)
    } catch (error) {
      console.error(
        `${getTimestamp()} 👧 Sansa: I'm sorry, I don't have an answer for that.`
      )
    }
  }
})
