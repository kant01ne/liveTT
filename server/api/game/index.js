'use strict';

var express = require('express');
var controller = require('./game.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.put('/:id/score', controller.updateScore);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;