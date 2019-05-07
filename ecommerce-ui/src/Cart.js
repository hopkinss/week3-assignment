import React from 'react';
import {CardColumns,Card, CardDeck, CardGroup, CardImg, ListGroup, ListGroupItem, Button,Jumbotron} from 'react-bootstrap';
import RentalList from './RentalList';

const FA = require('react-fontawesome');

export default class Cart extends React.Component {


    render(){

        const styles={
            nodisplay:{display: 'none'},

            cart:{
              color: "#0066ff"
            },
            media: {
                height: 0,
                paddingTop: '56.25%' // 16:9
            },
            card: {
                position: 'relative',
            },
            overlay: {
                position: 'absolute',
                top: '20px',
                left: '40px',
                color: 'white',
                fontWeight: 'bold',
                backgroundColor: 'transparent',

            },
            total:{
                color:'green'
            }
        };

        const total =   this.props.selected.reduce((a,b) => a + parseInt(b['payment']['cost']),0 );


        return (
            <div>
                <div style={styles.card}>
                    <FA name="shopping-cart" className="fa fa-5x" style={styles.cart}/>
                    <p style={styles.overlay}>{this.props.selected.length}</p>
                    <div>
                        <span className="h5">Total:</span>&nbsp;<span className="h5" style={styles.total}>${total.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        );
    }
}

