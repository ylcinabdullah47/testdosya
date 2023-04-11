
const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))

let ilanlar = [];





app.get('/ilanlar',(req,res)=>{
    res.status(200).send(ilanlar)
});

app.post('/ilanlar',(req,res)=>{
    let ilan ={
        baslik:req.body.baslik,
        aciklama:req.body.aciklama,
        fiyat:req.body.fiyat      
    };
    ilanlar.push(ilan);
    res.redirect('/')
});




app.listen(3000,()=>{
    console.log("3000 portu çalışıyor");
})