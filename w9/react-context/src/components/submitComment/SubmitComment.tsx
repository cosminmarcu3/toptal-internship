import { FormEvent, useRef } from "react";

import { useCommentsContext } from "../../contexts/commentsContext/CommentsContext";

import styles from "./SubmitComment.module.css";

const SubmitComment = () => {
  const { commentManager } = useCommentsContext();

  const commentRef = useRef<HTMLTextAreaElement>(null);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    commentManager.addComment({
      comment: commentRef.current?.value as string,
      author: "You",
      upvotes: [],
    });
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <textarea
        className={styles.input}
        rows={5}
        placeholder="Enter your comment"
        ref={commentRef}
        required
      ></textarea>
      <button className={styles.submit}>Add comment</button>
    </form>
  );
};

export default SubmitComment;
