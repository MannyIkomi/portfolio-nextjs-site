import PropTypes from "prop-types"
import {TEXT, INTERACTIVE, INTRO, CAPTION, SECTION, LINK, IMAGE} from './moduleTypes'

export const imageProps = PropTypes.shape({
  publicURL: PropTypes.number.isRequired,
})

export const moduleProps = PropTypes.shape({
  id: PropTypes.number.isRequired,
  imageAlt: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string, //url for interactive iframe
  type: PropTypes.oneOf([TEXT,
    ,INTRO
    ,IMAGE
    ,CAPTION
    ,SECTION
    ,INTERACTIVE
    ,LINK
  ]).isRequired,
  image: imageProps,
})

export const projectProps = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  seoDescription: PropTypes.string.isRequired, // for use in meta description
  slug: PropTypes.string.isRequired,
  modules: moduleProps,
  cover: imageProps,
})
