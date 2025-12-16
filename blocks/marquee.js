export function render(props) {
    // 1. Destructure with sensible defaults
    const { 
        items = [], 
        speed = '20s',
        textSize = '8xl',
        opacity = '30',
        strokeColor = '#8892b0'
    } = props;

    // 2. Validate content
    if (!items.length) return '<!-- Marquee: No items provided -->';

    // 3. Create seamless loop (2x duplication is sufficient)
    const duplicatedItems = [...items, ...items];
    
    // 4. Generate content with accessibility
    const content = duplicatedItems.map((item, index) => 
        `<span class="mx-8 text-${textSize} font-bold text-transparent opacity-${opacity} 
                      uppercase inline-block whitespace-nowrap flex-shrink-0" 
              style="-webkit-text-stroke: 1px ${strokeColor};"
              ${index >= items.length ? 'aria-hidden="true"' : ''}>
            ${item}
        </span>`
    ).join('');

    // 5. Return self-contained component
    return `
    <section class="py-20 overflow-hidden border-b border-accent/10 bg-primary reveal">
        <style>
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-marquee {
                animation: marquee ${speed} linear infinite;
                display: flex;
                width: max-content;
            }
            .animate-marquee:hover { animation-play-state: paused; }
            @media (prefers-reduced-motion: reduce) {
                .animate-marquee { animation: none; }
            }
        </style>
        <div class="animate-marquee">
            ${content}
        </div>
    </section>
    `;
}