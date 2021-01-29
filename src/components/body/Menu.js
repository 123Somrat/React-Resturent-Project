import React, { Component } from "react";
import DISHES from "../../data/dishes.js";
import Menuiteam from "./Menuiteam";

class Menu extends Component {
    state = {
        dishes: DISHES


    }
    render() {
        const menu = this.state.dishes.map(iteam => {
            return (

                <div>
                    <Menuiteam dish={iteam} key={iteam.id} />

                </div>

            )


        });
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            {menu}
                        </div>
                    </div>
                </div>
            </div >


        );



    }


}

export default Menu;