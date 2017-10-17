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

            <LegView horse={this.props.horse} raceid={this.props.match.params.raceid} leg={1} />
            <LegView horse={this.props.horse} raceid={this.props.match.params.raceid} leg={2} />
            <LegView horse={this.props.horse} raceid={this.props.match.params.raceid} leg={3} />
            <LegView horse={this.props.horse} raceid={this.props.match.params.raceid} leg={4} />
            <LegView horse={this.props.horse} raceid={this.props.match.params.raceid} leg={5} />
            <LegView horse={this.props.horse} raceid={this.props.match.params.raceid} leg={6} />
        </div>);
    }
}

export default HorseInfoView;

class LegView extends Component {
    render() {
        const getClass = (horse, leg) => {
            let result = isDone(horse, leg);

            if(result === 'error') return '';
            if(result === 'success') return 'btn btn-success btn-block';
            if(result === 'warning') return 'btn btn-warning btn-block';

            return 'btn btn-danger btn-block';
        }

        const isDone = (horse, leg) => {
            if(!horse) return 'error';

            if(horse[`HYDR${leg}`]
                && horse[`LOCO${leg}`]
                && horse[`HABI${leg}`]
                && horse[`MEMB${leg}`]
                && horse[`CAP${leg}`]
                && horse[`GUT${leg}`]
                && horse[`GWB${leg}`])
            {
                return 'success';
            }

            if(horse[`HYDR${leg}`]
                || horse[`LOCO${leg}`]
                || horse[`HABI${leg}`]
                || horse[`MEMB${leg}`]
                || horse[`CAP${leg}`]
                || horse[`GUT${leg}`]
                || horse[`GWB${leg}`])
            {
                return 'warning';
            }

            return 'danger';
        }

        const getLink = (horse, leg) => {
            let result = isDone(horse, leg);
            if(result === 'success') return `/race/${this.props.raceid}/horse/${this.props.horse && this.props.horse._id}/leg/${this.props.leg-1}`;
            return `/race/${this.props.raceid}/horse/${this.props.horse && this.props.horse._id}/leg/${this.props.leg-1}/Edit`;
        }

        return (<Link to={getLink(this.props.horse, this.props.leg-1)}
                      className="row ride-card">
            <div className="col-3 col-md-2">
                <div className={getClass(this.props.horse, this.props.leg-1)}>open</div>
            </div>
            <div className="col-9 col-md-10">
                <div className="row">
                    <div className="bottom-border col-12">
                        <div className="row">
                            <div className="col-10 minus-margin">
                                <div className="col col-12 l-algin card-big">Leg {this.props.leg}</div>
                                <div className="col col-12 gray l-algin"></div>
                            </div>
                            <div className="col col-2 center arrow"> {'>'} </div>
                        </div>
                    </div>
                    <div className="col col small-bottom l-algin">LOCO - <span className="gray">{this.props.horse && this.props.horse['LOCO'+(this.props.leg-1)]}</span> </div>
                    <div className="col col small-bottom l-algin">HABI - <span className="gray">{this.props.horse && this.props.horse['HABI'+(this.props.leg-1)]}</span> </div>
                    <div className="col col small-bottom l-algin">MEMB - <span className="gray">{this.props.horse && this.props.horse['MEMB'+(this.props.leg-1)]}</span> </div>
                    <div className="col col small-bottom l-algin">CAP - <span className="gray">{this.props.horse && this.props.horse['CAP'+(this.props.leg-1)]}</span> </div>
                    <div className="col col small-bottom l-algin">GUT - <span className="gray">{this.props.horse && this.props.horse['GUT'+(this.props.leg-1)]}</span> </div>
                    <div className="col col small-bottom l-algin">GWB - <span className="gray">{this.props.horse && this.props.horse['GWB'+(this.props.leg-1)]}</span> </div>
                </div>
            </div>

        </Link>);
    }
}
