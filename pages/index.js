import { styled } from "../stitches.config";
import Box from "components/atoms/Box";
import Flex from "components/atoms/Flex";
import Content from "components/atoms/Content";
import Section from "components/atoms/Section";
import Text from "components/atoms/Text";
import Image from "next/image";
import Card from "components/atoms/Card";
import Icon from "components/atoms/Icon";
import ProjectCard from "components/molecules/ProjectCard";
import Page from "components/templates/Page";

export default function Home() {
  return (
    <Page>
      <Section css={{ padding: "$space700 0 0" }}>
        <Content>
          <Box>
            <Text preset="xLargeHeading" css={{ maxWidth: "28ch" }}>
              Aaron Porter designs products & systems to empower human agency.
            </Text>
          </Box>
        </Content>
      </Section>
      <Section>
        <Content>
          <Text
            preset="overline"
            css={{ color: "$gray500", paddingBottom: "$space500" }}
          >
            Selected Projects
          </Text>
          <Flex direction="row" gap>
            <ProjectCard
              title="Carefull"
              description="A service to enable the 45 million Americans that are financial caregivers."
              dates="2020-Present"
              role="Design Lead"
              link="/projects/carefull"
              layoutId="carefull"
              image={
                <Image
                  src="/projects/carefull/carefull_image_1@2x.png"
                  alt="Picture of a mother and son embracing eachother. A purple ring surrounds them showing protection."
                  width={552}
                  height={549}
                  layout="responsive"
                />
              }
            />
            <Flex direction="column" align="stretch" gap>
              <Card></Card>
              <Card></Card>
            </Flex>
          </Flex>
        </Content>
      </Section>
    </Page>
  );
}
