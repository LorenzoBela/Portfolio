import './bootstrap';
import '../css/app.css';
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { ZiggyVue } from 'ziggy-js'
import { Ziggy } from './ziggy'

const appName = import.meta.env.VITE_APP_NAME || 'Lorenzo Miguel D. Bela'

// Check if we're in static mode (Vercel) or Laravel/Inertia mode (local)
const el = document.getElementById('app');
const isStatic = el && el.hasAttribute('data-page');

if (isStatic) {
    // Static mode - get data from HTML attribute
    const pageData = JSON.parse(el.getAttribute('data-page').replace(/&quot;/g, '"'));
    
    resolvePageComponent(`./Pages/${pageData.component}.vue`, import.meta.glob('./Pages/**/*.vue'))
        .then(page => {
            const app = createApp({
                render: () => h(page.default, pageData.props)
            });
            app.mount(el);
        });
} else {
    // Laravel/Inertia mode (local development)
    createInertiaApp({
        title: (title) => `${title} - ${appName}`,
        resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
        setup({ el, App, props, plugin }) {
            const app = createApp({ render: () => h(App, props) })
                .use(plugin)
                .use(ZiggyVue, Ziggy);
            
            return app.mount(el);
        },
        progress: {
            color: '#4F46E5',
        },
    })
}
