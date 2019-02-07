[![Netlify Status](https://api.netlify.com/api/v1/badges/8280c50c-658d-4ec9-929d-d24edfb48cc1/deploy-status)](https://app.netlify.com/sites/silly-agnesi-43a1cd/deploys)

<h1 align="center">
  🙆‍♀Personal Gatsby🙆‍ ‍♂️
</h1>

<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://silly-agnesi-43a1cd.netlify.com/">
    <img alt="Personal Gatsby" src="https://github.com/RonanC/personal-gatsby/blob/master/src/images/personal-gatsby-logo.png" width="60" />
  </a>
</p>
<h1 align="center">
  Personal Gatsby
</h1>

**This project contains the basics needed to set up a personal website:**

- Landing page
- Contact form
- Portfolio page
- Blog page

**With included extras:**

- Backend CMS for writers to update the portfolio & blog
- PWA (progressive web app) so that customers get a good offline experience (and can save your website as a local app)
- Site manifest (for SEO purposes)
- Optimized image loading
- Optimized pre-loading of pages (on link hover)

**Example:**
https://silly-agnesi-43a1cd.netlify.com/

## 💻 How to run dev

```sh
npm i
```

```sh
gatsby develop
```

The site is now running at: `http://localhost:8000`

GraphiQL is available at: `http://localhost:8000/___graphql`

_Note: This allows you to query your GraphQL api_

## 🎩 How to run production

```sh
gatsby build
```

```sh
gatsby serve
```

The site is now running at: `http://localhost:9000`

## 💫 How to deploy (Netlify)

```sh
npx netlify deploy
```

## ✏️ Netlify CMS setup

- Set up Github OAuth for Netlify CMS (not sure if this is mandatory):
  https://app.netlify.com/sites/silly-agnesi-43a1cd/settings/access#oauth

- Turn on Identity here:
  https://app.netlify.com/sites/silly-agnesi-43a1cd/identity

- Add external providers for Github & Google here:
  https://app.netlify.com/sites/silly-agnesi-43a1cd/settings/identity#external-providers

_Note: At this point you may want to test that it's all working._

- Make registration invite only:
  https://app.netlify.com/sites/silly-agnesi-43a1cd/settings/identity#registration-preferences

**Notes:**

- The gatsby-plugin-netlify-cms takes care of the hooking up on our side so you can ignore that in the doc above.
- Everything in the created static folder will get compoed into the output.
- More info on Netlify CMS with Gatsby here: https://www.gatsbyjs.org/docs/sourcing-from-netlify-cms/
- Adding markdown pages: https://www.gatsbyjs.org/docs/adding-markdown-pages/
