import styles from "../Comment.module.css";

interface EditBtnsProps {
  isEditable: boolean;
  handleCancel: () => void;
  handleSave: () => void;
}

const EditBtns = ({ handleSave, handleCancel, isEditable }: EditBtnsProps) => {
  if (!isEditable) {
    return null;
  }

  return (
    <div className={styles.edit_btns_container}>
      <button className={styles.btn} onClick={handleSave}>
        Save
      </button>
      <button className={styles.btn} onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
};

export default EditBtns;
