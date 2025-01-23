import { model, systemPrompt, Agent, output } from "@axarai/axar"

import { config } from "dotenv"

config()

@model("openai:gpt-4o-mini")
@systemPrompt("Be concise, reply with one sentence")
@output(String)
class TextAgent extends Agent<string, string> {}

;(async () => {
  const response = await new TextAgent().run(
    "Who invented the machine that uses water instead of fuel?"
  )
  console.log(response)
})().catch((error) => console.error(error))
