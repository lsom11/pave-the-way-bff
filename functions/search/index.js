const search = (event, context, callback) => {

    if (event['queryStringParameters'] && event['queryStringParameters']['error']) {
        let r = Math.random().toString(36).substring(7);
        throw new Error(`Random error ${r}`)
    }

    callback(null, {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify({ message: 'search message received' }),
    })
}

module.exports = { search }