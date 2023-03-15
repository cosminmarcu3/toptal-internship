import { createContext, useState, PropsWithChildren } from "react";

import { Comment, CommentsContext } from "./types";

import defaultComments from "./data";
import useComment from "../../hooks/useComments";

const commentsContext = createContext<CommentsContext>({
  comments: defaultComments,
  addComment: (comment) => {},
  removeComment: (id) => {},
  updateComment: (id, comment) => {},
  updateUpVotes: (id, add) => {},
});

const CommentsProvider = ({ children }: PropsWithChildren) => {
  const [comments, setComments] = useState<Comment[]>(defaultComments);

  const { addComment, removeComment, updateComment, updateUpVotes } =
    useComment(comments, setComments);

  return (
    <commentsContext.Provider
      value={{
        comments,
        addComment,
        removeComment,
        updateComment,
        updateUpVotes,
      }}
    >
      {children}
    </commentsContext.Provider>
  );
};

export { commentsContext, CommentsProvider };
