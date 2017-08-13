import React, { Component } from 'react';

class RaceView extends Component {
    constructor(props, context) {
        super(props, context);
        this.raceName = '';
        this.setRaceName = this.setRaceName.bind(this);
    }

    componentDidMount(){
        this.props.getRacesToImport();
    }

    setRaceName(e){
        this.raceName = e.target.value;
}

    render() {
        return (<div className="container">
            Race Info
            <input onChange={this.setRaceName} />
            <button onClick={() => this.props.setRace(this.raceName)} >Create</button>

            {this.props.availableRaces.map((item) =>
            {
                return <button onClick={() => this.props.setRace(this.raceName, item.name)} >{item.name}</button>
            })}

        </div>);
    }
}

export default RaceView;
