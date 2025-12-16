export function render(props) {
    // 1. Destructure with defaults
    const { 
        title = 'Pricing Plans', 
        subtitle = 'Choose the perfect plan for your needs',
        plans = []
    } = props;

    // 2. Helper to render features
    const renderFeatures = (features) => {
        return features.map(feature => `
            <li class="flex items-center gap-3 text-accent">
                <span class="text-secondary font-bold">✓</span>
                <span>${feature}</span>
            </li>
        `).join('');
    };

    // 3. Return HTML string
    return `
    <section class="py-32 px-6 border-b border-accent/10 bg-primary">
        <div class="max-w-7xl mx-auto">
            <!-- Header -->
            <div class="mb-20 reveal">
                <h2 class="text-4xl md:text-5xl font-bold mb-4 text-secondary">${title}</h2>
                <p class="text-accent text-xl">${subtitle}</p>
            </div>
            
            <!-- Pricing Grid -->
            <div class="grid md:grid-cols-3 gap-6">
                ${plans.map(plan => `
                    <article class="${plan.size || 'col-span-1'} 
                                    bg-secondary/5 border border-accent/10 
                                    p-10 rounded-2xl hover:border-secondary/30 
                                    transition-all duration-300 group reveal
                                    ${plan.popular ? 'relative border-secondary/30 shadow-lg shadow-secondary/10' : ''}">
                        
                        ${plan.popular ? `
                            <div class="absolute -top-3 left-1/2 -translate-x-1/2">
                                <span class="px-4 py-1 bg-secondary text-primary text-sm font-semibold rounded-full">
                                    Most Popular
                                </span>
                            </div>
                        ` : ''}

                        <div class="flex flex-col h-full">
                            <!-- Plan Header -->
                            <div class="mb-6">
                                <h3 class="text-2xl font-bold text-secondary mb-2">${plan.name}</h3>
                                <div class="flex items-baseline gap-1">
                                    <span class="text-4xl font-bold text-white">$${plan.price}</span>
                                    <span class="text-accent">${plan.period || '/month'}</span>
                                </div>
                                <p class="text-accent mt-3">${plan.description}</p>
                            </div>

                            <!-- Features -->
                            <ul class="space-y-3 mb-8 flex-grow">
                                ${renderFeatures(plan.features)}
                            </ul>

                            <!-- CTA -->
                            <button class="w-full px-6 py-3 bg-secondary text-primary font-semibold rounded-lg 
                                           hover:bg-secondary/90 transition-colors group-hover:scale-[1.02] 
                                           transition-transform">
                                ${plan.cta || 'Get Started'}
                            </button>

                            <!-- Arrow Icon -->
                            <div class="mt-6 flex justify-end">
                                <span class="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center 
                                             text-secondary group-hover:bg-secondary/20 transition-colors">
                                    ↗
                                </span>
                            </div>
                        </div>
                    </article>
                `).join('')}
            </div>
        </div>
    </section>
    `;
}