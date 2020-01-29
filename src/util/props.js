import PropTypes from "prop-types"

export const imageProps = PropTypes.shape({
  publicURL: PropTypes.number.isRequired,
})

export const moduleProps = PropTypes.shape({
  id: PropTypes.number.isRequired,
  imageAlt: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(["image", "text", "caption", "section"]).isRequired,
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
