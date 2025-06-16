<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <!-- Navigation -->
        <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <!-- Logo/Name -->
                    <component 
                        :is="isStatic ? 'a' : Link"
                        :href="route('home')" 
                        class="text-xl font-bold text-gradient hover:opacity-80 transition-opacity"
                    >
                        Lorenzo Miguel D. Bela
                    </component>

                    <!-- Desktop Navigation -->
                    <div class="hidden md:flex space-x-8">
                        <component 
                            :is="isStatic ? 'a' : Link"
                            :href="route('home')" 
                            :class="[
                                'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                                isCurrentRoute('home') 
                                    ? 'bg-indigo-100 text-indigo-700' 
                                    : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-100'
                            ]"
                        >
                            Home
                        </component>
                        <component 
                            :is="isStatic ? 'a' : Link"
                            :href="route('about')" 
                            :class="[
                                'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                                isCurrentRoute('about') 
                                    ? 'bg-indigo-100 text-indigo-700' 
                                    : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-100'
                            ]"
                        >
                            About
                        </component>
                        <component 
                            :is="isStatic ? 'a' : Link"
                            :href="route('projects')" 
                            :class="[
                                'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                                isCurrentRoute('projects') 
                                    ? 'bg-indigo-100 text-indigo-700' 
                                    : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-100'
                            ]"
                        >
                            Projects
                        </component>
                        <component 
                            :is="isStatic ? 'a' : Link"
                            :href="route('contact')" 
                            :class="[
                                'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                                isCurrentRoute('contact') 
                                    ? 'bg-indigo-100 text-indigo-700' 
                                    : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-100'
                            ]"
                        >
                            Contact
                        </component>
                    </div>

                    <!-- Mobile menu button -->
                    <div class="md:hidden">
                        <button 
                            @click="mobileMenuOpen = !mobileMenuOpen"
                            class="p-2 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-gray-100 transition-colors"
                        >
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Mobile Navigation -->
                <div v-show="mobileMenuOpen" class="md:hidden pb-4">
                    <div class="flex flex-col space-y-2">
                        <component 
                            :is="isStatic ? 'a' : Link"
                            :href="route('home')" 
                            @click="mobileMenuOpen = false"
                            :class="[
                                'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                                isCurrentRoute('home') 
                                    ? 'bg-indigo-100 text-indigo-700' 
                                    : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-100'
                            ]"
                        >
                            Home
                        </component>
                        <component 
                            :is="isStatic ? 'a' : Link"
                            :href="route('about')" 
                            @click="mobileMenuOpen = false"
                            :class="[
                                'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                                isCurrentRoute('about') 
                                    ? 'bg-indigo-100 text-indigo-700' 
                                    : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-100'
                            ]"
                        >
                            About
                        </component>
                        <component 
                            :is="isStatic ? 'a' : Link"
                            :href="route('projects')" 
                            @click="mobileMenuOpen = false"
                            :class="[
                                'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                                isCurrentRoute('projects') 
                                    ? 'bg-indigo-100 text-indigo-700' 
                                    : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-100'
                            ]"
                        >
                            Projects
                        </component>
                        <component 
                            :is="isStatic ? 'a' : Link"
                            :href="route('contact')" 
                            @click="mobileMenuOpen = false"
                            :class="[
                                'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                                isCurrentRoute('contact') 
                                    ? 'bg-indigo-100 text-indigo-700' 
                                    : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-100'
                            ]"
                        >
                            Contact
                        </component>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Main Content -->
        <main class="pt-16">
            <slot />
        </main>

        <!-- Footer -->
        <footer class="bg-gray-900 text-white py-12">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h3 class="text-xl font-bold mb-4">Lorenzo Miguel D. Bela</h3>
                    <p class="text-gray-400 mb-6">Computer Engineering Student</p>
                    
                    <div class="flex justify-center space-x-6 mb-8">
                        <a 
                            href="mailto:lorenzo.miguel.bela429@gmail.com" 
                            class="text-gray-400 hover:text-white transition-colors"
                            title="Email"
                        >
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                        </a>
                        <a 
                            href="tel:+639666504091" 
                            class="text-gray-400 hover:text-white transition-colors"
                            title="Phone"
                        >
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                        </a>
                    </div>
                    
                    <div class="border-t border-gray-800 pt-8">
                        <p class="text-gray-400 text-sm">
                            © {{ new Date().getFullYear() }} Lorenzo Miguel D. Bela. Built with Laravel, Vue.js & Tailwind CSS.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Link, usePage } from '@inertiajs/vue3'
import { route } from 'ziggy-js'

const page = usePage()
const mobileMenuOpen = ref(false)
const isStatic = ref(false)

// Check if we're in static mode
onMounted(() => {
    const appEl = document.getElementById('app')
    isStatic.value = appEl && appEl.hasAttribute('data-page')
})

const isCurrentRoute = (routeName) => {
    if (isStatic.value) {
        // In static mode, check the current URL
        const currentPath = window.location.pathname
        const routePath = route(routeName)
        return currentPath === routePath || (routePath === '/index.html' && currentPath === '/')
    } else {
        // Get the current page component name
        const currentPage = page.component
        
        // Map route names to page components
        const routeComponentMap = {
            'home': 'Home',
            'about': 'About', 
            'projects': 'Projects',
            'contact': 'Contact'
        }
        
        return currentPage === routeComponentMap[routeName]
    }
}
</script> 