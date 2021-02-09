const router = require("express").Router();
//import the routes
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");
//for just /api/users
router.route("/").get(getAllUsers).post(createUser);

//for /api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route("/:id/friends/:friendId").post(addFriend).delete(deleteFriend);
module.exports = router;
