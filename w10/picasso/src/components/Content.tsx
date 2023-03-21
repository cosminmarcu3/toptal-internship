import { Container } from "@toptal/picasso";

import ContentLeft from "./contentLeft/ContentLeft";
import ContentRight from "./contentRight/ContentRight";

const Content = () => (
  <Container flex gap={3} justifyContent="center" top={1}>
    <ContentLeft />
    <ContentRight />
  </Container>
);

export default Content;
