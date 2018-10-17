const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

mongoose.promise = Promise

const userSchema = new Schema({
    name: {type: String},
    googleID: {type: String},
    items: {type: String}
});

const User = mongoose.model('User', userSchema);
module.exports = User;