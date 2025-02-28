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

// Projects Data with generic descriptions and real image URLs
const projects = [
    {
        title: "Healthcare Management System",
        description: "Developed a comprehensive healthcare platform enabling efficient appointment scheduling and patient management.",
        technologies: ["Python", "Django", "PostgreSQL", "REST API", "JWT"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format",
        category: "Healthcare",
        highlights: [
            "Real-time scheduling system",
            "Secure patient data management",
            "Automated notification system"
        ]
    },
    {
        title: "E-commerce Auction Platform",
        description: "Built a sophisticated auction system with advanced payment processing and user authentication.",
        technologies: ["Python", "Django", "Stripe", "OAuth", "WebSocket"],
        image: "https://images.unsplash.com/photo-1628527304948-06157ee3c8a6?w=800&auto=format",
        category: "E-commerce",
        highlights: [
            "Multi-payment gateway integration",
            "Real-time bidding system",
            "Social authentication"
        ]
    },
    {
        title: "E-Learning Management System",
        description: "Created an interactive learning platform with course management and assessment capabilities.",
        technologies: ["Python", "Django", "React", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format",
        category: "Education",
        highlights: [
            "Interactive course delivery",
            "Assessment system",
            "Progress tracking"
        ]
    },
    {
        title: "Fitness Tracking Application",
        description: "Developed a mobile-first fitness application for workout tracking and progress monitoring.",
        technologies: ["Python", "FastAPI", "React Native", "MongoDB"],
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format",
        category: "Health & Fitness",
        highlights: [
            "Custom workout plans",
            "Progress analytics",
            "Mobile-responsive design"
        ]
    },
    {
        title: "Multi-vendor E-commerce Platform",
        description: "Architected a scalable multi-vendor platform with comprehensive API infrastructure.",
        technologies: ["Python", "Django", "REST API", "Redis"],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format",
        category: "E-commerce",
        highlights: [
            "Vendor management system",
            "Inventory tracking",
            "Order processing"
        ]
    },
    {
        title: "Medical Training Platform",
        description: "Built an educational platform focused on medical training with video content delivery.",
        technologies: ["Python", "Django", "React", "AWS"],
        image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&auto=format",
        category: "Healthcare",
        highlights: [
            "Video content management",
            "Interactive learning modules",
            "User progress tracking"
        ]
    },
    {
        title: "AI-Powered Face Detection System",
        description: "Implemented an advanced face detection system using machine learning algorithms.",
        technologies: ["Python", "OpenCV", "TensorFlow", "Deep Learning"],
        image: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?w=800&auto=format",
        category: "AI/ML",
        highlights: [
            "Real-time detection",
            "Multi-face tracking",
            "Emotion recognition"
        ]
    },
    {
        title: "Predictive Analytics Solution",
        description: "Developed a machine learning model for data prediction and pattern recognition.",
        technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format",
        category: "AI/ML",
        highlights: [
            "Data preprocessing",
            "Model training",
            "Predictive analytics"
        ]
    }
];

// Populate Projects
const projectsGrid = document.querySelector('.projects-grid');

projects.forEach(project => {
    const projectCard = createProjectCard(project);
    projectsGrid.appendChild(projectCard);
});

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
    hamburger.classList.toggle('active');
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
    skills: "Tejinder is skilled in Python, Django, FastAPI, AI/ML, and web development. He has experience with various technologies including Stripe, OpenAI, and Google Gemini.",
    experience: "Tejinder has been working as a Python Developer at Kontinuum Kode since March 2023. Before that, he worked as a Business Analyst at Live Deft Soft.",
    projects: "Tejinder has successfully delivered 10 projects, including e-commerce platforms, AI chat applications, and data scraping tools.",
    education: "Tejinder completed his B.Tech from PTU, 12th from Jet HR Secondary, and 10th from Bugging Bloom.",
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

// Add typing effect to hero section
const heroText = document.querySelector('.hero h1');
const text = heroText.textContent;
heroText.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        heroText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect when page loads
window.addEventListener('load', typeWriter);

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
    const filterContainer = document.createElement('div');
    filterContainer.className = 'project-filters';
    
    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'filter-btn' + (category === 'All' ? ' active' : '');
        button.textContent = category;
        button.addEventListener('click', () => filterProjects(category));
        filterContainer.appendChild(button);
    });
    
    return filterContainer;
}

function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.classList.toggle('active', btn.textContent === category);
    });
    
    projectCards.forEach(card => {
        if (category === 'All' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
            setTimeout(() => card.style.opacity = '1', 0);
        } else {
            card.style.opacity = '0';
            setTimeout(() => card.style.display = 'none', 300);
        }
    });
} 