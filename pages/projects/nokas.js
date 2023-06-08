import Text from "components/atoms/Text";
import Image from "next/image";
import Page from "components/templates/Page";
import AssetCard from "components/molecules/AssetCard";
import ProjectHighlight from "components/organisms/ProjectHighlight";
import ProjectIntro from "components/organisms/ProjectIntro";
import Card from "components/atoms/Card";
// import Box from "components/atoms/Box";
// import ImageHighlight from "components/atoms/ImageHighlight";
// eslint-disable-next-line import/no-named-as-default
// import Content from "components/atoms/Content";
// import ConfidentialBanner from "components/molecules/ConfidentialBanner";
import React from "react";
// import TextCard from "components/molecules/TextCard";
import PortfolioPresentationCard from "components/organisms/PortfolioPresentationCard";
import List from "../../components/organisms/List";
import CopyContainer from "../../components/atoms/CopyContainer";

import image1 from "../../public/projects/nokas/1.png";
import image2 from "../../public/projects/nokas/2.jpg";
import image3 from "../../public/projects/nokas/3.jpg";
import image4 from "../../public/projects/nokas/4.jpg";
import image5 from "../../public/projects/nokas/5.jpg";
import image6 from "../../public/projects/nokas/6.jpg";
import image7 from "../../public/projects/nokas/7.jpg";

export default function Nokas() {
  return (
    <Page
      title="Nokas"
      description="We started with an opportunity and produced an automation solution for a complex organization."
    >
      <ProjectIntro
        client="Nokas"
        role="UX Designer"
        year="2019"
        title="We started with an opportunity and produced an automation solution for a complex organization."
      >
        <Card pressable={false} align="center" justify="center">
          <Image
            src={image1}
            alt="Nokas project"
            // layout="responsive"
            priority
            placeholder="blur"
            // width={790}
            // height={466}
          />
        </Card>
      </ProjectIntro>
      <CopyContainer>
        <ProjectHighlight label="About The Project">
          <List>
            <List.Item
              title="Automating and enhancing"
              text={
                <>
                  <Text>
                    Nokas is one of the Norway’s largest pest control company,
                    offering a big range of pest control solutions. In order to
                    manage and carry out all the processes, they has been using
                    multiple distributed apps.
                  </Text>
                  <Text css={{ margin: "$space300 0 0 0" }}>
                    With the help of our team, Nokas wanted to build a single
                    app that would automate manual work and cover organization’s
                    needs providing optimal user experience to their employees.
                  </Text>
                  <Text
                    preset="bodySmall"
                    css={{ color: "$gray300", margin: "16px 0 0 0" }}
                  >
                    To comply with my non-disclosure agreement, I have omitted
                    confidential information in this case study. All information
                    in this case study is my own.
                  </Text>
                </>
              }
            />
          </List>
        </ProjectHighlight>
        <ProjectHighlight>
          <List>
            <List.Item
              title="My Role"
              text={
                <Text>
                  Over the course of 6 months, I led research and design efforts
                  building a new app from ideation to delivery, employing an
                  iterative approach that involved close collaboration with
                  product, engineering, and other stakeholders.
                </Text>
              }
            />
          </List>
        </ProjectHighlight>
      </CopyContainer>
      <AssetCard
        columns={1}
        caption="Packed my things and hopped on a plane to Oslo to start discovery work."
        image={image2}
        imageAlt="Nokas"
      />
      <CopyContainer>
        <ProjectHighlight label="onsite discovery">
          <List>
            <List.Item
              title="Observing users in their own environments"
              text={
                <>
                  <Text>
                    I partnered with the product manager & business analyst, as
                    we embarked on a discovery journey to Norway, where we
                    conducted contextual inquiry to gain valuable insights from
                    users in their natural environment.
                  </Text>
                  <Text css={{ margin: "$space300 0 0 0" }}>
                    With our research findings in hand, we synthesized the data
                    into an affinity map, capturing the diverse user needs and
                    pain points. To ensure accuracy and alignment, we then
                    validated our map with key stakeholders, fostering a
                    collaborative approach to decision-making.
                  </Text>
                </>
              }
            />
          </List>
        </ProjectHighlight>
      </CopyContainer>
      <AssetCard
        columns={1}
        caption="Spending a week onsite and conducting contextual inquiries helped our team discover user activities, needs, challenges and concerns."
        image={image3}
        imageAlt="Nokas"
      />
      <CopyContainer>
        <ProjectHighlight label="data analysis">
          <List>
            <List.Item
              title="Defining persona and mapping experiences"
              text={
                <>
                  <Text>
                    Working closely with business analyst, I visualized the
                    organization's processes using a service blueprint, which
                    helped us identify areas for improvement. The stakeholders
                    enthusiastically embraced our ideas after I presented the
                    future state of the map.
                  </Text>
                </>
              }
            />
          </List>
        </ProjectHighlight>
      </CopyContainer>
      <AssetCard columns={1} image={image4} imageAlt="Nokas" />
      <AssetCard
        columns={1}
        caption="I created personas to ensure that user’s goals and behaviors would guide our design decisions."
        image={image5}
        imageAlt="Nokas"
      />
      <CopyContainer>
        <ProjectHighlight>
          <List>
            <List.Item
              title="Planning and diving into design"
              text={
                <>
                  <Text>
                    Taking into account the ever-present constraints of time,
                    resources, and technical limitations, we carefully curated
                    the roadmap, ensuring a balance between our vision and
                    feasibility.
                  </Text>
                  <Text css={{ margin: "$space300 0 0 0" }}>
                    Then I dove into creating mid-fidelity wireframes. I
                    reviewed them with the dev lead, validating for feasibility
                    and alignment with our development capabilities. The
                    stakeholders appreciated the systematic approach we took to
                    align our product vision with the available resources and
                    technical considerations.
                  </Text>
                </>
              }
            />
          </List>
        </ProjectHighlight>
      </CopyContainer>
      <AssetCard columns={1} image={image6} imageAlt="Nokas" />
      <CopyContainer>
        <ProjectHighlight>
          <List>
            <List.Item
              title="Streamlining design and development"
              text={
                <>
                  <Text>
                    After careful consideration, we made the strategic choice to
                    use the Ant Design System, that would enhance consistency,
                    efficiency, and scalability in our design process.
                  </Text>
                  <Text css={{ margin: "$space300 0 0 0" }}>
                    The seamless integration of Ant Design System significantly
                    streamlined our design and development workflow, allowing us
                    to maximize productivity and collaboration.
                  </Text>
                  <Text css={{ margin: "$space300 0 0 0" }}>
                    We spent next few weeks immersed in the design process for
                    the forthcoming Nokas app, ensuring a robust and
                    user-centric experience.
                  </Text>
                </>
              }
            />
          </List>
        </ProjectHighlight>
      </CopyContainer>
      <AssetCard columns={1} image={image7} imageAlt="Nokas" />
      <CopyContainer>
        <ProjectHighlight label="Results">
          <List>
            <List.Item
              title="Making impact on entire organization "
              text={
                <>
                  <Text>
                    The result was a highly refined and user-friendly
                    application that seamlessly integrated user needs and
                    behaviors. By improving the company's operations, we
                    transformed Nokas into a more efficient and streamlined
                    organization. Through the development of a centralized app
                    that automated manual work and met the organization's needs,
                    we provided an optimal user experience for employees. Our
                    research and design efforts ensured that our decisions were
                    user-centered and aligned with stakeholder requirements.
                  </Text>
                </>
              }
            />
          </List>
        </ProjectHighlight>
      </CopyContainer>
      <PortfolioPresentationCard />
    </Page>
  );
}
