import React from "react";
import ReactDOM from "react-dom";
import { addLocaleData, IntlProvider } from 'react-intl';

import de from 'react-intl/locale-data/de';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import fr from 'react-intl/locale-data/fr';
import jp from 'react-intl/locale-data/ja';
import pt from 'react-intl/locale-data/pt';
import ru from 'react-intl/locale-data/ru';
import zh from 'react-intl/locale-data/zh';
import { rscLocale } from './appLocale';
import messages from "./messages";
import App from "./components/App";
import "./index.css";

addLocaleData([
    ...pt,
    ...de,
    ...en,
    ...fr,
    ...jp,
    ...ru,
    ...zh,
    ...es,
]);

const Root = () => {
    return (
      <IntlProvider locale={rscLocale} messages={(messages)[rscLocale]}>
        <App />
      </IntlProvider>
    );
};

ReactDOM.render(<Root />, document.getElementById("root"));
