export function render(props) {
    // Simple JS-free accordion using HTML details/summary
    return `
    <section class="py-32 px-6 border-b border-border">
        <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
            <div class="reveal">
                <h2 class="text-4xl md:text-6xl font-bold sticky top-32">${props.title}</h2>
            </div>
            
            <div class="space-y-4">
                ${props.items.map(item => `
                    <details class="group reveal border-b border-border pb-4">
                        <summary class="flex justify-between items-center cursor-pointer list-none py-4 text-xl md:text-2xl font-medium hover:text-neutral-300 transition-colors">
                            <span>${item.q}</span>
                            <span class="text-neutral-500 group-open:rotate-45 transition-transform duration-300">+</span>
                        </summary>
                        <div class="text-neutral-400 text-lg leading-relaxed mt-4 mb-4 pl-4 border-l border-white/10">
                            ${item.a}
                        </div>
                    </details>
                `).join('')}
            </div>
        </div>
    </section>
    `;
}