import React from "react";
import * as microsoftTeams from "@microsoft/teams-js";
import { useTranslation } from "react-i18next";
import { useTeamsFx } from "./components/utils/useTeamsFx";

/**
 * The 'Config' component is used to display your group tabs
 * user configuration options.  Here you will allow the user to
 * make their choices and once they are done you will need to validate
 * their choices and communicate that to Teams to enable the save button.
 */
export function TabConfig() {
  // Translations
  const { t } = useTranslation();
  const { theme } = useTeamsFx();

  // Initialize the Microsoft Teams SDK
  microsoftTeams.initialize();

  /**
   * When the user clicks "Save", save the url for your configured tab.
   * This allows for the addition of query string parameters based on
   * the settings selected by the user.
   */
  microsoftTeams.settings.registerOnSaveHandler((saveEvent) => {
    const baseUrl = `https://${window.location.hostname}:${window.location.port}`;
    microsoftTeams.settings.setSettings({
      suggestedDisplayName: "Graph Explorer",
      entityId: "Test",
      contentUrl: baseUrl + "/index.html#/tab",
      websiteUrl: baseUrl + "/index.html#/tab",
    });
    saveEvent.notifySuccess();
  });

  /**
   * After verifying that the settings for your tab are correctly
   * filled in by the user you need to set the state of the dialog
   * to be valid.  This will enable the save button in the configuration
   * dialog.
   */
  microsoftTeams.settings.setValidityState(true);
  const imageName = require('./teamsappzeronotes.svg');

  return (
    <center className="center" >
      <img className="image" src={imageName.default} alt='' />
      <h4 className="caption" style={{color: theme.siteVariables.focusOuterBorderColor}}>{t('Tab Config.Caption')}</h4>
    </center>
  );
}
