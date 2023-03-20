import { useContext } from "react";

import styles from "./CommentsList.module.css";

import Comment from "../../elements/comment/Comment";

import { useCommentsContext } from "../../contexts/commentsContext/CommentsContext";

const CommentsList = () => {
  const { comments } = useCommentsContext();

  return (
    <ul className={styles.comments_list}>
      {comments.map((comment, id) => (
        <Comment key={id} {...comment} />
      ))}
    </ul>
  );
};

export default CommentsList;
