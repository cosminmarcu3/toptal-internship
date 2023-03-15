import { useContext } from "react";
import { commentsContext } from "../../../../contexts/commentsContext/CommentsContext";

import styles from "../../Comment.module.css";
import { UpvotesProps } from "./types";

const Upvotes = ({ count, id }: UpvotesProps) => {
  const { comments, updateUpVotes } = useContext(commentsContext);

  const includesYou = comments
    .find((comment) => comment.id === id)
    ?.upvotes.includes("You");

  const handlePlusClick = () => {
    updateUpVotes(id, true);
  };
  const handleMinusClick = () => {
    updateUpVotes(id, false);
  };

  return (
    <div className={styles.upvotes_container}>
      <button disabled={includesYou} onClick={handlePlusClick}>
        +
      </button>
      {count}
      <button disabled={!includesYou} onClick={handleMinusClick}>
        -
      </button>
    </div>
  );
};

export default Upvotes;
