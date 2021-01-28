import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";


const Navigation = () => {
    return (
        <div>
            <Navbar color="dark">
                <div class="container">
                    <NavbarBrand href="/"><h1>Lieferando.de</h1></NavbarBrand>

                </div>
            </Navbar>
        </div >



    );

}
export default Navigation;