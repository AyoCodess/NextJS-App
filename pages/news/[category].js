import React from 'react';

function CategoryList({ articles, category }) {
  return (
    <>
      <div>{`Showing new for ${category}`}</div>
      {articles.map((post) => (
        <div key={post.id}>
          <h2>
            {post.title} {category}
          </h2>
          <p>{post.description}</p>
        </div>
      ))}
    </>
  );
}

export default CategoryList;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );

  const data = await response.json();

  if (data[0] === undefined) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      articles: data,
      category,
    },
  };
};
