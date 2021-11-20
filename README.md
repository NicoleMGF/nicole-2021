# Salesforce Design System Engineering Test

Hello, and welcome to our developer test! Thank you for considering the Salesforce Design System team for your next career opportunity.

## Code Challenge Goals

This code challenge is going to introduce you to a lot of technology you may not be familiar with, and it's important to note up front that we do not expect you to end up with a completely polished end result. Rather, we are looking to give you a sense of what it'd be like to work on our product here at Salesforce.

We are hoping you invest around 2-4 hours on this effort. Take this time to explore [Storybook](https://storybook.js.org/), read up on [Elix Web Components](https://component.kitchen/elix) (or use Vanilla JS or anything else you choose), and dig into the code! Just make sure the end result is a web component. We have left lots of source code to explore, to help you get a sense of our code style and how things function within our tech stack. We have also left boilerplate code for the engineering challenge we have given you.

We hope you use this challenge to get a foundational understanding of what your work will be like at Salesforce. Do take notes and get some questions together, after you submit your test you will have a follow up code review with our engineering team.

**By the way, you're not expected to support IE11.
Feel free to stick to your preferred modern web browser to work on this challenge.**

## Component Buildout Challenge

You are tasked with building two net new components for our design system.

The primary composition component will be called `CardGroup`, and will consist of the UI you see below:

![Component design image](static/demo/comp-preview.png)

Effectively, it's a (optional) headline element composed with a number of `Card` components, which is the other component you will be building out.

A `Card` contains a headline, optional image element, short text description, and a call to action button.

Using this redline spec as a guide, along with the components that exist within the `src/SDS` folder in our design system, you will need to bring these new components to life.

![Screenshot of ](static/demo/comp-redline.png)

Your components will need to adapt successfully to tablet and mobile displays, and will also need to pass AXE Accessibility validation and our test suite.

## Getting Started

To get started, please start by cloning this repository.

In the root of the project, run `npm install`, and then run `npm run dev` to start up the development environment.

### Development Prerequisites

To work on this project, you should have some basics installed:

- Node v12 (we encourage use of [NVM](https://github.com/nvm-sh/nvm#installing-and-updating) to manage node versions, if necessary)
- [VS Code](https://code.visualstudio.com/)
  - [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) installed

#### Scripts in package.json

In addition to the `dev` script, we have a few other scripts declared in our `package.json` file:

- `test` This will run our test suite against the project's source code.
- `build` This will create a static (compiled) Storybook build for distribution.
- `start` This will start the static (compiled) Storybook build on a specified port. This gets run by Heroku for app deployment.

## Source Code & Component Structure

In this project, all of the source code is within the `src/` folder. We have our components split up into three projects:

- `SDS/` - Our Base Component Subsystem. You will be using these components as you build out your own components. The SDS Engineering team has already built out these components.
- `c360/` - The C360 Subsystem. This is the experience component layer where your work will live. We have scaffolded out the components you will need to build, but the rest is up to you.
- `intro/` - Our Welcome component lives here. You won't need to interact with this directory.

### Component Files

Each component is defined by the following files:

- `{component}.js` The main component JS file, written in the Elix web components framework.

* `{component}.stories.js` The Storybook file for the component, written in [Component Story Format (CSF)](https://storybook.js.org/docs/html/api/csf).
* `{component}.css` The CSS file for the component. Imported by the component JS file and injected into the component's shadow. Feel free to style with whatever means you find comfortable, but do feel encouraged to check out source code for other components to get a sense of how we align our selectors.
* `docs.mdx` The MDX-based documentation for the component. Extra credit for your work can be achieved by creating documentation for your component.

### Boilerplate Setup

We've gone ahead and created the files and bare code structures needed for you to get started coding. You can find these files in `src/c360/Card` and `src/c360/CardGroup`.

We've also registered the web components in the Storybook environment, so you don't have to do any configuration wrangling. For the curious, you can see how we register the web components in `.storybook/preview.js`. This file configures the Preview window in the Storybook dev environment.

## Working with our Tech

### Global CSS Variables

We encourage you to write your CSS with our global variables, instead of using hard-coded values. This helps keep your code consistent with the overall look and feel of our design system.

You can reference our global CSS Variables through the `SDS Elements / Global CSS Variables` stories in the Storybook development environment. They also live in `src/globals.css`.

### Building with Existing Components

We have a few components already in our system that you can use to help compose your components. These are located within the 'C360 Components' directory.

#### SDS and C360 - What do they Mean?

While we don't want to overload you with the details, we do have a separation of components within our system. SDS defines a primitive set of base level components, and C360 takes those low-level components and decorates them for use within the C360 design system.

For your challenge, stick to building with the C360 components, as they've been created to fit your code challenge. If you are curious, you can review the C360 and SDS source code (say, for the `Button` component) to get a sense of the component composition structures at work behind the scenes.

### Shadow DOM

Since we are building with web components, we are in the world of the [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM). Each component has its own CSS file that gets injected into the component's shadow root. Understand that styles declared outside of this root will not penetrate the shadow, only our global CSS variables will be available through the shadow boundary.

## Tech Stack Overview

### Storybook

This project uses Storybook for its development environment. Storybook is a great way of developing UI components in isolation. It provides conventions for writing "stories" for your components, which are really just ways of showcasing specific states and variations that you need your component to support.

Within Storybook, each component gets a `{component}.stories.js` file that has a series of exports, with each being what we call a story. Stories are named in CapitalCase and should be named descriptively.

For instance, we have a story called `Base` for our default Button component, along with a story called `Brand` to showcase our Brand Button variant.

We'll talk more about stories below in the Component Structure section, and you can always reference the stories files that exist in our pre-built components to get a better sense of how they function. Storybook supports hot reloading so you can quickly experiment in this environment.

#### Storybook Addons

We have installed a few addons within Storybook to assist with your development:

- [Accessibility Validator](https://github.com/storybookjs/storybook/tree/master/addons/a11y) (AXE)
- [Docs](https://storybook.js.org/docs/react/writing-docs/introduction)
- [Viewports](https://storybook.js.org/docs/react/essentials/viewport)

#### Storybook Keyboard Shortcuts

Storybook has some keyboard shortcuts for you to assist with development. Of note are the following (although this is not a complete list):

- `a`: press the `a` key to toggle the Addon window
- `d`: press the `d` key to toggle the placement of the Addon window (right vs bottom)

A list of all of the Storybook keyboard shortcuts can be found by pressing `cmd` + `shift` + `,`. You can also review this content directly through the `(...)` menu in the Storybook interface.

### Elix Web Components

This project makes use of the [Elix Web Components](https://component.kitchen/elix) framework. Elix is a minimalist Web Component framework that runs close to the "browser metal", and is capable of being run directly in a modern web browser with no pre-compilation or transpilation necessary.

Elix will likely not be a framework you have used before, but it's based in native ES6 Javascript. We encourage you to read through their documentation, as well as review the source code available within this project. The SDS components we have built are all using Elix, and can be used to help guide your path forward.

Elix uses subclasses and mixins to support component composition. Most components we make will be subclasses of the `ReactiveElement` class, and we encourage you to refer to the [ReactiveElement documentation page](https://component.kitchen/elix/ReactiveElement).

Other Elix documentation pages you may find of interest are their pages on [Element Customization](https://component.kitchen/elix/customizing) and [State Management](https://component.kitchen/elix/ReactiveMixin).

#### HTML Escape Hatch

If Elix proves to be too daunting of a task, you can alternatively compose your stories in HTML directly. The story files we have scaffolded for you already use Elix's built in HTML template engine, which is simply a Javascript string literal with HTML inside it. Replace that HTML with your own to showcase your work.

See `src/c360/Card/card.stories.js` and `src/c360/CardGroup/card-group.stories.js` for how you can write your stories with HTML within the Storybook environment.

### Static Assets

Static assets can be stored in the `static` folder.

## Testing & Validating Code

We have a few methods for testing and validating the code you write. We have eslint and stylelint standards established, those can be run through `npm test`.

We also have Axe validation within Storybook, installed as an addon, to assist with Accessibility validation.

## Submitting Your Test

Once you feel ready, push your code to a repo you own on GitHub. Feel free to make additional pushes to resolve any test failures or make any last minute adjustments.

Let your recruiter know you've completed your test and share the url to your repo, and our team will be in touch shortly after to follow up with a technical review.

# Thank You!

And good luck - the Salesforce DSE Team.
