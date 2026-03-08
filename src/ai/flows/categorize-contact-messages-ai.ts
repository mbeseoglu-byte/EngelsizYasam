'use server';
/**
 * @fileOverview This file defines a Genkit flow for categorizing incoming contact messages using AI.
 *
 * - categorizeContactMessage - A function that categorizes the intent of a contact message.
 * - CategorizeMessageInput - The input type for the categorizeContactMessage function.
 * - CategorizeMessageOutput - The return type for the categorizeContactMessage function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const CategorizeMessageInputSchema = z.object({
  message: z.string().describe('The content of the incoming contact message.'),
});
export type CategorizeMessageInput = z.infer<typeof CategorizeMessageInputSchema>;

const CategorizeMessageOutputSchema = z.object({
  intent: z.enum(['Inquiry', 'Support Request', 'Suggestion']).describe('The categorized intent of the message.'),
});
export type CategorizeMessageOutput = z.infer<typeof CategorizeMessageOutputSchema>;

const categorizeMessagePrompt = ai.definePrompt({
  name: 'categorizeMessagePrompt',
  input: { schema: CategorizeMessageInputSchema },
  output: {
    schema: CategorizeMessageOutputSchema,
    format: 'json',
  },
  prompt: `You are an AI assistant tasked with categorizing incoming contact messages.
Categorize the following message into one of these intents: 'Inquiry', 'Support Request', or 'Suggestion'.

Message:
{{{message}}}`,
});

const categorizeContactMessageFlow = ai.defineFlow(
  {
    name: 'categorizeContactMessageFlow',
    inputSchema: CategorizeMessageInputSchema,
    outputSchema: CategorizeMessageOutputSchema,
  },
  async (input) => {
    const { output } = await categorizeMessagePrompt(input);
    return output!;
  }
);

export async function categorizeContactMessage(
  input: CategorizeMessageInput
): Promise<CategorizeMessageOutput> {
  return categorizeContactMessageFlow(input);
}
