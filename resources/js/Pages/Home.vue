<template>
    <Layout>
        <!-- Hero Section with Parallax Effect -->
        <section class="relative py-20 lg:py-32 overflow-hidden">
            <!-- Animated Background Elements -->
            <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
            <div class="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div class="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            
            <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <div class="hero-content">
                        <!-- Profile Image with Cool Icon Overlay -->
                        <div class="relative inline-block mb-8">
                            <img 
                                src="/images/lorenzo_miguel.jpg" 
                                alt="Lorenzo Miguel D. Bela"
                                class="w-32 h-32 rounded-full mx-auto shadow-2xl border-4 border-white object-cover transform hover:scale-105 transition-transform duration-500"
                            >
                            <!-- Cool Icon Overlay -->
                            <div class="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                        </div>
                        
                        <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-4 typing-animation">
                            Hi, I'm <span class="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Lorenzo</span>
                        </h1>
                        <p class="text-xl lg:text-2xl text-gray-600 mb-8 slide-up-delay-1">
                            {{ personalInfo.title }}
                        </p>
                        <p class="text-lg text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed slide-up-delay-2">
                            {{ personalInfo.objective }}
                        </p>
                        
                        <div class="flex flex-col sm:flex-row justify-center gap-4 slide-up-delay-3">
                            <component 
                                :is="isStatic ? 'a' : Link"
                                :href="route('projects')"
                                class="btn-primary transform hover:scale-105 hover:shadow-xl transition-all duration-300"
                            >
                                <span>View My Projects</span>
                                <svg class="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </component>
                            <component 
                                :is="isStatic ? 'a' : Link"
                                :href="route('contact')"
                                class="btn-secondary transform hover:scale-105 hover:shadow-xl transition-all duration-300"
                            >
                                <span>Get In Touch</span>
                                <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                </svg>
                            </component>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Scroll Indicator -->
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div class="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                    <div class="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>

        <!-- Skills Section with Scroll Animations -->
        <section class="py-20 bg-white">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16 scroll-fade-in">
                    <h2 class="section-heading">Skills & Technologies</h2>
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                        Proficient in a diverse range of technologies for both software and hardware development.
                    </p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <!-- Programming Languages -->
                    <div class="skill-card" data-scroll-delay="0">
                        <div class="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl transform hover:scale-105 hover:shadow-xl transition-all duration-500">
                            <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 transform hover:rotate-6 transition-transform duration-300">
                                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <h3 class="font-semibold text-gray-900 mb-3">Programming Languages</h3>
                            <div class="flex flex-wrap gap-2">
                                <span v-for="(skill, index) in skills.languages" :key="skill" 
                                      class="skill-tag transform hover:scale-110 transition-transform duration-200"
                                      :style="`animation-delay: ${index * 0.1}s`">
                                    {{ skill }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Tools & Frameworks -->
                    <div class="skill-card" data-scroll-delay="100">
                        <div class="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl transform hover:scale-105 hover:shadow-xl transition-all duration-500">
                            <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 transform hover:rotate-6 transition-transform duration-300">
                                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <h3 class="font-semibold text-gray-900 mb-3">Tools & Frameworks</h3>
                            <div class="flex flex-wrap gap-2">
                                <span v-for="(skill, index) in skills.tools_frameworks" :key="skill" 
                                      class="skill-tag transform hover:scale-110 transition-transform duration-200"
                                      :style="`animation-delay: ${index * 0.1}s`">
                                    {{ skill }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Technologies -->
                    <div class="skill-card" data-scroll-delay="200">
                        <div class="bg-gradient-to-br from-purple-50 to-violet-100 p-6 rounded-xl transform hover:scale-105 hover:shadow-xl transition-all duration-500">
                            <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 transform hover:rotate-6 transition-transform duration-300">
                                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                                </svg>
                            </div>
                            <h3 class="font-semibold text-gray-900 mb-3">Technologies</h3>
                            <div class="flex flex-wrap gap-2">
                                <span v-for="(skill, index) in skills.technologies" :key="skill" 
                                      class="skill-tag transform hover:scale-110 transition-transform duration-200"
                                      :style="`animation-delay: ${index * 0.1}s`">
                                    {{ skill }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Soft Skills -->
                    <div class="skill-card" data-scroll-delay="300">
                        <div class="bg-gradient-to-br from-orange-50 to-red-100 p-6 rounded-xl transform hover:scale-105 hover:shadow-xl transition-all duration-500">
                            <div class="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 transform hover:rotate-6 transition-transform duration-300">
                                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                                </svg>
                            </div>
                            <h3 class="font-semibold text-gray-900 mb-3">Soft Skills</h3>
                            <div class="flex flex-wrap gap-2">
                                <span v-for="(skill, index) in skills.soft_skills" :key="skill" 
                                      class="skill-tag transform hover:scale-110 transition-transform duration-200"
                                      :style="`animation-delay: ${index * 0.1}s`">
                                    {{ skill }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Featured Projects Section with Stagger Animation -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16 scroll-fade-in">
                    <h2 class="section-heading">Featured Projects</h2>
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                        A showcase of my recent work in web development, database systems, and hardware integration.
                    </p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div 
                        v-for="(project, index) in projects.slice(0, 3)" 
                        :key="project.title"
                        class="project-card"
                        :data-scroll-delay="index * 100"
                    >
                        <div class="card p-6 transform hover:scale-105 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            <div class="flex items-center justify-between mb-4">
                                <span class="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 text-sm font-medium rounded-full transform hover:scale-110 transition-transform">
                                    {{ project.type }}
                                </span>
                                <span class="text-sm text-gray-500">{{ project.date }}</span>
                            </div>
                            
                            <h3 class="text-xl font-semibold text-gray-900 mb-3 hover:text-indigo-600 transition-colors">{{ project.title }}</h3>
                            
                            <p class="text-gray-600 mb-4 line-clamp-3">{{ project.description }}</p>
                            
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span 
                                    v-for="(tech, techIndex) in project.technologies.slice(0, 3)" 
                                    :key="tech"
                                    class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded transform hover:scale-110 transition-transform duration-200"
                                    :style="`animation-delay: ${techIndex * 0.05}s`"
                                >
                                    {{ tech }}
                                </span>
                            </div>

                            <div class="flex justify-between items-center">
                                <span class="text-sm font-medium text-green-600 animate-pulse">{{ project.status }}</span>
                                <div class="flex space-x-2">
                                    <a 
                                        v-if="project.demo" 
                                        :href="`https://${project.demo}`" 
                                        target="_blank"
                                        class="text-indigo-600 hover:text-indigo-700 text-sm font-medium transform hover:scale-110 transition-all duration-200"
                                    >
                                        Live Demo
                                    </a>
                                    <a 
                                        v-if="project.github" 
                                        :href="project.github" 
                                        target="_blank"
                                        class="text-gray-600 hover:text-gray-700 text-sm font-medium transform hover:scale-110 transition-all duration-200"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-12 scroll-fade-in">
                    <component 
                        :is="isStatic ? 'a' : Link"
                        :href="route('projects')"
                        class="btn-primary transform hover:scale-105 hover:shadow-xl transition-all duration-300 group"
                    >
                        <span>View All Projects</span>
                        <svg class="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </component>
                </div>
            </div>
        </section>

        <!-- CTA Section with Modern Animation -->
        <section class="py-20 gradient-bg relative overflow-hidden">
            <!-- Animated Background Pattern -->
            <div class="absolute inset-0 opacity-10">
                <div class="absolute top-0 left-0 w-full h-full" style="background-image: radial-gradient(circle at 25% 25%, white 2px, transparent 2px); background-size: 50px 50px;"></div>
            </div>
            
            <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div class="scroll-fade-in">
                    <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
                        Ready to work together?
                    </h2>
                    <p class="text-xl text-blue-100 mb-8">
                        I'm always interested in new opportunities and exciting projects.
                    </p>
                    <component 
                        :is="isStatic ? 'a' : Link"
                        :href="route('contact')"
                        class="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
                    >
                        <span>Let's Talk</span>
                        <svg class="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </component>
                </div>
            </div>
        </section>
    </Layout>
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3'
import Layout from '@/Components/Layout.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { route } from 'ziggy-js'

const isStatic = ref(false)

// Check if we're in static mode
onMounted(() => {
    const appEl = document.getElementById('app')
    isStatic.value = appEl && appEl.hasAttribute('data-page')
})

defineProps({
    personalInfo: Object,
    skills: Object,
    education: Array,
    projects: Array,
})

// Intersection Observer for scroll animations
onMounted(() => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.scrollDelay || 0
                setTimeout(() => {
                    entry.target.style.opacity = '1'
                    entry.target.style.transform = 'translateY(0) scale(1)'
                }, delay)
            }
        })
    }, observerOptions)

    // Observe elements with scroll animations
    document.querySelectorAll('.scroll-fade-in, .skill-card, .project-card').forEach(el => {
        el.style.opacity = '0'
        el.style.transform = 'translateY(30px) scale(0.95)'
        el.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        observer.observe(el)
    })

    // Cleanup observer on unmount
    onUnmounted(() => {
        observer.disconnect()
    })
})
</script>

