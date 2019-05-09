import React, { Component } from 'react';
import {CardColumns,Card, CardDeck, CardGroup, CardImg, ListGroup, ListGroupItem, Button,Jumbotron} from 'react-bootstrap';
import ReactStars from 'react-stars';
import PropTypes from 'prop-types'
import Rental from './Rental';


const json = require('json-query');
const FA = require('react-fontawesome');


class RentalList extends Component {


    render (){

        const p1= {
            marginRight: '5px',
            color: 'gray',
            fontSize:'smaller',
            float: 'left',
            readonly:true

        } ;

        const p2= {
            margin: '4px',
            color: 'white',
            fontSize:'large',
            float: 'right'

        } ;


        const selected = {visibility: 'hidden'};

        const styles = {
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
                left: '90%',
                color: 'red',
                backgroundColor: 'transparent'
            }
        };


     const rentals = this.props.rentals.map(
         (rental,idx) => {
             return (
                    <Rental key={idx}
                            idx={idx}
                            rental={rental}
                            onClick={this.props.onBookRental}
                            onRemove={this.props.onRemoveRental}
                    />

             );
         }
     );

     return (
         <div>
             <ul>
             {rentals}
             </ul>
         </div>
     );

    }
}

export default RentalList;
