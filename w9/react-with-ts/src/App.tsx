import useCharacters from "./hooks/useCharacters";

import Card from "./elements/card/Card";

import styles from "./App.module.css";

const App = () => {
  const { characters, loading } = useCharacters();

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className={styles.card_list}>
      {characters.map(({ id, ...character }) => (
        <Card key={id} {...character} />
      ))}
    </div>
  );
};

export default App;
