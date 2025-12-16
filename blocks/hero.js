export function render(props) {
    const isDark = props.theme === 'dark';
    
    return `
    <div class="relative py-32 ${isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}">
        <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div class="reveal">
                <h1 class="text-5xl font-bold mb-6">${props.headline}</h1>
                <p class="text-xl opacity-80 mb-8">${props.subhead}</p>
                <button class="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full transition-all">
                    ${props.cta}
                </button>
            </div>
            <div class="reveal">
                <img src="${props.image}" class="rounded-2xl shadow-2xl w-full h-96 object-cover">
            </div>
        </div>
    </div>
    `;
}