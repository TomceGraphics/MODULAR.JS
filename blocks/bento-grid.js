export function render(props) {
    return `
    <section class="py-32 px-6 border-b border-border">
        <div class="max-w-7xl mx-auto">
            <div class="mb-20 reveal">
                <h2 class="text-4xl md:text-5xl font-bold mb-4">${props.title}</h2>
                <p class="text-neutral-400 text-xl">${props.subtitle}</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-6">
                ${props.cards.map(card => `
                    <div class="${card.size} bg-surface border border-border p-10 rounded-2xl hover:border-neutral-500 transition-colors group reveal">
                        <div class="h-full flex flex-col justify-between min-h-[200px]">
                            <h3 class="text-2xl font-bold mb-4">${card.title}</h3>
                            <p class="text-neutral-400 group-hover:text-neutral-600 transition-colors">${card.desc}</p>
                            <div class="mt-8 flex justify-end">
                                <span class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm">↗</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;
}