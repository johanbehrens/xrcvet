import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class HorseInfoView extends Component {

    componentDidMount(){
        this.props.getHorsesAndRefresh(this.props.match.params.raceid,this.props.match.params.horseid);
    }

    render() {
        return (<div className="container">
            <h1>{this.props.horse && this.props.horse.name}</h1>
            <h3>Horse Info</h3>
            <div className="row">
                <div className="col-md-6 col-xs-12">HYDR: {this.props.horse && this.props.horse['HYDR'+this.props.match.params.leg]}</div>
                <div className="col-md-6 col-xs-12">LOCO: {this.props.horse && this.props.horse['LOCO'+this.props.match.params.leg]}</div>
                <div className="col-md-6 col-xs-12">HABI: {this.props.horse && this.props.horse['HABI'+this.props.match.params.leg]}</div>
                <div className="col-md-6 col-xs-12">MEMB: {this.props.horse && this.props.horse['MEMB'+this.props.match.params.leg]}</div>
                <div className="col-md-6 col-xs-12">CAP: {this.props.horse && this.props.horse['CAP'+this.props.match.params.leg]}</div>
                <div className="col-md-6 col-xs-12">GUT: {this.props.horse && this.props.horse['GUT'+this.props.match.params.leg]}</div>
                <div className="col-md-6 col-xs-12">GWB: {this.props.horse && this.props.horse['GWB'+this.props.match.params.leg]}</div>
                <div className="col-md-6 col-xs-12">COMMENT: {this.props.horse && this.props.horse['COMMENT'+this.props.match.params.leg]}</div>
            </div>

            <Link to={`/race/${this.props.match.params.raceid}/horse/${this.props.horse && this.props.horse._id}/leg/${this.props.horse && this.props.match.params.leg}/Edit`} className="btn btn-info btn-block">Edit</Link>
        </div>);
    }
}

export default HorseInfoView;
