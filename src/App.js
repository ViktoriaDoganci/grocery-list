
import './App.css';
import image from  './shoping.jpg';
import imageTwo from  './men.jpg';
import {GroceryList} from  './GroceryList';


function App() {
  return (
    <div className='app'>
       <div className="container">
      <img src={image} width="300px" alt="shopping"/>
      </div>
      <div className="container">
      <h1>Grocery list</h1>
      </div>
      <GroceryList />
      <div className="container">
      <img src={imageTwo} width="300px" alt="men"/>
      

      </div>
    </div>
  );
}

export default App;
