const express = require("express");
const router = express.Router();
const PanneauModel = require('../models/Panneaux');
const CompagneModel = require('../models/Compagnes');

router.get("/", async (req, res) => {
    try {
        const panneaux = await PanneauModel.find();
        const compagnes = await CompagneModel.find();

        const panneauxCountByType = {};
        const panneauxCountByRegionAndTrafic = {};
        const compagnesCountByMediaVisuel = {
            image: 0,
            video: 0
        };

        panneaux.forEach((panneau) => {
            // Comptage par type
            const type = panneau.type;
            if (!panneauxCountByType[type]) {
                panneauxCountByType[type] = 1;
            } else {
                panneauxCountByType[type]++;
            }

            // Comptage par région et trafic routier
            const region = panneau.region;
            const trafic_routier = panneau.trafic_routier;

            if (!panneauxCountByRegionAndTrafic[region]) {
                panneauxCountByRegionAndTrafic[region] = {};
            }

            if (!panneauxCountByRegionAndTrafic[region][trafic_routier]) {
                panneauxCountByRegionAndTrafic[region][trafic_routier] = 1;
            } else {
                panneauxCountByRegionAndTrafic[region][trafic_routier]++;
            }
        });

        compagnes.forEach((compagne) => {
            // Comptage par media
            const media_vusiel = compagne.media_vusiel;
            if (media_vusiel === 'IMAGE') {
                compagnesCountByMediaVisuel.image++;
            } else if (media_vusiel === 'VIDEO') {
                compagnesCountByMediaVisuel.video++;
            }
        });

        console.log("Number of panneaux by type:", panneauxCountByType);
        console.log("Number of panneaux by region and trafic_routier:", panneauxCountByRegionAndTrafic);
        console.log("Number of compagnes by media_visuel:", compagnesCountByMediaVisuel);

        res.json({
            panneauxByType: panneauxCountByType,
            panneauxByRegionAndTrafic: panneauxCountByRegionAndTrafic,
            compagnesByMediaVisuel: compagnesCountByMediaVisuel
        });
    } catch (error) {
        console.error("Error while fetching data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
