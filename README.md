Developers usually put important documentation and usage information here, but since I'm a designer I guess I can tell you 

# Portfolio Website v2

## Tools and Technologies

- [x] [React – JavaScript library for building UI's](https://reactjs.org/)
- [x] [Gatsby – Static site generator framework](https://www.gatsbyjs.org/)
- [x] [Emotion – CSS in JS styling](https://emotion.sh/)
- [x] [Strapi – Headless CMS](https://strapi.io/)
- [x] [Netlify – Serverless static site deployment ](https://www.netlify.com/)

# Lessons learned from from Version 1

- Having an actual content management system will give me the control I need over how my data is organized and how I consume that data on the front-end. Using Behance's API as a pseudo-cms with GraphQL to stitch my project data together was a great way to get up and running quickly, but it didn't enable me to optimize how my content was structured.
  - **Resonsive typography improvements**: Each project can now have actual text embedded/styled into the page.
  - **Search engine optimization will be greatly improved** with higher quality textual information and keywords on each project provided by my CMS.
  - **Decoupling my site from Behance's API** means no more API rate limits and removing the cache system to prevent exceeding that rate limit.

## Why did you chose Strapi and not Wordpress for my CMS?

Wordpress was the first to come to mind, however the overall platform fell short for me as a designer/developer. Wordpress felt like to heavy of an abstraction, **even though it's the most popular solution does not mean it's the right one.** There were also whispers about security issues, bloated themes/plugins and overall poor developer experience. **I just wanted a simple way to define, manage, and consume my content via an API without the overhead of writing/deploying it as a service.** That's when I came across the concept of a _headless CMS_ – and eventually, [Strapi](https://strapi.io/).
