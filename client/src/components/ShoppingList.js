import React, { Component } from 'react'
import {Container, ListGroup, ListGroupItem, Button} from "reactstrap"
import {CSSTransition, TransitionGroup} from "react-transition-group"
import {v1 as uuid} from "uuid";
import {connect} from "react-redux"
import {getItems,addItems,deleteItems} from "../js/actions/actionCreators"

 class ShoppingList extends Component {
     componentDidMount(){
         this.props.getItems()
     }

addItem=()=>{
 const name= prompt('enter name');
 if(name){
    this.props.addItems({id:uuid(),name})
 }   
   
}
removeItem=(id)=>{
    this.props.deleteItems(id)
}

    render() {

const {items} = this.props.item

        return (
            <Container>
            <Button
            color="dark"
            style={{marginBottom:'2rem'}}
            onClick={this.addItem}
            >Add Item</Button>
            <ListGroup>
            <TransitionGroup className="shopping-list">
            {items.map((el,i)=>
            <CSSTransition key={i} timeout={500} classNames="fade">
            <ListGroupItem>
            <Button
            className="remove-btn"
            color="danger"
            size="sm"
            onClick={()=>this.removeItem(el.id)}
            >&times;</Button>
            {el.name}
            </ListGroupItem>
            </CSSTransition>
            )}
            </TransitionGroup>
            </ListGroup>
            </Container>
        )
    }
}

const mapStateToProps = state=>({
    item:state.item
})
const mapDispatchToProps={
    getItems,
    addItems,
    deleteItems
}
export default connect(mapStateToProps,mapDispatchToProps) (ShoppingList)
