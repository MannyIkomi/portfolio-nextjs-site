# Portfolio Site v2.5

## The Stack

- [x] [React – JavaScript library for building UI's](https://reactjs.org/)
- [x] [Gatsby – Static site generator framework](https://www.gatsbyjs.org/)
- [x] [Emotion – CSS in JS styling](https://emotion.sh/)
- [x] [Strapi – Headless CMS](https://strapi.io/)
- [x] [Netlify – Serverless static site deployment](https://www.netlify.com/)

## Lessons learned from from Version 1

Using Behance's API as a *pseudo-cms* with a small GraphQL layer was a great way to get up and running quickly, but it prevented me from optimizing how my content was stored and structured.

### Having an actual content management system will give me the control I need over how my data is stored/structured and a built-in API to consume that data on the front-end. The benefits of which include:
  - **Search engine optimization will be greatly improved** with higher quality writing and keywords on each project page.
  - **Typography improvements**: Each project can now have live text styled into the page content for accessibility and responsive design.
  - **Decoupling the site from Behance's API** means I no longer need a custom backend to stitch together data using GraphQL, no need for a cache layer to prevent rate limits and overall reduction in dependencies and complexity

### Why did I chose Strapi and not Wordpress for my CMS?

Wordpress was the first to come to mind, however the overall platform fell short for me as a designer/developer. Wordpress felt like to heavy of an abstraction, **even though it's the most popular solution does not mean it's the right one.** There were also whispers about security issues, bloated themes/plugins and overall poor developer experience. **I just wanted a simple way to define, manage, and consume my content via an API without the overhead of writing/deploying it as a custom backend service.** That's when I came across the concept of a _headless CMS_ – and eventually, [Strapi](https://strapi.io/).
**Bonus: It's free to use and open-source**
