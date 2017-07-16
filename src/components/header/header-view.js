import React, { Component } from 'react';
import { memberInfo } from './components/login/login-reducer';

class HomePageContent extends Component {

    constructor(props, context) {
        super(props, context);
        this.memberinfo = memberInfo();
    }

    render() {
        return (<div>
            This is the homepage
            {this.memberinfo}
        </div>);
    }
}

HomePageContent.propTypes=
{

};

export default HomePageContent;
