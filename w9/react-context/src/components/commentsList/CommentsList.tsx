import { useContext } from "react";

import styles from "./CommentsList.module.css";

import Comment from "../../elements/comment/Comment";

import { commentsContext } from "../../contexts/commentsContext/CommentsContext";

const CommentsList = () => {
  const { comments } = useContext(commentsContext);

  return (
    <ul className={styles.comments_list}>
      {comments.map((comment, id) => (
        <Comment key={id} {...comment} />
      ))}
    </ul>
  );
};

export default CommentsList;
