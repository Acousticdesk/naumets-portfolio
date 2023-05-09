import { styled } from "stitches.config";
// import { motion } from "framer-motion";
import Box from "./Box";

const CopyContainer = styled(Box, {
  maxWidth: "640px",
  margin: "0 auto",
  "@lessThanMedium": {
    maxWidth: "100%",
  },
});

export default CopyContainer;
