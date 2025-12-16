MODULAR.JS // The Zero-Build Static Framework

Version: 1.0.0
Type: Client-Side Component Rendering Engine
Stack: Vanilla JavaScript (ES6+), Tailwind CSS, Semantic HTML5
1. Philosophy & Mental Model

MODULAR.JS is a lightweight architecture designed to separate Content, Structure, and Logic without the overhead of Node.js build steps, bundlers (Webpack/Vite), or complex frameworks (React/Vue).

It operates on a "Cartridge System":

    The Console (Engine): A static JS file that handles dynamic importing and rendering.

    The Cartridges (Blocks): Isolated, independent JS files that return HTML strings.

    The Save File (Config): A single JSON-like object that defines the website's structure and content.

Why this approach?

    Zero Dependencies: Runs natively in modern browsers.

    AI-Friendly: The isolation of "Blocks" makes it incredibly easy for AI to generate new components without breaking the rest of the site.

    Hot-Swappable: You can reorder sections of the website by moving lines in an array.

2. Directory Structure
code Text

    
/project-root
│
├── index.html            # The entry point (Skeleton & Global Styles)
├── site-config.js        # THE CMS. Edit content & layout here.
│
├── core/
│   └── engine.js         # The Brain. Handles dynamic imports & DOM injection.
│                         # (⚠️ DO NOT EDIT unless upgrading the core)
│
└── blocks/               # Component Library
    ├── hero.js           # Exports render(props)
    ├── bento-grid.js     # Exports render(props)
    ├── marquee.js        # Exports render(props)
    └── ...

  

3. The Core Concepts
A. The Configuration (site-config.js)

This file exports an array of objects. The engine iterates through this array in order.
code JavaScript

    
export const pageStructure = [
    {
        type: 'hero-minimal', // Maps to file: /blocks/hero-minimal.js
        props: {              // Passed as arguments to the render function
            headline: "Welcome",
            theme: "dark"
        }
    }
];

  

B. The Block Component (blocks/*.js)

Every file in the blocks/ folder must follow this strict contract:

    It must use export function render(props).

    It must return a Template Literal (String) of HTML.

    It should use Tailwind CSS for styling.

Example Standard Block:
code JavaScript

    
// blocks/example-card.js
export function render(props) {
    // 1. Logic / Destructuring
    const { title, isActive } = props;
    const activeClass = isActive ? 'border-blue-500' : 'border-gray-200';

    // 2. Return HTML String
    return `
        <div class="p-6 border ${activeClass} rounded-lg">
            <h2 class="text-2xl font-bold">${title}</h2>
        </div>
    `;
}

  

4. Developer Workflow
Installation & Running

Because this architecture uses ES6 Modules (import ... from ...), browsers enforce CORS security policies. You cannot open index.html directly from the file system.

    VS Code: Install the "Live Server" extension -> Right Click index.html -> "Open with Live Server".

    Python: Run python -m http.server in the terminal.

    Node: Run npx serve.

Creating a New Component

    Create a file: blocks/my-new-section.js.

    Write the export function render(props) { return \...` }`.

    Go to site-config.js and add { type: 'my-new-section', props: { ... } }.

    Refresh browser.

5. Style & Coding Standards (For AI Context)

When asking an AI to generate code for this framework, adhere to these rules:
HTML & Accessibility

    Semantic Tags: Use <section>, <article>, <header>, <footer> as the root element of a block.

    Images: All <img> tags must accept an alt prop.

    IDs: Do not use hardcoded IDs (e.g., #hero) unless necessary for specific scripts. Use classes.

Tailwind CSS

    Mobile-First: Write classes like col-span-1 md:col-span-2.

    Color Strategy: Use semantic naming if defined in tailwind.config (e.g., bg-surface, text-primary) rather than hardcoded hex values.

    Arbitrary Values: Allowed for specific design tweaks (e.g., h-[500px], top-[20%]).

JavaScript (Logic)

    No Event Listeners in Render: The render function should return static HTML string.

    Handling Interactivity: If a component needs JS (like a slider), use inline handlers (e.g., onclick="this.parentElement...") OR strictly coupled script tags inside the template literal (advanced usage).

    Destructuring: Always destructure props at the top of the function for readability.

6. Prompting Guide for AI

Use these prompts when working with an LLM to generate content for this framework.

To Generate a New Component:

    "Create a new component for my MODULAR.JS framework.
    Type: pricing-table
    Style: Dark mode, minimalistic, Tailwind CSS.
    Props needed: title, subtitle, array of plans (name, price, features).
    Output the JavaScript file content using export function render(props)."

To Generate Content Configuration:

    "I have the following components: hero, features, testimonials.
    Create a site-config.js array for a 'Fitness Coach' landing page.
    Fill the props with high-conversion copy."

7. Troubleshooting
Issue	Cause	Solution
CORS Error / Modules blocked	Opening file directly	Use a Local Server (Live Server / Python).
"Failed to load resource"	Typos in site-config.js	Ensure the type string matches the filename in /blocks/ exactly.
Styles missing	Tailwind CDN not loaded	Ensure <script src="https://cdn.tailwindcss.com"></script> is in index.html.
Animations not triggering	Missing classes	Ensure your block's HTML elements have the reveal class.