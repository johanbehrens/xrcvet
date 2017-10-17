import React, { Component } from 'react';
import { memberInfo } from '../login/login-reducer';
import { Link } from 'react-router-dom';
import './_home-page.css';
import CardView from "../card/card-view";

class HomePageView extends Component {
    constructor(props, context) {
        super(props, context);
        this.memberinfo = memberInfo();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, id) {
        e.preventDefault();
        this.props.history.push(`/race/${id}/search`);
    }

    render() {
        return (<div className="container-fluid">
            {this.memberinfo}
            <div className="row justify-content-md-center">
                <div className="col col-md-8">
                    <Link to={'/newrace'} className="card card-block">Create Event</Link>
                </div>

                {this.props.races.map((item) =>
                {
                    return <div className="col-sm-8 padding10">
                     <CardView description={item.name} date={item.date} link={`/race/${item.id}/search`} key={item.id}/>
                    </div>;
                })}


            </div>
        </div>);
    }
}

HomePageView.propTypes=
{

};

export default HomePageView;
