function parseArguments(argumentsArr) {
    const argsObj = argumentsArr.reduce((acc, cur) => {
        const splitArg = cur.split('=')
    
        const key = splitArg[0]
        const value = splitArg[1]
    
        if (!key || !value) {
            throw new Error('The arguments passed in are incorrect. Must look like: foo=bar')
        }
    
        acc[key] = value
    
        return acc
    }, {})

    return Object.keys(argsObj).length === 0 ? null : argsObj
}

module.exports = parseArguments