import NewsItem from './NewsItem';
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      //비동기성에 유의할것. web API에서 처리중임()
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=055837d81ec440bdaf048c7283539143`,
    );
  }, [category]);

  if (loading) {
    return <NewsListBlock>대기중</NewsListBlock>;
  }

  if (!response) {
    return null;
  }
  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }
  const { articles } = response.data;

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article}></NewsItem>
      ))}
    </NewsListBlock>
  );
};
export default NewsList;
