const { v4: uuidv4 } = require('uuid');
exports.handler = async(event, context, callback) => {
    console.log(uuidv4());
    console.log("pipeline test");
}
