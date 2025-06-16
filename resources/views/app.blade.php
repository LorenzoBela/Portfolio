<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title inertia>{{ config('app.name', 'Portfolio') }}</title>
    
    <!-- SEO Meta Tags -->
    <meta name="description" content="Lorenzo Miguel D. Bela - Computer Engineering Student Portfolio. Showcasing projects, skills, and experience in software development, hardware integration, and system design.">
    <meta name="keywords" content="Computer Engineering, Software Development, Laravel, Vue.js, Arduino, Database Systems, Lorenzo Miguel Bela">
    <meta name="author" content="Lorenzo Miguel D. Bela">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ request()->url() }}">
    <meta property="og:title" content="Lorenzo Miguel D. Bela - Portfolio">
    <meta property="og:description" content="Computer Engineering Student Portfolio. Showcasing projects, skills, and experience in software development, hardware integration, and system design.">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="{{ request()->url() }}">
    <meta property="twitter:title" content="Lorenzo Miguel D. Bela - Portfolio">
    <meta property="twitter:description" content="Computer Engineering Student Portfolio. Showcasing projects, skills, and experience in software development, hardware integration, and system design.">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="apple-touch-icon" href="/favicon.svg">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    
    <!-- Scripts -->
    @routes
    @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead
</head>
<body class="font-sans antialiased bg-white text-gray-900">
    @inertia
</body>
</html> 