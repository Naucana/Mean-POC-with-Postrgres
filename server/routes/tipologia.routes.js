const express = require('express');
const router = express.Router();

const urlTipologia = '/tipologia';

router.get(urlTipologia, function(req, res){
    console.log('He recibido una peticion tipologia.get');
    res.send('Información recibida!');
});
router.post(urlTipologia, function(req, res){
    console.log('He recibido una peticion tipologia.post');
    res.send('Información Modificada!');
});
router.put(urlTipologia + ':id', function(req,res){
    console.log('He recibido una peticion tipologia.put');
    res.send('Información Actualizada!');
});
router.delete(urlTipologia + ':id', function(req, res){
    console.log('He recibido una peticion tipologia.delete');
    res.send('Información Eliminada!')
});

module.exports = router;