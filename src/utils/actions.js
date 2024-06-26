"use server";

export async function getArticles() {
  try {
    const resArticles = await fetch(`${process.env.JSON_API}/articles`);
    const articles = await resArticles.json();
    if (Object.keys(articles).length === 0) {
      throw new Error("We could not find any articles");
    }
    return articles;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getArticleById(id) {
  try {
    const articleRes = await fetch(`${process.env.JSON_API}/articles/${id}`);
    const article = await articleRes.json();
    if (Object.keys(article).length === 0) {
      throw new Error("We could not find any articles");
    }
    return article;
  } catch (e) {
    throw new Error(e.message);
  }
}
