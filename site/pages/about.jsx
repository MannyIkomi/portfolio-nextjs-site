/** @jsx jsx */
import { css, jsx } from '@emotion/core'
// Modules
import React, { Fragment } from 'react'
import { cms } from '../util/http'
//
// Components
import PageLayout from '../components/pageLayout'
import { InlineLink } from '../components/navigation/navigation'
//
// Styles
import { mixin, color, typography, colors, linkStylingBase } from '../styles'
import { Inspiration } from '../components/Inspiration'
import Axios from 'axios'
import Markdown from '../components/markdown'
import { inspirationProps } from '../util/props'
//
const About = props => {
  const { inspirations, about } = props

  return (
    <PageLayout
      title={'Hi 🤓'}
      description={`With over 5 years of experience in the print
      industry, I've gained the skills required to craft design ideas into a
      high quality product.`}
      isSideMenuDisabled={false}
      persistDockedMenu={false}
    >
      <section
        // about heading + paragraph blurb
        css={css`
          display: flex;
          ${mixin.flex('column')};
          background-color: ${colors.darkGray};
          min-height: 100vh;
          header {
            padding: 0;
          }
          p {
            padding: 2rem;
          }

          ${mixin.tabletMedia(`
            display: grid;
            grid-template-areas: 'headshot h1 h1' 'negative body body';
            grid-template-columns: 1fr 1fr 1fr;
          `)}
        `}
      >
        <div
          // headshot portrait
          css={css`
            align-self: flex-end;
            margin: 0 0 auto auto;
            position: relative;
            width: 50%;
            max-width: 320px;

            &::after {
              content: url('/static/motif-bottom.svg');
              display: block;
              position: absolute;
              bottom: -4px;
              left: -1px;
              ${mixin.size('100%', 'auto')};
            }

            ${mixin.tabletMedia(`
                grid-area: headshot;
                width: initial;
                margin: 0;
                align-self: flex-end;
                justify-self: flex-end;
                // justify-content: flex-end; 
                // align-items: center;
                &::after {
                  content: url('/static/motif-bottom.svg');
                  display: block;
                  position: absolute;
                  bottom: -4px;
                  // left: 0;
                  ${mixin.size('101%', 'auto')};
                }
    

              `)}
          `}
        >
          <img
            src="static/headshot-touchup.jpg"
            alt="Photo of Manny"
            css={css`
              display: block;
              ${mixin.size('100%', 'auto')};
            `}
          />
        </div>
        <h1
          className={`page-head`}
          style={{ padding: `0 2rem` }}
          css={css`
            font-family: ${typography.serif};
            font-weight: 300;
            text-transform: lowercase;

            color: ${colors.orange};

            ${mixin.tabletMedia(`
              grid-area: h1;
              align-self: flex-end;
            `)}
          `}
        >
          {about.heading}
          {/* Design thinker,
          <br /> lifetime learner,
          <br /> adoring guncle. */}
        </h1>

        <Markdown
          styles={css([
            {
              color: 'white'
            }
          ])}
        >
          {about.bio}
        </Markdown>
        {/* <p
          className={`bio`}
          css={css`
            color: ${colors.muteGray};
            font-size: 1.25rem;

            ${mixin.tabletMedia(`
            max-width: 50ch;
            grid-area: body;
          `)}
          `}
        >
          My background in design comes from a combination of technical training
          and formal education, including printing, prepress, problem solving
          and concept development. With over 5 years of experience in the print
          industry, I've gained the skills required to craft design ideas into a
          high quality product.
          <br />
          In recent years I’ve been learning web development as a new creative
          medium to build websites and user interfaces. 🤓
          <br />
          <strong
            css={css`
              font-weight: 800;
            `}
          >
            In short, I like making great things for good people.
          </strong>
        </p> */}
      </section>
      <section
        className="quote viewport"
        css={css`
          ${mixin.flex('column')}
          padding: 2rem;
          justify-content: center;

          blockquote {
            margin: 1rem 0;
            font-weight: 100;
            font-size: 3rem;
            line-height: 1.25;
            max-width: 35ch;
            color: ${colors.darkGray};
          }

          cite {
            display: block;
            margin: 1rem 0;

            font-family: ${typography.serif};
            font-weight: 100;
            font-size: 1.5rem;
            font-style: italic;
            color: inherit;
            text-align: right;
          }
        `}
      >
        <blockquote>
          “A designer is an emerging synthesis of artist, inventor, mechanic,
          objective economist, and evolutionary strategist.”
        </blockquote>

        <cite>— R. Buckminster Fuller</cite>
      </section>
      <section
        // designer inspiration
        css={css`
          background-color: ${colors.darkGray};
          padding: 2rem;
          h2 {
            font-family: ${typography.serif};
            color: ${colors.orange};
            font-weight: 400;
            font-size: 2rem;

            margin: 1rem 0;
          }
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
          ${mixin.tabletMedia(`
          grid-gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(40ch, 1fr));
            
          `)}
        `}
      >
        <h2
          css={css`
            grid-column: 1 / -1;
          `}
        >
          Creatives who inspire me...
        </h2>
        {inspirations.map(person => {
          // Roberto Blake?
          return (
            <Inspiration {...person}>
              <Markdown
                styles={[
                  {
                    a: {
                      ...typography.linkStylingBase,
                      ...typography.typesetAnimation
                    }
                  }
                ]}
              >
                {person.description}
              </Markdown>
            </Inspiration>
          )
        })}
      </section>
    </PageLayout>
  )
}
About.propTypes = {
  inspirations: inspirationProps
}

About.getInitialProps = async () => {
  const getInspirations = () => cms('/inspirations')
  const getAbout = () => cms('/abouts')

  try {
    const [inspirations, about] = await Axios.all([
      getInspirations(),
      getAbout()
    ])

    return { inspirations: inspirations.data, about: about.data[0] }
  } catch (err) {
    console.error(err)
    throw new Error('Oops, something is wrong with me!')
    // const { projects } = mockGraphqlData.data
    // return { projects }
  }
}

export default About
