import Card from "components/atoms/Card";
import Content from "components/atoms/Content";
import Flex from "components/atoms/Flex";
import Section from "components/atoms/Section";
import Text from "components/atoms/Text";
import Browser from "../../public/images/Browser.svg";
import Box from "components/atoms/Box";
import CopyToClipboardButton from "components/molecules/CopyToClipboardButton";

const PortfolioPresentationCard = () => (
  <Section id="PortfolioPresentation">
    <Content>
      <Card pressable={false}>
        <Card.Content>
          <Flex direction="column" align="start" justify="between">
            <Flex direction="column" css={{ marginBottom: "$space400" }}>
              <Text preset="largeHeading" css={{ maxWidth: "25ch" }}>
                Contact me to learn more
              </Text>
              <Text preset="body" css={{ color: "$gray400", maxWidth: "35ch" }}>
                Reach out if you’d like to learn more about my work and career,
                or to simply chat about design. I’m also happy to talk about
                dogs, sci-fi books or hiking in Canadian Rockies.
              </Text>
            </Flex>
            <CopyToClipboardButton value="anastasiia.naumets@gmail.com">
              anastasiia.naumets@gmail.com
            </CopyToClipboardButton>
          </Flex>
        </Card.Content>
        <Box
          css={{
            width: "50%",
            padding: "$space500 0",
            transform: "translateX(25%)",
            "@lessThanMedium": { display: "none" },
          }}
        >
          <Browser></Browser>
        </Box>
      </Card>
    </Content>
  </Section>
);

export default PortfolioPresentationCard;
