// import logo from './logo.svg';
import Header from './components/Header';
import Main from './components/Main';
import Card from './components/Card';
import './App.css';


function App() {
  return (
    <div className="App">

      <Header />
      <div className="space">
          <Main />
          <div className="card-container">  
            <Card />    
          </div>
      </div>     
    </div>
  );
}

export default App;
