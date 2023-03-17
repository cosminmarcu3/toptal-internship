import { Dispatch, SetStateAction } from "react";

import { Comment } from "../contexts/commentsContext/types";

import defaultComments from "../contexts/commentsContext/data";

class CommentManager {
  id: number = defaultComments.length + 1;
  comments: Comment[] = [];
  setComments: Dispatch<SetStateAction<Comment[]>>;

  constructor(state: Comment[], setState: Dispatch<SetStateAction<Comment[]>>) {
    this.comments = state;
    this.setComments = setState;
  }

  createCommentsCopy(): Comment[] {
    return JSON.parse(JSON.stringify(this.comments));
  }

  findComment(comments: Comment[], id: number) {
    return comments.slice().find((comment) => comment.id === id);
  }

  addComment(comment: Omit<Comment, "id">) {
    this.setComments([{ ...comment, id: this.id }, ...this.comments]);
    this.id++;
  }

  removeComment(id: number) {
    this.setComments([...this.comments.filter((comment) => comment.id !== id)]);
  }

  updateComment(id: number, comment: string) {
    const shallowComments = this.createCommentsCopy();
    let searchedComment = this.findComment(shallowComments, id);

    if (searchedComment) {
      searchedComment.comment = comment;

      this.setComments(shallowComments);
    }
  }

  updateUpVotes(id: number, add: boolean) {
    const shallowComments = this.createCommentsCopy();
    let searchedComment = this.findComment(shallowComments, id);
    if (searchedComment) {
      if (add) {
        !searchedComment.upvotes.includes("You") &&
          searchedComment.upvotes.push("You");
      } else {
        searchedComment.upvotes = searchedComment.upvotes.filter(
          (upvote) => upvote !== "You"
        );
      }

      this.setComments(shallowComments);
    }
  }
}

export default CommentManager;
