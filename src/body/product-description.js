import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class ProductDescription extends Component {

    render() {
        return (
            <ul className="product">
                <li>
                    <label>
                        <FormattedMessage id="app.quantity" />
                    </label>
                    <div className="details">
                        10 <FormattedMessage id="app.stickers" />
                    </div>
                </li>
                <li>
                    <label>
                        <FormattedMessage id="app.price" />
                    </label>
                    <div className="details">
                        99 lei
                    </div>
                </li>
                <li>
                    <label>
                        <FormattedMessage id="app.release_date" />
                    </label>
                    <div className="details">
                        november 2017
                    </div>
                </li>
                <li>
                    <label>
                        <FormattedMessage id="app.stock" />
                    </label>
                    <div className="details">
                        <span className="highlight">
                            <FormattedMessage id="app.packs" />
                        </span>
                    </div>
                </li>
                <li>
                    <label>
                        <FormattedMessage id="app.delivery" />
                    </label>
                    <div className="details">
                        <FormattedMessage id="app.free" />
                    </div>
                </li>
                <li>
                    <button>
                        <FormattedMessage id="app.notify" />
                    </button>
                </li>
            </ul>
        );
    }
}

export default ProductDescription;