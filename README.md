# SAP-UI5-Fiori-Model
<b>4 Types of Model :- </b>

-JSONModel

-ResourceModel

-XmlModel

-OdataModel

<b>For Notes :-</b> https://docs.google.com/document/d/e/2PACX-1vQ1OimgYS-Mtx3Qk9BjmUeqJKAf1X-uu9WFmB3DJM9dtvLouqDOOnXZHmNVv1Xltbc9L4ddPivyM_30/pub

<b>-->How to use model in SAPUI5:-</b>

<b>Step 1) Declare a brand new model.</b>

-JSONModel=
	var oModel = new sap.ui.model.json.JSONModel();
	
-ResourceModel=
	var oModel = new sap.ui.model.resource.ResourceModel();
	
-XmlModel=
	var oModel = new sap.ui.model.Xml.XmlModel();
	
OdataModel=
	var oModel = new sap.ui.model.Odata.V2.OdataModel();
	
<b>Step 2) Set the data to the model.</b>

for set data we have two method [ modelName.setData(); / modelName.loadData(); ]

JSONModel.setData(); | JSONModel.loadData();

XmlModel.setData();  | XmlModel.loadData();

oDataModel.read();

oDataModel.create();

oDataModel.update();

oDataModel.delete();

ResourceModel ---×

<b>Step 3) Set the model to the App / View / Controll Level.</b>

-App Level=
	sap.ui.get.Core().setModel();
	
-View Level=
	this.getView().setModel();
	
-Controll Level=
	this.getView().byId("").setModel();