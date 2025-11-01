// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// Add this after AOS.init()
particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#38bdf8"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.5,
        "random": false
      },
      "size": {
        "value": 3,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#38bdf8",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      }
    },
    "retina_detect": true
  }
);

// Projects Data - Real projects
const projects = [
    {
        title: "Auction Platform",
        description: "Developed a real-time auction platform where users can post products for bidding. Other users can place bids, and the highest bidder wins. Integrated Stripe for secure payment processing.",
        technologies: ["Python", "Django", "Stripe", "PostgreSQL", "Redis", "WebSockets"],
        image: "https://images.unsplash.com/photo-1628527304948-06157ee3c8a6?w=800&auto=format",
        category: "E-commerce",
        highlights: [
            "Real-time bidding system",
            "Product posting and management",
            "Stripe payment integration",
            "Highest bidder wins automatically"
        ]
    },
    {
        title: "FRCR Quiz Management System",
        description: "Built a comprehensive quiz management platform specifically designed for FRCR exam preparation. Features include practice tests, progress tracking, and detailed analytics.",
        technologies: ["Python", "Django", "PostgreSQL", "REST API"],
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format",
        category: "Education",
        highlights: [
            "FRCR exam preparation focused",
            "Quiz management system",
            "Progress tracking",
            "Performance analytics"
        ]
    },
    {
        title: "Appointment Booking System",
        description: "Created an appointment booking system where users can easily book appointments with service providers. Features include calendar integration, scheduling, and notification system.",
        technologies: ["Python", "Django", "PostgreSQL", "REST API"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format",
        category: "Healthcare",
        highlights: [
            "User-friendly booking interface",
            "Calendar integration",
            "Real-time availability",
            "Automated notifications"
        ]
    },
    {
        title: "E-commerce Platform",
        description: "Developed a full-featured e-commerce platform with product catalog, shopping cart, order management, and payment processing capabilities.",
        technologies: ["Python", "Django", "PostgreSQL", "Stripe", "REST API"],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format",
        category: "E-commerce",
        highlights: [
            "Product catalog management",
            "Shopping cart functionality",
            "Order processing system",
            "Payment gateway integration"
        ]
    },
    {
        title: "Fitness and Health App",
        description: "Built a comprehensive fitness and health management application with workout tracking, nutrition planning, progress monitoring, and health analytics.",
        technologies: ["Python", "FastAPI", "PostgreSQL", "REST API"],
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format",
        category: "Health & Fitness",
        highlights: [
            "Workout tracking",
            "Nutrition planning",
            "Progress monitoring",
            "Health analytics dashboard"
        ]
    },
    {
        title: "Delivery Management App",
        description: "Developed a delivery management application with real-time tracking, order management, delivery assignment, and status updates for efficient logistics operations.",
        technologies: ["Python", "Django", "PostgreSQL", "WebSockets", "REST API"],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format",
        category: "E-commerce",
        highlights: [
            "Real-time order tracking",
            "Delivery assignment system",
            "Status updates",
            "Route optimization"
        ]
    },
    {
        title: "AI Car Booking Agent",
        description: "Developed an intelligent AI agent for car booking system that handles conversational interactions, understands user requirements, and automates the booking process. Part of the AI Agent Team project.",
        technologies: ["Python", "FastAPI", "AI/ML", "LLM Integration", "Conversational AI"],
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format",
        category: "AI/ML",
        highlights: [
            "Conversational AI agent",
            "Automated booking workflow",
            "Natural language understanding",
            "API endpoint integration"
        ]
    },
    {
        title: "Wine Recommendation System",
        description: "Built an AI-powered wine recommendation system using custom NER (Named Entity Recognition) models and ChatGPT integration. Provides intelligent wine suggestions based on user preferences and queries.",
        technologies: ["Python", "FastAPI", "ML NER Models", "ChatGPT", "LLM Integration"],
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&auto=format",
        category: "AI/ML",
        highlights: [
            "Custom NER model integration",
            "ChatGPT-powered recommendations",
            "Intelligent information retrieval",
            "Natural language processing"
        ]
    }
];

// Populate Projects
const projectsGrid = document.querySelector('.projects-grid');

if (projectsGrid) {
    projects.forEach((project, index) => {
        const projectCard = createProjectCard(project);
        projectCard.style.animationDelay = `${index * 0.1}s`;
        projectsGrid.appendChild(projectCard);
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navLinks.classList.remove('active');
    }
});

// Initialize EmailJS
// Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
(function() {
    emailjs.init("YOUR_PUBLIC_KEY");
})();

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
const buttonText = contactForm.querySelector('.button-text');
const buttonLoader = contactForm.querySelector('.button-loader');

function showToast(message, type = 'success') {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    // Show toast
    setTimeout(() => toast.classList.add('show'), 100);

    // Hide and remove toast
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 5000);
}

