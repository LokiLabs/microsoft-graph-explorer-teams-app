## How to update this app's RSC permissions

1. Update the list of RSC permissions in `webApplicationInfo.applicationPermissions` of `teamsApp/manifest.json`.
1. Copy `webApplicationInfo.applicationPermissions` into the constant `RSC_LIST` in `tabs/src/components/sample/TabConstants.jsx`<sup name="a1">[1](#f1)</sup>.
1. Zip the `teamsApp` directory.
1. Go to the Teams app store.
1. Delete the current Graph Explorer Teams app.
1. Upload the zipped `teamsApp` via "Upload a custom app" in the bottom left corner.
1. **TODO**: Deployment and publishing (ADO ticket [#38612](https://dev.azure.com/microsoftgarage/Intern%20GitHub/_backlogs/backlog/GI21%20-%20Graph%20Explorer/Backlog%20items/?workitem=38612))

<b name="f1">1</b>: The reason the `RSC_LIST` constant in `tabs/src/components/sample/TabConstants.jsx` exists is because you cannot import any file outside the `tabs/src` directory into `tabs/src/components/sample/RSCList.jsx`. Thus, we need to create a copy of the RSC permissions list from `teamsApp/manifest.json` and import that as a constant instead. We could move the `teamsApp` directory into `tabs/src`, which would allow us to directly import the RSC permissions list and reduce code duplication, but it might not make sense for `teamsApp` to exist in `tabs/src`. ADO ticket [#38676](https://dev.azure.com/microsoftgarage/Intern%20GitHub/_backlogs/backlog/GI21%20-%20Graph%20Explorer/Backlog%20items/?workitem=38676) covers making this decision. [↩](#a1)