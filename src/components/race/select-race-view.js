
import React, { Component } from 'react';

class RaceView extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, id) {
        e.preventDefault();
        this.props.history.push(`/race/${id}/search`);
    }

    render() {
        return (<div className="container">

            <div className="row justify-content-around">
                <div className="col-sm-3">
            {this.props.races.map((item) =>
            {
                return <button key={item.id} onClick={e => this.handleClick(e, item.id)} className="btn btn-info btn-block">{item.name}</button>
            })}
                </div></div></div>);
    }
}

export default RaceView;
