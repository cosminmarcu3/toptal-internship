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

interface CommentsContext {
  comments: Comment[];
  addComment: AddComment;
  removeComment: RemoveComment;
  updateComment: UpdateComment;
  updateUpVotes: UpdateUpVotes;
}

export type {
  Comment,
  CommentsContext,
  AddComment,
  RemoveComment,
  UpdateComment,
  UpdateUpVotes,
};
