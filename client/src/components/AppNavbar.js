import React,{Component} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from "reactstrap"

class AppNavbar extends Component {
state={
    isOpen:false
}

toggle = ()=> {
this.setState({
    isOpen: !this.state.isOpen
})
}
render(){
return(
    <div>
    <Navbar color="dark" dark expand="sm" className="mb-5">
    <Container>
    <NavbarBrand href="/">Shopping List</NavbarBrand>
<NavbarToggler onClick={this.toggle}/>
<Collapse isOpen={this.state.isOpen} navbar>
<NavItem>
<NavLink href="/">

</NavLink>
</NavItem>
</Collapse>


   
    </Container>
    </Navbar>
    </div>
)
   
}
}

export default AppNavbar