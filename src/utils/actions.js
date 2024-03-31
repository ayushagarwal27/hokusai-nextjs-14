"use server";

export async function getArticles() {
  try {
    const resArticles = await fetch("http://localhost:3004/articles");
    const articles = await resArticles.json();
    if (Object.keys(articles).length === 0) {
      throw new Error("We could not find any articles");
    }
    return articles;
  } catch (err) {
    throw new Error(err.message);
  }
}
