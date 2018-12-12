gdjs.PlaygroundCode = {};
gdjs.PlaygroundCode.GDBtnJumpObjects1_1final = [];

gdjs.PlaygroundCode.GDBtnLeftObjects1_1final = [];

gdjs.PlaygroundCode.GDBtnRightObjects1_1final = [];

gdjs.PlaygroundCode.GDPlanetObjects1_1final = [];

gdjs.PlaygroundCode.GDSpaceGuyObjects1_1final = [];

gdjs.PlaygroundCode.GDPlanetObjects1= [];
gdjs.PlaygroundCode.GDPlanetObjects2= [];
gdjs.PlaygroundCode.GDSpaceGuyObjects1= [];
gdjs.PlaygroundCode.GDSpaceGuyObjects2= [];
gdjs.PlaygroundCode.GDMessageObjects1= [];
gdjs.PlaygroundCode.GDMessageObjects2= [];
gdjs.PlaygroundCode.GDBtnLeftObjects1= [];
gdjs.PlaygroundCode.GDBtnLeftObjects2= [];
gdjs.PlaygroundCode.GDBtnRightObjects1= [];
gdjs.PlaygroundCode.GDBtnRightObjects2= [];
gdjs.PlaygroundCode.GDBtnJumpObjects1= [];
gdjs.PlaygroundCode.GDBtnJumpObjects2= [];
gdjs.PlaygroundCode.GDNewObjectObjects1= [];
gdjs.PlaygroundCode.GDNewObjectObjects2= [];
gdjs.PlaygroundCode.GDNewObject2Objects1= [];
gdjs.PlaygroundCode.GDNewObject2Objects2= [];

gdjs.PlaygroundCode.conditionTrue_0 = {val:false};
gdjs.PlaygroundCode.condition0IsTrue_0 = {val:false};
gdjs.PlaygroundCode.condition1IsTrue_0 = {val:false};
gdjs.PlaygroundCode.condition2IsTrue_0 = {val:false};
gdjs.PlaygroundCode.conditionTrue_1 = {val:false};
gdjs.PlaygroundCode.condition0IsTrue_1 = {val:false};
gdjs.PlaygroundCode.condition1IsTrue_1 = {val:false};
gdjs.PlaygroundCode.condition2IsTrue_1 = {val:false};
gdjs.PlaygroundCode.conditionTrue_2 = {val:false};
gdjs.PlaygroundCode.condition0IsTrue_2 = {val:false};
gdjs.PlaygroundCode.condition1IsTrue_2 = {val:false};
gdjs.PlaygroundCode.condition2IsTrue_2 = {val:false};


