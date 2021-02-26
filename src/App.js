import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [user,setUser] = useState([0])
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res=>res.json())
    .then(data=>setUser(data))

  },[])
  const Title = [
    "Photography  (20GB)",
    "All Apps",
    "Acrobat Pro",
    "Photo Shop",
    
  ];
  const Price = ["US$9.99/mo", "US$52.99/mo", "US$53.99/mo", "US$25.99/mo"];
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {
         Title.map(titel =><Pricing title ={titel} ></Pricing>)
      }
    
      <header className="App-header">
        <h1>Adobe Pricing</h1>
        {/* <Pricing title={Title[0]} price={Price[0]}></Pricing>
        <Pricing title={Title[1]} price={Price[1]}></Pricing>
        <Pricing title={Title[2]} price={Price[2]}></Pricing>
        <Pricing title={Title[3]} price={Price[3]}></Pricing> */}
      </header>
    </div>
  );
}

function MovieCounter(){
  const [count,setCount] = useState(0)
  const RemoveClick = ()=>setCount(count-1)
  const addClick =()=>setCount(count+1)
  return (
    <div>
      <h3>Number of Movie:{count}</h3>
      <button onClick={RemoveClick} style={{margin:'5px'}}>Remove Movie</button>
      <button onClick={addClick}>Add Movie</button>
    </div>
  )
}

function Pricing(props) {
  const pricingStyle = {
    backgroundColor: "#F5F5F5",
    border: "2px solid red",
    margin: "5px",
    borderRadius: "5px",
  };
  return (
    <div style={pricingStyle}>
      <h3>{props.title}</h3>
      <h2>{props.price}</h2>
      <p style={{ width: "300px", textAlign: "center", color: "black" }}>
        Lightroom, Lightroom Classic, Photoshop on desktop and iPad, and 20GB of
        cloud storage (1TB available).
      </p>
      <a href="">See plan & pricing details</a>
      <button>Buy Now</button>
    </div>
  );
}

export default App;
