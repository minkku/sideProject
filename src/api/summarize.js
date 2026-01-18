export async function summarizeText(text) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return text.slice(0, 10) + "...";
}
