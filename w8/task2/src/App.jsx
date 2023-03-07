import { useState } from "react";

import { Lights, Switch } from "./components/index";

const App = () => {
  const [lightIsOn, switchLight] = useState(true);

  return (
    <main>
      <Lights isOn={lightIsOn} />
      <Switch {...{ lightIsOn, switchLight }} />
    </main>
  );
};

export default App;
