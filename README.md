# Microsoft Graph Teams App

## Which folders are important?
* For convenience, our manifest is now located in the teamsApp folder. You can then zip up the entire folder when you want to manually update it.
* `src` is where we will most likely be doing most of the editing. This is where we will be adding the new components

## Prerequisites

- [NodeJS](https://nodejs.org/en/)
- [Chrome browser](https://www.google.com/intl/en_ca/chrome/)
- [.NET](https://docs.microsoft.com/en-us/dotnet/core/install/linux-ubuntu#2010-)
- An M365 account. If you do not have M365 account, apply one from [M365 developer program](https://developer.microsoft.com/en-us/microsoft-365/dev-program)
- [Teams Toolkit Visual Studio Code Extension](https://aka.ms/teams-toolkit) or [TeamsFx CLI](https://aka.ms/teamsfx-cli)
- Run `npm install -g @microsoft/teamsfx-cli` to get the terminal bash commands

## How to get it running (option 1)

* Enter the `tabs` directory by running `cd tabs`
* Run `nvm use --lts` (If you are on WSL, skip if you are not)
* Start the project by hitting the `F5` key in Visual Studio Code. Alternatively use the `Run and Debug Activity Panel` in Visual Studio Code and click the `Start Debugging` green arrow button.

## How to get it running (option 2)

* Enter the `tabs` directory by running `cd tabs`
* Run `nvm use --lts` (If you are on WSL, skip if you are not)
* `npm install` to install project dependencies. `npm` is installed by default with [Node.js](https://nodejs.org/).
* `npm start` starts the TypeScript compiler in watch mode and the local server. It should open your browser automatically.

