import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap";
import { Link, } from "react-router-dom"

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isNavOpen: false

        }
    }
    navToggle = () => {
        this.setState({

            isNavOpen: !this.state.isNavOpen

        })


    }
    render() {
        return (
            <div>
                <Navbar dark color="dark" expand="sm">
                    <div className="container">
                        <NavbarToggler onClick={this.navToggle} />
                        <NavbarBrand href="/">Lieferando.de</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar >
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <Link to="/" className="nav-link active">Home</Link>

                                </NavItem>
                                <NavItem>
                                    <Link to="/Menu" className="nav-link">Menu</Link>

                                </NavItem>
                                <NavItem>
                                    <Link to="/About" className="nav-link">About</Link>

                                </NavItem>
                                <NavItem>
                                    <Link to="/Contactus" className="nav-link">Contactus</Link>

                                </NavItem>

                            </Nav>

                        </Collapse>

                    </div>
                </Navbar >
            </div >



        );

    }

}
export default Navigation;