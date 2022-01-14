const dat = require("./lengthWordList.json")

exports.handler = async (event, context) => {
  try {

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
      };
      
      const { word } = event.queryStringParameters;

    if (event.httpMethod !== "POST") { 
        return { 
            statusCode: 200,
            headers: headers,
            body: dat.includes(word)
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
        