# Cifrado Cesar

- Pedir por medio de un prompt una frase al usuario.
- Si el usuario ingresa numeros o un campo vacio el codigo termina y envia un mensaje de Error.
- Si el usuario ingresa un texto el codigo continua.
- Se obtenie el código ascii de la frase del usuario por medio de charCodeAt.
- Una vez teniendo los numeros del código ascii se recorren 33 espacios a la derecha por medio de la formula (x-65+n)%26+65
- Con los nuevos valores numericos se convierte a un string con String.FromCharCode(i)
- Se regresa la cadena cifrada al usuario por medio de un console.log();

## Para desencriptar
- Por medio de charCodeAt devolver el valor ascii de las letras nuevas
- Por medio de la formula (x-33)%26 regresar las letras nuevas a su valor ascii original
- por medio de String.fromCharCode(i) devolver la cadena original
- Regresar la frase original al usuario por medio de un console.log()

![Esta el la imagen del diagrama](/assets/images/diagrama-codigo-cesar.png)
