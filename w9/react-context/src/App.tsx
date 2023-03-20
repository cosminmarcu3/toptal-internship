import { SubmitComment, CommentsList } from "./components";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <SubmitComment />
      <CommentsList />
    </div>
  );
}

export default App;
