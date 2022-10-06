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
            <Card 
            img= "pic-1.png"
            status="SOlD OUT"
            rating="5.0"
            reviewCount={6}
            country="USA"
            title="Life Lessons with Katie Zaferes"
            price={136}
            />    
            <Card 
            img= "pic-2.png"
            status="ON SALE"
            rating="5.0"
            reviewCount={6}
            country="USA"
            title="Life Lessons with Katie Zaferes"
            price={136}
            />    
            <Card 
            img= "pic-3.png"
            status="SOlD OUT"
            rating="5.0"
            reviewCount={6}
            country="USA"
            title="Life Lessons with Katie Zaferes"
            price={136}
            />    
          </div>
      </div>     
    </div>
  );
}

export default App;
