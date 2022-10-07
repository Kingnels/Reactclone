// import logo from './logo.svg';
import Header from './components/Header';
import Main from './components/Main';
import Card from './components/Card';
import Data from './components/Data';
import './App.css';


function App() {
  const cards = Data.map(card =>{

  return ( <Card 
    key= {card.id}
    img= {card.Img}
    status={card.status}
    rating={card.stats.rating}
    reviewCount={card.stats.reviewCount}
    country={card.location}
    title={card.title}
    price={card.price}
    openSpots={card.openSpots}
    />
  )
  })

  return (
    <div className="App">
      <Header />
      <div className="space">
          <Main />
          <div className="card-container">  
            {cards}
          </div>
      </div>     
    </div>
  );
}

export default App;

// {/* <Card 
//                 img= "pic-1.png"
//                 status="SOlD OUT"
//                 rating="5.0"
//                 reviewCount={6}
//                 country="USA"
//                 title="Life Lessons with Katie Zaferes"
//                 price={136}
//             />    
//             <Card 
//                 img= "pic-2.png"
//                 status="ON SALE"
//                 rating="5.0"
//                 reviewCount={30}
//                 country="USA"
//                 title="Learn wedding photography"
//                 price={125}
//             />    
//             <Card 
//                 img= "pic-3.png"
//                 status="SOlD OUT"
//                 rating="4.8"
//                 reviewCount={2}
//                 country="USA"
//                 title="Group Mountain Biking"
//                 price={50}
//             />     */}