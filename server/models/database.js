//mongodb+srv://dbTommy:900250thave@cluster0-nf8sn.mongodb.net/<dbname>?retryWrites=true&w=majority
const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://dbTommy:90-0250th@cluster0-nf8sn.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'starwars'
})
.then(()=>console.log('Connected to Mongo DB.'))
.catch(err=>console.log(err));

const Schema = mongoose.Schema;


module.exports = {
    Species,
    Planet,
    Film,
    Person
  }
  