# Lorenzo Miguel D. Bela - Portfolio

A modern, responsive portfolio website showcasing my projects, skills, and experience as a Computer Engineering student.

## 🚀 Tech Stack

- **Backend**: Laravel 12
- **Frontend**: Vue.js 3 with Composition API
- **Router**: Inertia.js for seamless SPA experience
- **Styling**: Tailwind CSS for modern, responsive design
- **Build Tool**: Vite for fast development and building
- **Database**: SQLite (for development)

## 🌟 Features

- **Responsive Design**: Optimized for all screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Fast Performance**: Built with modern tools for optimal loading speeds
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessible**: ARIA compliant and keyboard navigation support

## 📄 Pages

- **Home**: Hero section, skills overview, and featured projects
- **About**: Detailed background, education, and personal information
- **Projects**: Complete portfolio of academic and personal projects
- **Contact**: Contact information and message form

## 🛠️ Local Development Setup

### Prerequisites

- PHP 8.2+
- Composer
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Install JavaScript dependencies**
   ```bash
   npm install
   ```

4. **Environment setup**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Database setup**
   ```bash
   php artisan migrate
   ```

6. **Build assets**
   ```bash
   npm run dev
   ```

7. **Start the development server**
   ```bash
   php artisan serve
   ```

   The application will be available at `http://localhost:8000`

## 📁 Project Structure

```
Portfolio/
├── app/
│   └── Http/
│       └── Controllers/
│           └── PortfolioController.php
├── resources/
│   ├── js/
│   │   ├── Components/
│   │   │   └── Layout.vue
│   │   ├── Pages/
│   │   │   ├── Home.vue
│   │   │   ├── About.vue
│   │   │   ├── Projects.vue
│   │   │   └── Contact.vue
│   │   └── app.js
│   ├── css/
│   │   └── app.css
│   └── views/
│       └── app.blade.php
├── routes/
│   └── web.php
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🎨 Design System

### Colors
- **Primary**: Indigo (600, 700)
- **Secondary**: Gray (50-900)
- **Accent**: Blue, Green, Purple gradients

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, responsive sizing
- **Body**: Regular weight, optimal line height

### Components
- Reusable button styles (`.btn-primary`, `.btn-secondary`)
- Card components with hover effects
- Skill tags with consistent styling
- Responsive navigation with mobile menu

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Build Commands

- `npm run dev`: Start development server with hot reloading
- `npm run build`: Build for production
- `php artisan serve`: Start Laravel development server

## 📊 Performance Features

- **Lazy Loading**: Images and components load on demand
- **Code Splitting**: Automatic route-based code splitting
- **Optimized Assets**: Minified CSS and JavaScript
- **Caching**: Browser caching for static assets

## 🔒 Security Features

- CSRF protection on forms
- XSS protection via Laravel's built-in features
- Secure headers configuration
- Input validation and sanitization

## 📈 Future Enhancements

- [ ] Contact form backend integration
- [ ] Blog section for technical articles
- [ ] Project filtering and search
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Admin panel for content management

## 📞 Contact

**Lorenzo Miguel D. Bela**
- Email: lorenzo.miguel.bela429@gmail.com
- Phone: +639656560409
- Location: Quezon City, Metro Manila

## 📄 License

This project is personal portfolio website. Please respect the content and design.

---

*Built with ❤️ using Laravel, Vue.js, and Tailwind CSS*
