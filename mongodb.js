const mongoose = require('mongoose');
const url ='mongodb://127.0.0.1:27017/basvuru';

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db =mongoose.connection;
if (!db) {
   db.on('error',console.error.bind(console.log("veri tabanı bağlantı hatası+1"))); 
}
db.once('open',function(){
    console.log("mongodb veri tabanı bağlantısı başarılı");
});

const formSchema = new mongoose.Schema({
    ad: String,
    soyad: String,
    email: String,
    telefon: String,
  });
  
  const Form = mongoose.model('form', formSchema);
  
  module.exports = Form;