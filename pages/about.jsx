/** @jsx jsx */
// Modules
import React, { Fragment } from 'react'
import { css, jsx } from '@emotion/core'
//
// Components
import PageLayout from '../components/pageLayout'
import { InlineLink } from '../components/navigation/navigation'
//
// Styles
import { mixin, color, typography, colors } from '../styles'
//
const About = props => {
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
        // className={`about viewport`}
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
        `}
      >
        <header>
          <div
            // className={`headshot motif-left`}
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
            `}
          >
            Design thinker,
            <br /> lifetime learner,
            <br /> adoring guncle.
          </h1>
        </header>
        {/* USE CH UNITS TO MEASURE THE WIDTH OF ABOUT BLURBS? */}
        <p
          className={`bio`}
          css={css`
            color: ${colors.muteGray};
            font-size: 1.25rem;
          `}
        >
          My background in design comes from a combination of technical training
          and formal education, including printing, prepress, problem solving
          and concept development. With over 5 years of experience in the print
          industry, I've gained the skills required to craft design ideas into a
          high quality product.
          <br />
          In recent years I’ve been learning how to code as a new creative
          medium to build websites and user interfaces. 🤓
          <br />
          <strong
            css={css`
              font-weight: 800;
            `}
          >
            In short, I like making great things for good people.
          </strong>
        </p>
        {/* <button className={`cta layout`}>Say Hello</button> */}
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
        className="inspiration viewport"
        css={[
          css`
            background-color: ${colors.darkGray};
            padding: 2rem;
            h2 {
              font-family: ${typography.serif};
              color: ${colors.orange};
              font-weight: 400;
              font-size: 2rem;

              margin: 1rem 0;
            }
          `
        ]}
      >
        <h2>designers who inspire me...</h2>
        <div className="designer" css={[inspirationStyles]}>
          <h3>Chris Do</h3>
          <p>
            Founder of{' '}
            <InlineLink href={'https://www.youtube.com/user/TheSkoolRocks'}>
              The Futur
            </InlineLink>{' '}
            an online education platform changing the way we think about design
            education and strategy, teaching the business of design and the
            design of business.
          </p>
        </div>
        <div className="designer" css={[inspirationStyles]}>
          <h3>Jacqueline Casey</h3>
          <p>
            Master of visual puns and Helvetica. A local Massachusetts design
            hero best known for her poster design work at MIT.
          </p>
        </div>
      </section>
    </PageLayout>
  )
}

const inspirationStyles = css`
  margin: 2rem 0;
  color: ${colors.muteGray};
  h3 {
    font-family: ${typography.sans};
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: capitalize;
  }
`

/*
 Chris Do
Founder of The Futur an online education platform changing the way we think about design education and strategy, teaching the design of business and the business of design.

Anne Carter
A pivotal professor in my design education, her passion for history, art and design is infectious. She taught me how to refine my creativity and develop strong design concepts.

Jacqueline Casey
Master of visual puns and Helvetica. A local Massachusetts design hero best known for her poster design work at MIT.

Walter Gropius
Architect, Founder of the Bauhaus. Brought together art and craftsmanship to 

Elon Musk
Founder of Tesla and SpaceX. A man with vision, solving problems on the largest scale.
 */

const Motif = props => {
  const { side } = props
  return <div className={`motif-${side}`} />
}

export default About
