<template>
    <Layout>
        <!-- Page Header with Parallax -->
        <section class="relative py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
            <!-- Animated Background Elements -->
            <div class="absolute top-10 right-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
            <div class="absolute bottom-10 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
            
            <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center hero-content">
                    <h1 class="section-heading typing-animation">About Me</h1>
                    <p class="text-lg text-gray-600 max-w-3xl mx-auto slide-up-delay-1">
                        Learn more about my background, education, and passion for technology.
                    </p>
                </div>
            </div>
        </section>

        <!-- About Content with Scroll Animations -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid lg:grid-cols-3 gap-12">
                    <!-- Personal Info -->
                    <div class="lg:col-span-2 scroll-fade-in" data-scroll-delay="0">
                        <div class="card p-8 transform hover:scale-105 transition-all duration-500">
                            <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <div class="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                    </svg>
                                </div>
                                Personal Information
                            </h2>
                            
                            <div class="mb-8">
                                <p class="text-lg text-gray-700 leading-relaxed mb-6 slide-up-delay-1">
                                    {{ personalInfo.objective }}
                                </p>
                                
                                <p class="text-gray-700 leading-relaxed slide-up-delay-2">
                                    As a Computer Engineering student at Adamson University, I am passionate about bridging the gap between software and hardware technologies. 
                                    My academic journey has equipped me with a solid foundation in both theoretical concepts and practical applications, 
                                    from web development to embedded systems design.
                                </p>
                            </div>

                            <div class="grid md:grid-cols-2 gap-6">
                                <div class="contact-card" data-scroll-delay="200">
                                    <h3 class="font-semibold text-gray-900 mb-3 flex items-center">
                                        <svg class="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                        Contact Information
                                    </h3>
                                    <div class="space-y-3">
                                        <div class="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors duration-200">
                                            <svg class="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                            </svg>
                                            <span class="text-gray-700 break-all text-sm leading-relaxed">{{ personalInfo.email }}</span>
                                        </div>
                                        <div class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors duration-200">
                                            <svg class="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                            </svg>
                                            <span class="text-gray-700">{{ personalInfo.phone }}</span>
                                        </div>
                                        <div class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors duration-200">
                                            <svg class="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span class="text-gray-700">{{ personalInfo.location }}</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="interests-card" data-scroll-delay="300">
                                    <h3 class="font-semibold text-gray-900 mb-3 flex items-center">
                                        <svg class="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                        </svg>
                                        Interests
                                    </h3>
                                    <ul class="space-y-2 text-gray-700">
                                        <li class="flex items-center p-2 rounded-lg hover:bg-purple-50 transition-colors duration-200">
                                            <span class="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                            Full-Stack Web Development
                                        </li>
                                        <li class="flex items-center p-2 rounded-lg hover:bg-purple-50 transition-colors duration-200">
                                            <span class="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                            Embedded Systems Design
                                        </li>
                                        <li class="flex items-center p-2 rounded-lg hover:bg-purple-50 transition-colors duration-200">
                                            <span class="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                            Database Architecture
                                        </li>
                                        <li class="flex items-center p-2 rounded-lg hover:bg-purple-50 transition-colors duration-200">
                                            <span class="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                            IoT and Hardware Integration
                                        </li>
                                        <li class="flex items-center p-2 rounded-lg hover:bg-purple-50 transition-colors duration-200">
                                            <span class="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                            Software Engineering
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Quick Stats with Animation -->
                    <div class="stats-card" data-scroll-delay="100">
                        <div class="card p-6 transform hover:scale-105 transition-all duration-500">
                            <h3 class="font-semibold text-gray-900 mb-4 flex items-center">
                                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                </svg>
                                Quick Stats
                            </h3>
                            <div class="space-y-4">
                                <div class="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg transform hover:scale-105 transition-all duration-300 stat-item" data-delay="0">
                                    <div class="text-2xl font-bold text-blue-600 counter" :data-target="graduationYear">0</div>
                                    <div class="text-sm text-gray-600">Expected Graduation</div>
                                </div>
                                <div class="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg transform hover:scale-105 transition-all duration-300 stat-item" data-delay="100">
                                    <div class="text-2xl font-bold text-green-600 counter" :data-target="totalSkills">0</div>
                                    <div class="text-sm text-gray-600">Technologies</div>
                                </div>
                                <div class="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg transform hover:scale-105 transition-all duration-300 stat-item" data-delay="200">
                                    <div class="text-2xl font-bold text-purple-600 counter" data-target="6">0</div>
                                    <div class="text-sm text-gray-600">Projects Completed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Education Section with Enhanced Animations -->
        <section class="py-20 bg-white">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16 scroll-fade-in">
                    <h2 class="section-heading">Education</h2>
                    <div class="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-4"></div>
                </div>
                
                <div class="space-y-8">
                    <div 
                        v-for="(edu, index) in education" 
                        :key="index"
                        class="education-card"
                        :data-scroll-delay="index * 150"
                    >
                        <div class="card p-8 transform hover:scale-105 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                            <!-- Background Pattern -->
                            <div class="absolute top-0 right-0 w-32 h-32 opacity-5">
                                <svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                                </svg>
                            </div>
                            
                            <div class="relative">
                                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                                    <div>
                                        <h3 class="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors">{{ edu.degree }}</h3>
                                        <p class="text-lg text-indigo-600 font-medium">{{ edu.institution }}</p>
                                    </div>
                                    <div class="mt-2 lg:mt-0 text-right">
                                        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transform hover:scale-110 transition-transform"
                                              :class="edu.status === 'Current' ? 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800' : 'bg-gradient-to-r from-green-100 to-green-200 text-green-800'"
                                        >
                                            {{ edu.status }}
                                        </span>
                                        <p class="text-gray-500 mt-1">{{ edu.period }}</p>
                                    </div>
                                </div>

                                <div v-if="edu.honors" class="mb-4">
                                    <span class="inline-flex items-center px-3 py-1 bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 text-sm font-medium rounded-full transform hover:scale-110 transition-transform">
                                        🏆 {{ edu.honors }}
                                    </span>
                                </div>

                                <div v-if="edu.coursework" class="mt-6">
                                    <h4 class="font-semibold text-gray-900 mb-3 flex items-center">
                                        <svg class="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                        </svg>
                                        Related Coursework:
                                    </h4>
                                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                                        <span 
                                            v-for="(course, courseIndex) in edu.coursework" 
                                            :key="course"
                                            class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full transform hover:scale-110 hover:bg-indigo-100 hover:text-indigo-700 transition-all duration-200"
                                            :style="`animation-delay: ${courseIndex * 0.05}s`"
                                        >
                                            {{ course }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Skills Section with Modern Design -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16 scroll-fade-in">
                    <h2 class="section-heading">Technical Skills</h2>
                    <div class="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-4"></div>
                </div>
                
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div class="skill-category" data-scroll-delay="0">
                        <div class="card p-6 h-full transform hover:scale-105 hover:shadow-xl transition-all duration-500">
                            <h3 class="font-semibold text-gray-900 mb-4 flex items-center">
                                <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 transform hover:rotate-6 transition-transform">
                                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                Programming Languages
                            </h3>
                            <div class="space-y-2">
                                <div v-for="(skill, index) in skills.languages" :key="skill" 
                                     class="skill-tag w-full justify-center transform hover:scale-110 transition-transform duration-200"
                                     :style="`animation-delay: ${index * 0.1}s`">
                                    {{ skill }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="skill-category" data-scroll-delay="100">
                        <div class="card p-6 h-full transform hover:scale-105 hover:shadow-xl transition-all duration-500">
                            <h3 class="font-semibold text-gray-900 mb-4 flex items-center">
                                <div class="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3 transform hover:rotate-6 transition-transform">
                                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                Tools & Frameworks
                            </h3>
                            <div class="space-y-2">
                                <div v-for="(skill, index) in skills.tools_frameworks" :key="skill" 
                                     class="skill-tag w-full justify-center transform hover:scale-110 transition-transform duration-200"
                                     :style="`animation-delay: ${index * 0.1}s`">
                                    {{ skill }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="skill-category" data-scroll-delay="200">
                        <div class="card p-6 h-full transform hover:scale-105 hover:shadow-xl transition-all duration-500">
                            <h3 class="font-semibold text-gray-900 mb-4 flex items-center">
                                <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 transform hover:rotate-6 transition-transform">
                                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                                    </svg>
                                </div>
                                Technologies
                            </h3>
                            <div class="space-y-2">
                                <div v-for="(skill, index) in skills.technologies" :key="skill" 
                                     class="skill-tag w-full justify-center transform hover:scale-110 transition-transform duration-200"
                                     :style="`animation-delay: ${index * 0.1}s`">
                                    {{ skill }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="skill-category" data-scroll-delay="300">
                        <div class="card p-6 h-full transform hover:scale-105 hover:shadow-xl transition-all duration-500">
                            <h3 class="font-semibold text-gray-900 mb-4 flex items-center">
                                <div class="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-3 transform hover:rotate-6 transition-transform">
                                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                                    </svg>
                                </div>
                                Soft Skills
                            </h3>
                            <div class="space-y-2">
                                <div v-for="(skill, index) in skills.soft_skills" :key="skill" 
                                     class="skill-tag w-full justify-center transform hover:scale-110 transition-transform duration-200"
                                     :style="`animation-delay: ${index * 0.1}s`">
                                    {{ skill }}
                                </div>
                            </div>
                        </div>
                    </div>
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
                        Let's work together
                    </h2>
                    <p class="text-xl text-blue-100 mb-8">
                        I'm always excited to discuss new opportunities and innovative projects.
                    </p>
                    <div class="flex flex-col sm:flex-row justify-center gap-4">
                        <component 
                            :is="isStatic ? 'a' : Link"
                            :href="isStatic ? route('contact') : route('contact')"
                            class="btn-primary group"
                        >
                            <span>Get In Touch</span>
                            <svg class="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </component>
                        <component 
                            :is="isStatic ? 'a' : Link"
                            :href="isStatic ? route('projects') : route('projects')"
                            class="inline-flex items-center justify-center bg-transparent text-white px-6 py-3 rounded-lg font-medium border-2 border-white hover:bg-white hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                            style="min-height: 48px;"
                        >
                            <span>View My Work</span>
                            <svg class="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </component>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3'
import Layout from '@/Components/Layout.vue'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { route } from 'ziggy-js'

const props = defineProps({
    personalInfo: Object,
    education: Array,
    skills: Object,
})

// Static mode detection
const isStatic = ref(false)

// Computed properties for stats
const graduationYear = computed(() => {
    if (props.education && props.education.length > 0) {
        const period = props.education[0].period
        if (period && period.includes('-')) {
            return parseInt(period.split('-')[1])
        }
    }
    return 2026
})

const totalSkills = computed(() => {
    if (props.skills) {
        const languages = props.skills.languages ? props.skills.languages.length : 0
        const tools = props.skills.tools_frameworks ? props.skills.tools_frameworks.length : 0
        return languages + tools
    }
    return 0
})

// Intersection Observer for scroll animations
onMounted(() => {
    // Detect static mode
    isStatic.value = !document.querySelector('[data-page]')
    
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

    // Counter animation for stats
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target.querySelector('.counter')
                if (counter && !counter.dataset.counted) {
                    counter.dataset.counted = 'true'
                    const target = parseInt(counter.dataset.target)
                    const delay = parseInt(entry.target.dataset.delay) || 0
                    
                    setTimeout(() => {
                        animateCounter(counter, target)
                    }, delay)
                }
            }
        })
    }, observerOptions)

    // Observe elements with scroll animations
    document.querySelectorAll('.scroll-fade-in, .contact-card, .interests-card, .stats-card, .education-card, .skill-category').forEach(el => {
        el.style.opacity = '0'
        el.style.transform = 'translateY(30px) scale(0.95)'
        el.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        observer.observe(el)
    })

    // Observe stat items for counter animation
    document.querySelectorAll('.stat-item').forEach(el => {
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

    // Cleanup observers on unmount
    onUnmounted(() => {
        observer.disconnect()
        counterObserver.disconnect()
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