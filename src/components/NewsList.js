import NewsItem from './NewsItem';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
  const [articles, setarticles] = useState(null);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    //첫 마운트시에만
    const fetchData = async () => {
      setLoading(true); //로딩중
      try {
        console.log('데이터패치중');
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(
          //비동기성에 유의할것. web API에서 처리중임()
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=055837d81ec440bdaf048c7283539143`,
        );

        setarticles(response.data.articles);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData(); //위에서 정의한함수 실행
  }, [category]);

  if (Loading) {
    return <div>로딩중</div>;
  }
  if (!articles) {
    return <div>데이터로딩중</div>;
  }

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article}></NewsItem>
      ))}
    </NewsListBlock>
  );
};
export default NewsList;
