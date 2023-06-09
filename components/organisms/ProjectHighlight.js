import Flex from "components/atoms/Flex";
import Content from "components/atoms/Content";
import Section from "components/atoms/Section";
import Text from "components/atoms/Text";

const ProjectHighlight = ({ children, heading, label = "", css = {} }) => (
  <Section css={css}>
    {(label || heading) && (
      <Content>
        <Flex direction="column" css={{ paddingBottom: "$space400" }}>
          {label && (
            <Text preset="overline" css={{ color: "$accent" }}>
              {label}
            </Text>
          )}
          {heading && (
            <Text
              preset="largeHeading"
              css={{ maxWidth: "35ch", paddingBottom: "$space200" }}
            >
              {heading}
            </Text>
          )}
        </Flex>
      </Content>
    )}
    {children}
  </Section>
);

export default ProjectHighlight;
