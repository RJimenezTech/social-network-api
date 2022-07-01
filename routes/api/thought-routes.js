const router = require("express").Router();
const {
  addThought,
  getThoughts,
  getThoughtById,
  updateThoughtById,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts
router.route("/").get(getThoughts);

// /api/thoughts/:thoughtId
router.route("/:thoughtId").get(getThoughtById).put(updateThoughtById);

// /api/thoughts/<userId>
router.route("/:userId").post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router.route("/:userId/:thoughtId").put(addReaction).delete(removeThought);

router.route("/:userId/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;
