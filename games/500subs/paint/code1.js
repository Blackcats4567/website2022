gdjs.EditorCode = {};
gdjs.EditorCode.forEachIndex2 = 0;

gdjs.EditorCode.forEachObjects2 = [];

gdjs.EditorCode.forEachTemporary2 = null;

gdjs.EditorCode.forEachTotalCount2 = 0;

gdjs.EditorCode.stopDoWhile2 = false;

gdjs.EditorCode.GDDrawerObjects1= [];
gdjs.EditorCode.GDDrawerObjects2= [];
gdjs.EditorCode.GDDrawerObjects3= [];
gdjs.EditorCode.GDDrawerObjects4= [];
gdjs.EditorCode.GDMessageObjects1= [];
gdjs.EditorCode.GDMessageObjects2= [];
gdjs.EditorCode.GDMessageObjects3= [];
gdjs.EditorCode.GDMessageObjects4= [];
gdjs.EditorCode.GDCursorTileObjects1= [];
gdjs.EditorCode.GDCursorTileObjects2= [];
gdjs.EditorCode.GDCursorTileObjects3= [];
gdjs.EditorCode.GDCursorTileObjects4= [];
gdjs.EditorCode.GDSelectionTileObjects1= [];
gdjs.EditorCode.GDSelectionTileObjects2= [];
gdjs.EditorCode.GDSelectionTileObjects3= [];
gdjs.EditorCode.GDSelectionTileObjects4= [];
gdjs.EditorCode.GDTileObjects1= [];
gdjs.EditorCode.GDTileObjects2= [];
gdjs.EditorCode.GDTileObjects3= [];
gdjs.EditorCode.GDTileObjects4= [];
gdjs.EditorCode.GDBGTileObjects1= [];
gdjs.EditorCode.GDBGTileObjects2= [];
gdjs.EditorCode.GDBGTileObjects3= [];
gdjs.EditorCode.GDBGTileObjects4= [];
gdjs.EditorCode.GDTxtSelectAtileObjects1= [];
gdjs.EditorCode.GDTxtSelectAtileObjects2= [];
gdjs.EditorCode.GDTxtSelectAtileObjects3= [];
gdjs.EditorCode.GDTxtSelectAtileObjects4= [];

gdjs.EditorCode.conditionTrue_0 = {val:false};
gdjs.EditorCode.condition0IsTrue_0 = {val:false};
gdjs.EditorCode.condition1IsTrue_0 = {val:false};
gdjs.EditorCode.condition2IsTrue_0 = {val:false};
gdjs.EditorCode.conditionTrue_1 = {val:false};
gdjs.EditorCode.condition0IsTrue_1 = {val:false};
gdjs.EditorCode.condition1IsTrue_1 = {val:false};
gdjs.EditorCode.condition2IsTrue_1 = {val:false};


gdjs.EditorCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.EditorCode.condition0IsTrue_0.val = false;
{
gdjs.EditorCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EditorCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("cell_width").setNumber(70);
}{runtimeScene.getVariables().get("cell_height").setNumber(70);
}}

}


};gdjs.EditorCode.eventsList1 = function(runtimeScene) {

{


gdjs.EditorCode.condition0IsTrue_0.val = false;
gdjs.EditorCode.condition1IsTrue_0.val = false;
{
gdjs.EditorCode.condition0IsTrue_0.val = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "TileSelection");
}if ( gdjs.EditorCode.condition0IsTrue_0.val ) {
{
gdjs.EditorCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("trigger")) == 0;
}}
if (gdjs.EditorCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "TileSelection");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}{runtimeScene.getVariables().get("trigger").setNumber(1);
}}

}


{


gdjs.EditorCode.condition0IsTrue_0.val = false;
gdjs.EditorCode.condition1IsTrue_0.val = false;
{
gdjs.EditorCode.condition0IsTrue_0.val = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "TileSelection"));
}if ( gdjs.EditorCode.condition0IsTrue_0.val ) {
{
gdjs.EditorCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("trigger")) == 0;
}}
if (gdjs.EditorCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "TileSelection");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}{runtimeScene.getVariables().get("trigger").setNumber(1);
}}

}


};gdjs.EditorCode.eventsList2 = function(runtimeScene) {

{



}


{


gdjs.EditorCode.condition0IsTrue_0.val = false;
{
gdjs.EditorCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EditorCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "TileSelection");
}}

}


