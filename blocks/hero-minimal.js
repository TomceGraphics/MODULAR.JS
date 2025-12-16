export function render(props) {
    return `
    <section class="min-h-[90vh] flex flex-col justify-center px-6 pt-20 border-b border-border">
        <div class="max-w-7xl mx-auto w-full">
            <span class="block text-sm font-medium tracking-widest uppercase text-neutral-400 mb-8 reveal">${props.eyebrow}</span>
            <h1 class="text-6xl md:text-8xl lg:text-[7rem] font-bold leading-[0.9] tracking-tight mb-12 reveal delay-100">
                ${props.headline}
            </h1>
            <div class="reveal delay-200">
                <a href="${props.ctaLink}" class="group inline-flex items-center gap-4 text-xl font-medium hover:text-neutral-400 transition-colors">
                    <span class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">↓</span>
                    ${props.cta}
                </a>
            </div>
        </div>
    </section>
    `;
}