function setLoading(isLoading) {
    if (isLoading) {
        buttonText.classList.add('hidden');
        buttonLoader.classList.remove('hidden');
    } else {
        buttonText.classList.remove('hidden');
        buttonLoader.classList.add('hidden');
    }
}

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    setLoading(true);

    // Get form data
    const formData = {
        from_name: document.getElementById('user_name').value,
        from_email: document.getElementById('user_email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    // Replace these parameters with your EmailJS service details
    emailjs.send(
        'YOUR_SERVICE_ID', // Email JS service ID
        'YOUR_TEMPLATE_ID', // Email JS template ID
        formData
    )
    .then(function(response) {
        showToast('Thank you! Your message has been sent successfully.');
        contactForm.reset();
    })
    .catch(function(error) {
        showToast('Oops! Something went wrong. Please try again later.', 'error');
        console.error('Email Error:', error);
    })
    .finally(function() {
        setLoading(false);
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Chatbot functionality
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotContainer = document.getElementById('chatbot-container');
const closeChat = document.getElementById('close-chat');
const chatMessages = document.getElementById('chatbot-messages');
const userInput = document.getElementById('user-input');
const sendMessage = document.getElementById('send-message');

// Chatbot responses based on keywords
const chatbotResponses = {
    skills: "Tejinder is skilled in Python, Django, DRF, FastAPI, PostgreSQL, Redis, Celery, Docker, and AI/ML. He has experience with NER models, LLM integration, and various backend technologies.",
    experience: "Tejinder is currently working as a Python Developer (AI Agent Team) at Admin Webworld since July 2025. Previously, he worked as Python Backend Developer at Kontinuum Kode from March 2023 to June 2025, and as Business Analyst at Live Deftsoft from June 2021 to February 2023.",
    projects: "Tejinder has successfully delivered 10+ projects including: Auction Platform with Stripe integration, FRCR Quiz Management System, Appointment Booking System, E-commerce Platform, Fitness and Health App, Delivery Management App, AI Car Booking Agent, and Wine Recommendation System with NER models and ChatGPT integration.",
    education: "Tejinder completed his B.Tech in Computer Science from Shaheed Udham Singh College, Punjab in July 2021. He completed Higher Secondary Education from JET Higher Secondary School, Baramulla in November 2015, and Secondary Education from Budding Bloom Exceptional School, Baramulla in November 2013.",
    contact: "You can contact Tejinder through the contact form on this website or via his social media profiles.",
    default: "I can tell you about Tejinder's skills, experience, projects, education, or how to contact him. What would you like to know?"
};

function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(message) {
    message = message.toLowerCase();
    if (message.includes('skill') || message.includes('know') || message.includes('do'))
        return chatbotResponses.skills;
    if (message.includes('experience') || message.includes('work'))
        return chatbotResponses.experience;
    if (message.includes('project'))
        return chatbotResponses.projects;
    if (message.includes('education') || message.includes('study'))
        return chatbotResponses.education;
    if (message.includes('contact') || message.includes('reach'))
        return chatbotResponses.contact;
    return chatbotResponses.default;
}

chatbotToggle.addEventListener('click', () => {
    chatbotContainer.classList.add('active');
});

closeChat.addEventListener('click', () => {
    chatbotContainer.classList.remove('active');
});

sendMessage.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message) {
        addMessage(message, true);
        userInput.value = '';
        setTimeout(() => {
            addMessage(getBotResponse(message));
        }, 500);
    }
});

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage.click();
    }
});

// Add typing effect to hero subtitle
const typingText = document.querySelector('.typing-text');
if (typingText) {
    const texts = ['Python Backend Developer', 'AI/ML Expert', 'Business Analyst'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }

        const speed = isDeleting ? 50 : 100;
        setTimeout(typeWriter, speed);
    }

    typeWriter();
}

// Add skill progress bars
const skillCategories = document.querySelectorAll('.skill-category');
skillCategories.forEach(category => {
    const skills = category.querySelectorAll('li');
    skills.forEach(skill => {
        const progress = Math.random() * 30 + 70; // Random progress between 70-100%
        skill.innerHTML += `
            <div class="skill-progress">
                <div class="skill-progress-bar">
                    <div class="skill-progress-fill" style="transform: scaleX(${progress/100})"></div>
                </div>
            </div>
        `;
    });
});

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = `${progress}%`;
});

