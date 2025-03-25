const fs=require('fs');


fs.unlink('file2.txt', (err)=>
{
      if (err)
      {
            console.log("Error in handling file", err)
            return;
      }
      else{
console.log('file deleted successfully')
      }
})

fs.unlinkSync('example.txt');
console.log('File deleted successfully!');