gdjs.PlaygroundCode.mapOfGDgdjs_46PlaygroundCode_46GDSpaceGuyObjects2Objects = Hashtable.newFrom({"SpaceGuy": gdjs.PlaygroundCode.GDSpaceGuyObjects2});gdjs.PlaygroundCode.mapOfGDgdjs_46PlaygroundCode_46GDPlanetObjects2Objects = Hashtable.newFrom({"Planet": gdjs.PlaygroundCode.GDPlanetObjects2});gdjs.PlaygroundCode.mapOfGDgdjs_46PlaygroundCode_46GDBtnJumpObjects2Objects = Hashtable.newFrom({"BtnJump": gdjs.PlaygroundCode.GDBtnJumpObjects2});gdjs.PlaygroundCode.mapOfGDgdjs_46PlaygroundCode_46GDBtnJumpObjects2Objects = Hashtable.newFrom({"BtnJump": gdjs.PlaygroundCode.GDBtnJumpObjects2});gdjs.PlaygroundCode.mapOfGDgdjs_46PlaygroundCode_46GDBtnRightObjects2Objects = Hashtable.newFrom({"BtnRight": gdjs.PlaygroundCode.GDBtnRightObjects2});gdjs.PlaygroundCode.mapOfGDgdjs_46PlaygroundCode_46GDBtnLeftObjects2Objects = Hashtable.newFrom({"BtnLeft": gdjs.PlaygroundCode.GDBtnLeftObjects2});gdjs.PlaygroundCode.mapOfGDgdjs_46PlaygroundCode_46GDSpaceGuyObjects1Objects = Hashtable.newFrom({"SpaceGuy": gdjs.PlaygroundCode.GDSpaceGuyObjects1});gdjs.PlaygroundCode.mapOfGDgdjs_46PlaygroundCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.PlaygroundCode.GDNewObjectObjects1});gdjs.PlaygroundCode.mapOfGDgdjs_46PlaygroundCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.PlaygroundCode.GDNewObject2Objects1});gdjs.PlaygroundCode.eventsList0xb0a98 = function(runtimeScene) {

{



}


{

gdjs.PlaygroundCode.GDBtnJumpObjects1.length = 0;

gdjs.PlaygroundCode.GDPlanetObjects1.length = 0;

gdjs.PlaygroundCode.GDSpaceGuyObjects1.length = 0;


gdjs.PlaygroundCode.condition0IsTrue_0.val = false;
{
{gdjs.PlaygroundCode.conditionTrue_1 = gdjs.PlaygroundCode.condition0IsTrue_0;
gdjs.PlaygroundCode.GDBtnJumpObjects1_1final.length = 0;gdjs.PlaygroundCode.GDPlanetObjects1_1final.length = 0;gdjs.PlaygroundCode.GDSpaceGuyObjects1_1final.length = 0;gdjs.PlaygroundCode.condition0IsTrue_1.val = false;
gdjs.PlaygroundCode.condition1IsTrue_1.val = false;
{
gdjs.PlaygroundCode.GDPlanetObjects2.createFrom(runtimeScene.getObjects("Planet"));
gdjs.PlaygroundCode.GDSpaceGuyObjects2.createFrom(runtimeScene.getObjects("SpaceGuy"));
gdjs.PlaygroundCode.condition0IsTrue_1.val = gdjs.evtTools.object.distanceTest(gdjs.PlaygroundCode.mapOfGDgdjs_46PlaygroundCode_46GDSpaceGuyObjects2Objects, gdjs.PlaygroundCode.mapOfGDgdjs_46PlaygroundCode_46GDPlanetObjects2Objects, 100, true);
if( gdjs.PlaygroundCode.condition0IsTrue_1.val ) {
    gdjs.PlaygroundCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.PlaygroundCode.GDPlanetObjects2.length;j<jLen;++j) {
        if ( gdjs.PlaygroundCode.GDPlanetObjects1_1final.indexOf(gdjs.PlaygroundCode.GDPlanetObjects2[j]) === -1 )
            gdjs.PlaygroundCode.GDPlanetObjects1_1final.push(gdjs.PlaygroundCode.GDPlanetObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.PlaygroundCode.GDSpaceGuyObjects2.length;j<jLen;++j) {
        if ( gdjs.PlaygroundCode.GDSpaceGuyObjects1_1final.indexOf(gdjs.PlaygroundCode.GDSpaceGuyObjects2[j]) === -1 )
            gdjs.PlaygroundCode.GDSpaceGuyObjects1_1final.push(gdjs.PlaygroundCode.GDSpaceGuyObjects2[j]);
    }
}
}
{
gdjs.PlaygroundCode.GDBtnJumpObjects2.createFrom(runtimeScene.getObjects("BtnJump"));
{gdjs.PlaygroundCode.conditionTrue_2 = gdjs.PlaygroundCode.condition1IsTrue_1;
gdjs.PlaygroundCode.condition0IsTrue_2.val = false;
gdjs.PlaygroundCode.condition1IsTrue_2.val = false;
{
gdjs.PlaygroundCode.condition0IsTrue_2.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space"));
}if ( gdjs.PlaygroundCode.condition0IsTrue_2.val ) {
{
gdjs.PlaygroundCode.condition1IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.PlaygroundCode.mapOfGDgdjs_46PlaygroundCode_46GDBtnJumpObjects2Objects, runtimeScene, true, true);
}}
gdjs.PlaygroundCode.conditionTrue_2.val = true && gdjs.PlaygroundCode.condition0IsTrue_2.val && gdjs.PlaygroundCode.condition1IsTrue_2.val;
}
if( gdjs.PlaygroundCode.condition1IsTrue_1.val ) {
    gdjs.PlaygroundCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.PlaygroundCode.GDBtnJumpObjects2.length;j<jLen;++j) {
        if ( gdjs.PlaygroundCode.GDBtnJumpObjects1_1final.indexOf(gdjs.PlaygroundCode.GDBtnJumpObjects2[j]) === -1 )
            gdjs.PlaygroundCode.GDBtnJumpObjects1_1final.push(gdjs.PlaygroundCode.GDBtnJumpObjects2[j]);
    }
}
}
{
gdjs.PlaygroundCode.GDBtnJumpObjects1.createFrom(gdjs.PlaygroundCode.GDBtnJumpObjects1_1final);
gdjs.PlaygroundCode.GDPlanetObjects1.createFrom(gdjs.PlaygroundCode.GDPlanetObjects1_1final);
gdjs.PlaygroundCode.GDSpaceGuyObjects1.createFrom(gdjs.PlaygroundCode.GDSpaceGuyObjects1_1final);
}
}
}if (gdjs.PlaygroundCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlaygroundCode.GDPlanetObjects1 */
/* Reuse gdjs.PlaygroundCode.GDSpaceGuyObjects1 */
{for(var i = 0, len = gdjs.PlaygroundCode.GDSpaceGuyObjects1.length ;i < len;++i) {
    gdjs.PlaygroundCode.GDSpaceGuyObjects1[i].getBehavior("Physics").applyForceTowardPosition((( gdjs.PlaygroundCode.GDPlanetObjects1.length === 0 ) ? 0 :gdjs.PlaygroundCode.GDPlanetObjects1[0].getPointX("Centre")), (( gdjs.PlaygroundCode.GDPlanetObjects1.length === 0 ) ? 0 :gdjs.PlaygroundCode.GDPlanetObjects1[0].getPointY("Centre")), 5, runtimeScene);
}
}}

}


