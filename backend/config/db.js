let mongoose = require('mongoose');

exports.connect = function(callback,errorCallback){
    mongoose.Promise = global.Promise;

    mongoose.connect('mongodb://127.0.0.1:27017/demos', {});
    let db = mongoose.connection;
    db.on('error', function (err) { // error on connection
        console.error.bind(console, 'connection error:');
        if (typeof (errorCallback) == 'function') {
            errorCallback(err)
        }
    });
    db.once('open', function () {//connection done
        console.info('-------------Mongoose is connected to db server-------------');
        callback();
    });

};