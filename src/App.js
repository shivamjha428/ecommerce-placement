import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Post from './components/Table';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Post/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
