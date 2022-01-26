const convertToArray = (string) => {
    // return string.split('/').join("").split(',').join("*").split("{").join("").split("}").join("").split("*")
    const newString = string.split('"')
    
    let tmpArr = []
    newString.forEach((x, index) => {
       if(x.length > 2) tmpArr.push(x)
    })
    // return string.split('"').join("")
    return tmpArr
}

module.exports = convertToArray