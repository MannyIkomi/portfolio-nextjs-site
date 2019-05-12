# Portfolio Website

## Tools and Technologies

- [x] [React – JavaScript library for building UI's](https://reactjs.org/)
- [x] [NextJS – Server Side Rendering for React](https://nextjs.org/)
- [x] [Emotion – CSS in JS styling](https://emotion.sh/docs/introduction)
- [x] [Behance API – Behance projects & user data](https://www.behance.net/dev)
- [x] [GraphQL API – Custom backend Node.js server with Redis cache layer](https://github.com/MannyIkomi/portfolio-api-graphql)

## Components

- `HtmlHead` – Set page title and description, links typekit fonts, wraps `next/head`
-
- `Footer` – Page footer info with logo, social, and copyright
- `PageLayout` – Wraps each page as template that includes navigation, footer, seo information and a content container

### Menus & Navigation

- `DockedMenu` – Responsive navigation tailored to touch devices and smaller screens
- `SideMenu` – Sidebar navigation tailored to desktop devices and larger screens

### Portfolio & Projects

- `ProjectGallery` – Responsive grid and backdrop for project selection
- `ProjectCover` – Displays title, description, and image preview for each project
- `ProjectView` – Displays title, description, and project visuals/content

### Miscellaneous

- `Logo` – Renders various files depending on the version logo
- `Overlay` – Renders orange transparent fill behind it's children/sibling elements
- `WithHoverState` – Render prop with state, tracks `onMouseEnter` and `onMouseLeave` DOM events
- `WithToggleSwitch` – Render prop with state, tracks `onClick` DOM events using a boolean
