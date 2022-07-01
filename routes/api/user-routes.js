const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getThoughts,
  addFriend,
} = require("../../controllers/user-controller");

// Set up GET all and POST at /api/users
router.route("/").get(getAllUsers).post(createUser).get(getThoughts);

// set up POST route at /api/users/<userId>/friends/<friendId>
router.route("/:userId/friends/:friendsId").post(addFriend);

// Set up GET one, PUT, and DELETE at /api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
