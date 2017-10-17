import React, { Component } from 'react';
import { memberInfo } from '../login/login-reducer';
import { Link } from 'react-router-dom';
import './_card.css';

class CardView extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Link to={this.props.link} className="row ride-card">
                <div className="col-3 col-md-2">
                    <div className="event-card">open</div>
                    <div className="arrow-up"></div>
                </div>
                <div className="col-9 col-md-10">
                    <div className="row">
                        <div className="bottom-border col-12">
                            <div className="row">
                                <div className="col-10 minus-margin">
                                    <div className="col col-12 l-algin card-big">{this.props.description}</div>
                                    <div className="col col-12 gray l-algin"></div>
                                </div>
                                <div className="col col-2 center arrow"> {'>'} </div>
                            </div>
                        </div>
                        <div className="col col-4 small-bottom l-algin"> <span className="gray"></span> </div>
                        <div className="col col-4 small-bottom l-algin">
                            <span className="gray"> </span>
                            <span></span>
                        </div>
                        <div className="col col-4 small-bottom l-algin"></div>
                    </div>
                </div>

            </Link>);
    }
}

CardView.propTypes=
{

};

export default CardView;
