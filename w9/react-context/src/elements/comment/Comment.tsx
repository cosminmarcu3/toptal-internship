import { useRef, useState } from "react";

import styles from "./Comment.module.css";

import { CommentProps } from "./types";

import { useCommentsContext } from "../../contexts/commentsContext/CommentsContext";
import { EditBtns, Header, Upvotes } from "./components";

const Comment = ({ author, comment, upvotes, id }: CommentProps) => {
  const { commentManager } = useCommentsContext();
  const [isEditable, setIsEditable] = useState(false);

  const [editableContentPrev, setEditableContentPrev] = useState("");

  const commentRef = useRef<HTMLParagraphElement>(null);

  const handleDelete = () => commentManager.removeComment(id);
  const handleEdit = () => {
    commentRef.current?.focus();
    setEditableContentPrev(commentRef.current?.textContent as string);
    setIsEditable(true);
  };

  const handleSave = () => {
    commentManager.updateComment(id, commentRef.current?.textContent as string);
    setIsEditable(false);
  };
  const handleCancel = () => {
    (commentRef.current as HTMLParagraphElement).textContent =
      editableContentPrev;
    setIsEditable(false);
  };

  return (
    <li className={styles.comment}>
      <div className={styles.main_content}>
        <Upvotes count={upvotes.length} id={id} />

        <div className={styles.comment_body}>
          <Header
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            author={author}
          />

          <p
            className={styles.comment_text}
            ref={commentRef}
            contentEditable={isEditable}
            suppressContentEditableWarning
          >
            {comment}
          </p>
        </div>
      </div>

      <EditBtns
        isEditable={isEditable}
        handleCancel={handleCancel}
        handleSave={handleSave}
      />
    </li>
  );
};

export default Comment;
