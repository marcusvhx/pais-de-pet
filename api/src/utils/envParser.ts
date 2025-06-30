function parser(str:string){
    const splited = str.split(",")
    return splited.map(item => item.trim())
}

export {parser}