function ifVowel(letter){
    letter = letter.toLowerCase();
    if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
    
    return true;
    }
    
    return false;
}
//Event for when the user clicks the button
document.getElementById("btnCount").onclick = function() {
   
    var sent = document.getElementById("txtSentence").value;
    var count = 0;
    for(var i = 0; i < sent.length; i++){
        var letter = sent.charAt(i);
        if(ifVowel(letter)){
            count ++;
        }//end if
    }//end loop

    alert(count);
    document.getElementById("answer").innerHTML = "Count: " + count;

}//end function





