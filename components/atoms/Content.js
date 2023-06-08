import { styled, css } from "stitches.config";
import Box from "./Box";

export const contentWidth = "1128px";
export const contentGutter = "16px";

export const contentStyles = {
  width: `calc(100% - ${contentGutter} - ${contentGutter})`,
  maxWidth: `${contentWidth}`,
  margin: "0 auto",

  "@large": {
    width: "calc(100% - 80px)",
  },
};

export const Content = ({ children, css }) => {
  return <Box css={{ ...contentStyles, ...css }}>{children}</Box>;
};

export default Content;
