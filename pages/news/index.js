import React from 'react';

function NewsArticlesList({ articles }) {
  return (
    <>
      <h1>List of News Articles</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>
            {article.id} {article.title} | {article.category}
          </h2>
        </div>
      ))}
    </>
  );
}

export default NewsArticlesList;

export const getServerSideProps = async (context) => {
  const response = await fetch('http://localhost:4000/news');
  const data = await response.json();

  return {
    props: {
      articles: data,
    },
  };
};
