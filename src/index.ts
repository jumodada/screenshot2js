const enumTree = {
    '(':   ')',
    '{':   '}',
    '[':   ']'
}

function parseStr(str){
    const handlerStack = []
    for(let i=0; i< str.length; i++){
        const char = str[i]
        if(char in enumTree){
            handlerStack.push(char)
        }else{
            const lastStr = handlerStack.pop()
            if(enumTree[lastStr] !==char){
                return false
            }
        }
    }
    return handlerStack.length === 0
}