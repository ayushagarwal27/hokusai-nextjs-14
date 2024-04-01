import React from "react";
import { getArticleById } from "@/utils/actions";
import Image from "next/image";

const ArticleDetailPage = async ({ params }) => {
  const { id } = params;
  const article = await getArticleById(id);
  return (
    <div>
      <div
        style={{
          marginTop: 20,
          position: "relative",
          width: "100%",
          height: 500,
        }}
      >
        <Image
          src={`/images/arts/${article.img}`}
          alt={article.name}
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={"article_container"}>
        <h1>{article.name}</h1>
        <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
