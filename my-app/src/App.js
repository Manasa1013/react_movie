import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './Pages/Login/Login';
import { MainPage } from './Pages/Main/MainPage';
import { MovieSpecific } from './Pages/MovieSpecific/MovieSpecific';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/main' element={<MainPage />}></Route>
      <Route path='/title/tt0354595/' element={<MovieSpecific />}></Route>
      <Route path='*' element={<Login />}></Route>
     </Routes>
    </div>
  );
}

export default App;
