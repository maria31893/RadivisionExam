/*jslint browser: true*/
/*console, alert*/


function reverse() {
    "use strict";
    
    var resultField = document.getElementById("reversedSentence");
    var original = document.getElementById("sentence").value;
    
    if(original == "")
        resultField.innerHTML = "You should enter a sentence to be reversed!";
    
    else{
        
    var array = original.split(/(\s+)/);
    array.reverse();
    var result=array.join(' ');
    
    resultField.innerHTML= result;
    }
    
    
}
