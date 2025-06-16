// Unified route helper that works in both static and Laravel modes
export function route(name) {
    // Check if we're in static mode (presence of data-page attribute)
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const appEl = document.getElementById('app');
        const isStatic = appEl && appEl.hasAttribute('data-page');
        
        if (isStatic) {
            // Static mode routes
            const routes = {
                'home': '/',
                'about': '/about.html',
                'projects': '/projects.html',
                'contact': '/contact.html'
            };
            return routes[name] || '/';
        }
    }
    
    // Laravel/Inertia mode - use global route function from ZiggyVue
    try {
        if (typeof window !== 'undefined' && window.route) {
            return window.route(name);
        }
        
        // If window.route is not available, try importing ziggy-js
        const { route: ziggyRoute } = require('ziggy-js');
        return ziggyRoute(name);
    } catch (e) {
        console.warn('Ziggy route function failed, using fallback:', e);
        
        // Fallback routes for Laravel mode
        const fallbackRoutes = {
            'home': '/',
            'about': '/about',
            'projects': '/projects',
            'contact': '/contact'
        };
        
        return fallbackRoutes[name] || '/';
    }
}

export default route; 