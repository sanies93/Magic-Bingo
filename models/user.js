var mongoose = require('mongoose');

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Create a new object
var UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    reading: {
        type: Schema.Types.ObjectId,
        ref: 'Reading'
    }
});

// Create model from the schema using mongoose's model method
var User = mongoose.model('User', UserSchema);

// Export the model
module.exports = User;

