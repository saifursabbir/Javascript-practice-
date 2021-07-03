// infinity for loop
 
for (; ;)  {
    var rand = Math.floor(Math.random() * 10 + 1)
     if (rand === 9 ) {
         console.log(' winner winner chicken ')
         break
     } else { 
         console.log(' You Have got ' + rand)
     }
}
        