{



}


{

gdjs.PlaygroundCode.GDBtnJumpObjects1.length = 0;


gdjs.PlaygroundCode.condition0IsTrue_0.val = false;
gdjs.PlaygroundCode.condition1IsTrue_0.val = false;
{
{gdjs.PlaygroundCode.conditionTrue_1 = gdjs.PlaygroundCode.condition0IsTrue_0;
gdjs.PlaygroundCode.GDBtnJumpObjects1_1final.length = 0;gdjs.PlaygroundCode.condition0IsTrue_1.val = false;
gdjs.PlaygroundCode.condition1IsTrue_1.val = false;
{
gdjs.PlaygroundCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.PlaygroundCode.condition0IsTrue_1.val ) {
    gdjs.PlaygroundCode.conditionTrue_1.val = true;
}
}
{
gdjs.PlaygroundCode.GDBtnJumpObjects2.createFrom(runtimeScene.getObjects("BtnJump"));
gdjs.PlaygroundCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.PlaygroundCode.mapOfGDgdjs_46PlaygroundCode_46GDBtnJumpObjects2Objects, runtimeScene, true, false);
if( gdjs.PlaygroundCode.condition1IsTrue_1.val ) {
    gdjs.PlaygroundCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.PlaygroundCode.GDBtnJumpObjects2.length;j<jLen;++j) {
        if ( gdjs.PlaygroundCode.GDBtnJumpObjects1_1final.indexOf(gdjs.PlaygroundCode.GDBtnJumpObjects2[j]) === -1 )
            gdjs.PlaygroundCode.GDBtnJumpObjects1_1final.push(gdjs.PlaygroundCode.GDBtnJumpObjects2[j]);
    }
}
}
{
gdjs.PlaygroundCode.GDBtnJumpObjects1.createFrom(gdjs.PlaygroundCode.GDBtnJumpObjects1_1final);
}
}
}if ( gdjs.PlaygroundCode.condition0IsTrue_0.val ) {
{
{gdjs.PlaygroundCode.conditionTrue_1 = gdjs.PlaygroundCode.condition1IsTrue_0;
gdjs.PlaygroundCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7541276);
}
}}
if (gdjs.PlaygroundCode.condition1IsTrue_0.val) {
gdjs.PlaygroundCode.GDSpaceGuyObjects1.createFrom(runtimeScene.getObjects("SpaceGuy"));
{for(var i = 0, len = gdjs.PlaygroundCode.GDSpaceGuyObjects1.length ;i < len;++i) {
    gdjs.PlaygroundCode.GDSpaceGuyObjects1[i].getBehavior("Physics").applyImpulseUsingPolarCoordinates((gdjs.PlaygroundCode.GDSpaceGuyObjects1[i].getAngle()) - 90, 1, runtimeScene);
}
}}

}


{



}


