export function render(props) {
    return `
    <div class="py-24 bg-slate-50">
        <div class="max-w-7xl mx-auto px-6">
            <h2 class="text-3xl font-bold text-center mb-12 reveal">${props.heading}</h2>
            <div class="grid md:grid-cols-2 gap-8">
                ${props.reviews.map(r => `
                    <div class="bg-white p-8 rounded-xl shadow-sm reveal">
                        <p class="italic text-slate-600 mb-4">"${r.text}"</p>
                        <p class="font-bold text-slate-900">- ${r.name}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </div>
    `;
}