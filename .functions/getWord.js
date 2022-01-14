const dat = require("./lengthWordList.json")

exports.handler = async (event, context) => {
  try {
    const data = await JSON.parse(dat);

    const index = Math.floor(Math.random() * data.length);

    return { statusCode: 200, body: data[index]  };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
        