export async function fetchRandomQuote(): Promise<string> {
  const response = await fetch('https://api.api-ninjas.com/v2/randomquotes');
  if (!response.ok) {
    throw new Error('Ekki tókst að sækja quote');
  }
  const data = (await response.json()) as { content: string; author: string };
  return `„${data.content}“ — ${data.author}`;
}
