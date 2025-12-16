export function render(props) {
    return `
    <footer class="py-32 px-6">
        <div class="max-w-7xl mx-auto text-center">
            <h2 class="text-6xl md:text-9xl font-bold tracking-tighter mb-12 hover:text-neutral-300 transition-colors cursor-pointer reveal">
                <a href="mailto:${props.email}">${props.cta}</a>
            </h2>
            <div class="flex flex-col md:flex-row justify-between items-center gap-8 text-neutral-500 text-sm reveal delay-100">
                <p>&copy; ${new Date().getFullYear()} Agency.</p>
                <div class="flex gap-6">
                    <a href="#" class="hover:text-white transition-colors">Instagram</a>
                    <a href="#" class="hover:text-white transition-colors">Twitter</a>
                    <a href="#" class="hover:text-white transition-colors">LinkedIn</a>
                </div>
            </div>
        </div>
    </footer>
    `;
}