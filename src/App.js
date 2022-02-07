// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import TotalMoney from './components/TotalMoney';
import logo from './Nu Kenzie.png'
import MainMenu from './components/MainMenu';


function App() {
  // State com lista de tarnsaçoes
  const [listTransactions, setListTransactions] = useState([])
  const [login, setLogin] = useState(false)

  console.log(login)
  if(login === false){
    return(
      <div className='menu'>
        <MainMenu setLogin={setLogin}/>
      </div>
    )
  }else if(listTransactions.length === 0){
    return (
      <div className="App">
        <header>
          <img src={logo} alt='logo NuKenzie'/>
          <button onClick={()=> setLogin(false)}>Inicio</button>
        </header>
        <div className="mainPage">
          <div className='description'>
            <Form listTransactions={listTransactions} setListTransactions={setListTransactions}/>
          </div>
          <div className='listTransaction'>
            <List listTransactions={listTransactions}/>
          </div>
        </div>
      </div>
    );
  }else{
    return (
      <div className="App">
        <header>
          <img src={logo} alt='logo NuKenzie'/>
          <button onClick={()=> setLogin(false)}>Inicio</button>
        </header>
        <div className="mainPage">
          <div className='description'>
            <Form listTransactions={listTransactions} setListTransactions={setListTransactions}/>
            <TotalMoney listTransactions={listTransactions}/>
          </div>
          <div className='listTransaction'>
            <List listTransactions={listTransactions}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
