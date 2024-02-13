const express= require('express');
const router =express.Router();

let voitures = [{id:1,name:"clio"},{id:2,name:"megane"},{id:3,name:"range"}]

router.post('/add', (req,res)=>{
    const newvoiture=req.body;
    voitures.push(newvoiture);
    res.send(voitures);
})

router.get('/all',(req, res)=>{
    res.send(voitures);
})

router.get('/:id',(req,res)=>{
    const id = parseInt(req.params.id); 
    const voiture = voitures.find(V => V.id === id); 
    if (voiture) {
      res.json(voiture);
    }
    else
    res.send("this car doesn't exist");
})

router.put('/update/:id',(req,res)=>{
    const id = parseInt(req.params.id); 
    const voiture = voitures.find(V => V.id === id); 
    if (voiture) {
        
        voitures[voiture]=req.body ;
        res.json(voitures[voiture]);
        
    }else
    res.send("this car doesn't exist");
})

router.delete('/delete/:id', (req, res) => {
  const voitureId = parseInt(req.params.id);
  const index = voitures.findIndex(voiture => voiture.id === voitureId);

  if (index !== -1) {
    const deletedVoiture = voitures.splice(index, 1);
    res.json({ message: 'Voiture supprimée avec succès', voiture: deletedVoiture });
  } else {
    res.status(404).send("Cette voiture n'existe pas");
  }
});

module.exports=router