export async function summarizeText(text) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  // 아래처럼 코딩하면 강제로 에러 발생하게 가능
  //throw new Error("Force to Error");
  if (!response.ok) {
    throw new Error("Request failed");
  }

  return text.slice(0, 10) + "...";
}
