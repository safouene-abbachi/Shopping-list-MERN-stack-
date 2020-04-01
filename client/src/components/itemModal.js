import React, { Component } from "react";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addItems } from "../js/actions/actionCreators";

class ItemModal extends Component {
  state = {
    modal: false,
    name: ""
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  addItem = () => {
    this.props.addItems({ name: this.state.name });
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          ADD ITEM
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.state.toggle}>
          <ModalHeader toggle={this.toggle}>ADD to Shopping List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">ITEM</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="ADD shopping item"
                  onChange={this.onChange}
                ></Input>
                <Button
                  color="dark"
                  style={{ marginTop: "2rem" }}
                  onClick={() => this.addItem()}
                  block
                ></Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps = {
  addItems
};
export default connect(null, mapDispatchToProps)(ItemModal);
