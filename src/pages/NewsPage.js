import React from 'react';
import Categories from '../components/Categorys';
import NewsList from '../components/NewsList';

function NewsPage({ match }) {
  //match의 params로 받은 데이터의 카테고리가 없으면 'all'이되고, 이걸 NewsList 컴포넌트에 전달
  const category = match.params.category || 'all';
  return (
    <div>
      <Categories></Categories>
      <NewsList category={category}></NewsList>
    </div>
  );
}

export default NewsPage;
