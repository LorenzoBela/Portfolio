// Static route helper that mimics ziggy-js exports
export function route(name) {
    const routes = {
        'home': '/',
        'about': '/about.html',
        'projects': '/projects.html', 
        'contact': '/contact.html'
    };
    return routes[name] || '/';
}

// Export ZiggyVue as empty function for compatibility
export const ZiggyVue = {
    install() {
        // No-op for static mode
    }
};

// Also export as default for different import patterns
export default route; 