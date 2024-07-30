import MenuSuperior from './componentes/MenuSuperior';
import LogoGoogle from './componentes/LogoGoogle';
import InputGoogle from './componentes/InputGoogle';
import Botao from './componentes/Botao';
import CheckUpPrivacidade from './componentes/CheckUpPrivacidade';
import Footer from './componentes/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <MenuSuperior/>
      <LogoGoogle/>
      <InputGoogle/>
      <div className='AppBotoesContent'>
        <Botao text='Pesquisa Google'/>
        <Botao text='Estou com sorte'/>
      </div>
      <CheckUpPrivacidade/>
      <Footer/>
    </div>
  );
}

export default App;
