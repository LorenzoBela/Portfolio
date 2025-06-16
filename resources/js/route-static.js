// Simple route helper for static mode
export function route(name) {
    // Handle if running in browser vs build environment
    if (typeof window !== 'undefined') {
        const routes = {
            'home': '/',
            'about': '/about.html',
            'projects': '/projects.html', 
            'contact': '/contact.html'
        };
        return routes[name] || '/';
    }
    return '/';
}

// Also export as default for different import patterns
export default route; 