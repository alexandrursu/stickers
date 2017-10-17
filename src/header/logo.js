import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class Logo extends Component {

    render() {
        return (
            <div className="sub-header">
                <a className="logo" href="#">Stickers.</a>
                <div className="made-in-moldova" href="#">
                    <FormattedMessage id="app.description" />
                </div>
                <div className="slogan" href="#">
                    <FormattedMessage id="app.slogan" />
                </div>
            </div>
        );
    }
}

export default Logo;