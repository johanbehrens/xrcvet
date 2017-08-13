import React, { Component } from 'react';
import { memberInfo } from '../login/login-reducer';
import { Link } from 'react-router-dom'

class HomePageView extends Component {
    constructor(props, context) {
        super(props, context);
        this.memberinfo = memberInfo();
    }

    render() {
        return (<div className="container">
            {this.memberinfo}
            <div className="row justify-content-md-center">
                <div className="col col-md-8">
                    <Link to={'/newrace'} className="btn btn-info btn-block">New</Link>
                </div>
                <div className="col col-md-8">
                    <Link to={'/selectrace'} className="btn btn-info btn-block">Open</Link>
                </div>
            </div>
        </div>);
    }
}

HomePageView.propTypes=
{

};

export default HomePageView;
