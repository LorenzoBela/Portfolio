<template>
    <Layout>
        <!-- Page Header with Parallax -->
        <section class="relative py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-hidden">
            <!-- Animated Background Elements -->
            <div class="absolute top-10 right-10 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
            <div class="absolute bottom-10 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
            <div class="absolute top-1/2 right-1/4 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
            
            <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center hero-content">
                    <h1 class="section-heading typing-animation">Get In Touch</h1>
                    <p class="text-lg text-gray-600 max-w-3xl mx-auto slide-up-delay-1">
                        I'd love to hear from you! Whether you have a project in mind, want to collaborate, or just say hello.
                    </p>
                    
                    <!-- Contact Stats -->
                    <div class="flex flex-wrap justify-center gap-8 mt-12 slide-up-delay-2">
                        <div class="text-center">
                            <div class="text-3xl font-bold text-green-600">⚡</div>
                            <div class="text-sm text-gray-600">Quick Response</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-blue-600">🤝</div>
                            <div class="text-sm text-gray-600">Let's Collaborate</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-purple-600">💡</div>
                            <div class="text-sm text-gray-600">Innovative Ideas</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Form and Information -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid lg:grid-cols-2 gap-12">
                    <!-- Contact Form -->
                    <div class="contact-form-card" data-scroll-delay="0">
                        <div class="card p-8 transform hover:scale-105 transition-all duration-500">
                            <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <div class="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                    </svg>
                                </div>
                                Send a Message
                            </h2>
                            
                            <form @submit.prevent="submitForm" class="space-y-6">
                                <div class="form-group" data-delay="100">
                                    <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input 
                                        type="text" 
                                        id="name"
                                        v-model="form.name"
                                        required
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 transform hover:scale-105"
                                        :class="{ 'border-red-500': errors.name }"
                                        placeholder="Enter your full name"
                                    >
                                    <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
                                </div>

                                <div class="form-group" data-delay="200">
                                    <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input 
                                        type="email" 
                                        id="email"
                                        v-model="form.email"
                                        required
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 transform hover:scale-105"
                                        :class="{ 'border-red-500': errors.email }"
                                        placeholder="Enter your email address"
                                    >
                                    <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
                                </div>

                                <div class="form-group" data-delay="300">
                                    <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <select 
                                        id="subject"
                                        v-model="form.subject"
                                        required
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 transform hover:scale-105"
                                        :class="{ 'border-red-500': errors.subject }"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="project">Project Collaboration</option>
                                        <option value="internship">Internship Opportunity</option>
                                        <option value="freelance">Freelance Work</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <p v-if="errors.subject" class="mt-1 text-sm text-red-600">{{ errors.subject }}</p>
                                </div>

                                <div class="form-group" data-delay="400">
                                    <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea 
                                        id="message"
                                        v-model="form.message"
                                        required
                                        rows="5"
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 transform hover:scale-105 resize-none"
                                        :class="{ 'border-red-500': errors.message }"
                                        placeholder="Tell me about your project or inquiry..."
                                    ></textarea>
                                    <p v-if="errors.message" class="mt-1 text-sm text-red-600">{{ errors.message }}</p>
                                </div>

                                <div class="form-group" data-delay="500">
                                    <button 
                                        type="submit" 
                                        :disabled="isSubmitting"
                                        class="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group relative overflow-hidden inline-flex items-center justify-center"
                                    >
                                        <span v-if="!isSubmitting" class="flex items-center justify-center">
                                            Send Message
                                            <svg class="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                                            </svg>
                                        </span>
                                        <span v-else class="flex items-center justify-center">
                                            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    </button>
                                </div>
                            </form>

                            <!-- Success/Error Messages -->
                            <div v-if="successMessage" class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                <div class="flex items-center">
                                    <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <p class="text-green-700">{{ successMessage }}</p>
                                </div>
                            </div>

                            <div v-if="errorMessage" class="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                                <div class="flex items-center">
                                    <svg class="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <p class="text-red-700">{{ errorMessage }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Contact Information -->
                    <div class="space-y-8">
                        <!-- Contact Details -->
                        <div class="contact-info-card" data-scroll-delay="100">
                            <div class="card p-8 transform hover:scale-105 transition-all duration-500">
                                <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                    <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                    Contact Information
                                </h3>
                                
                                <div class="space-y-4">
                                    <div class="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 group">
                                        <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                                            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p class="font-medium text-gray-900">Email</p>
                                            <a :href="`mailto:${personalInfo.email}`" class="text-blue-600 hover:text-blue-700 transition-colors">
                                                {{ personalInfo.email }}
                                            </a>
                                        </div>
                                    </div>

                                    <div class="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors duration-200 group">
                                        <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                                            <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p class="font-medium text-gray-900">Phone</p>
                                            <a :href="`tel:${personalInfo.phone}`" class="text-green-600 hover:text-green-700 transition-colors">
                                                {{ personalInfo.phone }}
                                            </a>
                                        </div>
                                    </div>

                                    <div class="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors duration-200 group">
                                        <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors">
                                            <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p class="font-medium text-gray-900">Location</p>
                                            <p class="text-purple-600">{{ personalInfo.location }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Response Time -->
                        <div class="response-time-card" data-scroll-delay="200">
                            <div class="card p-6 transform hover:scale-105 transition-all duration-500">
                                <div class="text-center">
                                    <div class="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                    <h4 class="text-lg font-semibold text-gray-900 mb-2">Quick Response</h4>
                                    <p class="text-gray-600 text-sm">I typically respond within 24 hours during weekdays</p>
                                </div>
                            </div>
                        </div>

                        <!-- Availability -->
                        <div class="availability-card" data-scroll-delay="300">
                            <div class="card p-6 transform hover:scale-105 transition-all duration-500">
                                <h4 class="font-semibold text-gray-900 mb-4 flex items-center">
                                    <svg class="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                    Current Status
                                </h4>
                                <div class="flex items-center mb-3">
                                    <div class="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                                    <span class="text-green-600 font-medium">Available for new projects</span>
                                </div>
                                <p class="text-gray-600 text-sm">
                                    Currently seeking internship opportunities and freelance projects in web development and system design.
                                </p>
                            </div>
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
                        Let's create something amazing together
                    </h2>
                    <p class="text-xl text-blue-100 mb-8">
                        Ready to turn your ideas into reality? I'm here to help.
                    </p>
                    <div class="flex flex-col sm:flex-row justify-center gap-4">
                        <Link 
                            :href="route('projects')"
                            class="btn-secondary text-white border-white hover:bg-white hover:text-indigo-600 group"
                        >
                            <span>View My Work</span>
                            <svg class="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                        <Link 
                            :href="route('about')"
                            class="btn-secondary text-white border-white hover:bg-white hover:text-indigo-600 group"
                        >
                            <span>Learn More About Me</span>
                            <svg class="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3'
import Layout from '@/Components/Layout.vue'
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { route } from 'ziggy-js'

defineProps({
    personalInfo: Object,
})

// Form state
const form = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
})

