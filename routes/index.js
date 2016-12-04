var express = require('express');
var router = express.Router();

router.use("/transacao", require('./rotaTransacao'));
router.use("/categoria", require('./rotaCategoria'));
router.use("/pessoa", require('./rotaPessoas'));

module.exports = router;
