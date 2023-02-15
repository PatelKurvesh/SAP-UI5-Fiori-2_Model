sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("GithubSAP-UI5-Fiori-Model.controller.View1", {
		
		onInit : function(){
			
			//Step 1) Declare a brand new model.
			// var oModel = new sap.ui.model.json.JSONModel();
			
			//Step 2) Set the Data to the model.
			// // oModel.setData({
			// 	// "student":{
			// 	// 	"id":101,
			// 	// 	"name":"Kurvesh",
			// 	// 	"company":"Apple",
			// 	// 	"age":24
			// 	// }
				
			// 	//We use array
			// 	// "student":{
			// 	// 	"CE":[{
			// 	// 		"id":102,
			// 	// 		"name":"kurvesh",
			// 	// 		"company":"Apple",
			// 	// 		"age":24
			// 	// 	},{
			// 	// 		"id":103,
			// 	// 		"name":"jay",
			// 	// 		"company":"Google",
			// 	// 		"age":23
			// 	// 	}
			// 	// 		]
			// 	// }
			// // });
			// oModel.loadData("model/student.json");
			
			//Step 3) Set the model to your app / view / controll level.
			
			//App Level
			//sap.ui.getCore().setModel(oModel);
			
			//View Level
			this.getView().setModel();
			
			//Controll Level
			//this.getView().byId("").setModel();
		}

	});
});