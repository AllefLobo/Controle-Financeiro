var express = require('express');
var router = express.Router();

router.use("/transacao", require('./rotaTransacao'));
router.use("/categoria", require('./rotaCategoria'));
router.use("/pessoa", require('./rotaPessoa'));
router.use("/conta", require('./rotaConta'));

module.exports = router;
