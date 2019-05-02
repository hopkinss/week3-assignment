import React, { Component } from 'react';
import './App.css';
import {
    CardColumns,
    Card,
    CardDeck,
    CardGroup,
    CardImg,
    ListGroup,
    ListGroupItem,
    Button,
    Jumbotron
}
from 'react-bootstrap';
import Cart from './Cart';

import Data from './airbnbs.json';
import RentalList from "./RentalList";
import Background from './bg2.jpg';


const FA = require('react-fontawesome');



class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            rentals: Data,
            selectedRentals: []
        }
    };

    bookRental = (idx) => {

        const selectedRental = this.state.rentals[idx];

        if (this.state.selectedRentals.findIndex(x => x.title === selectedRental.title) < 0) {


            this.setState(prevState => {
                return {
                    selectedRentals: [...prevState.selectedRentals, selectedRental]
                };
            });
        }
        else {
            this.setState(prevState => {
                return {
                    selectedRentals: [...prevState.selectedRentals]
                };
            });
        }
    }

    removeRental = (idx) => {
        this.setState(prevState => {
            const selectedRentals =[...prevState.selectedRentals];
            selectedRentals.splice(idx,1);

            return {
                selectedRentals
            };
        });
    }

    removeRentalByName = (id) => {
        this.setState(prevState => {
            const selectedRentals =[...prevState.selectedRentals];

            const pos = selectedRentals.findIndex(x=> x.title === id);

            if (pos>-1){
                selectedRentals.splice(pos,1);
            }

            return {
                selectedRentals
            };
        });
    }


    render() {

        const styles = {
            bg:{
                width: "100%",
                backgroundImage: `url(${Background})`
            },
            bg2:{
                backgroundColor: 'aliceblue'
            },
            cart:{
                float:'right'
            }
        }

        return (
            <div>
                <div>
                    {/*style={styles.bg}*/}
                        <div>
                            <div className="jumbotron" style={styles.bg2}>
                              <span className="head h1">Rent an Apartment</span>
                            <div style={styles.cart}>
                                <Cart
                                    selected={this.state.selectedRentals}
                                    onRemoveRental={this.removeRental}
                                />
                            </div>
                            </div>
                        </div>
                </div>
                <div>
                    <CardColumns>
                        <RentalList
                            rentals={this.state.rentals}
                            onBookRental={this.bookRental}
                            onRemoveRental={this.removeRentalByName}
                        />
                    </CardColumns>
                </div>
            </div>
        );
    }
}

export default App;
