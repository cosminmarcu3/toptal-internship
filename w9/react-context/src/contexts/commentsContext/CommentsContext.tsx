import { createContext, useState, PropsWithChildren, useContext } from "react";

import type { Comment, CommentsContextData } from "./types";

import defaultComments from "./data";
import Comments from "../../utils/comments";
import CommentManager from "../../utils/comments";

const CommentsContext = createContext<CommentsContextData>({
  comments: defaultComments,
  commentManager: new CommentManager([], () => {}),
});

CommentsContext.displayName = "My awesome context";

const CommentsProvider = ({ children }: PropsWithChildren) => {
  const [comments, setComments] = useState<Comment[]>(defaultComments);

  const commentManager = new Comments(comments, setComments);

  return (
    <CommentsContext.Provider
      value={{
        comments,
        commentManager,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

const useCommentsContext = () => {
  const context = useContext(CommentsContext);

  if (context === undefined) {
    throw new Error(
      "useCommentsContext must be used within a CommentsProvider"
    );
  }

  return context;
};

export { useCommentsContext, CommentsProvider };