<style scoped>
.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Custom Animations */
@keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
    animation: blob 7s infinite;
}

.animation-delay-2000 {
    animation-delay: 2s;
}

.animation-delay-4000 {
    animation-delay: 4s;
}

/* Hero Content Animation */
.hero-content {
    animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Typing Animation */
.typing-animation {
    animation: typing 2s steps(20, end), blink-caret 0.75s step-end infinite;
    border-right: 3px solid transparent;
}

@keyframes typing {
    from { width: 0; }
    to { width: 100%; }
}

/* Staggered Slide Up Animations */
.slide-up-delay-1 {
    animation: slideUp 0.8s ease-out 0.2s both;
}

.slide-up-delay-2 {
    animation: slideUp 0.8s ease-out 0.4s both;
}

.slide-up-delay-3 {
    animation: slideUp 0.8s ease-out 0.6s both;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Button Enhancements */
.btn-primary, .btn-secondary {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

.btn-primary::before, .btn-secondary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
}

.btn-primary:hover::before, .btn-secondary:hover::before {
    left: 100%;
}

/* Smooth scroll behavior */
html {
    scroll-behavior: smooth;
}

/* Custom gradient text */
.text-gradient {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Enhanced card hover effects */
.card {
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    overflow: hidden;
}

.card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.card:hover::before {
    opacity: 1;
}
</style> 