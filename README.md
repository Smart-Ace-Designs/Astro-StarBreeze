<!-- ASTRO:REMOVE:START -->

# Astro Template: Star Breeze

Astro **Star Breeze** is an opinionated [Astro 7](https://astro.build/) starter template with built-in support for Starwind UI, Tailwind CSS, Prettier, view transitions, and aliases.

Using `create astro@latest` provides everything you need to create a basic Astro 7 application. However, it is missing a few useful items that you might find yourself manually adding to every new Astro 7 project. The **Star Breeze** template was created to automatically include these items as well as support for Starwind UI. This provides a great starting point for a new Astro 7 project with Tailwind and Starwind UI.

The template includes:

- An initial Astro 7 project structure
- Astro [View Transitions](https://docs.astro.build/en/guides/view-transitions/)
- Astro [Aliases](https://docs.astro.build/en/guides/imports/#aliases)
- [Starwind UI](https://starwind.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prettier](https://prettier.io/)
- A default _MainLayout.astro_ layout file
- A default _starwind.css_ file
- A default _starwind.config.json_ file with `neutral` base color
- A default _starwind.code-snippets_ VS Code compatible editor project level snippets file
- Default _.vscode_ files to properly handle Tailwind CSS, recommended extensions, and default Prettier formatters
- A blank _index.astro_ page
- The `dev` script set to `"astro dev --open"`

## Deployment Methods

>[!note]
>The `AGENTS.md` and `CLAUDE.md` files will be created automatically by the `create astro@latest` npm initializer. Use the `--no-ai` flag to opt out of creating these files.

### npm

```sh
npm create astro@latest -- --template smart-ace-designs/astro-starbreeze project-name
```

### bun

```sh
bun create astro@latest -- --template smart-ace-designs/astro-starbreeze project-name
```

### pnpm

```sh
pnpm create astro@latest --template smart-ace-designs/astro-starbreeze project-name
```

### yarn

```sh
yarn create astro@latest --template smart-ace-designs/astro-starbreeze project-name
```

## Using [Starwind UI](https://starwind.dev/) Components

- To add a Starwind UI component to your Astro project:
  [Starwind UI CLI](https://starwind.dev/docs/getting-started/cli/#add)

- To import a Starwind UI component into an Astro file:
  [Starwind UI Import Pattern](https://starwind.dev/docs/components/#import-pattern)

- To use a Starwind UI snippet in an Astro file with a VS Code compatible editor: begin typing `starwind`

## Project Structure

After deploying the Astro **Star Breeze** template you will see the following files and directories in your project root:

```text
/
├── .vscode/
│   ├── extensions.json
│   ├── launch.json
│   ├── settings.json
│   └── starwind.code-snippets
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── starwind.css
├── .gitignore
├── .prettierignore
├── .prettierrc.mjs
├── AGENTS.md
├── astro.config.mjs
├── CLAUDE.md
├── package.json
├── README.md
├── starwind.config.json
└── tsconfig.json
```

<!-- ASTRO:REMOVE:END -->
