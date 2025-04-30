# Astro Template: Star Breeze
Astro **Star Breeze** is an opinionated Astro 5 starter template with built-in support for Starwind UI, Tailwind CSS, Prettier, view transitions, and import aliases and includes a blank default "index.astro" page.

Using `create-astro@latest` provides everything you need to create a basic Astro application. However, it is missing a few useful items that you might find yourself manually adding to every new Astro project. The **Star Breeze** template was created to automatically include these items as well as support for Starwind UI. This provides a great starting point for a new Astro project with Tailwind and Starwind UI.

The template includes:
- An initial Astro project structure
- Astro [View Transitions](https://docs.astro.build/en/guides/view-transitions/)
- Astro [Import Aliases](https://docs.astro.build/en/guides/typescript/#import-aliases)
- [Starwind UI](https://starwind.dev/)
- [Tailwind CSS v4.1](https://tailwindcss.com/)
- [Prettier](https://prettier.io/)
- A default _MainLayout.astro_ layout file
- A default _starwind.css_ file
- A default _starwind.config.json_ file with `neutral` base color
- Default _.vscode_ files to properly handle Tailwind CSS, recommended extensions, and default Prettier formatters
- A blank _index.astro_ page
- The `dev` script set to `"astro dev --open"`

An optional [PowerShell function](https://github.com/Smart-Ace-Designs/SmartAceDesigns.AstroLiftoff) (standalone or as part of a PowerShell module) is available to deploy the above template and provide the following additional functionality:
- Creates additional empty directories: _assets_ and _components_
- Blanks out the _README.md_ file
- Runs the `prettier` CLI to provide an intial format of all project files
- Initializes a _Git_ repository
- Automatically navigates to the project directory and peforms an initial install
- Runs `astro update` to update the core Astro packages to the latest versions and runs your preferred package manager (npm or bun) to update the other packages
- Provides an option to launch the site and/or open the project directory with VS Code post deployment

## Deployment Methods
### bun
```sh
bunx create-astro@latest -- --template smart-ace-designs/astro-starbreeze project-name
```
### npm
```sh
npx create-astro@latest -- --template smart-ace-designs/astro-starbreeze project-name
```
### pnpm
```sh
pnpm create astro@latest --template smart-ace-designs/astro-starbreeze project-name
```
### yarn
```sh
yarn create astro@latest --template smart-ace-designs/astro-starbreeze project-name
```
### PowerShell
The optional PowerShell function and module are available here:
[SmartAceDesigns.AstroLiftoff](https://github.com/Smart-Ace-Designs/SmartAceDesigns.AstroLiftoff)

```sh
New-AstroProject -ProjectName project-name -Location parent-directory -Template astro-starbreeze
```

https://github.com/user-attachments/assets/083b5621-8891-44b0-b3c5-4b9ebd70f7d3

## Using [Starwind UI](https://starwind.dev/) Components
- To add a Starwind UI component to your Astro project:
[Starwind UI CLI](https://starwind.dev/docs/getting-started/cli/#add)

- To import a Starwind UI component into an Astro file:
[Starwind UI Import Pattern](https://starwind.dev/docs/components/#import-pattern)

## Project Structure
After deploying the Astro **Star Breeze** template you will see the following files and directories in your project root:

```text
/
├── .vscode/
│       └── extensions.json
│       └── launch.json
│       └── settings.json
├── public/
│       └── favicon.svg
├── src/
|   ├── layouts/
│       └── MainLayout.astro
│   ├── pages/
│       └── index.astro
|   ├── styles/
│       └── starwind.css
├── .gitignore
├── .prettierrc.mjs
├── astro.config.mjs
├── package.json
├── README.md
├── starwind.config.json
└── tsconfig.json
```

The optional `New-AstroProject` PowerShell function will add these additional directories to your project root:

```text
/
└── src/
    ├── assets/
    └── components/
```
