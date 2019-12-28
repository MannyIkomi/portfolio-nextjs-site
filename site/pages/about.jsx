/** @jsx jsx */
import { css, jsx } from '@emotion/core'
// Modules
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios'
import { cms } from '../util/http'
//
// Components
import PageLayout from '../components/pageLayout'
import Markdown from '../components/markdown'
import DockedMenu from '../components/navigation/dockedMenu'
import SideMenu from '../components/navigation/sideMenu'
//
// Styles
import { mixin, typography, colors } from '../styles'
import { Inspiration } from '../components/Inspiration'
import { inspirationProps } from '../util/props'
//
const About = ({ inspirations, about, ...props }) => {
  return (
    <PageLayout
      title={'Hi 🤓'}
      description={`With over 5 years of experience in the print
      industry, I've gained the skills required to craft design ideas into a
      high quality product.`}
      // hasSideMenu={true}
      // persistDockedMenu={false}
    >
      <header
        css={{
          gridarea: 'header'
        }}
      >
        {/* <DockedMenu
        // menuToggled={menuToggled}
        // handleMenuToggle={setToggled}
        // persistOnDesktop={persistDockedMenu}
        /> */}
        <SideMenu />
      </header>
      <main
        css={{
          gridArea: 'main'
        }}
      >
        <section
          // about heading + paragraph blurb
          css={{
            display: 'flex',
            ...mixin.flex('column'),
            backgroundColor: colors.darkGray,
            minHeight: '100vh',
            header: {
              padding: 0
            },
            ...mixin.tabletMedia({
              display: 'grid',
              gridTemplateAreas: `'headshot h1 h1' 'void body body'`,
              gridTemplateColumns: '1fr 1fr 1fr'
            })
          }}
        >
          <div
            // headshot portrait
            css={{
              alignSelf: 'flex-end',
              margin: '0 0 auto auto',
              position: 'relative',
              width: '50%',
              maxWidth: '320px',

              ...mixin.tabletMedia({
                gridArea: 'headshot',
                width: 'initial',
                margin: '0',
                alignSelf: 'flex-end',
                justifySelf: 'flex-end'
              })
            }}
          >
            <img
              src="static/headshot-touchup.png"
              alt="Portrait photo of Manny"
              css={{ display: 'block', ...mixin.size('100%', 'auto') }}
            />
          </div>
          <h1
            className={`page-head`}
            style={{ padding: `0 2rem` }}
            css={{
              fontFamily: '${typography.serif}',
              fontWeight: '300',
              textTransform: 'lowercase',

              color: colors.orange,

              ...mixin.tabletMedia({
                gridArea: 'h1',
                alignSelf: 'flex-end'
              })
            }}
          >
            {about.heading}
          </h1>

          <Markdown
            preprocessor={markdown =>
              markdown.replace('{{CARDS}}', about.cardsCollected)
            }
            styles={{
              padding: '2rem',
              color: 'white',
              gridArea: 'body'
            }}
          >
            {about.bio}
          </Markdown>
        </section>
        <section
          className="quote viewport"
          css={{
            ...mixin.flex('column'),
            padding: '2rem',
            justifyContent: 'center',

            blockquote: {
              margin: '1rem 0',
              fontWeight: '100',
              fontSize: '3rem',
              lineHeight: '1.25',
              maxWidth: '35ch',
              color: colors.darkGray
            },

            cite: {
              display: 'block',
              margin: '1rem 0',

              fontFamily: typography.serif,
              fontWeight: '100',
              fontSize: '1.5rem',
              fontStyle: 'italic',
              color: 'inherit',
              textAlign: 'right'
            }
          }}
        >
          <blockquote>
            “A designer is an emerging synthesis of artist, inventor, mechanic,
            objective economist, and evolutionary strategist.”
          </blockquote>

          <cite>— R. Buckminster Fuller</cite>
        </section>
        <section
          // designer inspiration
          css={{
            backgroundColor: colors.darkGray,
            padding: '2rem',
            h2: {
              fontFamily: typography.serif,
              color: colors.orange,
              fontWeight: '400',
              fontSize: '2rem',

              margin: '1rem 0'
            },
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(100%, 1fr))',
            ...mixin.tabletMedia({
              gridGap: '2rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(40ch, 1fr))'
            })
          }}
        >
          <h2
            css={{
              gridColumn: '1 / -1'
            }}
          >
            Creatives who inspire me...
          </h2>
          {inspirations.map(person => {
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
      </main>
    </PageLayout>
  )
}

About.propTypes = {
  inspirations: inspirationProps,
  about: PropTypes.shape({
    cardsCollected: PropTypes.number
  })
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
