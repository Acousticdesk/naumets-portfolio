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

import image1 from "../../public/projects/hkm/hero.jpg";
import image2 from "../../public/projects/hkm/cross_functional_collaboration.jpg";
import image3 from "../../public/projects/hkm/dream-team.jpg";
import image4 from "../../public/projects/hkm/data-informed.jpg";
import image5 from "../../public/projects/hkm/quantitative-to-design.jpg";
import image6 from "../../public/projects/hkm/ideation.jpg";
import image7 from "../../public/projects/hkm/fidelity.jpg";
import image8 from "../../public/projects/hkm/ab-testing-1.jpg";
import image9 from "../../public/projects/hkm/ab-testing-2.jpg";
import image10 from "../../public/projects/hkm/final-designs.jpg";

export default function Carefull() {
  return (
    <Page
      title="HUNKEMöLLER"
      description="Optimized advising with efficient student management, streamlined communication, and quick scheduling."
    >
      <ProjectIntro
        client="HUNKEMöLLER"
        role="UX Designer"
        year="2021-2022"
        title="Data-driven checkout redesign for seamless purchase experience."
      >
        <Card pressable={false} align="center" justify="center">
          <Image
            src={image1}
            alt="A timetable with courses for students"
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
              title="Cross-functional collaboration"
              text={
                <>
                  <Text>
                    As part of a larger initiative to redesign entire website,
                    we started with the most important part of the conversion
                    funnel, checkout flow. At that time I was engaged in this
                    project for over a year and my team was involved as an
                    embedded, agile team to ideate, execute, test, and ship
                    product solution that would streamline checkout process and
                    increase conversion rate.
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
      </CopyContainer>
      <AssetCard
        columns={1}
        caption="To ensure a seamless omni-channel experience, we worked closely across Hunkemöllers’ teams: e-commerce, web, app, integrations, research."
        image={image2}
        imageAlt="Highpoint"
      />
      <CopyContainer>
        <ProjectHighlight>
          <List>
            <List.Item
              title="My Role"
              text={
                <>
                  <Text>
                    To ensure a seamless omni-channel experience, we worked
                    closely across Hunkemöllers’ teams: e-commerce, web, app,
                    integrations, research.
                  </Text>
                </>
              }
            />
          </List>
        </ProjectHighlight>
      </CopyContainer>
      <AssetCard
        columns={1}
        caption="My dream team."
        image={image3}
        imageAlt="HKM"
      />
      <CopyContainer>
        <ProjectHighlight label="Discovery & Planning">
          <List>
            <List.Item
              title="Data-informed product discovery "
              text={
                <>
                  <Text>
                    To ensure users’ needs and behaviors drive key decisions, I
                    partnered with product owner and research team and we dived
                    into analytics together. Not only we identified the weak
                    spots of the checkout flow and learned key behavioral
                    insights of our users, but we also created a solid
                    foundation for facilitating the decision-making process.
                  </Text>
                </>
              }
            />
          </List>
        </ProjectHighlight>
      </CopyContainer>
      <AssetCard
        columns={1}
        caption="We examined the checkout behavior report as a starting point. It showed the percentage of users dropping off at every step of the checkout and signaled where to dig deeper."
        image={image4}
        imageAlt="HKM"
      />
      <CopyContainer>
        <ProjectHighlight>
          <List>
            <List.Item
              title="Translating quantitative data into design decisions"
              text={
                <>
                  <Text>
                    I helped to define our product design workflow by clarifying
                    day-to-day activities and deliverable expectations. I used
                    an experimentation framework to guide the team when defining
                    opportunities, formulating hypotheses, and testing design
                    variants.
                  </Text>
                </>
              }
            />
          </List>
        </ProjectHighlight>
      </CopyContainer>
      <AssetCard
        columns={1}
        caption="Experimentation framework we used to define and conduct data-driven A/B testing for making design decisions."
        image={image5}
        imageAlt="HKM"
      />
      <CopyContainer>
        <ProjectHighlight label="design process">
          <List>
            <List.Item
              title="Ideation & sketching"
              text={
                <>
                  <Text>
                    I facilitated ideation sessions with cross-functional team
                    and product leadership. Based on analytics data, we
                    uncovered opportunities and formulated hypotheses that
                    connected to key metrics and business goals.
                  </Text>
                </>
              }
            />
          </List>
        </ProjectHighlight>
      </CopyContainer>
      <AssetCard
        columns={1}
        caption="Following review and prioritization, I’d often dive head first into whiteboard sketching."
        image={image6}
        imageAlt="HKM"
      />
      <CopyContainer>
        <ProjectHighlight>
          <List>
            <List.Item
              title="Increasing fidelity"
              text={
                <>
                  <Text>
                    After vetting proposed solutions with main stakeholders, I’d
                    convert sketches into mid-fidelity wireframes so that we
                    could work through more nuanced scenarios and edge cases,
                    and identify the full set of screens needed.
                  </Text>
                  <Text css={{ margin: "$space300 0 0 0" }}>
                    For each opportunity we had several hypotheses that I turned
                    into design variants.
                  </Text>
                </>
              }
            />
          </List>
        </ProjectHighlight>
      </CopyContainer>
      <AssetCard columns={1} image={image7} imageAlt="HKM" />
      <CopyContainer>
        <ProjectHighlight>
          <List>
            <List.Item
              text={
                <>
                  <Text>
                    Once designs were ready and approved, we ran A/B tests on a
                    bi-weekly basis with a small portion of our user base. The
                    data we got back gave us a sense of how the designs were
                    performing with respect to our goals.
                  </Text>
                  <Text css={{ margin: "$space300 0 0 0" }}>
                    After that we rolled the winner design out to a larger part
                    of our users. But if results suggested we were on the wrong
                    track, we either abandoned the idea entirely or continue
                    working on our hypotheses and designs.
                  </Text>
                </>
              }
            />
          </List>
        </ProjectHighlight>
      </CopyContainer>
      <CopyContainer>
        <ProjectHighlight label="a/b testing" css={{ paddingTop: 0 }}>
          <List>
            <List.Item
              title="Prompting user to log in - iteration 1"
              text={
                <>
                  <Text>
                    As our main goal was to improve checkout conversion, we
                    sought for opportunities to reduce checkout steps and to
                    streamline filling the forms. We started with login, as it’s
                    the first step, guest users go through.
                  </Text>
                  <Text css={{ margin: "$space300 0 0 0" }}>
                    Hypothesis 1: By replacing login screen with a simple link
                    at the top of personal data form, we would reduce drop-off
                    rate at the beginning of checkout (variant A).
                  </Text>
                  <Text css={{ margin: "$space300 0 0 0" }}>
                    Hypothesis 2: By simplifying login step for guests and
                    asking registered users to enter password later, we would
                    reduce drop-off rate at the beginning of checkout (variant
                    B).
                  </Text>
                </>
              }
            />
          </List>
        </ProjectHighlight>
      </CopyContainer>
      <AssetCard columns={1} image={image8} imageAlt="HKM" />
      <CopyContainer>
        <ProjectHighlight>
          <List>
            <List.Item
              title="Prompting user to log in - iteration 2"
              text={
                <>
                  <Text>
                    The data showed that variant B performed better as less
                    users dropped off. In addition, we got more users to login,
                    than with control version, therefore likelihood of
                    completing the purchase was increased.
                  </Text>
                  <Text css={{ margin: "$space300 0 0 0" }}>
                    But the downside of variant B was that some users with
                    accounts dropped off instead of entering their password. For
                    this reason we decided to run one more test.
                  </Text>
                </>
              }
            />
          </List>
        </ProjectHighlight>
      </CopyContainer>
      <AssetCard columns={1} image={image9} imageAlt="HKM" />
      <CopyContainer>
        <ProjectHighlight>
          <List>
            <List.Item
              text={
                <>
                  <Text>
                    As data showed, by adding a “back door” and allowing users
                    to check out as guests even though they had accounts, we
                    increased conversion rate on this step.
                  </Text>
                </>
              }
            />
          </List>
        </ProjectHighlight>
      </CopyContainer>
      <CopyContainer>
        <ProjectHighlight label="final designs">
          <List>
            <List.Item
              title="Optimized checkout for better conversions"
              text={
                <>
                  <Text>
                    Following weeks we validated our hypotheses and tested
                    multiple design variations. By leveraging an experimentation
                    framework and a data-driven approach to design, we made a
                    bunch of evidence-based decisions, optimized the checkout
                    experience, and achieved conversion improvement.
                  </Text>
                </>
              }
            />
          </List>
        </ProjectHighlight>
      </CopyContainer>
      <AssetCard columns={1} image={image10} imageAlt="HKM" />
      <CopyContainer>
        <ProjectHighlight label="Impact">
          <List>
            <List.Item
              title="How redesign affected users and business"
              text={
                <>
                  <Text>
                    Experimentation at scale let us focus on the greatest asset
                    of the business: our users. By addressing their concerns and
                    frustrations with data-driven design we streamlined checkout
                    process and improved conversion rate by 1,4% ensuring
                    significant revenue growth.
                  </Text>
                </>
              }
            />
          </List>
        </ProjectHighlight>
      </CopyContainer>
      <CopyContainer>
        <ProjectHighlight label="What I Learned">
          <List>
            <List.Item
              title="Balancing short-term and long-term goals"
              text={
                <>
                  <Text>
                    Agile development often emphasizes quick iterations and
                    incremental improvements. However, A/B testing for design
                    decisions sometimes require longer testing periods to gather
                    statistically significant results.
                  </Text>
                  <Text css={{ margin: "$space300 0 0 0" }}>
                    Balancing the need for immediate changes and the time
                    required for thorough testing was a real challenge for the
                    team.
                  </Text>
                  <Text css={{ margin: "$space300 0 0 0" }}>
                    Overcoming it required effective communication,
                    collaboration, and adaptability. I regularly engaged with
                    stakeholders, involved data analysts, and promoted a
                    user-centered design approach.
                  </Text>
                </>
              }
            />
          </List>
        </ProjectHighlight>
      </CopyContainer>
      <CopyContainer>
        <ProjectHighlight label="over the years">
          <List>
            <List.Item
              title="My contributions "
              text={
                <>
                  <Text>
                    During few years that I was working with Hunkemöller, I
                    contributed into couple of other projects that had a huge
                    impact on their business:
                  </Text>
                  <Text>
                    <ul>
                      <li>
                        Expanded market reach and increased brand awareness in
                        North America by launching an accessibility-compliant US
                        website.
                      </li>
                      <li>
                        Lead end-to-end design process of Loyalty program, that
                        after release increased engagement rate by 11% and new
                        customer retention rate by 5%.
                      </li>
                    </ul>
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
