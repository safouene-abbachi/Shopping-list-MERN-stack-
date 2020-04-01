import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItems, addItems, deleteItems } from "../js/actions/actionCreators";

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  removeItem = id => {
    this.props.deleteItems(id);
  };

  render() {
    const { items } = this.props.item;

    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map((el, i) => (
              <CSSTransition key={i} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => this.removeItem(el.id)}
                  >
                    &times;
                  </Button>
                  {el.name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});
const mapDispatchToProps = {
  getItems,
  addItems,
  deleteItems
};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
