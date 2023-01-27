# SAP-UI5-Fiori-Model
4 Types of Model :- 
-JSONModel
-ResourceModel
-XmlModel
-OdataModel

For Notes :- https://docs.google.com/document/d/e/2PACX-1vQ1OimgYS-Mtx3Qk9BjmUeqJKAf1X-uu9WFmB3DJM9dtvLouqDOOnXZHmNVv1Xltbc9L4ddPivyM_30/pub

-->How to use model in SAPUI5:-

Step 1) Declare a brand new model.
-JSONModel
	var oModel = new sap.ui.model.json.JSONModel();
-ResourceModel
	var oModel = new sap.ui.model.resource.ResourceModel();
-XmlModel
	var oModel = new sap.ui.model.Xml.XmlModel();
OdataModel
	var oModel = new sap.ui.model.Odata.V2.OdataModel();
	
Step 2) Set the data to the model.
for set data we have two method [ modelName.setData(); / modelName.loadData(); ]

JSONModel.setData(); | JSONModel.loadData();
XmlModel.setData();  | XmlModel.loadData();
oDataModel.read();
oDataModel.create();
oDataModel.update();
oDataModel.delete();
ResourceModel ---×

Step 3) Set the model to the App / View / Controll Level.
-App Level
	sap.ui.get.Core().setModel();
-View Level
	this.getView().setModel();
-Controll Level
	this.getView().byId("").setModel();