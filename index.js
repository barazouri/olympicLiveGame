const express = require('express');
const ctrl = require('./controller');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/cruises',ctrl.getLiveGameCruices);
app.post('/cruise/:userId',ctrl.setLiveGameScore);
app.put('/getCruiseByYearCompetitor',ctrl.getCruiseByYearCompetitor);
app.all("*",(req,res)=>{
    res.send("this root is not exist");
});
app.listen(port,()=> console.log('Express server ready on: ',port));

