import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    if (usuario && senha) {
      const autenticado = await auth.login(usuario, senha);
      if (autenticado) {
        console.log(autenticado);
        navigate('/');
      } else {
        alert('Não deu certo');
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        value={usuario}
        placeholder="Digita seu Usuário"
        onChange={(e) => setUsuario(e.target.value)}
      />
      <input
        type="password"
        value={senha}
        placeholder="Digita sua senha"
        onChange={(e) => setSenha(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
