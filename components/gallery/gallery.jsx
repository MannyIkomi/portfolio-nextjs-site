import React, { Component } from 'react'
import { ProjectPreview, WithHoverState } from './projectPreview.jsx'
import '../../sass/base.scss'
import '../../sass/gallery.scss'

class Gallery extends Component {
  state = {
    behanceApi: {
      // https://api.behance.net/v2/users/22766641/projects?api_key=eQcCf78lw9BWiiVOtY2QFcstC0UadC7m
      projects: [
        {
          id: 75799775,
          name: 'Breaking Up With God',
          published_on: 1549223846,
          created_on: 1549221192,
          modified_on: 1549243825,
          url: 'https://www.behance.net/gallery/75799775/Breaking-Up-With-God',
          slug: 'Breaking-Up-With-God',
          privacy: 'public',
          fields: ['Illustration', 'Print Design', 'Editorial Design'],
          covers: {
            '115':
              'https://mir-s3-cdn-cf.behance.net/projects/115/4e4a5e75799775.Y3JvcCwxMzgzLDEwODIsNiww.png',
            '202':
              'https://mir-s3-cdn-cf.behance.net/projects/202/4e4a5e75799775.Y3JvcCwxMzgzLDEwODIsNiww.png',
            '230':
              'https://mir-s3-cdn-cf.behance.net/projects/230/4e4a5e75799775.Y3JvcCwxMzgzLDEwODIsNiww.png',
            '404':
              'https://mir-s3-cdn-cf.behance.net/projects/404/4e4a5e75799775.Y3JvcCwxMzgzLDEwODIsNiww.png',
            '808':
              'https://mir-s3-cdn-cf.behance.net/projects/808/4e4a5e75799775.Y3JvcCwxMzgzLDEwODIsNiww.png',
            original:
              'https://mir-s3-cdn-cf.behance.net/projects/original/4e4a5e75799775.Y3JvcCwxMzgzLDEwODIsNiww.png',
            max_808:
              'https://mir-s3-cdn-cf.behance.net/projects/max_808/4e4a5e75799775.Y3JvcCwxMzgzLDEwODIsNiww.png'
          },
          mature_content: 0,
          mature_access: 'allowed',
          owners: [
            {
              id: 22766641,
              first_name: 'Manny',
              last_name: 'Ikomi',
              username: 'ikomi',
              city: 'Revere',
              state: 'Massachusetts',
              country: 'United States',
              location: 'Revere, MA, USA',
              company: '',
              occupation: 'Visual Designer',
              created_on: 1448896821,
              url: 'https://www.behance.net/ikomi',
              images: {
                '50':
                  'https://mir-s3-cdn-cf.behance.net/user/50/af1c0d22766641.5b676a6062a0c.jpg',
                '100':
                  'https://mir-s3-cdn-cf.behance.net/user/100/af1c0d22766641.5b676a6062a0c.jpg',
                '115':
                  'https://mir-s3-cdn-cf.behance.net/user/115/af1c0d22766641.5b676a6062a0c.jpg',
                '138':
                  'https://mir-s3-cdn-cf.behance.net/user/138/af1c0d22766641.5b676a6062a0c.jpg',
                '230':
                  'https://mir-s3-cdn-cf.behance.net/user/230/af1c0d22766641.5b676a6062a0c.jpg',
                '276':
                  'https://mir-s3-cdn-cf.behance.net/user/276/af1c0d22766641.5b676a6062a0c.jpg'
              },
              display_name: 'Manny Ikomi',
              fields: ['Graphic Design', 'Branding', 'Print Design'],
              has_default_image: 0,
              website: '',
              stats: {
                followers: 4,
                following: 13,
                appreciations: 2,
                views: 191,
                comments: 0
              }
            }
          ],
          stats: {
            views: 6,
            appreciations: 0,
            comments: 0
          },
          conceived_on: 1549152000,
          colors: [
            {
              r: 247,
              g: 247,
              b: 247
            }
          ]
        },
        {
          id: 52442951,
          name: 'Coca Cola Logo',
          published_on: 1494374319,
          created_on: 1494293226,
          modified_on: 1547690436,
          url: 'https://www.behance.net/gallery/52442951/Coca-Cola-Logo',
          slug: 'Coca-Cola-Logo',
          privacy: 'public',
          fields: ['Branding', 'Graphic Design'],
          covers: {
            '115':
              'https://mir-s3-cdn-cf.behance.net/projects/115/0288cf52442951.Y3JvcCwzMDQ0LDIzODEsMTA1LDgy.png',
            '202':
              'https://mir-s3-cdn-cf.behance.net/projects/202/0288cf52442951.Y3JvcCwzMDQ0LDIzODEsMTA1LDgy.png',
            '230':
              'https://mir-s3-cdn-cf.behance.net/projects/230/0288cf52442951.Y3JvcCwzMDQ0LDIzODEsMTA1LDgy.png',
            '404':
              'https://mir-s3-cdn-cf.behance.net/projects/404/0288cf52442951.Y3JvcCwzMDQ0LDIzODEsMTA1LDgy.png',
            '808':
              'https://mir-s3-cdn-cf.behance.net/projects/808/0288cf52442951.Y3JvcCwzMDQ0LDIzODEsMTA1LDgy.png',
            original:
              'https://mir-s3-cdn-cf.behance.net/projects/original/0288cf52442951.Y3JvcCwzMDQ0LDIzODEsMTA1LDgy.png',
            max_808:
              'https://mir-s3-cdn-cf.behance.net/projects/max_808/0288cf52442951.Y3JvcCwzMDQ0LDIzODEsMTA1LDgy.png'
          },
          mature_content: 0,
          mature_access: 'allowed',
          owners: [
            {
              id: 22766641,
              first_name: 'Manny',
              last_name: 'Ikomi',
              username: 'ikomi',
              city: 'Revere',
              state: 'Massachusetts',
              country: 'United States',
              location: 'Revere, MA, USA',
              company: '',
              occupation: 'Visual Designer',
              created_on: 1448896821,
              url: 'https://www.behance.net/ikomi',
              images: {
                '50':
                  'https://mir-s3-cdn-cf.behance.net/user/50/af1c0d22766641.5b676a6062a0c.jpg',
                '100':
                  'https://mir-s3-cdn-cf.behance.net/user/100/af1c0d22766641.5b676a6062a0c.jpg',
                '115':
                  'https://mir-s3-cdn-cf.behance.net/user/115/af1c0d22766641.5b676a6062a0c.jpg',
                '138':
                  'https://mir-s3-cdn-cf.behance.net/user/138/af1c0d22766641.5b676a6062a0c.jpg',
                '230':
                  'https://mir-s3-cdn-cf.behance.net/user/230/af1c0d22766641.5b676a6062a0c.jpg',
                '276':
                  'https://mir-s3-cdn-cf.behance.net/user/276/af1c0d22766641.5b676a6062a0c.jpg'
              },
              display_name: 'Manny Ikomi',
              fields: ['Graphic Design', 'Branding', 'Print Design'],
              has_default_image: 0,
              website: '',
              stats: {
                followers: 4,
                following: 13,
                appreciations: 2,
                views: 191,
                comments: 0
              }
            }
          ],
          stats: {
            views: 65,
            appreciations: 0,
            comments: 0
          },
          conceived_on: 1494288000,
          colors: [
            {
              r: 229,
              g: 231,
              b: 233
            }
          ]
        },
        {
          id: 50678567,
          name: 'Mystic Parker Printing Identity',
          published_on: 1490454946,
          created_on: 1490454334,
          modified_on: 1547690453,
          url:
            'https://www.behance.net/gallery/50678567/Mystic-Parker-Printing-Identity',
          slug: 'Mystic-Parker-Printing-Identity',
          privacy: 'public',
          fields: ['Branding', 'Web Design', 'Graphic Design'],
          covers: {
            '115':
              'https://mir-s3-cdn-cf.behance.net/projects/115/c4544f50678567.Y3JvcCwxNDAwLDEwOTUsMCwzMjMz.jpg',
            '202':
              'https://mir-s3-cdn-cf.behance.net/projects/202/c4544f50678567.Y3JvcCwxNDAwLDEwOTUsMCwzMjMz.jpg',
            '230':
              'https://mir-s3-cdn-cf.behance.net/projects/230/c4544f50678567.Y3JvcCwxNDAwLDEwOTUsMCwzMjMz.jpg',
            '404':
              'https://mir-s3-cdn-cf.behance.net/projects/404/c4544f50678567.Y3JvcCwxNDAwLDEwOTUsMCwzMjMz.jpg',
            '808':
              'https://mir-s3-cdn-cf.behance.net/projects/808/c4544f50678567.Y3JvcCwxNDAwLDEwOTUsMCwzMjMz.jpg',
            original:
              'https://mir-s3-cdn-cf.behance.net/projects/original/c4544f50678567.Y3JvcCwxNDAwLDEwOTUsMCwzMjMz.jpg',
            max_808:
              'https://mir-s3-cdn-cf.behance.net/projects/max_808/c4544f50678567.Y3JvcCwxNDAwLDEwOTUsMCwzMjMz.jpg'
          },
          mature_content: 0,
          mature_access: 'allowed',
          owners: [
            {
              id: 22766641,
              first_name: 'Manny',
              last_name: 'Ikomi',
              username: 'ikomi',
              city: 'Revere',
              state: 'Massachusetts',
              country: 'United States',
              location: 'Revere, MA, USA',
              company: '',
              occupation: 'Visual Designer',
              created_on: 1448896821,
              url: 'https://www.behance.net/ikomi',
              images: {
                '50':
                  'https://mir-s3-cdn-cf.behance.net/user/50/af1c0d22766641.5b676a6062a0c.jpg',
                '100':
                  'https://mir-s3-cdn-cf.behance.net/user/100/af1c0d22766641.5b676a6062a0c.jpg',
                '115':
                  'https://mir-s3-cdn-cf.behance.net/user/115/af1c0d22766641.5b676a6062a0c.jpg',
                '138':
                  'https://mir-s3-cdn-cf.behance.net/user/138/af1c0d22766641.5b676a6062a0c.jpg',
                '230':
                  'https://mir-s3-cdn-cf.behance.net/user/230/af1c0d22766641.5b676a6062a0c.jpg',
                '276':
                  'https://mir-s3-cdn-cf.behance.net/user/276/af1c0d22766641.5b676a6062a0c.jpg'
              },
              display_name: 'Manny Ikomi',
              fields: ['Graphic Design', 'Branding', 'Print Design'],
              has_default_image: 0,
              website: '',
              stats: {
                followers: 4,
                following: 13,
                appreciations: 2,
                views: 191,
                comments: 0
              }
            }
          ],
          stats: {
            views: 69,
            appreciations: 2,
            comments: 0
          },
          conceived_on: 1490400000,
          colors: [
            {
              r: 254,
              g: 254,
              b: 254
            }
          ]
        }
      ],
      http_code: 200
    }
  }
  type = this.props.id

  projectDetails = {}

  renderProjects = (projects = [], Component) => {
    return projects.map((project, index) => (
      <WithHoverState
        key={index}
        render={(isHovered, handleEnter, handleLeave) => (
          <Component
            project={project}
            key={project.id}
            handleMouseEnter={handleEnter}
            handleMouseLeave={handleLeave}
            isHovered={isHovered}
          />
        )}
      />
    ))
  }

  render() {
    const { renderProjects } = this
    const { id } = this.props
    const { behanceApi } = this.state

    return (
      <section className="gallery" id={id}>
        {renderProjects(behanceApi.projects, ProjectPreview)}
      </section>
    )
  }
}

export default Gallery
