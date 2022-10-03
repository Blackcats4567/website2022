gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDGameTitleObjects1= [];
gdjs.MainMenuCode.GDGameTitleObjects2= [];
gdjs.MainMenuCode.GDGameTitleObjects3= [];
gdjs.MainMenuCode.GDButtonStartObjects1= [];
gdjs.MainMenuCode.GDButtonStartObjects2= [];
gdjs.MainMenuCode.GDButtonStartObjects3= [];
gdjs.MainMenuCode.GDNewObjectObjects1= [];
gdjs.MainMenuCode.GDNewObjectObjects2= [];
gdjs.MainMenuCode.GDNewObjectObjects3= [];
gdjs.MainMenuCode.GDNewObject2Objects1= [];
gdjs.MainMenuCode.GDNewObject2Objects2= [];
gdjs.MainMenuCode.GDNewObject2Objects3= [];
gdjs.MainMenuCode.GDNewObject3Objects1= [];
gdjs.MainMenuCode.GDNewObject3Objects2= [];
gdjs.MainMenuCode.GDNewObject3Objects3= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};


gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonStartObjects1Objects = Hashtable.newFrom({"ButtonStart": gdjs.MainMenuCode.GDButtonStartObjects1});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonStartObjects1Objects = Hashtable.newFrom({"ButtonStart": gdjs.MainMenuCode.GDButtonStartObjects1});gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.MainMenuCode.GDButtonStartObjects1, gdjs.MainMenuCode.GDButtonStartObjects2);

{for(var i = 0, len = gdjs.MainMenuCode.GDButtonStartObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDButtonStartObjects2[i].setAnimationName("StartPressed");
}
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.MainMenuCode.GDNewObject3Objects1});gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.blackcats4567.com/games/500subs", runtimeScene);
}}

}


};gdjs.MainMenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonStart"), gdjs.MainMenuCode.GDButtonStartObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonStartObjects1Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDButtonStartObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDButtonStartObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDButtonStartObjects1[i].setAnimationName("StartNormal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonStart"), gdjs.MainMenuCode.GDButtonStartObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonStartObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDButtonStartObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDButtonStartObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDButtonStartObjects1[i].setAnimationName("StartHover");
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.MainMenuCode.GDNewObject3Objects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDGameTitleObjects1.length = 0;
gdjs.MainMenuCode.GDGameTitleObjects2.length = 0;
gdjs.MainMenuCode.GDGameTitleObjects3.length = 0;
gdjs.MainMenuCode.GDButtonStartObjects1.length = 0;
gdjs.MainMenuCode.GDButtonStartObjects2.length = 0;
gdjs.MainMenuCode.GDButtonStartObjects3.length = 0;
gdjs.MainMenuCode.GDNewObjectObjects1.length = 0;
gdjs.MainMenuCode.GDNewObjectObjects2.length = 0;
gdjs.MainMenuCode.GDNewObjectObjects3.length = 0;
gdjs.MainMenuCode.GDNewObject2Objects1.length = 0;
gdjs.MainMenuCode.GDNewObject2Objects2.length = 0;
gdjs.MainMenuCode.GDNewObject2Objects3.length = 0;
gdjs.MainMenuCode.GDNewObject3Objects1.length = 0;
gdjs.MainMenuCode.GDNewObject3Objects2.length = 0;
gdjs.MainMenuCode.GDNewObject3Objects3.length = 0;

gdjs.MainMenuCode.eventsList2(runtimeScene);
return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
