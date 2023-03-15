import { Comment } from "./types";

const comment =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia urna lectus, non bibendum ex pretium nec. Donec pellentesque dui non fermentum dignissim. Aliquam volutpat ultricies eros id sollicitudin. Quisque aliquam vitae nisi eget luctus. Suspendisse malesuada pulvinar odio ut iaculis. Morbi at tellus ultrices, dictum massa vel, tincidunt dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const defaultComments: Comment[] = [
  {
    author: "user1",
    comment,
    upvotes: ["user2", "user3"],
    id: 0,
  },
  {
    author: "user2",
    comment,
    upvotes: [],
    id: 1,
  },
  {
    author: "user3",
    comment,
    upvotes: ["user1"],
    id: 2,
  },
];

export default defaultComments;
