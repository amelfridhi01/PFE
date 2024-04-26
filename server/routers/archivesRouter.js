const express = require ("express");
const router = express.Router();


const ArchiveModel= require('../models/Archives')

router.get("/", async (req, res)=>{
    const archives = await ArchiveModel.find();
    res.json(archives)
})

//UPDATE modifier archives
router.put('/:id', async (req, res) => {
    try {
        let archives = await ArchiveModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!archives) {
            return res.status(404).send('No archives with the given ID was found!');
        }
        res.send(archives);
    } catch (error) {
        console.error("Error:", error);
        res.status(400).send('The archives could not be updated!');
    }
});



// DELETE supprimer archives
router.delete('/:id', async (req, res) => {
    try {
        let archives = await ArchiveModel.findByIdAndDelete(req.params.id);
        if (!archives) {
            return res.status(404).send('No archives with the given ID was found!');
        }
        res.send(archives);
    } catch (error) {
        console.error("Error:", error);
        res.status(400).send('The archives could not be deleted!');
    }
});





module.exports= router;