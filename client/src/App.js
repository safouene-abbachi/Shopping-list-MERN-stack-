import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavBar from "./components/AppNavbar"
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/itemModal';
import {Container} from "reactstrap"
function App() {
  return (
    <div className="App">
     <AppNavBar/>
     <Container>
     <ItemModal/>
     <ShoppingList/>
     </Container>
    </div>
  );
}

export default App;
