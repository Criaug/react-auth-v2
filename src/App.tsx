import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Private from './pages/Private';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';
import { useContext } from 'react';

function App() {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.logout();
  };
  return (
    <div className="App">
      <header>
        <h1>Header do site</h1>
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/private'}>Página privada</Link>
          {auth.usuario && <button onClick={handleLogout}>Sair</button>}
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/private"
          element={
            <RequireAuth>
              <Private></Private>
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
