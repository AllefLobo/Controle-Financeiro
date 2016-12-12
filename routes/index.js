var express = require('express');
var router = express.Router();

router.use("/api", require('./rotaTransacao'));
router.use("/api", require('./rotaCategoria'));
router.use("/api", require('./rotaPessoa'));
router.use("/api", require('./rotaConta'));

module.exports = router;
