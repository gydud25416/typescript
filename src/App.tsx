import React, { useState } from 'react'; 
import './App.css';
import Store from './Store';
import { Address, Restaurant } from './model/restaurant';
import BestMenu from './BestMenu';

let data:Restaurant = {
  name:'한식 식당',
  category:'western',
  address:{
    city:'incheon',
    detail:'somewhere',
    zipCode:234234
  },
  menu:[{name:"rose pasta", price:2000, category:"PASTA"}, {name:"garlic steak", price:2000, category:"STEAK"}]
}

const App:React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);
  const changeAddress = (address:Address)=>{
    setMyRestaurant({...myRestaurant, address:address})
  }
const showBestMenuName= (name:string)=>{
  return name;
}
  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress} />
      <BestMenu name="불고기피자" category="피자"  showBestMenuName={showBestMenuName} />
    </div>
  );
}

export default App;
