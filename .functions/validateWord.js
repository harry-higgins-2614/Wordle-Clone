const dat = require("./lengthWordList.json")

exports.handler = async (event, context) => {
  try {

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
      };
      
      console.log(event);
      const { word } = event.queryStringParameters;

      var valid = dat.includes(word)

    if (event.httpMethod !== "POST") { 
        return { 
            statusCode: 200,
            headers: headers,
            body: valid.toString()
        };
    }
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
        