{


gdjs.EditorCode.condition0IsTrue_0.val = false;
{
gdjs.EditorCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "i");
}if (gdjs.EditorCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("trigger").setNumber(0);
}}

}


{


gdjs.EditorCode.condition0IsTrue_0.val = false;
{
gdjs.EditorCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "i");
}if (gdjs.EditorCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.EditorCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.EditorCode.mapOfGDgdjs_46EditorCode_46GDSelectionTileObjects2Objects = Hashtable.newFrom({"SelectionTile": gdjs.EditorCode.GDSelectionTileObjects2});gdjs.EditorCode.eventsList3 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("CursorTile"), gdjs.EditorCode.GDCursorTileObjects2);
/* Reuse gdjs.EditorCode.GDSelectionTileObjects2 */
{runtimeScene.getVariables().get("selectedTileAnimation").setNumber((( gdjs.EditorCode.GDSelectionTileObjects2.length === 0 ) ? 0 :gdjs.EditorCode.GDSelectionTileObjects2[0].getAnimation()));
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "TileSelection");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}{for(var i = 0, len = gdjs.EditorCode.GDCursorTileObjects2.length ;i < len;++i) {
    gdjs.EditorCode.GDCursorTileObjects2[i].setAnimation(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selectedTileAnimation")));
}
}}

}


};gdjs.EditorCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SelectionTile"), gdjs.EditorCode.GDSelectionTileObjects2);

