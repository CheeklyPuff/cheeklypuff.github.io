import { useEffect } from 'react';
import Home from './pages/Home/Home';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  useEffect(() => {
    document.title = "Which bin?";
  }, []);

  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
