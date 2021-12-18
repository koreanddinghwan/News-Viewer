import React from 'react';
import NewsPage from './pages/NewsPage';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div>
      {/* match객체가 NewsPage컴포넌트로 전달 */}
      <Route path="/:category?" component={NewsPage}></Route>
    </div>
  );
}

export default App;
