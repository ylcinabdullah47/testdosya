console.log("test api 1");
const express = require('express');
// const dataBase = require('./mongodb')
const Form = require('./mongodb');
const app = express();
app.use(express.json());

// let ilanlar = [
//   { id: '1', title: 'İş arıyorum', description: 'Tecrübeli bir yazılım geliştiriciyim.' },
//   { id: '2', title: 'Satılık daire', description: 'Merkezi konumda, geniş ve ferah bir daire.' },
//   { id: '3', title: 'Kayıp köpek', description: 'Golden retriever cinsi, 4 yaşında, kayıp.' }
// ];

// // Tüm ilanları listele
// app.get('/ilanlar', (req, res) => {
//   res.status(200).json(ilanlar);
// });

// // ID'si belirtilen ilanı getir
// app.get('/ilanlar/:id', (req, res) => {
//   const id = req.params.id;
//   const ilan = ilanlar.find(ilan => ilan.id === id);

//   if (ilan) {
//     res.status(200).json(ilan);
//   } else {
//     res.status(404).json({ message: 'İlan bulunamadı' });
//   }
// });

// // Yeni ilan oluştur
// app.post('/ilanlar', (req, res) => {
//   const ilan = {
//     id: Math.floor(Math.random() * 1000).toString(),
//     title: req.body.title,
//     description: req.body.description
//   };
//   ilanlar.push(ilan);
//   res.status(201).json(ilan);
 
// });

// // ID'si belirtilen ilanı güncelle
// app.put('/ilanlar/:id', (req, res) => {
//   const id = req.params.id;
//   const ilan = ilanlar.find(ilan => ilan.id === id);

//   if (ilan) {
//     ilan.title = req.body.title || ilan.title;
//     ilan.description = req.body.description || ilan.description;
//     res.status(200).json(ilan);
//   } else {
//     res.status(404).json({ message: 'İlan bulunamadı' });
//   }
// });

// // ID'si belirtilen ilanı sil
// app.delete('/ilanlar/:id', (req, res) => {
//   const id = req.params.id;
//   const ilanIndex = ilanlar.findIndex(ilan => ilan.id === id);

//   if (ilanIndex !== -1) {
//     const deletedIlan = ilanlar.splice(ilanIndex, 1)[0];
//     res.status(200).json(deletedIlan);
//   } else {
//     res.status(404).json({ message: 'İlan bulunamadı' });
//   }
// });

app.get('/data',async(req,res)=>{
    const veriler = await Form.find({});
    res.json(veriler)
})


app.post('/data', async (req, res) => {
    const { ad, soyad, email, telefon } = req.body;
    const form = new Form({ ad, soyad, email, telefon });
    await form.save();
    res.send('Başvurunuz alındı!');
  });




app.listen(3000,(req,res)=>{
    console.log("3000 portu çalışıyor");
});
