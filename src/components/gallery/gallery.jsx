import React, { Component } from 'react'
import ProjectPreview from './projectPreview.jsx'
import '../../css/gallery.css'

class Gallery extends Component {
  projects = {
    // array of projects (project details/modules are GET by api/project/project_id )
    array: [
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
            fields: ['Graphic Design', 'Branding', 'Web Design'],
            has_default_image: 0,
            website: '',
            stats: {
              followers: 4,
              following: 13,
              appreciations: 2,
              views: 170,
              comments: 0
            }
          }
        ],
        stats: {
          views: 56,
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
            fields: ['Graphic Design', 'Branding', 'Web Design'],
            has_default_image: 0,
            website: '',
            stats: {
              followers: 4,
              following: 13,
              appreciations: 2,
              views: 170,
              comments: 0
            }
          }
        ],
        stats: {
          views: 56,
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
            fields: ['Graphic Design', 'Branding', 'Web Design'],
            has_default_image: 0,
            website: '',
            stats: {
              followers: 4,
              following: 13,
              appreciations: 2,
              views: 170,
              comments: 0
            }
          }
        ],
        stats: {
          views: 56,
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
            fields: ['Graphic Design', 'Branding', 'Web Design'],
            has_default_image: 0,
            website: '',
            stats: {
              followers: 4,
              following: 13,
              appreciations: 2,
              views: 170,
              comments: 0
            }
          }
        ],
        stats: {
          views: 64,
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

  generatePreviews(projects) {
    return projects.map(p => <ProjectPreview project={p} key={p.id} />)
  }

  render() {
    return (
      <section className="gallery">
        {this.generatePreviews(this.projects.array)}
      </section>
    )
  }
}

export default Gallery
