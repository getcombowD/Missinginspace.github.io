gdjs.MenuCode = {};
gdjs.MenuCode.GDNewObjectObjects1= [];
gdjs.MenuCode.GDNewObjectObjects2= [];
gdjs.MenuCode.GDNewObjectObjects3= [];
gdjs.MenuCode.GDNewObject3Objects1= [];
gdjs.MenuCode.GDNewObject3Objects2= [];
gdjs.MenuCode.GDNewObject3Objects3= [];
gdjs.MenuCode.GDNewObject2Objects1= [];
gdjs.MenuCode.GDNewObject2Objects2= [];
gdjs.MenuCode.GDNewObject2Objects3= [];
gdjs.MenuCode.GDCopyOfTextObjects1= [];
gdjs.MenuCode.GDCopyOfTextObjects2= [];
gdjs.MenuCode.GDCopyOfTextObjects3= [];
gdjs.MenuCode.GDPlayObjects1= [];
gdjs.MenuCode.GDPlayObjects2= [];
gdjs.MenuCode.GDPlayObjects3= [];
gdjs.MenuCode.GDTextObjects1= [];
gdjs.MenuCode.GDTextObjects2= [];
gdjs.MenuCode.GDTextObjects3= [];
gdjs.MenuCode.GDHOWTOPLAYObjects1= [];
gdjs.MenuCode.GDHOWTOPLAYObjects2= [];
gdjs.MenuCode.GDHOWTOPLAYObjects3= [];
gdjs.MenuCode.GDControlsObjects1= [];
gdjs.MenuCode.GDControlsObjects2= [];
gdjs.MenuCode.GDControlsObjects3= [];
gdjs.MenuCode.GDNewObject4Objects1= [];
gdjs.MenuCode.GDNewObject4Objects2= [];
gdjs.MenuCode.GDNewObject4Objects3= [];
gdjs.MenuCode.GDNewObject5Objects1= [];
gdjs.MenuCode.GDNewObject5Objects2= [];
gdjs.MenuCode.GDNewObject5Objects3= [];
gdjs.MenuCode.GDquitObjects1= [];
gdjs.MenuCode.GDquitObjects2= [];
gdjs.MenuCode.GDquitObjects3= [];
gdjs.MenuCode.GDNewObject6Objects1= [];
gdjs.MenuCode.GDNewObject6Objects2= [];
gdjs.MenuCode.GDNewObject6Objects3= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDTextObjects1Objects = Hashtable.newFrom({"Text": gdjs.MenuCode.GDTextObjects1});gdjs.MenuCode.eventsList0x6e9fa0 = function(runtimeScene) {

{


{
}

}


{


{
}

}


}; //End of gdjs.MenuCode.eventsList0x6e9fa0
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDControlsObjects1Objects = Hashtable.newFrom({"Controls": gdjs.MenuCode.GDControlsObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.MenuCode.GDNewObject4Objects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDHOWTOPLAYObjects1Objects = Hashtable.newFrom({"HOWTOPLAY": gdjs.MenuCode.GDHOWTOPLAYObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDquitObjects1Objects = Hashtable.newFrom({"quit": gdjs.MenuCode.GDquitObjects1});gdjs.MenuCode.eventsList0xb0aa8 = function(runtimeScene) {

{

gdjs.MenuCode.GDTextObjects1.createFrom(runtimeScene.getObjects("Text"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDTextObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}
{ //Subevents
gdjs.MenuCode.eventsList0x6e9fa0(runtimeScene);} //End of subevents
}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


{



}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


{

gdjs.MenuCode.GDControlsObjects1.createFrom(runtimeScene.getObjects("Controls"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDControlsObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Controls", false);
}}

}


{

gdjs.MenuCode.GDNewObject4Objects1.createFrom(runtimeScene.getObjects("NewObject4"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDNewObject4Objects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Playground", false);
}}

}


{

gdjs.MenuCode.GDHOWTOPLAYObjects1.createFrom(runtimeScene.getObjects("HOWTOPLAY"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDHOWTOPLAYObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "How To Play", false);
}}

}


{

gdjs.MenuCode.GDquitObjects1.createFrom(runtimeScene.getObjects("quit"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDquitObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


}; //End of gdjs.MenuCode.eventsList0xb0aa8


gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.MenuCode.GDNewObjectObjects1.length = 0;
gdjs.MenuCode.GDNewObjectObjects2.length = 0;
gdjs.MenuCode.GDNewObjectObjects3.length = 0;
gdjs.MenuCode.GDNewObject3Objects1.length = 0;
gdjs.MenuCode.GDNewObject3Objects2.length = 0;
gdjs.MenuCode.GDNewObject3Objects3.length = 0;
gdjs.MenuCode.GDNewObject2Objects1.length = 0;
gdjs.MenuCode.GDNewObject2Objects2.length = 0;
gdjs.MenuCode.GDNewObject2Objects3.length = 0;
gdjs.MenuCode.GDCopyOfTextObjects1.length = 0;
gdjs.MenuCode.GDCopyOfTextObjects2.length = 0;
gdjs.MenuCode.GDCopyOfTextObjects3.length = 0;
gdjs.MenuCode.GDPlayObjects1.length = 0;
gdjs.MenuCode.GDPlayObjects2.length = 0;
gdjs.MenuCode.GDPlayObjects3.length = 0;
gdjs.MenuCode.GDTextObjects1.length = 0;
gdjs.MenuCode.GDTextObjects2.length = 0;
gdjs.MenuCode.GDTextObjects3.length = 0;
gdjs.MenuCode.GDHOWTOPLAYObjects1.length = 0;
gdjs.MenuCode.GDHOWTOPLAYObjects2.length = 0;
gdjs.MenuCode.GDHOWTOPLAYObjects3.length = 0;
gdjs.MenuCode.GDControlsObjects1.length = 0;
gdjs.MenuCode.GDControlsObjects2.length = 0;
gdjs.MenuCode.GDControlsObjects3.length = 0;
gdjs.MenuCode.GDNewObject4Objects1.length = 0;
gdjs.MenuCode.GDNewObject4Objects2.length = 0;
gdjs.MenuCode.GDNewObject4Objects3.length = 0;
gdjs.MenuCode.GDNewObject5Objects1.length = 0;
gdjs.MenuCode.GDNewObject5Objects2.length = 0;
gdjs.MenuCode.GDNewObject5Objects3.length = 0;
gdjs.MenuCode.GDquitObjects1.length = 0;
gdjs.MenuCode.GDquitObjects2.length = 0;
gdjs.MenuCode.GDquitObjects3.length = 0;
gdjs.MenuCode.GDNewObject6Objects1.length = 0;
gdjs.MenuCode.GDNewObject6Objects2.length = 0;
gdjs.MenuCode.GDNewObject6Objects3.length = 0;

gdjs.MenuCode.eventsList0xb0aa8(runtimeScene);
return;
}
gdjs['MenuCode'] = gdjs.MenuCode;
