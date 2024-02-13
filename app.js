const express =require ('express')
const app = express();

const voiture=require ('./routes/voiture');
app.use(express.json())
app.use('/voiture', voiture);

app.listen(6000 ,()=>{
    console.log("the service is running on port 6000")
})