gdjs.EditorCode.condition0IsTrue_0.val = false;
{
gdjs.EditorCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.EditorCode.mapOfGDgdjs_46EditorCode_46GDSelectionTileObjects2Objects, runtimeScene, true, false);
}if (gdjs.EditorCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.EditorCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.EditorCode.eventsList5 = function(runtimeScene) {

{


gdjs.EditorCode.condition0IsTrue_0.val = false;
{
gdjs.EditorCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.EditorCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.EditorCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.EditorCode.eventsList6 = function(runtimeScene) {

{



}


{


gdjs.EditorCode.condition0IsTrue_0.val = false;
{
gdjs.EditorCode.condition0IsTrue_0.val = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "TileSelection");
}if (gdjs.EditorCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.EditorCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.EditorCode.mapOfGDgdjs_46EditorCode_46GDTileObjects2Objects = Hashtable.newFrom({"Tile": gdjs.EditorCode.GDTileObjects2});gdjs.EditorCode.mapOfGDgdjs_46EditorCode_46GDTileObjects2Objects = Hashtable.newFrom({"Tile": gdjs.EditorCode.GDTileObjects2});gdjs.EditorCode.mapOfGDgdjs_46EditorCode_46GDTileObjects2Objects = Hashtable.newFrom({"Tile": gdjs.EditorCode.GDTileObjects2});gdjs.EditorCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Tile"), gdjs.EditorCode.GDTileObjects2);

gdjs.EditorCode.condition0IsTrue_0.val = false;
{
{gdjs.EditorCode.conditionTrue_1 = gdjs.EditorCode.condition0IsTrue_0;
gdjs.EditorCode.condition0IsTrue_1.val = true;
{
gdjs.EditorCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.EditorCode.mapOfGDgdjs_46EditorCode_46GDTileObjects2Objects, runtimeScene, true, false);
}gdjs.EditorCode.conditionTrue_1.val = !gdjs.EditorCode.condition0IsTrue_1.val;
}
}if (gdjs.EditorCode.condition0IsTrue_0.val) {
/* Reuse gdjs.EditorCode.GDTileObjects2 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.EditorCode.mapOfGDgdjs_46EditorCode_46GDTileObjects2Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) - 35, gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) - 35, "");
}{for(var i = 0, len = gdjs.EditorCode.GDTileObjects2.length ;i < len;++i) {
    gdjs.EditorCode.GDTileObjects2[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.EditorCode.GDTileObjects2.length ;i < len;++i) {
    gdjs.EditorCode.GDTileObjects2[i].setAnimation(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selectedTileAnimation")));
}
}{gdjs.evtsExt__Grid__Snap.func(runtimeScene, gdjs.EditorCode.mapOfGDgdjs_46EditorCode_46GDTileObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.EditorCode.eventsList8 = function(runtimeScene) {

{


gdjs.EditorCode.condition0IsTrue_0.val = false;
gdjs.EditorCode.condition1IsTrue_0.val = false;
{
gdjs.EditorCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.EditorCode.condition0IsTrue_0.val ) {
{
{gdjs.EditorCode.conditionTrue_1 = gdjs.EditorCode.condition1IsTrue_0;
gdjs.EditorCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9545140);
}
}}
if (gdjs.EditorCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.EditorCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.EditorCode.eventsList9 = function(runtimeScene) {

{



}


{


gdjs.EditorCode.condition0IsTrue_0.val = false;
{
gdjs.EditorCode.condition0IsTrue_0.val = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "TileSelection"));
}if (gdjs.EditorCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.EditorCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.EditorCode.mapOfGDgdjs_46EditorCode_46GDTileObjects2Objects = Hashtable.newFrom({"Tile": gdjs.EditorCode.GDTileObjects2});gdjs.EditorCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Tile"), gdjs.EditorCode.GDTileObjects2);

gdjs.EditorCode.condition0IsTrue_0.val = false;
{
gdjs.EditorCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.EditorCode.mapOfGDgdjs_46EditorCode_46GDTileObjects2Objects, runtimeScene, true, false);
}if (gdjs.EditorCode.condition0IsTrue_0.val) {
/* Reuse gdjs.EditorCode.GDTileObjects2 */
{for(var i = 0, len = gdjs.EditorCode.GDTileObjects2.length ;i < len;++i) {
    gdjs.EditorCode.GDTileObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.EditorCode.eventsList11 = function(runtimeScene) {

{



}


{


gdjs.EditorCode.condition0IsTrue_0.val = false;
{
gdjs.EditorCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
}if (gdjs.EditorCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.EditorCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.EditorCode.mapOfGDgdjs_46EditorCode_46GDCursorTileObjects3Objects = Hashtable.newFrom({"CursorTile": gdjs.EditorCode.GDCursorTileObjects3});gdjs.EditorCode.eventsList12 = function(runtimeScene) {

{



}


{


gdjs.EditorCode.condition0IsTrue_0.val = false;
{
gdjs.EditorCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EditorCode.condition0IsTrue_0.val) {
gdjs.EditorCode.GDCursorTileObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.EditorCode.mapOfGDgdjs_46EditorCode_46GDCursorTileObjects3Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), "GUI");
}{for(var i = 0, len = gdjs.EditorCode.GDCursorTileObjects3.length ;i < len;++i) {
    gdjs.EditorCode.GDCursorTileObjects3[i].setScale(0.3);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("CursorTile"), gdjs.EditorCode.GDCursorTileObjects2);
{for(var i = 0, len = gdjs.EditorCode.GDCursorTileObjects2.length ;i < len;++i) {
    gdjs.EditorCode.GDCursorTileObjects2[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) + 10,gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}}

}


};gdjs.EditorCode.eventsList13 = function(runtimeScene) {

{


gdjs.EditorCode.condition0IsTrue_0.val = false;
{
gdjs.EditorCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
}if (gdjs.EditorCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};gdjs.EditorCode.eventsList14 = function(runtimeScene) {

{


gdjs.EditorCode.eventsList0(runtimeScene);
}


{


gdjs.EditorCode.eventsList2(runtimeScene);
}


{


gdjs.EditorCode.eventsList6(runtimeScene);
}


{


gdjs.EditorCode.eventsList9(runtimeScene);
}


{


gdjs.EditorCode.eventsList11(runtimeScene);
}


{


gdjs.EditorCode.eventsList12(runtimeScene);
}


{


gdjs.EditorCode.eventsList13(runtimeScene);
}


};gdjs.EditorCode.eventsList15 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(gdjs.EditorCode.GDTileObjects2, gdjs.EditorCode.GDTileObjects3);

{gdjs.evtTools.storage.writeNumberInJSONFile("save", "Tile" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.EditorCode.GDTileObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.EditorCode.GDTileObjects3[0].getVariables()).get("ID")))) + "PositionX", (( gdjs.EditorCode.GDTileObjects3.length === 0 ) ? 0 :gdjs.EditorCode.GDTileObjects3[0].getPointX("")));
}{gdjs.evtTools.storage.writeNumberInJSONFile("save", "Tile" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.EditorCode.GDTileObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.EditorCode.GDTileObjects3[0].getVariables()).get("ID")))) + "PositionY", (( gdjs.EditorCode.GDTileObjects3.length === 0 ) ? 0 :gdjs.EditorCode.GDTileObjects3[0].getPointY("")));
}{gdjs.evtTools.storage.writeNumberInJSONFile("save", "Tile" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.EditorCode.GDTileObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.EditorCode.GDTileObjects3[0].getVariables()).get("ID")))) + "Animation", (( gdjs.EditorCode.GDTileObjects3.length === 0 ) ? 0 :gdjs.EditorCode.GDTileObjects3[0].getAnimation()));
}}

}


};gdjs.EditorCode.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Tile"), gdjs.EditorCode.GDTileObjects1);

