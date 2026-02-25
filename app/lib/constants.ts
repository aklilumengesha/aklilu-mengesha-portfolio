import {
    FiGithub,
    FiTwitter,
    FiLinkedin,
    FiMail,
    FiCode,
    FiLayers,
    FiSmartphone,
    FiDatabase,
    FiCpu
} from 'react-icons/fi'
import { FaReact, FaNodeJs, FaLaravel, FaPhp, FaDocker } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiNestjs, SiFastify, SiPostgresql, SiMysql, SiMongodb } from 'react-icons/si'

export const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Projects', href: 'projects' },
    { name: 'Services', href: 'services' },
    { name: 'Contact', href: 'contact' },
];

export const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/aklilumengesha', icon: FiGithub },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aklilu-mengesha-160773311/', icon: FiLinkedin },
    { name: 'Email', url: 'mailto:aklilumengesha57@gmail.com', icon: FiMail },
]

export const skills = [
    { name: 'React', icon: FaReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'NestJS', icon: SiNestjs },
    { name: 'Fastify', icon: SiFastify },
    { name: 'Laravel', icon: FaLaravel },
    { name: 'PHP', icon: FaPhp },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MySQL', icon: SiMysql },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Docker', icon: FaDocker },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
]

export const projects = [
    {
        name: 'AI chat landing page', 
        image: '/images/image1.png',
        description: 'A stunning AI chat landing page with parallax effects, modern gradients, and responsive design.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
        githubUrl: 'https://github.com/aklilumengesha/MindFlow',
        liveUrl: 'https://mindflowailandingpage.netlify.app/'
    },
    {
        name: 'Laravel Hotel Booking',
        image: '/images/image22.png',
        description: 'A full-featured hotel booking system with room management, reservation handling, and payment integration built with Laravel and MySQL.',
        technologies: ['Laravel', 'PHP', 'MYSQL', 'Docker'],
        githubUrl: 'https://github.com/aklilumengesha/Laravel-Hotel-Booking',
        liveUrl: 'https://laravel-hotel-booking-sto3.onrender.com/'
    },
    {
        name: 'RestoNext Restaurant Ordering',
        image: '/images/image44.png',
        description: 'RestoNext is a modern restaurant management platform designed to handle everything from online orders and table reservations to staff operations, payments, and analytics all in one system.',
        technologies: ['Next.js', 'TypeScript', 'Javascript', 'Prisma', 'PostgreSQL'],
        githubUrl: 'https://github.com/aklilumengesha/restaurant-ordering',
        liveUrl: 'https://restaurant-ordering-five.vercel.app/'
    },
        {
        name: 'Mini Linkedin',
        image: '/images/image33.png',
        description: 'A professional networking platform built with Next.js, Express, MongoDB, and Firebase. Connect, share, and grow your career.',
        technologies: ['Next.js', 'Javascript', 'Express', 'MongoDB', 'Firebase'],
        githubUrl: 'https://github.com/aklilumengesha/mini-linkedin',
        liveUrl: 'https://mini-linkedin-cpco.vercel.app/'
    },
        {
        name: 'CareerCraft AI',
        image: '/images/image55.png',
        description: 'CareerCraft AI Your intelligent career coach. Build resumes, generate cover letters, practice interviews, and get industry insights powered by AI.',
        technologies: ['Next.js', 'Javascript', 'Tailwind CSS', 'Clerk', 'Prisma', 'postgreSQL'],
        githubUrl: 'https://github.com/aklilumengesha/careercraft-ai',
        liveUrl: 'https://careercraft-ai-ruddy.vercel.app/'
    },
        {
        name: 'Eshop Ecommerce Website',
        image: '/images/imag11.png',
        description: 'Modern e-commerce store with email verification, OAuth login, product reviews, wishlist, coupons, newsletter, real-time stock updates, and comprehensive admin panel.',
        technologies: ['Next.js', 'Javascript', 'Tailwind CSS', 'MongoDB', 'Claudinary'],
        githubUrl: 'https://github.com/aklilumengesha/Eshop-ecommerce-website',
        liveUrl: 'https://eshop-ecommerce-website-ten.vercel.app/'
    }
]

export const testimonials = [
    {
        name: 'David Chen',
        role: 'Restaurant Owner',
        quote: 'Aklilu built our RestoNext platform and it transformed how we manage orders and reservations. The system is intuitive and our staff loves it!'
    },
    {
        name: 'Sarah Mitchell',
        role: 'Hotel Manager',
        quote: 'The Laravel hotel booking system Aklilu developed streamlined our entire reservation process. Bookings increased by 40% in the first month!'
    },
    {
        name: 'James Rodriguez',
        role: 'E-commerce Business Owner',
        quote: 'Aklilu delivered our Eshop platform with all the features we needed. The admin panel is powerful and the customer experience is seamless!'
    }
]

export const services = [
    {
        title: 'Full-Stack Web Development',
        description: 'Custom web applications built with modern technologies like Next.js, React, Laravel, and Node.js for optimal performance.',
        icon: FiCode
    },
    {
        title: 'E-commerce Development',
        description: 'Complete online store solutions with payment integration, inventory management, and user-friendly shopping experiences.',
        icon: FiLayers
    },
    {
        title: 'Booking & Management Systems',
        description: 'Reservation platforms and management systems for hotels, restaurants, and service-based businesses.',
        icon: FiSmartphone
    },
    {
        title: 'Backend API Development',
        description: 'Robust server-side solutions with scalable architecture, secure APIs, and database optimization.',
        icon: FiDatabase
    },
    {
        title: 'DevOps & Deployment',
        description: 'CI/CD pipelines, cloud infrastructure, Docker containerization, and deployment automation for your projects.',
        icon: FiCpu
    }
]
