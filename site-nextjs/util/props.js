import PropTypes from 'prop-types'

export const imageProps = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  ext: PropTypes.string,
  mime: PropTypes.string,
  url: PropTypes.string.isRequired
})

export const moduleProps = PropTypes.shape({
  id: PropTypes.number.isRequired,
  imageAlt: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(['image', 'text', 'caption', 'section']).isRequired,
  image: imageProps
})

export const projectProps = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  metaDescription: PropTypes.string.isRequired, // for use in meta description
  slug: PropTypes.string.isRequired,
  modules: moduleProps,
  cover: imageProps
})

export const inspirationProps = PropTypes.shape({
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  photo: imageProps,
  website: PropTypes.string
})
