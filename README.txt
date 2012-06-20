CANTONTRANS README

Description:
This is a JavaScript utility that translate to and from traditional chinese characters mandarin and cantonese. It contains 3 files including the working an example.html.

Modules: 
1) cantontranscode.js - contains JavaScript function cantontrans() that takes two parameters 'M2C' to translate the value of maintext HTML textarea from traditional characters mandarin to cantonese, and 'C2M' to translate back to mandarin.
2) cantontransdata.js - contains the data array used in the translation
3) example.html - example HTML user interface with example calls to cantontrans

Usage Examples:
1) translating from mandarin to cantonese:
document.getElementById('M2C').onclick=function(){ cantontrans('M2C'); alert('done!'); };
2) translating from cantonese to mandarin:
document.getElementById('C2M').onclick=function(){ cantontrans('C2M'); alert('done!'); };