for(gdjs.EditorCode.forEachIndex2 = 0;gdjs.EditorCode.forEachIndex2 < gdjs.EditorCode.GDTileObjects1.length;++gdjs.EditorCode.forEachIndex2) {
gdjs.EditorCode.GDTileObjects2.length = 0;


gdjs.EditorCode.forEachTemporary2 = gdjs.EditorCode.GDTileObjects1[gdjs.EditorCode.forEachIndex2];
gdjs.EditorCode.GDTileObjects2.push(gdjs.EditorCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.EditorCode.GDTileObjects2.length ;i < len;++i) {
    gdjs.EditorCode.GDTileObjects2[i].returnVariable(gdjs.EditorCode.GDTileObjects2[i].getVariables().get("ID")).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("counter")));
}
}{runtimeScene.getVariables().get("counter").add(1);
}
{ //Subevents: 
gdjs.EditorCode.eventsList15(runtimeScene);} //Subevents end.
}
}

}


};gdjs.EditorCode.eventsList17 = function(runtimeScene) {

{



}


{


gdjs.EditorCode.condition0IsTrue_0.val = false;
{
gdjs.EditorCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("save", "Tile1PositionX");
}if (gdjs.EditorCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.clearJSONFile("save");
}}

}


{



}


{


{
{runtimeScene.getVariables().get("counter").setNumber(1);
}
{ //Subevents
gdjs.EditorCode.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.EditorCode.eventsList18 = function(runtimeScene) {

{



}


{


gdjs.EditorCode.condition0IsTrue_0.val = false;
gdjs.EditorCode.condition1IsTrue_0.val = false;
{
gdjs.EditorCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if ( gdjs.EditorCode.condition0IsTrue_0.val ) {
{
{gdjs.EditorCode.conditionTrue_1 = gdjs.EditorCode.condition1IsTrue_0;
gdjs.EditorCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9550284);
}
}}
if (gdjs.EditorCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.EditorCode.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.EditorCode.mapOfGDgdjs_46EditorCode_46GDTileObjects2Objects = Hashtable.newFrom({"Tile": gdjs.EditorCode.GDTileObjects2});gdjs.EditorCode.eventsList19 = function(runtimeScene) {

};gdjs.EditorCode.eventsList20 = function(runtimeScene) {

{


{
{runtimeScene.getVariables().get("counter").setNumber(1);
}}

}


{



}


{


gdjs.EditorCode.stopDoWhile2 = false;
do {gdjs.EditorCode.GDTileObjects2.length = 0;

gdjs.EditorCode.condition0IsTrue_0.val = false;
{
gdjs.EditorCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("save", "Tile" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("counter"))) + "PositionX");
}if (gdjs.EditorCode.condition0IsTrue_0.val) {
if (true) {
{gdjs.evtTools.storage.readNumberFromJSONFile("save", "Tile" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("counter"))) + "PositionX", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}{gdjs.evtTools.storage.readNumberFromJSONFile("save", "Tile" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("counter"))) + "PositionY", runtimeScene, runtimeScene.getVariables().getFromIndex(1));
}{gdjs.evtTools.storage.readNumberFromJSONFile("save", "Tile" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("counter"))) + "Animation", runtimeScene, runtimeScene.getVariables().getFromIndex(2));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.EditorCode.mapOfGDgdjs_46EditorCode_46GDTileObjects2Objects, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)), "");
}{for(var i = 0, len = gdjs.EditorCode.GDTileObjects2.length ;i < len;++i) {
    gdjs.EditorCode.GDTileObjects2[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.EditorCode.GDTileObjects2.length ;i < len;++i) {
    gdjs.EditorCode.GDTileObjects2[i].setAnimation(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}
}{runtimeScene.getVariables().get("counter").add(1);
}
{ //Subevents: 
gdjs.EditorCode.eventsList19(runtimeScene);} //Subevents end.
}
} else gdjs.EditorCode.stopDoWhile2 = true; 
} while ( !gdjs.EditorCode.stopDoWhile2 );

}


};gdjs.EditorCode.eventsList21 = function(runtimeScene) {

{


gdjs.EditorCode.condition0IsTrue_0.val = false;
{
gdjs.EditorCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Game")) == "Load";
}if (gdjs.EditorCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.EditorCode.eventsList20(runtimeScene);} //End of subevents
}

}


};gdjs.EditorCode.eventsList22 = function(runtimeScene) {

{



}


{


gdjs.EditorCode.condition0IsTrue_0.val = false;
{
gdjs.EditorCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EditorCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.EditorCode.eventsList21(runtimeScene);} //End of subevents
}

}


};gdjs.EditorCode.eventsList23 = function(runtimeScene) {

{



}


{


gdjs.EditorCode.eventsList14(runtimeScene);
}


{


gdjs.EditorCode.eventsList18(runtimeScene);
}


{


gdjs.EditorCode.eventsList22(runtimeScene);
}


};

