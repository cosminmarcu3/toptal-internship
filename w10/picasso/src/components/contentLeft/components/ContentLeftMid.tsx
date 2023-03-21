import { Container, Typography } from "@toptal/picasso";

import { Code16 } from "@toptal/picasso/Icon";

const ContentLeftMid = () => (
  <Container flex gap={0.5} alignItems="center">
    <Code16 />
    <Typography color="green">Hover over the icon for more info</Typography>
  </Container>
);

export default ContentLeftMid;
