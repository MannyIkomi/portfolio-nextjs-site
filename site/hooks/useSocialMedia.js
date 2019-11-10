import { useState, useEffect } from 'react'
import { cms } from '../util/http'

export const useSocialMedia = () => {
  const [socialMedia, setSocialMedia] = useState([])
  useEffect(() => {
    cms('/socials')
      .then(response => {
        const socialData = response.data
        console.table(socialData)
        setSocialMedia(socialData)
      })
      .catch(err => console.warn(err))
  }, [])

  return socialMedia
}

export default useSocialMedia
