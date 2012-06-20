function cantontrans(opt){
var maintext=document.getElementById('maintext');
var strmaintext=maintext.value;
var regex=new RegExp(' ', 'g'); 
var aparts;
for (var i=0; i<acantontransdata.length; i++){
 if     (opt=='M2C') aparts=acantontransdata[i].split('|');
 else if(opt=='C2M') aparts=acantontransdata[i].split('|');
 else break;
 try{
  if(aparts[1]!=""){
   var aparts1=aparts[1].split('%');
    if((aparts1[0]!='')&&(typeof aparts1[0]!='undefined')){
      if     (opt=='M2C'){
        regex.compile(aparts[0], 'g'); strmaintext= strmaintext.replace(regex, aparts1[0]);
      }else if(opt=='C2M'){
        regex.compile(aparts1[0], 'g'); strmaintext= strmaintext.replace(regex, aparts[0]);
      }
     }//endif
  }//endif
 }catch(e){
  alert('ERROR A: '+e.description + '- '+acantontransdata[i-1]);
 }//end try
}//endfor
maintext.value=strmaintext; 
}//endfunction

