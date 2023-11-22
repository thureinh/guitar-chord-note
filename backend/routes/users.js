var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const users = await prisma.user.findMany();
  res.send(JSON.stringify(users));
});

module.exports = router;
