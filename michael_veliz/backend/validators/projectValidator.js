function existsValidator(item, positiveCallback, negativeCallback){
    if(!item){
        return negativeCallback
    }
    return positiveCallback
}

export { existsValidator }