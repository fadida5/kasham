const express = require('express');
const router = express.Router()

const { create, find, update, remove, findById,read,updatedata} = require('../../controllers/data/data');

// find spec 
router.get('/data/:id', read);

router.get('/data', find);
//add 
router.post('/data',create); /**/ 
//update 
router.put('/data/:dataId', update)
//delete 
router.post('/data/remove/:dataId', remove )

router.post('/data/updatedata',updatedata);

module.exports = router;