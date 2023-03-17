import CommentManager from "../../utils/comments";

interface Comment {
  author: string;
  comment: string;
  upvotes: string[];
  id: number;
}

type AddComment = (comment: Omit<Comment, "id">) => void;
type RemoveComment = (id: number) => void;
type UpdateComment = (id: number, comment: string) => void;
type UpdateUpVotes = (id: number, add: boolean) => void;

interface CommentsContextData {
  comments: Comment[];
  commentManager: CommentManager;
}

export type {
  Comment,
  CommentsContextData,
  AddComment,
  RemoveComment,
  UpdateComment,
  UpdateUpVotes,
};
