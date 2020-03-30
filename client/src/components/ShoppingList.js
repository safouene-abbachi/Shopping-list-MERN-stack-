import React, { Component } from 'react'
import {Container, ListGroup, ListGroupItem, Button} from "reactstrap"
import {CSSTransition, TransitionGroup} from "react-transition-group"
import {v1 as uuid} from "uuid";
import {connect} from "react-redux"
import {getItems} from "../js/actions/actionCreators"

 class ShoppingList extends Component {
     componentDidMount(){
         this.props.getItems()
     }

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

const {items} = this.props.item

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

const mapStateToProps = state=>({
    item:state.item
})
const mapDispatchToProps={
    getItems
}
export default connect(mapStateToProps,mapDispatchToProps) (ShoppingList)
