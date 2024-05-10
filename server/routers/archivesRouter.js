const express = require ("express");
const router = express.Router();


const ArchiveModel= require('../models/Archives')

router.get("/", async (req, res)=>{
    const archives = await ArchiveModel.find();
    res.json(archives)
})







module.exports= router;