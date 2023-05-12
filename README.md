# Terraform Script Application Components

Terraform Script Application Components is a components catalog, which implements the Terraform Design System components in an HCL portal instance.

## Getting Start

1. Install the HCL dxDashboard tool in your computer following the instructions [here](https://github.com/HCL-TECH-SOFTWARE/WebDevToolkitForDx).

2. Clone this repository in you local environment.
```bash
git clone <replace-repo-url>
```

3. Launch the dxDashboard tool.
```bash
# Run the dxdasboard command
dxdasboard
```
4. Configure you dxDashboard tool following the dxDashboard documentation.
  a. Populate the _Script Applications Folder_ field with the path where the repo was cloned. 

5. Click on the "Script Applications" tab and click on the "Refresh" button. The script application components will be displayed.

6. Every time a new script application component is added or updated, click on PUSH or WATCH buttons to push the components to HCL portal instance.

## How does it work?
Each script application component has it's folder with 4 important files.
```bash
.
|--dx-<component-name>
|   |--dx-<component-name>.css #This contains all the custom css for the application if needed.
|   |--dx-<component-name>.js #This includes all the needed javascript to instantiate the Design System components into the script application component.
|   |--index.html #This file contains all the HTML of the application component.
|   |--sp-config.json #This is an HCL configuration file to let the dxDashboard tool know where to deploy the script applications components.
|--dx-catalog
    |--dx-catalog.css
    |--dx-catalog.js
    |--index.html
    |--sp-config.json
```

```json
// sp-config.json file example
{
  "wcmContentTitle": "DXCatalog",
  "scriptPortletServer": "http://127.0.0.1:10039",
  "portalUser": "wpsadmin",
  "wcmSiteArea": "Script Portlets",
  "contenthandlerPath": "/wps/mycontenthandler",
  "mainHtmlFile": "index.html",
  "datepushed": "2023-05-05T19:19:51.595Z",
  "virtualPortalID": "tdp",
  "wcmContentPath": "base22-design/Script Portlets/dx-catalog",
  "datePushed": "2023-05-09T20:54:30.166Z"
}
```