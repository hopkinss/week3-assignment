import React, { Component } from 'react';
import {CardColumns,Card, CardDeck, CardGroup, CardImg, ListGroup, ListGroupItem, Button,Jumbotron} from 'react-bootstrap';
import ReactStars from 'react-stars';
import PropTypes from 'prop-types';


const FA = require('react-fontawesome');


class Rental extends Component {
    constructor(props) {
        super(props);

        this.state={
            isSelected: false,
        };
    }

    selectRental = (isSelect) => {
        this.setState(prevState =>{
            return {
                isSelected: isSelect
            };
        });
    }

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
            fontSize:'small',
            float: 'right'

        } ;



        const selected = {visibility: 'hidden'};

        const styles = {

            selected: {
                visibility: this.state.isSelected ? 'visible' : 'hidden'
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
                left: '90%',
                color: 'lime',
                backgroundColor: 'transparent',
                padding: '5px',
                borderRadius: '50%',
                border: '2px solid lime'
            }
        };

        const rental = this.props.rental;

        const buttons = this.state.isSelected ?
                    <div>
                        <i style={p2} onClick={() => {this.props.onRemove(rental["title"]);this.selectRental(false)}}  className="btn btn-danger fa fa-minus-circle" />
                    </div>
                    :
                    <div>
                        <i style={p2} onClick={() => {this.props.onClick(this.props.idx);this.selectRental(true)}}     className="btn btn-primary fa fa-plus-circle" />
                    </div>;

        const host =  (this.props.rental['host']['isSuperhost']) ? " - Superhost" : "";

        return (
            <li >
                <Card className="item" style={styles.card}>
                    <Card.Img  src={rental["image"]}/>
                    <div style={styles.selected}>
                        <div style={styles.overlay}>
                            <FA name="cart-plus" className="fa fa-2x"/>
                        </div>
                    </div>
                    <Card.Body>
                        <Card.Subtitle>{rental["houseType"]}-{rental["location"]["city"]}</Card.Subtitle>
                        <Card.Title>{rental["title"]}</Card.Title>
                        <Card.Text>${rental["payment"]["cost"]}/Night</Card.Text>
                        <p>
                            <div style={p1}>
                                <ReactStars count={5} size={15} color2={'#00e6e6'} value={rental["rating"]["stars"]} half={true}/>
                            </div>
                            <div style={p1}>{rental["rating"]["reviews"]}{host}</div>
                            <div>
                                <div>
                                    {buttons}
                                </div>
                            </div>
                        </p>
                    </Card.Body>
                </Card>
            </li>
        );
    }
}

export default Rental;
