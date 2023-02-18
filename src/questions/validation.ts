import { z } from "zod"

export const CreateQuestion = z.object({
  name: z.string(),
  choices: z.array(z.object({ name: z.string() })),
})
