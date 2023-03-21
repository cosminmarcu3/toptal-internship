import { Button, TextInput, Loader } from "./styled";

function App() {
  return (
    <div className="App">
      <Button variant="primary">Click</Button>
      <TextInput invalid fullWidth={true} />
      <Loader variant="primary" />
    </div>
  );
}

export default App;
