import Text from "components/atoms/Text";
import Image from "next/image";
import Carousel from "components/molecules/Carousel";
import Page from "components/templates/Page";
import AssetCard from "components/molecules/AssetCard";
import ProjectHighlight from "components/organisms/ProjectHighlight";
import ProjectIntro from "components/organisms/ProjectIntro";
import Card from "components/atoms/Card";
import Box from "components/atoms/Box";
import ImageHighlight from "components/atoms/ImageHighlight";
// eslint-disable-next-line import/no-named-as-default
import Content from "components/atoms/Content";
// import ConfidentialBanner from "components/molecules/ConfidentialBanner";
import React from "react";
import TextCard from "components/molecules/TextCard";
import PortfolioPresentationCard from "components/organisms/PortfolioPresentationCard";
import List from "../../components/organisms/List";
import CopyContainer from "../../components/atoms/CopyContainer";

import image1 from "../../public/projects/highpoint/highpoint_preview.jpg";
import image2 from "../../public/projects/highpoint/goal_setting_canvas.png";
import image3 from "../../public/projects/highpoint/kickoff.jpg";
import image4 from "../../public/projects/highpoint/measurement_plan.jpg";
import image5 from "../../public/projects/highpoint/inefficient_scheluding.jpg";
import image6 from "../../public/projects/highpoint/error_prone_env.jpg";
import image7 from "../../public/projects/highpoint/lack_transparency.jpg";
import image8 from "../../public/projects/carefull/Carefull_UX_2@2x.png";
import image9 from "../../public/projects/carefull/Carefull_UX_3@2x.png";
import image10 from "../../public/projects/carefull/Carefull_UX_4@2x.png";
import image11 from "../../public/projects/carefull/Carefull_UX_5@2x.png";

