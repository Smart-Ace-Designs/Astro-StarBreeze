# Astro Template: Star Breeze

**Star Breeze** is an opinionated Astro 5 starter template with built-in support for Starwind UI, Tailwind CSS, Prettier, view transitions, and import aliases.

Using `bunx create-astro@latest` or `npx create-astro@latest` provides everything you need to create a basic Astro application. However, it is missing a few useful items that I found myself manually adding to every Astro project I created.  To address this problem, I created this template to automatically include these items plus support for Starwind UI. Additionally, a custom PowerShell function was created to deploy this template and provide some additional functionality that the template cannot.

The template includes:
- [Starwind UI](https://starwind.dev/)
- [Tailwind CSS v4.1](https://tailwindcss.com/)
- [Prettier](https://prettier.io/)
- Astro [View Transitions](https://docs.astro.build/en/guides/view-transitions/)
- Astro [Import Aliases](https://docs.astro.build/en/guides/typescript/#import-aliases)
- A default _MainLayout.astro_ layout file
- A default _starwind.css_ file (required for Starwind UI)
- A default _starwind.config.json_ file with `neutral` base color (required for Starwind UI)
- Default _.vscode_ files to properly handle Tailwind CSS, recommended extensions, and default Prettier formatters
- A blank _index.astro_ page (empty "space")
- The `dev` script set to `"astro dev --open"`

The PowerShell function:
- Creates additional empty folders: _assets_ and _components_
- Blanks out the _README.md_ file
- Runs the `prettier` CLI to provide an intial format of all project files
- Initializes a _Git_ repository
- Automatically navigates to the project folder and peforms an initial install
- Runs `astro update` to update the core Astro packages to the latest versions and runs your preferred package manager (npm or bun) to update the other packages
- Provides an option to launch the site and/or open the project folder with VS Code post deployment

## Deployment Methods
### bun
```sh
bunx create-astro@latest -- --template smart-ace-designs/astro-starbreeze project-name
```
### npm
```sh
npx create-astro@latest -- --template smart-ace-designs/astro-starbreeze project-name
```
### PowerShell
A PowerShell module or a standalone function is available here:
[SmartAceDesigns.AstroLiftoff](https://github.com/Smart-Ace-Designs/SmartAceDesigns.AstroLiftoff)

```sh
New-AstroProject -ProjectName project-name -Location parent-folder -Template astro-starbreeze
```

https://github.com/user-attachments/assets/083b5621-8891-44b0-b3c5-4b9ebd70f7d3

## Add `Starwind UI` Component
To add a Starwind UI component to your project (example: [Button](https://starwind.dev/docs/components/button/)):
### bun
```sh
bunx starwind@latest add button
```
### npm
```sh
npx starwind@latest add button
```

## Project Structure

Inside of your Astro project you will see the following folders and files:

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

When deployed with the custom `New-AstroProject` PowerShell function, you will see the following folders and files:

```text
/
├── .vscode/
│       └── extensions.json
│       └── launch.json
│       └── settings.json
├── public/
│       └── favicon.svg
├── src/
|   ├── assets/
|   ├── components/
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
