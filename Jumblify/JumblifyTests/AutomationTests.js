
var target = UIATarget.localTarget();

var inputField = target.frontMostApp().mainWindow().textFields()["Input Field"];
inputField.setValue("hi");
if (inputField.value() != "hi") UIALogger.logFail("The Input Field was NOT able to be set with the string!");
else UIALogger.logPass("The Input Field was able to be set with the string!");
var button = target.frontMostApp().mainWindow().buttons()["Jumblify Button"];
button.tap();
target.frontMostApp().mainWindow().logElementTree();
var stringResult = target.frontMostApp().mainWindow().staticTexts()["ih"];
if (! stringResult.isValid()) UIALogger.logFail("The output text was NOT set with the correctly reversed string!");
else UIALogger.logPass("The output text was set with the correctly reversed string!");