import { Typography, Container } from "@toptal/picasso";

import { ContentLeftMid, ContentLeftBot } from "./components";

import * as S from "./styles";

const ContentLeft = () => {
  return (
    <Container bordered rounded style={S.contentLeftContainer}>
      <Container
        left={1.5}
        right={1.5}
        top={3}
        bottom={3}
        padded={2}
        bordered
        rounded
      >
        <Typography variant="heading" size="xlarge">
          Box 1 title
        </Typography>

        <ContentLeftMid />
        <ContentLeftBot />
      </Container>
    </Container>
  );
};

export default ContentLeft;
