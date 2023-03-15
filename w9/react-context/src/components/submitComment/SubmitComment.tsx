import { ChangeEvent, useState, useContext, FormEvent } from "react";

import { commentsContext } from "../../contexts/commentsContext/CommentsContext";

import styles from "./SubmitComment.module.css";

const SubmitComment = () => {
  const [comment, setComment] = useState("");

  const { comments, addComment } = useContext(commentsContext);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setComment(e.target.value);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addComment({
      comment,
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
        value={comment}
        onChange={handleInputChange}
        required
      ></textarea>
      <button className={styles.submit}>Add comment</button>
    </form>
  );
};

export default SubmitComment;
