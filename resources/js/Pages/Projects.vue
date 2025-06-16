<template>
    <Layout>
        <!-- Page Header with Parallax -->
        <section class="relative py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50 overflow-hidden">
            <!-- Animated Background Elements -->
            <div class="absolute top-10 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
            <div class="absolute bottom-10 right-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
            
            <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center hero-content">
                    <h1 class="section-heading typing-animation">My Projects</h1>
                    <p class="text-lg text-gray-600 max-w-3xl mx-auto slide-up-delay-1">
                        A collection of my work showcasing skills in web development, database systems, and hardware integration.
                    </p>
                    
                    <!-- Project Stats -->
                    <div class="flex flex-wrap justify-center gap-8 mt-12 slide-up-delay-2">
                        <div class="text-center">
                            <div class="text-3xl font-bold text-purple-600 counter" :data-target="totalProjects">0</div>
                            <div class="text-sm text-gray-600">Total Projects</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-indigo-600 counter" :data-target="completedProjects">0</div>
                            <div class="text-sm text-gray-600">Completed</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-green-600 counter" :data-target="totalTechnologies">0</div>
                            <div class="text-sm text-gray-600">Technologies Used</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Grid with Enhanced Animations -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Filter Buttons -->
                <div class="flex flex-wrap justify-center gap-4 mb-16 scroll-fade-in">
                    <button 
                        v-for="type in uniqueTypes" 
                        :key="type"
                        @click="filterProjects(type)"
                        :class="[
                            'px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105',
                            selectedType === type 
                                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg' 
                                : 'bg-white text-gray-700 hover:bg-indigo-50 shadow-md hover:shadow-lg'
                        ]"
                    >
                        {{ type }}
                    </button>
                </div>

                <!-- Projects Grid -->
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div 
                        v-for="(project, index) in filteredProjects" 
                        :key="project.title"
                        class="project-card"
                        :data-scroll-delay="index * 100"
                    >
                        <div class="card h-full flex flex-col transform hover:scale-105 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
                            <!-- Gradient Overlay -->
                            <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            <!-- Project Header -->
                            <div class="p-6 relative z-10">
                                <div class="flex items-center justify-between mb-4">
                                    <span class="px-3 py-1 rounded-full text-sm font-medium transform hover:scale-110 transition-transform"
                                          :class="getTypeColor(project.type)">
                                        {{ project.type }}
                                    </span>
                                    <span class="text-sm text-gray-500">{{ project.date }}</span>
                                </div>
                                
                                <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                                    {{ project.title }}
                                </h3>
                                
                                <p class="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                                    {{ project.description }}
                                </p>
                            </div>

                            <!-- Technologies -->
                            <div class="px-6 pb-4 relative z-10">
                                <div class="flex flex-wrap gap-2">
                                    <span 
                                        v-for="(tech, techIndex) in project.technologies" 
                                        :key="tech"
                                        class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full transform hover:scale-110 hover:bg-indigo-100 hover:text-indigo-700 transition-all duration-200"
                                        :style="`animation-delay: ${techIndex * 0.05}s`"
                                    >
                                        {{ tech }}
                                    </span>
                                </div>
                            </div>

                            <!-- Project Footer -->
                            <div class="mt-auto p-6 pt-0 relative z-10">
                                <div class="flex items-center justify-between">
                                    <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                                          :class="getStatusColor(project.status)">
                                        <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 8 8">
                                            <circle cx="4" cy="4" r="3"/>
                                        </svg>
                                        {{ project.status }}
                                    </span>
                                    
                                    <div class="flex space-x-3">
                                        <a 
                                            v-if="project.demo" 
                                            :href="`https://${project.demo}`" 
                                            target="_blank"
                                            class="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transform hover:scale-110 transition-all duration-200"
                                        >
                                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                            </svg>
                                            Demo
                                        </a>
                                        <a 
                                            v-if="project.github" 
                                            :href="project.github" 
                                            target="_blank"
                                            class="inline-flex items-center text-gray-600 hover:text-gray-700 font-medium transform hover:scale-110 transition-all duration-200"
                                        >
                                            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path>
                                            </svg>
                                            Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- No Projects Message -->
                <div v-if="filteredProjects.length === 0" class="text-center py-16 scroll-fade-in">
                    <div class="text-6xl mb-4">🔍</div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
                    <p class="text-gray-600">Try selecting a different category or view all projects.</p>
                </div>
            </div>
        </section>

        <!-- Featured Technologies Section -->
        <section class="py-20 bg-white">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16 scroll-fade-in">
                    <h2 class="section-heading">Technologies Used</h2>
                    <div class="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-4"></div>
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                        A comprehensive overview of the technologies and tools used across all projects.
                    </p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div 
                        v-for="(tech, index) in allTechnologies" 
                        :key="tech.name"
                        class="tech-card"
                        :data-scroll-delay="index * 50"
                    >
                        <div class="text-center p-6 bg-gray-50 rounded-xl transform hover:scale-105 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 transition-all duration-300">
                            <div class="text-2xl mb-2">{{ getTechIcon(tech.name) }}</div>
                            <h4 class="font-semibold text-gray-900 mb-1">{{ tech.name }}</h4>
                            <p class="text-sm text-gray-600">{{ tech.count }} project{{ tech.count > 1 ? 's' : '' }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 gradient-bg relative overflow-hidden">
            <!-- Animated Background Pattern -->
            <div class="absolute inset-0 opacity-10">
                <div class="absolute top-0 left-0 w-full h-full" style="background-image: radial-gradient(circle at 25% 25%, white 2px, transparent 2px); background-size: 50px 50px;"></div>
            </div>
            
            <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div class="scroll-fade-in">
                    <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
                        Have a project in mind?
                    </h2>
                    <p class="text-xl text-blue-100 mb-8">
                        Let's discuss how I can help bring your ideas to life.
                    </p>
                    <component 
                        :is="isStatic ? 'a' : Link"
                        :href="route('contact')"
                        class="btn-primary group"
                    >
                        <span>Start a Conversation</span>
                        <svg class="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { route } from 'ziggy-js'

const props = defineProps({
    projects: Array,
})

const selectedType = ref('All')
const filteredProjects = ref(props.projects)
const isStatic = ref(false)

// Check if we're in static mode
onMounted(() => {
    const appEl = document.getElementById('app')
    isStatic.value = appEl && appEl.hasAttribute('data-page')
})

// Computed properties
const uniqueTypes = computed(() => {
    const types = ['All', ...new Set(props.projects.map(project => project.type))]
    return types
})

const allTechnologies = computed(() => {
    const techCount = {}
    props.projects.forEach(project => {
        project.technologies.forEach(tech => {
            techCount[tech] = (techCount[tech] || 0) + 1
        })
    })
    
    return Object.entries(techCount)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 12) // Show top 12 technologies
})

