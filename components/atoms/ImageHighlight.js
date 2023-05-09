import Box from "components/atoms/Box";
import Card from "components/atoms/Card";

// eslint-disable-next-line react/prop-types
function ImageHighlight({ text, img }) {
  return (
    <Card pressable={false} align="center" justify="center">
      {img}
      <Box css={{ maxWidth: "313px", padding: "24px" }}>{text}</Box>
    </Card>
  );
}

export default ImageHighlight;
