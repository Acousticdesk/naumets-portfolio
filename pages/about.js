import Card from "components/atoms/Card";
import Content from "components/atoms/Content";
import Section from "components/atoms/Section";
import Text from "components/atoms/Text";
import Flex from "components/atoms/Flex";
import PortfolioPresentationCard from "components/organisms/PortfolioPresentationCard";
import Page from "components/templates/Page";
import Image from "next/image";
import Box from "components/atoms/Box";
import LinkTo from "components/utilities/LinkTo";
import { styled } from "stitches.config";
import Landing from "components/molecules/Landing";
import AssetCard from "components/molecules/AssetCard";

const LinkText = styled("span", {
  color: "$accent",
});

const Link = ({ href, children }) => (
  <LinkTo href={href} displayContents>
    <LinkText>{children}</LinkText>
  </LinkTo>
);

export default function About() {
  return (
    <Page
      title="About Me"
      description="Anastasiia Naumets is a Product Designer using research & data to craft unique, measurable experiences that drive business impact."
    >
      <Landing>
        <Content>
          <Box css={{ marginBottom: "$space500" }}>
            <Text
              preset="xLargeHeading"
              css={{ maxWidth: "30ch", width: "100%" }}
            >
              Anastasiia Naumets is a Product Designer using research & data to
              craft unique, measurable experiences that drive business impact.
            </Text>
          </Box>
          <Flex align="center" justify="center">
            <Image
              src="/images/about_1.jpg"
              alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
              width={555}
              height={311}
            />
          </Flex>
          <Box css={{ margin: "0 auto", width: 555 }}>
            <Text css={{ margin: "48px 0 16px" }} preset="heading">
              Hi there, nice to meet you!
            </Text>
            <Text>
              I’m Anastasiia and usually go by “Nastia”✌️. I’m a Product
              Designer currently working at QuoteToMe.
              <br />
              <br />
              In my previous roles, I designed a major optimization of degree
              management tool at HighPoint; delivered exceptional experiences
              for global brands such as Goodwill, Breville, Omron, Chefsteps,
              Hunkemöller at Astound Commerce; led the design of an automation
              solution that improved processes and staff performance at Nokas.
              <br />
              <br />
              I’m happiest when I exchange my thoughts and experiences with
              others and I do that by educating entry-level designers at
              Projector Institute, where they learn UX basics and complete their
              first real-world projects.
              <br />
              <br />
              I’m based in Edmonton, AB, but originally from tiny town of Rivne,
              Ukraine. I have a big love for traveling, hiking, reading Sci-Fi,
              and taking long walks with my dogs.
            </Text>
          </Box>
          <Section>
            <Flex gap align="start">
              <Flex direction="column" gap>
                <AssetCard>
                  <Image src="/images/about_2.jpg" width={552} height={736} />
                </AssetCard>
                <AssetCard>
                  <Image src="/images/about_4.jpg" width={552} height={736} />
                </AssetCard>
                <AssetCard>
                  <Image src="/images/about_6.jpg" width={552} height={736} />
                </AssetCard>
              </Flex>
              <Flex direction="column" gap>
                <AssetCard>
                  <Image src="/images/about_3.jpg" width={552} height={736} />
                </AssetCard>
                <AssetCard>
                  <Image src="/images/about_5.jpg" width={552} height={736} />
                </AssetCard>
                <AssetCard>
                  <Image src="/images/about_7.jpg" width={552} height={736} />
                </AssetCard>
              </Flex>
            </Flex>
          </Section>
          <PortfolioPresentationCard />
          {/*<Section>*/}
          {/*  <Box css={{ margin: "0 auto", textAlign: "center" }}>*/}
          {/*    <Text preset="largeHeading">*/}
          {/*      That's all. Hire me or something.*/}
          {/*    </Text>*/}
          {/*    <Box css={{ marginTop: "$space400" }}>*/}
          {/*      <CopyToClipboardButton value="hello@aaronporter.co">*/}
          {/*        hello@aaronporter.co*/}
          {/*      </CopyToClipboardButton>*/}
          {/*    </Box>*/}
          {/*  </Box>*/}
          {/*</Section>*/}
        </Content>
      </Landing>
    </Page>
  );
}
