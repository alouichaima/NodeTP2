const express =require ('express');
const app = express();
const mongoose=require('mongoose');
const dotenv =require ('dotenv');
dotenv.config();
const MONGODB_URI=process.env.MONGODB_URI
const PORT =process.env.PORT||5000


const voiture=require ('./routes/voiture');
app.use(express.json())
app.use('/voiture', voiture);

// app.listen(6000 ,()=>{
//     console.log("the service is running on port 6000")
// })

//conx base de donnee
mongoose.connect(MONGODB_URI).then(()=>{
    console.log('connected to the database')
    app.listen(PORT,()=>{
        console.log(`server is running on ${PORT}`)
    })
}).catch(err=>{
    console.log('Error connecting to database:',err.message)
})