// Static route helper that mimics ziggy-js exports
export function route(name) {
    // For static mode, use regular navigation instead of .html files
    // This will work better with regular anchor tags
    const routes = {
        'home': '/index.html',
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