{

gdjs.PlaygroundCode.GDBtnRightObjects1.length = 0;


gdjs.PlaygroundCode.condition0IsTrue_0.val = false;
{
{gdjs.PlaygroundCode.conditionTrue_1 = gdjs.PlaygroundCode.condition0IsTrue_0;
gdjs.PlaygroundCode.GDBtnRightObjects1_1final.length = 0;gdjs.PlaygroundCode.condition0IsTrue_1.val = false;
gdjs.PlaygroundCode.condition1IsTrue_1.val = false;
{
gdjs.PlaygroundCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.PlaygroundCode.condition0IsTrue_1.val ) {
    gdjs.PlaygroundCode.conditionTrue_1.val = true;
}
}
{
gdjs.PlaygroundCode.GDBtnRightObjects2.createFrom(runtimeScene.getObjects("BtnRight"));
gdjs.PlaygroundCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.PlaygroundCode.mapOfGDgdjs_46PlaygroundCode_46GDBtnRightObjects2Objects, runtimeScene, true, false);
if( gdjs.PlaygroundCode.condition1IsTrue_1.val ) {
    gdjs.PlaygroundCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.PlaygroundCode.GDBtnRightObjects2.length;j<jLen;++j) {
        if ( gdjs.PlaygroundCode.GDBtnRightObjects1_1final.indexOf(gdjs.PlaygroundCode.GDBtnRightObjects2[j]) === -1 )
            gdjs.PlaygroundCode.GDBtnRightObjects1_1final.push(gdjs.PlaygroundCode.GDBtnRightObjects2[j]);
    }
}
}
{
gdjs.PlaygroundCode.GDBtnRightObjects1.createFrom(gdjs.PlaygroundCode.GDBtnRightObjects1_1final);
}
}
}if (gdjs.PlaygroundCode.condition0IsTrue_0.val) {
gdjs.PlaygroundCode.GDSpaceGuyObjects1.createFrom(runtimeScene.getObjects("SpaceGuy"));
{for(var i = 0, len = gdjs.PlaygroundCode.GDSpaceGuyObjects1.length ;i < len;++i) {
    gdjs.PlaygroundCode.GDSpaceGuyObjects1[i].getBehavior("Physics").applyForceUsingPolarCoordinates((gdjs.PlaygroundCode.GDSpaceGuyObjects1[i].getDirectionOrAngle()), 0.5, runtimeScene);
}
}}

}


{

gdjs.PlaygroundCode.GDBtnLeftObjects1.length = 0;


gdjs.PlaygroundCode.condition0IsTrue_0.val = false;
{
{gdjs.PlaygroundCode.conditionTrue_1 = gdjs.PlaygroundCode.condition0IsTrue_0;
gdjs.PlaygroundCode.GDBtnLeftObjects1_1final.length = 0;gdjs.PlaygroundCode.condition0IsTrue_1.val = false;
gdjs.PlaygroundCode.condition1IsTrue_1.val = false;
{
gdjs.PlaygroundCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.PlaygroundCode.condition0IsTrue_1.val ) {
    gdjs.PlaygroundCode.conditionTrue_1.val = true;
}
}
{
gdjs.PlaygroundCode.GDBtnLeftObjects2.createFrom(runtimeScene.getObjects("BtnLeft"));
gdjs.PlaygroundCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.PlaygroundCode.mapOfGDgdjs_46PlaygroundCode_46GDBtnLeftObjects2Objects, runtimeScene, true, false);
if( gdjs.PlaygroundCode.condition1IsTrue_1.val ) {
    gdjs.PlaygroundCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.PlaygroundCode.GDBtnLeftObjects2.length;j<jLen;++j) {
        if ( gdjs.PlaygroundCode.GDBtnLeftObjects1_1final.indexOf(gdjs.PlaygroundCode.GDBtnLeftObjects2[j]) === -1 )
            gdjs.PlaygroundCode.GDBtnLeftObjects1_1final.push(gdjs.PlaygroundCode.GDBtnLeftObjects2[j]);
    }
}
}
{
gdjs.PlaygroundCode.GDBtnLeftObjects1.createFrom(gdjs.PlaygroundCode.GDBtnLeftObjects1_1final);
}
}
}if (gdjs.PlaygroundCode.condition0IsTrue_0.val) {
gdjs.PlaygroundCode.GDSpaceGuyObjects1.createFrom(runtimeScene.getObjects("SpaceGuy"));
{for(var i = 0, len = gdjs.PlaygroundCode.GDSpaceGuyObjects1.length ;i < len;++i) {
    gdjs.PlaygroundCode.GDSpaceGuyObjects1[i].getBehavior("Physics").applyForceUsingPolarCoordinates((gdjs.PlaygroundCode.GDSpaceGuyObjects1[i].getDirectionOrAngle())+180, 0.5, runtimeScene);
}
}}

}


