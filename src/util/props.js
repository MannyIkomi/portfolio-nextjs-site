import PropTypes from "prop-types"

export const imageProps = PropTypes.shape({
  publicURL: PropTypes.number.isRequired,
})

export const projectProps = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  seoDescription: PropTypes.string.isRequired, // for use in meta description
  slug: PropTypes.string.isRequired,
  cover: imageProps,
})