gdjs.EditorCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EditorCode.GDDrawerObjects1.length = 0;
gdjs.EditorCode.GDDrawerObjects2.length = 0;
gdjs.EditorCode.GDDrawerObjects3.length = 0;
gdjs.EditorCode.GDDrawerObjects4.length = 0;
gdjs.EditorCode.GDMessageObjects1.length = 0;
gdjs.EditorCode.GDMessageObjects2.length = 0;
gdjs.EditorCode.GDMessageObjects3.length = 0;
gdjs.EditorCode.GDMessageObjects4.length = 0;
gdjs.EditorCode.GDCursorTileObjects1.length = 0;
gdjs.EditorCode.GDCursorTileObjects2.length = 0;
gdjs.EditorCode.GDCursorTileObjects3.length = 0;
gdjs.EditorCode.GDCursorTileObjects4.length = 0;
gdjs.EditorCode.GDSelectionTileObjects1.length = 0;
gdjs.EditorCode.GDSelectionTileObjects2.length = 0;
gdjs.EditorCode.GDSelectionTileObjects3.length = 0;
gdjs.EditorCode.GDSelectionTileObjects4.length = 0;
gdjs.EditorCode.GDTileObjects1.length = 0;
gdjs.EditorCode.GDTileObjects2.length = 0;
gdjs.EditorCode.GDTileObjects3.length = 0;
gdjs.EditorCode.GDTileObjects4.length = 0;
gdjs.EditorCode.GDBGTileObjects1.length = 0;
gdjs.EditorCode.GDBGTileObjects2.length = 0;
gdjs.EditorCode.GDBGTileObjects3.length = 0;
gdjs.EditorCode.GDBGTileObjects4.length = 0;
gdjs.EditorCode.GDTxtSelectAtileObjects1.length = 0;
gdjs.EditorCode.GDTxtSelectAtileObjects2.length = 0;
gdjs.EditorCode.GDTxtSelectAtileObjects3.length = 0;
gdjs.EditorCode.GDTxtSelectAtileObjects4.length = 0;

gdjs.EditorCode.eventsList23(runtimeScene);
return;

}

gdjs['EditorCode'] = gdjs.EditorCode;
