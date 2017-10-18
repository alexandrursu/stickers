import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class Description extends Component {

    render() {
        return (
            <div className="description">
                <h3>personalize your laptop:</h3>
                <div className="border"></div>
                <div className="text">
                    <FormattedMessage id="app.description1" />
                    <span className='highlight'>
                        <FormattedMessage id="app.description2" />
                    </span>
                    <FormattedMessage id="app.description3" />
                    <b>
                        <FormattedMessage id="app.discount" />
                    </b>
                    <FormattedMessage id="app.description4" />
                    <b> 99</b> <FormattedMessage id="app.description5" />
                </div>
            </div>
        );
    }
}

export default Description;