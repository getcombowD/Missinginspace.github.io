gdjs.How_32To_32PlayCode = {};
gdjs.How_32To_32PlayCode.GDNewObjectObjects1= [];
gdjs.How_32To_32PlayCode.GDNewObjectObjects2= [];
gdjs.How_32To_32PlayCode.GDNewObject2Objects1= [];
gdjs.How_32To_32PlayCode.GDNewObject2Objects2= [];
gdjs.How_32To_32PlayCode.GDGOALObjects1= [];
gdjs.How_32To_32PlayCode.GDGOALObjects2= [];
gdjs.How_32To_32PlayCode.GDNewObject3Objects1= [];
gdjs.How_32To_32PlayCode.GDNewObject3Objects2= [];
gdjs.How_32To_32PlayCode.GDNewObject4Objects1= [];
gdjs.How_32To_32PlayCode.GDNewObject4Objects2= [];
gdjs.How_32To_32PlayCode.GDVIEWCONTROLSObjects1= [];
gdjs.How_32To_32PlayCode.GDVIEWCONTROLSObjects2= [];
gdjs.How_32To_32PlayCode.GDPLAYDObjects1= [];
gdjs.How_32To_32PlayCode.GDPLAYDObjects2= [];
gdjs.How_32To_32PlayCode.GDGOBACKObjects1= [];
gdjs.How_32To_32PlayCode.GDGOBACKObjects2= [];

gdjs.How_32To_32PlayCode.conditionTrue_0 = {val:false};
gdjs.How_32To_32PlayCode.condition0IsTrue_0 = {val:false};
gdjs.How_32To_32PlayCode.condition1IsTrue_0 = {val:false};


gdjs.How_32To_32PlayCode.mapOfGDgdjs_46How_9532To_9532PlayCode_46GDVIEWCONTROLSObjects1Objects = Hashtable.newFrom({"VIEWCONTROLS": gdjs.How_32To_32PlayCode.GDVIEWCONTROLSObjects1});gdjs.How_32To_32PlayCode.mapOfGDgdjs_46How_9532To_9532PlayCode_46GDGOBACKObjects1Objects = Hashtable.newFrom({"GOBACK": gdjs.How_32To_32PlayCode.GDGOBACKObjects1});gdjs.How_32To_32PlayCode.eventsList0xb0aa8 = function(runtimeScene) {

{

gdjs.How_32To_32PlayCode.GDVIEWCONTROLSObjects1.createFrom(runtimeScene.getObjects("VIEWCONTROLS"));

gdjs.How_32To_32PlayCode.condition0IsTrue_0.val = false;
{
gdjs.How_32To_32PlayCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.How_32To_32PlayCode.mapOfGDgdjs_46How_9532To_9532PlayCode_46GDVIEWCONTROLSObjects1Objects, runtimeScene, true, false);
}if (gdjs.How_32To_32PlayCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Controls", false);
}}

}


{

gdjs.How_32To_32PlayCode.GDGOBACKObjects1.createFrom(runtimeScene.getObjects("GOBACK"));

gdjs.How_32To_32PlayCode.condition0IsTrue_0.val = false;
{
gdjs.How_32To_32PlayCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.How_32To_32PlayCode.mapOfGDgdjs_46How_9532To_9532PlayCode_46GDGOBACKObjects1Objects, runtimeScene, true, false);
}if (gdjs.How_32To_32PlayCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


}; //End of gdjs.How_32To_32PlayCode.eventsList0xb0aa8


gdjs.How_32To_32PlayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.How_32To_32PlayCode.GDNewObjectObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDNewObjectObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDNewObject2Objects1.length = 0;
gdjs.How_32To_32PlayCode.GDNewObject2Objects2.length = 0;
gdjs.How_32To_32PlayCode.GDGOALObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDGOALObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDNewObject3Objects1.length = 0;
gdjs.How_32To_32PlayCode.GDNewObject3Objects2.length = 0;
gdjs.How_32To_32PlayCode.GDNewObject4Objects1.length = 0;
gdjs.How_32To_32PlayCode.GDNewObject4Objects2.length = 0;
gdjs.How_32To_32PlayCode.GDVIEWCONTROLSObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDVIEWCONTROLSObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDPLAYDObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDPLAYDObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDGOBACKObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDGOBACKObjects2.length = 0;

gdjs.How_32To_32PlayCode.eventsList0xb0aa8(runtimeScene);
return;
}
gdjs['How_32To_32PlayCode'] = gdjs.How_32To_32PlayCode;
