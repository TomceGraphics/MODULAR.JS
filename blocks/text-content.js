export function render(props) {
    return `
    <div class="max-w-3xl mx-auto px-6 py-20 text-center reveal">
        <h2 class="text-3xl font-bold mb-6">${props.title}</h2>
        <p class="text-lg text-slate-600 leading-relaxed">${props.body}</p>
    </div>
    `;
}