## Which folders are important?
* `.fx` contains the folder with the teams app skeleton. It also contains the manifest that gets published when you run `teamsfx publish`. For Activity Feed Notifications, we only need to add in the activities section and RSC needs to be added to `webApplicationInfo `.
* `tabs` is where we will most likely be doing most of the editing. This is where we will be adding the new components


## Prerequisites

- [NodeJS](https://nodejs.org/en/)
- An M365 account. If you do not have M365 account, apply one from [M365 developer program](https://developer.microsoft.com/en-us/microsoft-365/dev-program)
- [Teams Toolkit Visual Studio Code Extension](https://aka.ms/teams-toolkit) or [TeamsFx CLI](https://aka.ms/teamsfx-cli)
- Run `npm install -g @microsoft/teamsfx-cli` to get the terminal bash commands

## How to get it running

Start the project by hitting the `F5` key in Visual Studio Code. Alternatively use the `Run and Debug Activity Panel` in Visual Studio Code and click the `Start Debugging` green arrow button.

## Manual publishing

* Press F5
* After your code successfully compiles, search your entire repo for the local app code. (i.e. search for `local`)
* Change the manifest's app id under your webApplicationInfo with the value you found in your repo
* Upload the app via the app store 

## Deploy to Azure

Deploy your project to Azure by following these steps:

| From Visual Studio Code                                                                                                                                                                                                                                                                                                                                                     | Using TeamsFx CLI                                                                                                                                                                                                            |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <ul><li>Open Teams Toolkit, and sign into Azure by clicking the `Sign in to Azure` under the `ACCOUNTS` section from sidebar.</li> <li>After you signed in, select a subscription under your account.</li><li>Open the command palette and select: `Teams: Provision in the Cloud`.</li><li>Open the command palette and select: `Teams: Deploy to the Cloud`.</li></ul> | <ul> <li>Run command `teamsfx account login azure`.</li> <li>Run command `teamsfx account set --subscription <your-subscription-id>`.</li> <li> Run command `teamsfx provision`.</li> <li>Run command: `teamsfx deploy`. </li></ul> |

> Note: Provisioning and deployment may incur charges to your Azure Subscription.

## Preview

Once the provisioning and deployment steps are finished, you can preview your app:
1. From Visual Studio Code, open the `Run and Debug Activity Panel`.
1. Select `Launch Remote (Edge)` or `Launch Remote (Chrome)` from the launch configuration drop-down. 
1. Press the Play (green arrow) button to launch your app - now running remotely from Azure.

## Validate manifest file

To check that your manifest file is valid:

- From Visual Studio Code: open the command palette and select: `Teams: Validate App Manifest File`.
- From TeamsFx CLI: run command `teamsfx validate` in your project directory.

## Build

- From Visual Studio Code: open the command palette and select `Teams: Build Teams Package`.
- Alternatively, from the command line run `teamsfx build` in the project directory.

## Publish to Teams

Once deployed, you may want to distribute your application to your organization's internal app store in Teams. Your app will be submitted for admin approval.

- From Visual Studio Code: open the command palette and select: `Teams: Publish to Teams`.
- From TeamsFx CLI: run command `teamsfx publish` in your project directory.


## What happens after you publish or want an update? 
* After running `teamsfx publish` in your terminal, this means that your app is pending approval. As in, if you try to run this, it will say you still need permissions.
* To provide approval, visit the [admin site](https://admin.teams.microsoft.com/policies/manage-apps)
   1) Search for `ToolkitAppFrontend `
   2) Change the dropdown menu for `Publishing status` to `Published`
* Now you can locally launch the app as per the Readme in the tabs folder and see the respective changes
