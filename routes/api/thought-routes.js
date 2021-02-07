const router = require("express").Router();
//import the routes
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thought-controllers");
//for just /api/users
router.route("/").get(getAllThoughts).post(createThought);

//for /api/users/:id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);
module.exports = router;
