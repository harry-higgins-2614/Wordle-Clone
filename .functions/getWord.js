const dat = require("./lengthWordList.json")

exports.handler = async (event, context) => {
  try {
    console.log(dat.length);

    const index = Math.floor(Math.random() * dat.length);

    return { statusCode: 200, body: data[index]  };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
        