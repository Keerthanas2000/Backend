const fs=require('fs');

fs.appendFile('example.txt', '\n Apppended text', (err)=>
{
      if(err)
      {
            console.log('Error appending to file', err);
            return;
      }
      else{
console.log(`file appended successfully`)
      }
})


fs.appendFileSync('example.txt', '\nAppended text v2');
