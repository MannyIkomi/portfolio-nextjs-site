import Head from 'next/head';
import Image from 'next/image';
import { Client } from '@notionhq/client';

import HomeStyles from '../styles/Home.module.scss';
import ButtonStyles from '../styles/Buttons.module.scss';
import LayoutStyles from '../styles/Layout.module.scss';
import profilePhoto from '../styles/ProfilePhoto.module.scss';

import ParagraphText from '../components/ParagraphText';
import ContentContainer from '../components/ContentContainer';
import SectionContainer from '../components/SectionContainer';
import PrimaryLink from '../components/PrimaryLink';
import Footer from '../components/Footer';

// TODO: add background motif to photo
// TODO: pull 404 page from old version
// TODO: Verify fonts are being served via public/static folder
// TODO: Twitch easteregg: use waveAnimated to indicate live on twitch, use lurk to indicate offline

export default function Home(props) {
  return (
    <div style={{ position: 'relative' }}>
      <Head>
        <title>Manny Ikomi, UX Designer</title>
        <meta
          name="description"
          content="UX Design consultant at IBM, lifetime learner, digital craftsman."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={HomeStyles.main}>
        <SectionContainer>
          <ContentContainer className={HomeStyles.photo}>
            <div className={profilePhoto.container}>
              <img
                className={profilePhoto.img}
                src="/headshot.jpg"
                alt="Manny smiling"
              />
            </div>
          </ContentContainer>

          <ContentContainer className={HomeStyles.intro}>
            <h1 className={HomeStyles.title}>
              I use <span className={HomeStyles.keyword}>design</span> to take{' '}
              <span className={HomeStyles.keyword}>people</span> from what-is,
              to what-ought-to-be.
            </h1>
          </ContentContainer>
        </SectionContainer>
        <SectionContainer>
          <ContentContainer className={HomeStyles.about}>
            <h2>Hi, I’m Manny!</h2>
            <h3>UX designer, lifetime learner, digital craftsman.</h3>
            <ParagraphText>
              I’m a cross-functional creative specializing in user experience
              that thrives at the intersections of design, technology and
              people. I'm currently working at IBM iX as an Associate UX Design
              consultant.
            </ParagraphText>
            <ParagraphText>
              When I’m not working you might be able to catch me streaming
              design and web development on twitch or rollerskating to finally
              get away from my desk!
            </ParagraphText>
            <ParagraphText>
              Projects and more content are coming soon! In the meantime you can
              see what I've been up to on Polywork…
            </ParagraphText>
            <PrimaryLink href="https://poly.mannyikomi.com">
              Polywork =>
            </PrimaryLink>
          </ContentContainer>
        </SectionContainer>
        <SectionContainer>
          {props.projects.map((project) => {
            const { properties: notionProps } = project;
            return (
              <ContentContainer>
                <h2>{notionProps.Name.title[0].plain_text}</h2>
                <ParagraphText>{project.id}</ParagraphText>
              </ContentContainer>
            );
          })}
        </SectionContainer>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  const notion = new Client({ auth: process.env.NOTION_SECRET });

  if (!notion) {
    throw new Error('Notion blew up');
  }

  const response = await notion.databases.query({
    database_id: process.env.NOTION_PORTFOLIO_DATABASE,
  });

  const portfolio = response.results;

  const responseChildren = portfolio.map(async (project) => {
    const content = await notion.blocks.children.list({
      block_id: project.id,
    });
    return { ...project, blockChildren: content };
  });

  const projects = await Promise.all(responseChildren);

  return {
    props: {
      projects,
    }, // will be passed to the page component as props
  };
}
