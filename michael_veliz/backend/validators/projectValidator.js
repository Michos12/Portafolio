function existsValidator(item, positiveCallback, negativeCallback){
    if(!item){
        return positiveCallback
    }
    return negativeCallback
}

export { existsValidator }