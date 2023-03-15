import { Dispatch, SetStateAction } from "react";
import defaultComments from "../contexts/commentsContext/data";
import {
  AddComment,
  Comment,
  RemoveComment,
  UpdateComment,
  UpdateUpVotes,
} from "../contexts/commentsContext/types";

let comments: Comment[];
let setComments: Dispatch<SetStateAction<Comment[]>>;

let id = defaultComments.length + 1;

const createCommentsCopy = () => JSON.parse(JSON.stringify(comments));

const findComment = (comments: Comment[], id: number) =>
  comments.slice().find((comment) => comment.id === id);

const addComment: AddComment = (comment) => {
  setComments([{ ...comment, id }, ...comments]);
  id++;
};

const removeComment: RemoveComment = (id) =>
  setComments([...comments.filter((comment) => comment.id !== id)]);

const updateComment: UpdateComment = (id, comment) => {
  const shallowComments = createCommentsCopy();
  let searchedComment = findComment(shallowComments, id);

  if (searchedComment) {
    searchedComment.comment = comment;

    setComments(shallowComments);
  }
};

const updateUpVotes: UpdateUpVotes = (id, add) => {
  const shallowComments = createCommentsCopy();
  let searchedComment = findComment(shallowComments, id);

  if (searchedComment) {
    if (add) {
      !searchedComment.upvotes.includes("You") &&
        searchedComment.upvotes.push("You");
    } else {
      searchedComment.upvotes = searchedComment.upvotes.filter(
        (upvote) => upvote !== "You"
      );
    }

    setComments(shallowComments);
  }
};

const useComment = (
  state: Comment[],
  setState: Dispatch<SetStateAction<Comment[]>>
) => {
  comments = state;
  setComments = setState;

  return { addComment, removeComment, updateUpVotes, updateComment };
};

export default useComment;
