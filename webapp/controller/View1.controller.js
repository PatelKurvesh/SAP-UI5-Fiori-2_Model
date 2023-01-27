sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("GithubSAP-UI5-Fiori-Model.controller.View1", {
		
		onInit : function(){
			
			//Step 1) Declare a brand new model.
			var oModel = new sap.ui.model.json.JSONModel();
			
			//Step 2) Set the Data to the model.
			oModel.setData({
				//Without Array Data
				// "Student":{					//"Student" = Entity Set / Table Name
				// 	"name":"Kurvesh",		//"name" = Property / Key     |    "Kurvesh" = Value
				// 	"no":"20012012037",
				// 	"sem":8
				// }
				
				//With Array Data
				"Student":{
					"CE":[
						{"name":"Hirwa","no":"20012012011","sem":5},
						{"name":"Jay","no":"20012012035","sem":8}
						],
					"IT":[
						{"name":"Siddhi","no":"20012012003","sem":2},
						{"name":"Sharad","no":"20012012041","sem":1}
						]
				}
			});
			
			//Step 3) Set the model to your app / view / controll level.
			
			//App Level
			//sap.ui.getCore().setModel(oModel);
			
			//View Level
			this.getView().setModel(oModel);
			
			//Controll Level
			//this.getView().byId("").setModel();
		}

	});
});