// Add hover effect for project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Add this to your existing styles
const styles = document.createElement('style');
styles.textContent = `
    .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 0;
        height: 3px;
        background: linear-gradient(to right, var(--primary-color), var(--accent-color));
        z-index: 1001;
        transition: width 0.2s;
    }

    .timeline {
        max-width: 1200px;
        margin: 0 auto;
        padding: 50px 20px;
        position: relative;
    }

    .timeline::before {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 2px;
        height: calc(100% - 100px);
        background: linear-gradient(
            to bottom,
            transparent,
            var(--accent-color),
            var(--accent-color),
            transparent
        );
        top: 50px;
    }

    .timeline-item {
        width: calc(50% - 30px);
        margin: 30px 0;
        position: relative;
        transform: translateY(20px);
        opacity: 0;
        animation: fadeInUp 0.5s forwards;
    }

    .timeline-item:nth-child(odd) {
        margin-left: auto;
        padding-left: 50px;
    }

    .timeline-item:nth-child(even) {
        margin-right: auto;
        padding-right: 50px;
        text-align: right;
    }

    .timeline-item::before {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        background: var(--accent-color);
        border-radius: 50%;
        top: 50%;
        transform: translateY(-50%);
    }

    .timeline-item:nth-child(odd)::before {
        left: -8px;
    }

    .timeline-item:nth-child(even)::before {
        right: -8px;
    }

    .timeline-content {
        background: rgba(30, 41, 59, 0.7);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(56, 189, 248, 0.1);
        padding: 20px;
        border-radius: 10px;
        position: relative;
        transition: transform 0.3s, box-shadow 0.3s;
    }

    .timeline-content:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(56, 189, 248, 0.1);
    }

    .timeline-content h3 {
        color: var(--accent-color);
        margin-bottom: 10px;
        font-size: 1.2rem;
    }

    .timeline-content h4 {
        color: var(--text-color);
        opacity: 0.8;
        margin-bottom: 5px;
    }

    .timeline-content .date {
        color: var(--accent-color);
        font-size: 0.9rem;
        margin-bottom: 15px;
    }

    .timeline-content ul {
        list-style: none;
        padding: 0;
    }

    .timeline-content li {
        margin: 8px 0;
        padding-left: 20px;
        position: relative;
    }

    .timeline-content li::before {
        content: "→";
        color: var(--accent-color);
        position: absolute;
        left: 0;
    }

    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Add glowing dots for timeline markers */
    .timeline-item::after {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        background: rgba(56, 189, 248, 0.2);
        border-radius: 50%;
        top: 50%;
        transform: translateY(-50%);
        animation: pulse 2s infinite;
    }

    .timeline-item:nth-child(odd)::after {
        left: -10px;
    }

    .timeline-item:nth-child(even)::after {
        right: -10px;
    }

    @keyframes pulse {
        0% {
            transform: translateY(-50%) scale(1);
            opacity: 0.5;
        }
        50% {
            transform: translateY(-50%) scale(1.5);
            opacity: 0.2;
        }
        100% {
            transform: translateY(-50%) scale(1);
            opacity: 0.5;
        }
    }

    /* Enhanced project card styles */
    .project-card {
        transform: perspective(1000px) rotateY(0deg);
        transition: transform 0.5s;
    }

    .project-card:hover {
        transform: perspective(1000px) rotateY(5deg);
    }

    .project-image::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            45deg,
            rgba(56, 189, 248, 0.2),
            transparent
        );
        pointer-events: none;
    }

    /* Add floating animation to project cards */
    @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
    }

    .project-card {
        animation: float 6s ease-in-out infinite;
    }

    /* Staggered animation for project cards */
    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        padding: 2rem;
    }

    .project-card {
        opacity: 0;
        animation: fadeIn 0.5s forwards;
    }

    @keyframes fadeIn {
        to {
            opacity: 1;
        }
    }

    .project-card:nth-child(1) { animation-delay: 0.1s; }
    .project-card:nth-child(2) { animation-delay: 0.2s; }
    .project-card:nth-child(3) { animation-delay: 0.3s; }
    .project-card:nth-child(4) { animation-delay: 0.4s; }
    .project-card:nth-child(5) { animation-delay: 0.5s; }
    .project-card:nth-child(6) { animation-delay: 0.6s; }
    .project-card:nth-child(7) { animation-delay: 0.7s; }
    .project-card:nth-child(8) { animation-delay: 0.8s; }
`;

document.head.appendChild(styles);

// Update project card creation with new futuristic design
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-category', project.category);
    
    card.innerHTML = `
        <div class="project-card-inner">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay">
                    <span class="project-category">${project.category}</span>
                </div>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-highlights">
                    ${project.highlights.map(highlight => `
                        <span class="highlight"><i class="fas fa-check-circle"></i> ${highlight}</span>
                    `).join('')}
                </div>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Add category filter functionality
const categories = ['All', 'Healthcare', 'E-commerce', 'Education', 'Health & Fitness', 'AI/ML'];

function createCategoryFilters() {
    const filterContainer = document.getElementById('project-filters');
    if (!filterContainer) return;
    
    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'filter-btn' + (category === 'All' ? ' active' : '');
        button.textContent = category;
        button.addEventListener('click', () => filterProjects(category));
        filterContainer.appendChild(button);
    });
}

// Initialize filters when projects are loaded
createCategoryFilters();

function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.classList.toggle('active', btn.textContent === category);
    });
    
    projectCards.forEach((card, index) => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'All' || cardCategory === category) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 50);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => card.style.display = 'none', 300);
        }
    });
}

// Add scroll reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('[data-aos]').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
}); 
