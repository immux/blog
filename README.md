# immux.com

Official website `immux.com` is powered by [Gatsby](https://www.gatsbyjs.org/tutorial/), where our important info and blog run.

## Features

- Simply Responsive (with Bootstrap v4)

- i18n

- Blog with markdown

- SSR (to be done)

- Basic SEO

## Develop

```sh
npm install -g gatsby-cli
gatsby develop
```

## Add a page

Just create a `.tsx` file under `src/pages`, and then you will got a route with the filename, `www.immux.com/products` .eg.

## Create a blog

1. Create a directory under `content` directory
2. Create a file with `index.md` suffix under the directory you just created.
3. Follow the example under `content` directory, expecially the spectial comment on the top of the markdown file.

That's all.

## i18n

Checkout the `src/intl` directory. Add any keywords you like in the locale file under that directory, and use the keywords in your components.

### Use a component

```tsx
import { FormattedMessage } from "gatsby-plugin-intl";
<FormattedMessage id="" />;
// id is the keywords you defined in the locale file, which support chain style, like `home.hero.tilte` .eg.
```

### Use a hooks

```tsx
import { useIntl } from "gatsby-plugin-intl";

const intl = useIntl();

intl.formatMessage({ id: "subscription.subscribeBtn" });
```

### Issue Reference

If you have problem with the i18n, you can check the following steps:

1. check your `id` spelling
2. If the solution above doesn't work, you can excute the command under your project root: `gatsby clean`, and then restart your development server.

Checkout the i18n plugin [documentation](https://github.com/wiziple/gatsby-plugin-intl).

## Deploy

> Deploy

```sh
npm run deploy
# Then in the public directory will be files to copy to the server.
```

Checkout it out [here](https://www.gatsbyjs.org/docs/preparing-for-deployment/) if any problem.

## Custom Theme

`/src/scss/gatstrap.scss`

![1f466b07-5506-4c8d-8d17-8d02b42d6d0d](https://user-images.githubusercontent.com/2681007/43086458-5092d0be-8ed8-11e8-8125-8b336fdd3b43.gif)
