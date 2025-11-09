import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "C:\\Users\\majoj\\Downloads\\express\\ex-15"
let files = await fs.readdir(basepath)

for(const item of files){
    let ext = item.split(".")[item.split(".").length-1]
    // console.log(ext)
    if(fsn.existsSync(path.join(basepath,ext))){
        //Move files to corresponding dirsctory
        fs.rename(path.join(basepath,item), path.join(basepath, ext,item) )
    }
    else{
        fs.mkdir(ext)
    }
    console.log(item)

}