{



}


{


{
gdjs.PlaygroundCode.GDPlanetObjects1.createFrom(runtimeScene.getObjects("Planet"));
gdjs.PlaygroundCode.GDSpaceGuyObjects1.createFrom(runtimeScene.getObjects("SpaceGuy"));
{for(var i = 0, len = gdjs.PlaygroundCode.GDSpaceGuyObjects1.length ;i < len;++i) {
    gdjs.PlaygroundCode.GDSpaceGuyObjects1[i].rotateTowardPosition((( gdjs.PlaygroundCode.GDPlanetObjects1.length === 0 ) ? 0 :gdjs.PlaygroundCode.GDPlanetObjects1[0].getPointX("Centre")), (( gdjs.PlaygroundCode.GDPlanetObjects1.length === 0 ) ? 0 :gdjs.PlaygroundCode.GDPlanetObjects1[0].getPointY("Centre")), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.PlaygroundCode.GDSpaceGuyObjects1.length ;i < len;++i) {
    gdjs.PlaygroundCode.GDSpaceGuyObjects1[i].setAngle(gdjs.PlaygroundCode.GDSpaceGuyObjects1[i].getAngle() - (90));
}
}}

}


{

gdjs.PlaygroundCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));
gdjs.PlaygroundCode.GDSpaceGuyObjects1.createFrom(runtimeScene.getObjects("SpaceGuy"));

gdjs.PlaygroundCode.condition0IsTrue_0.val = false;
{
gdjs.PlaygroundCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlaygroundCode.mapOfGDgdjs_46PlaygroundCode_46GDSpaceGuyObjects1Objects, gdjs.PlaygroundCode.mapOfGDgdjs_46PlaygroundCode_46GDNewObjectObjects1Objects, false, runtimeScene);
}if (gdjs.PlaygroundCode.condition0IsTrue_0.val) {
}

}


{

gdjs.PlaygroundCode.GDNewObject2Objects1.createFrom(runtimeScene.getObjects("NewObject2"));

gdjs.PlaygroundCode.condition0IsTrue_0.val = false;
{
gdjs.PlaygroundCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PlaygroundCode.mapOfGDgdjs_46PlaygroundCode_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if (gdjs.PlaygroundCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


}; //End of gdjs.PlaygroundCode.eventsList0xb0a98


gdjs.PlaygroundCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.PlaygroundCode.GDPlanetObjects1.length = 0;
gdjs.PlaygroundCode.GDPlanetObjects2.length = 0;
gdjs.PlaygroundCode.GDSpaceGuyObjects1.length = 0;
gdjs.PlaygroundCode.GDSpaceGuyObjects2.length = 0;
gdjs.PlaygroundCode.GDMessageObjects1.length = 0;
gdjs.PlaygroundCode.GDMessageObjects2.length = 0;
gdjs.PlaygroundCode.GDBtnLeftObjects1.length = 0;
gdjs.PlaygroundCode.GDBtnLeftObjects2.length = 0;
gdjs.PlaygroundCode.GDBtnRightObjects1.length = 0;
gdjs.PlaygroundCode.GDBtnRightObjects2.length = 0;
gdjs.PlaygroundCode.GDBtnJumpObjects1.length = 0;
gdjs.PlaygroundCode.GDBtnJumpObjects2.length = 0;
gdjs.PlaygroundCode.GDNewObjectObjects1.length = 0;
gdjs.PlaygroundCode.GDNewObjectObjects2.length = 0;
gdjs.PlaygroundCode.GDNewObject2Objects1.length = 0;
gdjs.PlaygroundCode.GDNewObject2Objects2.length = 0;

gdjs.PlaygroundCode.eventsList0xb0a98(runtimeScene);
return;
}
gdjs['PlaygroundCode'] = gdjs.PlaygroundCode;
