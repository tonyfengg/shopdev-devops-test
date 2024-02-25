const express = require("express");
const router = express.Router();

router.get("/v1/api/checkstatus", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "server ok shopdev-backend api",
  });
});

module.exports = router;
