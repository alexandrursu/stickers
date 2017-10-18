import React, { Component, PropTypes } from 'react';
import Menu from './body/menu';
import Slider from './body/slider';
import Description from './body/description';
import ProductDescription from './body/product-description';
import Logo from './header/logo';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import ro from 'react-intl/locale-data/ro';
import './assets/sass/App.css';
import Cookie from 'js-cookie';

import {
    IntlProvider,
    addLocaleData,
    injectIntl,
    FormattedRelative,
    FormattedMessage} from 'react-intl';

addLocaleData([...en, ...ro, ...ru]);

/* Define your translations */
const lang = Cookie.get('locale') || 'ro';
let i18n = {
    locale: lang,
    messages: require(`./i18n/${lang}.json`)
};

class App extends Component {
    constructor(){
        super();
        this.state = {
            lang: i18n.locale
        }
    }

    _changeLanguage (language) {
        Cookie.set('locale', language);
        window.location.reload();
    }

    render() {
        return (
            <IntlProvider
                locale={i18n.locale}
                messages={i18n.messages}>
            <div>
                <header>
                    <div className="pre-header">
                        <div className="content">
                        <ul className={`languages ${this.state.lang}`}>
                            <li className="ru" onClick={() => { this._changeLanguage('ru')}}>RU</li>
                            <li className="ro" onClick={() => {this._changeLanguage('ro')}}>RO</li>
                            <li className="en" onClick={() => {this._changeLanguage('en')}}>EN</li>
                        </ul>
                        </div>
                    </div>
                    <div className="content">
                        <Logo />
                        <span className="border"></span>
                    </div>
                </header>
                <div className="body">
                    <section className="content">
                        <div className="left-side">
                            <Menu />
                        </div>
                        <div className="right-side">
                            <h2>experimental [pack #1]</h2>
                            <Slider />
                            <ProductDescription />
                            <div className="clear"></div>
                            <Description />
                        </div>
                    </section>
                    <section>
                        <div className="left-side"></div>
                        <div className="right-side"></div>
                    </section>
                </div>
            </div>
            </IntlProvider>
        );
    }
}

export default App;