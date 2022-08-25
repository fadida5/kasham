const express = require('express');
const router = express.Router()

const { create, find, update, remove, findById,read,updateform} = require('../../controllers/form/form');

// find spec 
router.get('/form/:id', read);

router.get('/form', find);
//add 
router.post('/form',create); /**/ 
//update 
router.put('/form/:formId', update)
//delete 
router.post('/form/remove/:formId', remove )

router.post('/form/updateform',updateform);

module.exports = router;