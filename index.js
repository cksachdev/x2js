const X2JS=require("./xml2json");
const fs = require('fs-extra');
var DomParser = require('dom-parser');
global.parser = new DomParser();
var text=fs.readFileSync('F:/code/diksha-implementation/x2js/index.ecml','utf8');
var x2js = new X2JS();
//var xmlText = "<MyRoot><test>Success</test><test2><item>val1</item><item>val2</item></test2></MyRoot>";
var jsonObj = x2js.xml_str2json( text );
console.log(jsonObj);