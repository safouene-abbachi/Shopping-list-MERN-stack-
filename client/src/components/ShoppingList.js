import React, { Component } from 'react'
import {Container, ListGroup, ListGroupItem, Button} from "reactstrap"
import {CSSTransition, TransitionGroup} from "react-transition-group"
import {v1 as uuid} from "uuid";

 class ShoppingList extends Component {
     state={
         
         items:[{
             id:uuid(),
             name:"egs"
         },{
            id:uuid(),
            name:"milk"
        },{
            id:uuid(),
            name:"bread"
        },{
            id:uuid(),
            name:"water"
        }]
     }
// handleChange=e=>{
// this.setState({
//     userInput:e.target.value
// })
// }
addItem=()=>{
 const name= prompt('enter name');
 if(name){
    this.setState({
        items:[...this.state.items, {id:uuid(),name}]
    })
 }   
   
}
removeItem=(id)=>{
    this.setState({
        items:[...this.state.items.filter(el=>id!==el.id)]
    })
}

    render() {
        const {items}=this.state;

        return (
            <Container>
            <Button
            color="dark"
            style={{marginBottom:'2rem'}}
            onClick={()=>this.addItem()}
            >Add Item</Button>
            <ListGroup>
            <TransitionGroup className="shopping-list">
            {items.map(({id, name})=>
            <CSSTransition key={id} timeout={500} classNames="fade">
            <ListGroupItem>
            <Button
            className="remove-btn"
            color="danger"
            size="sm"
            onClick={()=>this.removeItem(id)}
            >&times;</Button>
            {name}
            </ListGroupItem>
            </CSSTransition>
            )}
            </TransitionGroup>
            </ListGroup>
            </Container>
        )
    }
}
export default ShoppingList
