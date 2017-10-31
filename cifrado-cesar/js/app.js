var sentence = prompt("Escriba una frase"); //Variable con la frase del usuario

function cipher (prompt){
  for(var i = 0; i<sentence.length; i++){
      if (sentence [i] === "" || typeof sentence[i] !== "string"){
        console.log("Error"); //Se descarta que reciba numeros y cambios vacios

        }else{
          var codeSentence = sentence.charCodeAt(i); //Devuelve el código ascci de la frase
          var codeTravel = (codeSentence-65+33)%26+65;//Recorre 33 espacios en el codigo ascii
          var encrypt = String.fromCharCode(codeTravel);//Devueve la frase a letras
           console.log(encrypt);//imprime en la consola las letras nuevas de la frase

        }
   }
 }

cipher(sentence);

function decipher(cipher){
  for(var n =0; n<cipher.length; n++){
    var code = cipher.charCodeAt(n);
    var deciphering = (code-33)%26;
    var desencrypt = String.fromCharCode(deciphering);
       console.log(desencrypt);
  }
}

decipher(cipher);