const totalTechnologies = computed(() => {
    let total = 0
    props.projects.forEach(project => {
        if (project.technologies && project.technologies.length) {
            total += project.technologies.length
        }
    })
    return total
})

const totalProjects = computed(() => {
    return props.projects ? props.projects.length : 0
})

const completedProjects = computed(() => {
    return props.projects ? props.projects.filter(p => p.status === 'Completed').length : 0
})

// Methods
const filterProjects = (type) => {
    selectedType.value = type
    if (type === 'All') {
        filteredProjects.value = props.projects
    } else {
        filteredProjects.value = props.projects.filter(project => project.type === type)
    }
    
    // Re-animate filtered projects
    setTimeout(() => {
        document.querySelectorAll('.project-card').forEach((el, index) => {
            el.style.opacity = '0'
            el.style.transform = 'translateY(30px) scale(0.95)'
            setTimeout(() => {
                el.style.opacity = '1'
                el.style.transform = 'translateY(0) scale(1)'
            }, index * 100)
        })
    }, 50)
}

const getTypeColor = (type) => {
    const colors = {
        'Web Development': 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800',
        'Database System': 'bg-gradient-to-r from-green-100 to-green-200 text-green-800',
        'Hardware Project': 'bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800',
        'System Design': 'bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800',
        'Full-Stack': 'bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800'
    }
    return colors[type] || 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800'
}

const getStatusColor = (status) => {
    const colors = {
        'Completed': 'bg-gradient-to-r from-green-100 to-green-200 text-green-800',
        'In Progress': 'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800',
        'Deployed': 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800'
    }
    return colors[status] || 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800'
}

const getTechIcon = (tech) => {
    const icons = {
        'HTML': '🌐', 'CSS': '🎨', 'JavaScript': '⚡', 'PHP': '🐘',
        'Laravel': '🅻', 'MySQL': '🗄️', 'Vue.js': '💚', 'C++': '⚙️',
        'Python': '🐍', 'Arduino': '🔌', 'Git': '📝', 'Visual Studio Code': '💻',
        'Vivado': '🔬', 'SQL': '📊', 'Bootstrap': '🅱️', 'Tailwind CSS': '💨'
    }
    return icons[tech] || '🔧'
}

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

    // Counter animation
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target
                if (!counter.dataset.counted) {
                    counter.dataset.counted = 'true'
                    const target = parseInt(counter.dataset.target)
                    animateCounter(counter, target)
                }
            }
        })
    }, observerOptions)

    // Observe elements
    document.querySelectorAll('.scroll-fade-in, .project-card, .tech-card').forEach(el => {
        el.style.opacity = '0'
        el.style.transform = 'translateY(30px) scale(0.95)'
        el.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        observer.observe(el)
    })

    // Observe counters
    document.querySelectorAll('.counter').forEach(el => {
        counterObserver.observe(el)
    })

    // Counter animation function
    function animateCounter(element, target) {
        let current = 0
        const increment = target / 50
        const timer = setInterval(() => {
            current += increment
            if (current >= target) {
                element.textContent = target
                clearInterval(timer)
            } else {
                element.textContent = Math.floor(current)
            }
        }, 40)
    }

    // Cleanup
    onUnmounted(() => {
        observer.disconnect()
        counterObserver.disconnect()
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
    animation: typing 2s steps(20, end);
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
</style> 