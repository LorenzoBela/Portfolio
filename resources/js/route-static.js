// Static route helper that mimics ziggy-js exports
export function route(name) {
    // For static mode, use paths that work with Vercel static deployment
    // Use relative paths without .html extension for clean URLs
    const routes = {
        'home': '/',
        'about': '/about',
        'projects': '/projects', 
        'contact': '/contact'
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