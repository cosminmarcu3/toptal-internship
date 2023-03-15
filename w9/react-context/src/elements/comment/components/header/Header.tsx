import styles from "../../Comment.module.css";
import { HeaderProps } from "./types";

const Header = ({ handleEdit, handleDelete, author }: HeaderProps) => {
  const editBtnClassName = [styles.btn, styles.mr_05].join(" ");

  return (
    <div className={styles.comment_header}>
      <div className={styles.username}>{author}</div>
      {author === "You" && (
        <div>
          <button className={editBtnClassName} onClick={handleEdit}>
            edit
          </button>
          <button className={styles.btn} onClick={handleDelete}>
            delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
