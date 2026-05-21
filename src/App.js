import Logo from './Components/Logo';
import Botao from './Components/Botao';
import Cards from './Components/Card';

import './App.css';

function Intro(){
  return(
    <p className='texto'>O Sympla é uma plataforma brasileira que facilita a criação, gestão e venda 
    de ingressos para eventos. Oferece recursos como check-in digital, relatórios em tempo real e integração 
    com redes sociais, tornando-se referência no mercado de experiências culturais, corporativas e educacionais.</p>
  );
}

function App() {
  return(
    <div className="caixa">
      <Logo/>
      <Intro/>
      <Botao/>
      <Cards/>
    </div>
  );
}

export default App;