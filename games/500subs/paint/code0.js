gdjs.MenuCode = {};
gdjs.MenuCode.GDNewObject2Objects1= [];
gdjs.MenuCode.GDNewObject2Objects2= [];
gdjs.MenuCode.GDNewObject2Objects3= [];
gdjs.MenuCode.GDNewLevelObjects1= [];
gdjs.MenuCode.GDNewLevelObjects2= [];
gdjs.MenuCode.GDNewLevelObjects3= [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDTitleObjects3= [];
gdjs.MenuCode.GDLoadLevelObjects1= [];
gdjs.MenuCode.GDLoadLevelObjects2= [];
gdjs.MenuCode.GDLoadLevelObjects3= [];
gdjs.MenuCode.GDLogoObjects1= [];
gdjs.MenuCode.GDLogoObjects2= [];
gdjs.MenuCode.GDLogoObjects3= [];
gdjs.MenuCode.GDNewObjectObjects1= [];
gdjs.MenuCode.GDNewObjectObjects2= [];
gdjs.MenuCode.GDNewObjectObjects3= [];
gdjs.MenuCode.GDNewObject32Objects1= [];
gdjs.MenuCode.GDNewObject32Objects2= [];
gdjs.MenuCode.GDNewObject32Objects3= [];
gdjs.MenuCode.GDNewObject3Objects1= [];
gdjs.MenuCode.GDNewObject3Objects2= [];
gdjs.MenuCode.GDNewObject3Objects3= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDNewLevelObjects1Objects = Hashtable.newFrom({"NewLevel": gdjs.MenuCode.GDNewLevelObjects1});gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9601028);
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.MenuCode.GDNewLevelObjects1, gdjs.MenuCode.GDNewLevelObjects2);

{for(var i = 0, len = gdjs.MenuCode.GDNewLevelObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDNewLevelObjects2[i].setColor("208;2;27");
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Game").setString("New");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Editor", false);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDNewLevelObjects1Objects = Hashtable.newFrom({"NewLevel": gdjs.MenuCode.GDNewLevelObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLoadLevelObjects1Objects = Hashtable.newFrom({"LoadLevel": gdjs.MenuCode.GDLoadLevelObjects1});gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9603940);
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.MenuCode.GDLoadLevelObjects1, gdjs.MenuCode.GDLoadLevelObjects2);

{for(var i = 0, len = gdjs.MenuCode.GDLoadLevelObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDLoadLevelObjects2[i].setColor("208;2;27");
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Game").setString("Load");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Editor", false);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLoadLevelObjects1Objects = Hashtable.newFrom({"LoadLevel": gdjs.MenuCode.GDLoadLevelObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.MenuCode.GDNewObjectObjects1});gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.blackcats4567.com/games/500subs", runtimeScene);
}}

}


};gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("NewLevel"), gdjs.MenuCode.GDNewLevelObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDNewLevelObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewLevel"), gdjs.MenuCode.GDNewLevelObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDNewLevelObjects1Objects, runtimeScene, true, true);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9602468);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDNewLevelObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDNewLevelObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewLevelObjects1[i].setColor("0;0;0");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("LoadLevel"), gdjs.MenuCode.GDLoadLevelObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLoadLevelObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LoadLevel"), gdjs.MenuCode.GDLoadLevelObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLoadLevelObjects1Objects, runtimeScene, true, true);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8155212);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDLoadLevelObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDLoadLevelObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLoadLevelObjects1[i].setColor("0;0;0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.MenuCode.GDNewObjectObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDNewObjectObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDNewObject2Objects1.length = 0;
gdjs.MenuCode.GDNewObject2Objects2.length = 0;
gdjs.MenuCode.GDNewObject2Objects3.length = 0;
gdjs.MenuCode.GDNewLevelObjects1.length = 0;
gdjs.MenuCode.GDNewLevelObjects2.length = 0;
gdjs.MenuCode.GDNewLevelObjects3.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDLoadLevelObjects1.length = 0;
gdjs.MenuCode.GDLoadLevelObjects2.length = 0;
gdjs.MenuCode.GDLoadLevelObjects3.length = 0;
gdjs.MenuCode.GDLogoObjects1.length = 0;
gdjs.MenuCode.GDLogoObjects2.length = 0;
gdjs.MenuCode.GDLogoObjects3.length = 0;
gdjs.MenuCode.GDNewObjectObjects1.length = 0;
gdjs.MenuCode.GDNewObjectObjects2.length = 0;
gdjs.MenuCode.GDNewObjectObjects3.length = 0;
gdjs.MenuCode.GDNewObject32Objects1.length = 0;
gdjs.MenuCode.GDNewObject32Objects2.length = 0;
gdjs.MenuCode.GDNewObject32Objects3.length = 0;
gdjs.MenuCode.GDNewObject3Objects1.length = 0;
gdjs.MenuCode.GDNewObject3Objects2.length = 0;
gdjs.MenuCode.GDNewObject3Objects3.length = 0;

gdjs.MenuCode.eventsList3(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