const errors = ref({})
const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

// Methods
const submitForm = async () => {
    // Reset messages
    errors.value = {}
    successMessage.value = ''
    errorMessage.value = ''
    isSubmitting.value = true

    // Basic validation
    if (!form.name.trim()) {
        errors.value.name = 'Name is required'
    }
    if (!form.email.trim()) {
        errors.value.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        errors.value.email = 'Please enter a valid email address'
    }
    if (!form.subject) {
        errors.value.subject = 'Please select a subject'
    }
    if (!form.message.trim()) {
        errors.value.message = 'Message is required'
    }

    // If there are errors, stop submission
    if (Object.keys(errors.value).length > 0) {
        isSubmitting.value = false
        return
    }

    // Submit form to backend
    try {
        const response = await fetch('/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify(form)
        })

        const data = await response.json()

        if (response.ok && data.success) {
            successMessage.value = data.message
            
            // Reset form
            Object.keys(form).forEach(key => {
                form[key] = ''
            })
        } else {
            errorMessage.value = data.message || 'There was an error sending your message. Please try again.'
        }
        
    } catch (error) {
        console.error('Contact form error:', error)
        errorMessage.value = 'There was an error sending your message. Please try again.'
    } finally {
        isSubmitting.value = false
    }
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

    // Form group observer for staggered animations
    const formObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0
                setTimeout(() => {
                    entry.target.style.opacity = '1'
                    entry.target.style.transform = 'translateY(0)'
                }, delay)
            }
        })
    }, observerOptions)

    // Observe elements
    document.querySelectorAll('.scroll-fade-in, .contact-form-card, .contact-info-card, .response-time-card, .availability-card').forEach(el => {
        el.style.opacity = '0'
        el.style.transform = 'translateY(30px) scale(0.95)'
        el.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        observer.observe(el)
    })

    // Observe form groups
    document.querySelectorAll('.form-group').forEach(el => {
        el.style.opacity = '0'
        el.style.transform = 'translateY(20px)'
        el.style.transition = 'all 0.6s ease-out'
        formObserver.observe(el)
    })

    // Cleanup
    onUnmounted(() => {
        observer.disconnect()
        formObserver.disconnect()
    })
})
</script>

<style scoped>
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

/* Enhanced form interactions */
input:focus, textarea:focus, select:focus {
    transform: scale(1.02);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

/* Button loading state */
.btn-primary:disabled {
    transform: none !important;
}
</style> 