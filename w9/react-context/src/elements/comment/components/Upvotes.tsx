import { useCommentsContext } from "../../../contexts/commentsContext/CommentsContext";

import styles from "../Comment.module.css";

interface UpvotesProps {
  count: number;
  id: number;
}

const Upvotes = ({ count, id }: UpvotesProps) => {
  const { comments, commentManager } = useCommentsContext();

  const includesYou = comments
    .find((comment) => comment.id === id)
    ?.upvotes.includes("You");

  const handlePlusClick = () => {
    commentManager.updateUpVotes(id, true);
  };
  const handleMinusClick = () => {
    commentManager.updateUpVotes(id, false);
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
