import { pageStructure, meta } from '../site-config.js';

const app = document.getElementById('app');

const injectSEO = (meta) => {
    if (!meta) return;

    // 1. Basic Meta Tags
    document.title = meta.title || document.title;

    const setMeta = (name, content) => {
        if (!content) return;
        let element = document.querySelector(`meta[name="${name}"]`);
        if (!element) {
            element = document.createElement('meta');
            element.name = name;
            document.head.appendChild(element);
        }
        element.content = content;
    };

    setMeta('description', meta.description);
    setMeta('keywords', meta.keywords);
    setMeta('author', meta.author);

    // 2. Open Graph (Facebook / LinkedIn)
    const setOg = (property, content) => {
        if (!content) return;
        let element = document.querySelector(`meta[property="${property}"]`);
        if (!element) {
            element = document.createElement('meta');
            element.setAttribute('property', property);
            document.head.appendChild(element);
        }
        element.content = content;
    };

    if (meta.og) {
        setOg('og:title', meta.og.title);
        setOg('og:description', meta.og.description);
        setOg('og:image', meta.og.image);
        setOg('og:url', meta.og.url);
        setOg('og:type', meta.og.type);
    }

    // 3. Twitter Cards
    if (meta.twitter) {
        setMeta('twitter:card', meta.twitter.card);
        setMeta('twitter:site', meta.twitter.site);
        setMeta('twitter:creator', meta.twitter.creator);
    }

    // 4. JSON-LD Structured Data
    if (meta.jsonLd) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(meta.jsonLd);
        document.head.appendChild(script);
    }
};

const init = async () => {
    console.log("⚙️ Engine Started...");

    // 0. Inject SEO
    injectSEO(meta);

    // 1. Loop through the config array
    for (const block of pageStructure) {
        try {
            // 2. DYNAMIC IMPORT: Load the file only if it is requested
            // It looks for ./blocks/[type].js
            const module = await import(`../blocks/${block.type}.js`);

            // 3. Render the HTML string from the module
            const html = module.render(block.props);

            // 4. Inject into DOM
            const section = document.createElement('section');
            section.innerHTML = html;

            // Optional: Add generic classes or IDs
            section.className = "w-full";
            app.appendChild(section);

        } catch (error) {
            console.error(`❌ Could not load block: "${block.type}"`, error);
            app.innerHTML += `<div class="p-4 bg-red-100 text-red-600">Error loading block: <b>${block.type}</b>. Check filename.</div>`;
        }
    }

    // 5. Initialize Animations (After rendering is done)
    initObserver();
};

const initObserver = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    });
    // Assume blocks add 'reveal' class to their internal elements
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};

init();