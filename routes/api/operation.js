const router = require("express").Router();

const checkJWT = require("../../Middleware/checkJWT");

const {
  controllerOperationCR,
  controllerOperationRA,
  controllerOperationRO,
  controllerOperationU,
  controllerOperationD,
  controllerOperationRB,
} = require("../../controllers/operation");

router
  .get("/allOperations", checkJWT,controllerOperationRA)
  .get("/oneOperation/:operationId", checkJWT, controllerOperationRO)
  .get("/balance", checkJWT, controllerOperationRB)
  .post("/", checkJWT, controllerOperationCR)
  .put("/:operationID", checkJWT, controllerOperationU)
  .delete("/:operationId", checkJWT, controllerOperationD);

module.exports = router;
