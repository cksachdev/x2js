const X2JS=require("../xml2json");
const fs = require('fs-extra');
var text=fs.readFileSync('index.ecml','utf8');
console.log(text);
var x2js = new X2JS({ attributePrefix: 'none', enableToStringFunc: false });
//var xmlText = "<MyRoot><test>Success</test><test2><item>val1</item><item>val2</item></test2></MyRoot>";
var jsonObj = x2js.xml_str2json( text );
console.log(jsonObj);
fs.writeFileSync("output.json", JSON.stringify(jsonObj), 'utf8'); 