export default function Carefull() {
  return (
    <Page
      title="Highpoint"
      description="Optimized advising with efficient student management, streamlined communication, and quick scheduling."
    >
      <ProjectIntro
        client="Highpoint"
        role="Design Lead"
        year="2023"
        title="Empowering financial caregivers with simplicity, safety, and transparency."
      >
        {/*<ConfidentialBanner css={{ marginBottom: "$space400" }} />*/}
        <Card pressable={false} align="center" justify="center">
          <Image
            src={image1}
            alt="A timetable with courses for students"
            // layout="responsive"
            priority
            placeholder="blur"
            width={790}
            height={466}
          />
        </Card>
      </ProjectIntro>
      <CopyContainer>
        <ProjectHighlight label="About The Project">
          <List>
            <List.Item
              title="Intro"
              text={
                <>
                  <Text>
                    Advisee Relationship Management (ARM) helps advisors to
                    serve more students, more effectively by bringing all
                    student information into one place, and providing tools for
                    proactive outreach and collaborative degree planning.
                  </Text>
                  <Text css={{ margin: "24px 0 0 0" }}>
                    Within just 4 months we completed a major optimization that
                    led to improvement of main product metrics and increase of
                    overall user satisfaction. As a consequence, we scaled
                    HighPoint business value by attracting new clients.
                  </Text>
                  <Text
                    preset="bodySmall"
                    css={{ color: "$gray300", margin: "16px 0 0 0" }}
                  >
                    To comply with my non-disclosure agreement, I have omitted
                    and obfuscated confidential information in this case study.
                    All information in this case study is my own.
                  </Text>
                </>
              }
            />
            <List.Item
              title="My Role"
              text={
                <>
                  As Lead Product Designer I drove end-to-end iterative design
                  process including strategy, research, visual design, testing.
                  <Text css={{ margin: "24px 0 0 0" }}>
                    Within just 4 months we completed a major optimization that
                    led to improvement of main product metrics and increase of
                    overall user satisfaction. As a consequence, we scaled
                    HighPoint business value by attracting new clients.
                  </Text>
                </>
              }
            />
          </List>
        </ProjectHighlight>
      </CopyContainer>
      <Content>
        <Text
          preset="largeHeading"
          css={{
            maxWidth: "35ch",
            paddingBottom: "$space200",
            margin: "0 auto",
            display: "block",
          }}
        >
          Proactive, holistic advising.... not just yet.
        </Text>
      </Content>
      <CopyContainer>
        <ProjectHighlight label="Challenge">
          <List>
            <List.Item
              title="Bridging user goals and business value"
              text={
                <>
                  <Text>
                    Our long-term goal was to supercharge academic advisors for
                    student success with impactful design optimizations and
                    regain competitive advantage on the market.
                  </Text>
                  <Text css={{ margin: "24px 0 0 0" }}>
                    We broke it down into smaller and more specific goals using
                    that would ultimately contribute to achieving our long-term
                    aspiration. Hence we aimed to:
                  </Text>
                  <Text>
                    <ol>
                      <li>
                        Boost advising management by quick and efficient
                        appointment scheduling.
                      </li>
                      <li>
                        Enable streamlined advisor-student communication with
                        templates, bulk messaging and smart alerts.
                      </li>
                      <li>
                        Ensure student success by sharing appropriate
                        information across department.
                      </li>
                    </ol>
                  </Text>
                </>
              }
            />
          </List>
        </ProjectHighlight>
      </CopyContainer>
      <AssetCard
        columns={1}
        caption="Goal setting canvas ensured our design process is focused on the user, aligned with the team, and has clear goals and action items."
        image={image2}
        imageAlt="Highpoint"
      />
      <CopyContainer>
        <ProjectHighlight label="Kickoff">
          <List>
            <List.Item
              title="Strategizing"
              text={
                <>
                  <Text>
                    To get started, I partnered with the product manager to
                    align our vision, define available resources and shape a
                    high-level roadmap. We strived to maintain human-centered
                    and data-driven approach while solving the problems in a
                    structured and iterative manner.
                  </Text>
                  <Text css={{ margin: "24px 0 0 0" }}>
                    In order to provide the team with a simple framework for
                    collaborative problem-solving, I introduced Double Diamond
                    approach that fit perfectly into our context.
                  </Text>
                </>
              }
            />
          </List>
        </ProjectHighlight>
      </CopyContainer>
      <AssetCard
        columns={1}
        caption="As we had a tight timeline, it was extremely important to build a high-level roadmap and ensure that the team stays focused on tasks at hand."
        image={image3}
        imageAlt="Highpoint"
      />
      <CopyContainer>
        <ProjectHighlight>
          <List>
            <List.Item
              text={
                <>
                  In the meantime, it was important to define success criteria,
                  so I investigated essential product metrics. I had several
                  sessions with our data analyst until we managed to outline a
                  comprehensive measurement plan.
                </>
              }
            />
          </List>
        </ProjectHighlight>
      </CopyContainer>
      <AssetCard
        columns={1}
        caption="A snapshot of a measurement plan for the ARM redesign that guided our design decisions."
        image={image4}
        imageAlt="Highpoint"
      />
      <CopyContainer>
        <ProjectHighlight label="Discovery">
          <List>
            <List.Item
              title="Framing the problem space"
              text={
                <>
                  <Text>
                    To emphasize and dig deeper into user’s context I conducted
                    several interviews with academic advisors. Even though I got
                    valuable user insights from the interviews, I decided to
                    cross-validate them using existing feedback from the
                    institutions.
                  </Text>
                  <Text css={{ margin: "24px 0 0 0" }}>
                    Data that I synthesized confirmed our initial hypotheses and
                    revealed additional concerns:
                  </Text>
                </>
              }
            />
          </List>
        </ProjectHighlight>
      </CopyContainer>
      <Content>
        <ImageHighlight
          img={
            <Image
              src={image5}
              alt="Highpoint"
              priority
              placeholder="blur"
              width={739}
              height={430}
            />
          }
          text={
            <>
              <Text>Inefficient scheduling</Text>
              <Text css={{ margin: "24px 0 0 0" }}>
                Advisors cannot set up custom appointment hours and lack
                awareness about workload for the week
              </Text>
            </>
          }
        />
      </Content>
      <Content>
        <Box css={{ padding: "80px 0 0 0" }}>
          <ImageHighlight
            img={
              <Image
                src={image6}
                alt="Highpoint"
                priority
                placeholder="blur"
                width={739}
                height={430}
              />
            }
            text={
              <>
                <Text>Error-prone environment</Text>
                <Text css={{ margin: "24px 0 0 0" }}>
                  Advisors spend too much time on adding appointment summaries
                  often by retyping similar copy.
                </Text>
              </>
            }
          />
        </Box>
      </Content>
      <Content>
        <Box css={{ padding: "80px 0 0 0" }}>
          <ImageHighlight
            img={
              <Image
                src={image7}
                alt="Highpoint"
                priority
                placeholder="blur"
                width={739}
                height={430}
              />
            }
            text={
              <>
                <Text>Lack of transparency </Text>
                <Text css={{ margin: "24px 0 0 0" }}>
                  Students risk missing critical updates that define their
                  academic success.
                </Text>
              </>
            }
          />
        </Box>
      </Content>
      <ProjectHighlight
        heading={
          <>
            In the meantime, it was important to define success criteria, so I
            investigated essential product metrics. I had several sessions with
            our data analyst until we managed to outline a comprehensive
            measurement plan.
          </>
        }
      >
        <Carousel>
          <TextCard
            text="Conducted 1:1 qualitative research sessions with financial caregivers to create a ground truth by which to guide product decisions."
            iconName="Chat"
          />
          <TextCard
            text="Aided our head of growth in the formulation of quantitative studies to better understand our market and larger customer trends."
            iconName="PieChart"
          />
          <TextCard
            text="Built foundational artifacts to give our team insight into the experiences, responsibilities, and needs of our customers."
            iconName="Notebook"
          />
          <TextCard
            text="Conducted synchronous & asynchronous usability tests on our interface touchpoints."
            iconName="CircleWavyCheck"
          />
          <TextCard
            text="Met with users to understand how our product fit into their life & guide iterations of our offering."
            iconName="Smiley"
          />
          <TextCard
            text="Ran workshops with our founding team to shape our company & product thinking."
            iconName="StickyNote"
          />
        </Carousel>
      </ProjectHighlight>
      <ProjectHighlight
        heading={
          <>
            I crafted a brand that communicates trust, understanding, and a
            focus on generational bonds.
          </>
        }
      >
        <Carousel>
          <AssetCard
            columns={1}
            caption="Our wordmark needed to feel mature & institutional, like a bank, while retaining a sense of approachability and warmth."
            image={image2}
            imageAlt="Highpoint"
          />

          <AssetCard
            columns={1}
            caption="Our symbol conveys the idea of independent parts of a family coming together to create a larger whole."
            image={image3}
            imageAlt="An icon that contains 8 dots arranged in a circle on a purple background."
          />
          <AssetCard
            columns={2}
            caption={
              <>
                Inspired by the feeling of sorting through the family photo
                album, we utilized a mixture of modern & archival photos to
                create a visual motif that evokes ideas of family, generations,
                and the things that connect them.
              </>
            }
            image={image4}
            imageAlt="An image of a modern mother with a baby and a retro family portrait. Connected with a line to show a family bond.  "
          />
          <AssetCard
            columns={1}
            caption="Built supporting material to extend our brand off the screen."
            image={image5}
            imageAlt="A stack of print material"
          />
          <AssetCard
            columns={1}
            caption="Helped guide the creation of educational content."
            image={image6}
            imageAlt="A book with the title 'The Financial Caregiving Roadmap'"
          />
          <AssetCard caption="Designed & built all aspects of our website. I assembled templates & styles in Webflow to enable our marketing team to independently test & evolve our communication efforts over time.">
            <video
              autoPlay="autoplay"
              loop="loop"
              muted
              playsInline="playsinline"
              controls={false}
              style={{ width: "100%", pointerEvents: "none" }}
            >
              <source
                src="/projects/carefull/Carefull_Website_Home.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </AssetCard>
        </Carousel>
      </ProjectHighlight>
      <ProjectHighlight
        heading={
          <>
            Designed every experience touchpoint across the service in lock-step
            with engineering, business, & growth.
          </>
        }
      >
        <Carousel>
          <TextCard
            text="Uncovered user journeys, mapped flows, built wireframes, and constructed prototypes to shape our product."
            iconName="TreeStructure"
          />
          <TextCard
            text="Used quantitative & qualitative data from our customers to iterate and ship constant UX improvements."
            iconName="ArrowsClockwise"
          />
          <AssetCard
            columns={2}
            caption="Designed every screen & state of the Carefull App. An experience that gives children increased insight into the financial life of their parent."
            imageAlt="Multiple images of an app experience"
            image={image7}
          />
          <AssetCard
            columns={1}
            caption="Users receive timely alerts so that they can worry less and insure things are going smoothly."
            imageAlt="An iphone lockscreen with an alert that says 'Mom's bill State Famr for $89.87 is due tomorrow. You pay via autopay.'"
            image={image8}
          />
          <AssetCard
            columns={1}
            caption="The app provides a set of intelligent alerts that look for patterns in their financial behavior and calls out when there may be an issue."
            imageAlt="An alert that says 'Duplicate Transactions' with two similar transactions from Walgreens"
            image={image9}
          />
          <AssetCard
            columns={2}
            caption="Designed email template to keep our messaging with users on brand and effective."
            imageAlt="Three emails that display various pieces of information relevant to signing up for an app."
            image={image10}
          />
          <AssetCard
            columns={2}
            caption="Built and managed our design component system to insure consistency and easy iteration. Worked closely with engineers & contributed directly to our React Native codebase."
            imageAlt="A bunch of interface elements that would appear in an app"
            image={image11}
          />
        </Carousel>
      </ProjectHighlight>
      <PortfolioPresentationCard />
    </Page>
  );
}
