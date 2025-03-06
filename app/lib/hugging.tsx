import { HfInference } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are an assistant that receives a book title and recommends 5 similar books. Each recommendation should be followed by a 12-13 word max description of the book dont go further than 12-13 word. Book name should be inside "" 
`;

const hf = new HfInference(process.env.NEXT_PUBLIC_HF_ACCESS_TOKEN!);

export async function getBookRecommendations(selectedBook: string) {
  try {
    const response = await hf.textGeneration({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      inputs: `I am reading a book called "${selectedBook}". Can you recommend 5 similar books and provide a short description for each?`,
      parameters: { max_new_tokens: 500, temperature: 0.7 },
    });

    const cleanText =
      response.generated_text.split("1.")[1]?.trim() ||
      "No recommendations found.";

    return `1. ${cleanText}`;
  } catch (err) {
    console.error("Error fetching book recommendations:", err);
    return "Failed to get recommendations.";
  }
}
