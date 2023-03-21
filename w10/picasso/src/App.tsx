import PageTopBar from "@toptal/picasso/PageTopBar/PageTopBar";
import { Container } from "@toptal/picasso";

import Content from "./components/Content";

function App() {
  return (
    <Container>
      <PageTopBar variant="dark" title="Top heroes" />
      <Content />
    </Container>
  );
}

export default App;
