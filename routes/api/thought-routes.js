const router = require("express").Router();
//import the routes
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controllers");
//for just /api/users
router.route("/").get(getAllThoughts).post(createThought);

//for /api/users/:id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

//for /api/thoughts/:thoughtid/reactions
router.route("/:thoughtId/reactions").post(addReaction);
//for /api/thoughts/:thoughtid/:reactionId
router.route("/:thoughtId/:reactionId").delete(deleteReaction);
module.exports = router;
