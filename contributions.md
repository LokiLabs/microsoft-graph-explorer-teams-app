## How to update this app's RSC permissions

1. Update the list of RSC permissions in `webApplicationInfo.applicationPermissions` of `teamsApp/manifest.json`.
1. Zip the `teamsApp` directory.
1. Go to the Teams app store.
1. Delete the current Graph Explorer Teams app.
1. Upload the zipped `teamsApp` via "Upload a custom app" in the bottom left corner.
1. Deployment:

The Teams app is deployed using the Teams toolkit plugin extension in VSCode.  

References:  

[Get started - Prerequisites - Teams | Microsoft Docs](https://docs.microsoft.com/en-us/microsoftteams/platform/get-started/prerequisites?tabs=vscode)

[Get started - Build your first Teams app with React - Teams | Microsoft Docs](https://docs.microsoft.com/en-us/microsoftteams/platform/get-started/first-app-react?tabs=cli#deploy-your-app-to-azure)

Step 1: Install prereqs (and VSCode extension).  

* Go to [Get started - Prerequisites - Teams | Microsoft Docs](https://docs.microsoft.com/en-us/microsoftteams/platform/get-started/prerequisites?tabs=vscode) and install the prereqs. The most important one for deploying with VSCode is the VSCode extension:  
    * Open Visual Studio Code. 
    * Select the Extensions view (Ctrl+Shift+X / ⌘⇧-X or View > Extensions). 
    * In the search box, enter Teams Toolkit. 
    * Select Install next to the Teams Toolkit. 

Step 2: Get an Azure subscription.  

* Go to http://my.visualstudio.com/ and get your free Azure subscription, for your tenant account. This will provision/deploy/publish your Teams app to your tenant account (for testing purposes, of course).  

Step 3: Login to the accounts in VSCode and provision resources for the Teams app deployment.  

* Go back to VSCode and open the Teams Toolkit extension you just installed.  
* Keep in mind you should name your app appropriately at this step before provision or the resource groups allocated in Azure from the provision steps will be not named how you want them to.  
* Follow the steps in [Get started - Build your first Teams app with React - Teams | Microsoft Docs](https://docs.microsoft.com/en-us/microsoftteams/platform/get-started/first-app-react?tabs=cli#deploy-your-app-to-azure) to Provision your app by hitting Provision in the cloud.  
* Note that you can't provision the app twice. If you delete the resource group in Azure, go to the .fx folder in your app, back it up, and delete your default.userdata, env.default.json, and local.env files in your .fx folder. You probably need to restart visual studio code as well.  

Step 4: Deploy, publish to Teams 

* In VSCode, hit Deploy to the cloud to deploy the app on the provisioned resource group from your Azure subscription.  
* If you go to the Debug tab on the left (or hit F5), you can launch the Teams app remotely with the deployed version by selecting Launch remote (Edge).  
* After Deployment you can hit Publish to Teams in the Teams toolkit extension. This will submit the app to the IT admin in your test tenant to approve in the Azure Admin portal. Once it is approved by the admin, the app will be available in Built for your org in the Teams app store.   