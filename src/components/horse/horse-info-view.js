import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class HorseInfoView extends Component {

    componentDidMount(){
        this.props.getHorsesAndRefresh(this.props.match.params.raceid,this.props.match.params.horseid);

        this.getClass = this.getClass.bind(this);
    }

    getClass = (horse, leg) => {
        if(!horse) return '';
        if(horse[`HYDR${leg}`]
            && horse[`LOCO${leg}`]
            && horse[`HABI${leg}`]
            && horse[`MEMB${leg}`]
            && horse[`CAP${leg}`]
            && horse[`GUT${leg}`]
            && horse[`GWB${leg}`])
        {
            return 'btn btn-success btn-block';
        }

        if(horse[`HYDR${leg}`]
            || horse[`LOCO${leg}`]
            || horse[`HABI${leg}`]
            || horse[`MEMB${leg}`]
            || horse[`CAP${leg}`]
            || horse[`GUT${leg}`]
            || horse[`GWB${leg}`])
        {
            return 'btn btn-warning btn-block';
        }

        return 'btn btn-danger btn-block';
    }

    render() {



        return (<div className="container">
            <h1>{this.props.horse && this.props.horse.name}</h1>
            <h3>Horse Info</h3>
            <div className="row">
                <div className="col-md-6 col-xs-12">BREED: {this.props.horse && this.props.horse.BREED}</div>
                <div className="col-md-6 col-xs-12">COLOUR: {this.props.horse && this.props.horse.COLOUR}</div>
                <div className="col-md-6 col-xs-12">SEX: {this.props.horse && this.props.horse.SEX}</div>
                <div className="col-md-6 col-xs-12">HORSE_DOB: {this.props.horse && this.props.horse.HORSE_DOB}</div>
                <div className="col-md-6 col-xs-12">H_NOVICE: {this.props.horse && this.props.horse.H_NOVICE}</div>
                <div className="col-md-6 col-xs-12">R_NOVICE: {this.props.horse && this.props.horse.R_NOVICE}</div>
                <div className="col-md-6 col-xs-12">SNO: {this.props.horse && this.props.horse.SNO}</div>
                <div className="col-md-6 col-xs-12">HNAME: {this.props.horse && this.props.horse.HNAME}</div>
                <div className="col-md-6 col-xs-12">HCODE: {this.props.horse && this.props.horse.HCODE}</div>
                <div className="col-md-6 col-xs-12">CALLNAME: {this.props.horse && this.props.horse.CALLNAME}</div>
            </div>

            <Link to={`/race/${this.props.match.params.raceid}/horse/${this.props.horse && this.props.horse._id}/leg/0`} className={this.getClass(this.props.horse, 0)}>Leg 1</Link>
            <Link to={`/race/${this.props.match.params.raceid}/horse/${this.props.horse && this.props.horse._id}/leg/1`} className={this.getClass(this.props.horse, 1)}>Leg 2</Link>
            <Link to={`/race/${this.props.match.params.raceid}/horse/${this.props.horse && this.props.horse._id}/leg/2`} className={this.getClass(this.props.horse, 2)}>Leg 3</Link>
            <Link to={`/race/${this.props.match.params.raceid}/horse/${this.props.horse && this.props.horse._id}/leg/3`} className={this.getClass(this.props.horse, 3)}>Leg 4</Link>
            <Link to={`/race/${this.props.match.params.raceid}/horse/${this.props.horse && this.props.horse._id}/leg/4`} className={this.getClass(this.props.horse, 4)}>Leg 5</Link>
            <Link to={`/race/${this.props.match.params.raceid}/horse/${this.props.horse && this.props.horse._id}/leg/5`} className={this.getClass(this.props.horse, 5)}>Leg 6</Link>
        </div>);
    }
}

export default HorseInfoView;
