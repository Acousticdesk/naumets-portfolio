import Box from "components/atoms/Box";
import Flex from "components/atoms/Flex";
import Content from "components/atoms/Content";
import Section from "components/atoms/Section";
import Text from "components/atoms/Text";
import Image from "next/image";
import FeaturedProjectCard from "components/molecules/FeaturedProjectCard";
import Page from "components/templates/Page";
import Grid from "components/atoms/Grid";
import Landing from "components/molecules/Landing";

import image1 from "../public/projects/highpoint/highpoint_preview.jpg";

export default function Home() {
  return (
    <Page description="Anastasiia Naumets designs products & systems to empower human agency. Via qualitative research, UX methods, visual design, & engineering — he builds software interfaces for human interaction.">
      <Landing>
        <Content>
          <Box>
            <Text preset="xLargeHeading" css={{ maxWidth: "28ch" }}>
              Anastasiia Naumets designs products & systems to empower human
              agency.
            </Text>
          </Box>
        </Content>
      </Landing>
      <Section css={{ paddingTop: "$space400" }}>
        <Content>
          <Text
            preset="overline"
            css={{ color: "$gray300", marginBottom: "$space300" }}
          >
            Featured Projects
          </Text>
          <Grid columns={2}>
            <FeaturedProjectCard
              title="Highpoint"
              description="Optimized advising with efficient student management, streamlined communication, and quick scheduling."
              dates="2023"
              role="Design Lead"
              link="/projects/highpoint"
              image={
                <Image
                  src={image1}
                  alt="A timetable with courses for students"
                  layout="responsive"
                  priority
                  placeholder="blur"
                />
              }
            />
            <Flex direction="column" jus gap>
              <FeaturedProjectCard
                title="HUNKEMöLLER"
                dates="2021-2022"
                role="UX Designer"
                link="/projects/hkm"
                // image={
                //   <Image
                //     src="/projects/wayfair/wayfair_logo@2x.png"
                //     alt="Logo for Wayfair"
                //     width={48}
                //     height={48}
                //     layout="intrinsic"
                //     priority
                //   />
                // }
              />
              <FeaturedProjectCard
                title="Nokas"
                dates="2019"
                role="UX Designer"
                link="/projects/nokas"
              />
            </Flex>
          </Grid>
        </Content>
      </Section>
      {/*<Section>*/}
      {/*  <Content>*/}
      {/*    <Text*/}
      {/*      preset="overline"*/}
      {/*      css={{ color: "$gray300", marginBottom: "$space300" }}*/}
      {/*    >*/}
      {/*      Other projects*/}
      {/*    </Text>*/}
      {/*    <Grid columns={2}>*/}
      {/*      <ProjectCard*/}
      {/*        title="Personal Website"*/}
      {/*        description="Featured on Awwwards, Siteinspire, Mindsparkle, & many more."*/}
      {/*        dates="2016"*/}
      {/*        link="http://2016.aaronporter.co"*/}
      {/*        imageAlt="Man sitting on a stool with the text 'Aaron.' on top of the image"*/}
      {/*        image={image3}*/}
      {/*      />*/}
      {/*      <ProjectCard*/}
      {/*        title="2001: A VR Space Odyssey"*/}
      {/*        description="Built a recreation of an iconic scene using Unity & C4D."*/}
      {/*        dates="2016"*/}
      {/*        link="https://vimeo.com/209768060?ref=tw-share"*/}
      {/*        imageAlt="A virtual reality scene of the inside of a futuristic centrifuge."*/}
      {/*        image={image4}*/}
      {/*      />*/}
      {/*      <ProjectCard*/}
      {/*        title="Beach"*/}
      {/*        description="Art Direction & Video Production for an album campaign."*/}
      {/*        dates="2015"*/}
      {/*        link="https://www.behance.net/gallery/30857527/Beach"*/}
      {/*        imageAlt="A person's head sticking out of a body of water looking at the sunset."*/}
      {/*        image={image5}*/}
      {/*      />*/}
      {/*    </Grid>*/}
      {/*  </Content>*/}
      {/*</Section>*/}
    </Page>
  );
}
