const fs=require('fs');
const path=require('path')

const dir=path.join(__dirname,'crud');
const filepath=`${dir}/cru.txt`;

fs.writeFileSync(filepath ,"this is created");

fs.readFile(filepath,'utf-8',(err,item)=>{
    console.log(item);
})

fs.appendFile(filepath,'fruits' ,(err) =>{
    if(!err) console.log("file is updated")
})

fs.rename(filepath ,`${dir}/fruits.txt`,(err) =>{
    if(!err) console.log("file is renamed")
})

fs.unlinkSync(`${dir}/crud.txt`)