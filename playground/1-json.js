const fs = require("fs");

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const userObj = JSON.parse(dataJSON);

userObj.name = "Deepak";
userObj.age = 27;

const userJSON = JSON.stringify(userObj);
fs.writeFileSync("1-json.json", userJSON);
