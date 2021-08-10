import React, { createContext } from "react";
// https://fluentsite.z22.web.core.windows.net/quick-start
import { Provider, teamsTheme, Loader } from "@fluentui/react-northstar";
import { HashRouter as Router, Redirect, Route } from "react-router-dom";
import { useTeamsFx } from "./components/utils/useTeamsFx";
import Privacy from "./Privacy";
import TermsOfUse from "./TermsOfUse";
import Tab from "./Tab";
import { TabConfig } from "./TabConfig";
import { useTranslation } from "react-i18next";
import { useTeams } from "msteams-react-base-component";
import { changeLanguage } from "./i18n";

export const LocaleContext = createContext();
/**
 * The main app which handles the initialization and routing
 * of the app.
 */
export default function App() {
  const [isTeams] = useTeams({});
  const { theme, loading } = useTeamsFx();
  const { i18n } = useTranslation();

  let locale = 'en-us';
  if (isTeams.context?.locale) {
    changeLanguage(i18n, isTeams.context.locale);
    locale = isTeams.context.locale;
  }

  return (
    <LocaleContext.Provider value={locale}>
      <Provider theme={theme || teamsTheme} styles={{ backgroundColor: "#eeeeee", minHeight: "50vh" }}>
        <Router>
          <Route exact path="/">
            <Redirect to="/tab" />
          </Route>
          {loading ? (
            <Loader style={{ margin: 100 }} />
          ) : (
            <>
              <Route exact path="/privacy" component={Privacy} />
              <Route exact path="/termsofuse" component={TermsOfUse} />
              <Route exact path="/tab" component={Tab} />
              <Route exact path="/config" component={TabConfig} />
            </>
          )}
        </Router>
      </Provider>
    </LocaleContext.Provider>
  );
}
