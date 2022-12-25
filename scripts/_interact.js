const args = process.argv.slice(2)

const argsObj = args.reduce((acc, cur) => {
    const splitArg = cur.split('=')

    const key = splitArg[0]
    const value = splitArg[1]

    if (!key || !value) {
        throw new Error('The arguments passed in are incorrect. Must look like: foo=bar')
    }

    acc[key] = value

    return acc
}, {})