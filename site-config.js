export const meta = {
    title: "Digital Agency | Scale Your Brand",
    description: "We are a full-stack digital agency specializing in strategy, web design, development, and SEO. We scale brands through digital excellence.",
    keywords: "web design, development, seo, branding, digital agency",
    author: "Agency Name",
    og: {
        title: "Digital Agency | Scale Your Brand",
        description: "Award-winning aesthetics focused on conversion. Blazing fast code. Rank #1 on Google.",
        image: "https://example.com/og-image.jpg",
        url: "https://agency.com",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        site: "@agency",
        creator: "@agency_founder"
    },
    jsonLd: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Digital Agency",
        "url": "https://agency.com",
        "logo": "https://agency.com/logo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-555-5555",
            "contactType": "Customer Service"
        }
    }
};

export const pageStructure = [
    // 1. Massive Headline Hero
    {
        type: 'hero',
        props: {
            eyebrow: 'Full Stack Digital Partner',
            headline: 'WE SCALE BRANDS THROUGH<br><span class="text-neutral-500">DIGITAL EXCELLENCE.</span>',
            cta: 'VLATCE',
            ctaLink: '#contact'
        }
    },

    // 2. Infinite Scroll Marquee
    {
        type: 'marquee',
        props: {
            items: ['Strategy', 'Web Design', 'Development', 'SEO', 'Branding', 'Copywriting'],
            speed: '30s',        // Optional: animation duration
            // textSize: '6xl',     // Optional: Tailwind text size
            // opacity: '20',       // Optional: 20% opacity
            // strokeColor: '#64ffda'
        }
    },

    // 3. Bento Grid (Services/About)
    {
        type: 'bento-grid',
        props: {
            title: 'Our Expertise',
            subtitle: 'A holistic approach to digital growth.',
            cards: [
                { title: 'Web Design', desc: 'Award-winning aesthetics focused on conversion.', size: 'col-span-1 md:col-span-2' },
                { title: 'Development', desc: 'Blazing fast code.', size: 'col-span-1' },
                { title: 'SEO', desc: 'Rank #1 on Google.', size: 'col-span-1' },
                { title: 'Branding', desc: 'Identities that stick.', size: 'col-span-1 md:col-span-2' }
            ]
        }
    },


    // 4. Accordion (Process / FAQ)
    {
        type: 'accordion',
        props: {
            title: 'The Process',
            items: [
                { q: '01. Discovery', a: 'We dive deep into your business model to understand your true KPIs.' },
                { q: '02. Strategy', a: 'We build a roadmap that aligns design with business goals.' },
                { q: '03. Execution', a: 'Agile development sprints with weekly updates.' },
                { q: '04. Launch', a: 'Deployment, testing, and post-launch analytics.' }
            ]
        }
    },

    // 5. Massive Footer
    {
        type: 'footer-big',
        props: {
            cta: 'Let\'s work together.',
            email: 'hello@agency.com'
        }
    }
];