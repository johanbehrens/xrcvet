import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class HorseInfoView extends Component {

    componentDidMount(){
        this.props.getHorsesAndRefresh(this.props.match.params.raceid,this.props.match.params.horseid, this.props.match.params.leg);
    }



    render() {
        const getLabel = (type) => {
            return <div className="col-md-6 col-xs-12">{type}: {this.props.vetCard[type]}</div>;
        }

        return (<div className="container">
            <h1>{this.props.horse && this.props.horse.name}</h1>
            <h3>Horse Info</h3>
            <div className="row">
                {getLabel('HYDR')}
                {getLabel('LOCO')}
                {getLabel('HABI')}
                {getLabel('MEMB')}
                {getLabel('CAP')}
                {getLabel('GUT')}
                {getLabel('GWB')}
                {getLabel('COMMENT')}
            </div>

                <Link to={`/race/${this.props.match.params.raceid}/horse/${this.props.horse && this.props.horse._id}/leg/${this.props.horse && this.props.match.params.leg}/Edit`} className="btn btn-info btn-block">Edit</Link>
        </div>);
    }
}

export default HorseInfoView;
