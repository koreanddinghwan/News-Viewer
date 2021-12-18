import React, { useCallback, useState } from 'react';
import Categories from './components/Categorys';
import NewsList from './components/NewsList';

function NewsPage({ match }) {
  const [category, setCategory] = useState('all'); //이 state category 이름에따라 선택됨을 보여야함
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <div>
      <Categories category={category} onSelect={onSelect}></Categories>
      <NewsList category={category}></NewsList>
    </div>
  );
}

export default NewsPage;
