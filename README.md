# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Info

- Svelte & SvelteKit  
- Accessability First
- Works even without JS
- CSS Normalizer - modern-normalize
- SASS
- svelte-preprocess isntead of vitePreprocess
- breakpoints using @unsass/breakpoint package
- Metropolis Font from @fontsource/metropolis
- PKCE Gen for Spotify Auth
- Lucide Icons
- Tooltips with Tippy.js
- Loading progress bars using nprogress
- sharp package for finding out average color of images
- Unique Id generation using uniqid package
- Modals using micromodal library