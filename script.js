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

// Projects Data
const projects = [
    {
        title: "Aurum Medical",
        description: "Advanced medical appointment booking system with real-time scheduling and patient management.",
        technologies: ["Python", "Django", "PostgreSQL", "REST API", "JWT"],
        image: "aurum.jpg",
        category: "Healthcare",
        highlights: ["Real-time appointment scheduling", "Patient management system", "Digital health records"]
    },
    {
        title: "Nailsent Auction Platform",
        description: "Sophisticated auction platform with integrated payment systems and social authentication.",
        technologies: ["Python", "Django", "Stripe", "OAuth", "WebSocket"],
        image: "nailsent.jpg",
        category: "E-commerce",
        highlights: ["Split payment system", "Real-time bidding", "Social media authentication"]
    },
    {
        title: "FRCR E-Learning",
        description: "Comprehensive educational platform for medical professionals with interactive quizzes.",
        technologies: ["Python", "Django", "React", "PostgreSQL"],
        image: "frcr.jpg",
        category: "Education",
        highlights: ["Course management", "Interactive quizzes", "Progress tracking"]
    },
    {
        title: "RepSync Fitness",
        description: "Advanced gym workout tracking and management application.",
        technologies: ["Python", "FastAPI", "React Native", "MongoDB"],
        image: "repsync.jpg",
        category: "Health & Fitness",
        highlights: ["Workout tracking", "Progress analytics", "Custom routine builder"]
    },
    {
        title: "Gusto Wine Platform",
        description: "Multi-vendor wine selling platform with comprehensive API architecture.",
        technologies: ["Python", "Django", "REST API", "Redis"],
        image: "gusto.jpg",
        category: "E-commerce",
        highlights: ["Multi-vendor system", "Inventory management", "Order tracking"]
    },
    {
        title: "EyeMo Tutorial Platform",
        description: "Interactive eye treatment tutorial application with video content.",
        technologies: ["Python", "Django", "React", "AWS"],
        image: "eyemo.jpg",
        category: "Healthcare",
        highlights: ["Video tutorials", "Progress tracking", "Interactive exercises"]
    },
    {
        title: "Face Detection AI",
        description: "Advanced face detection system using machine learning.",
        technologies: ["Python", "OpenCV", "TensorFlow", "Deep Learning"],
        image: "face.jpg",
        category: "AI/ML",
        highlights: ["Real-time detection", "Multiple face tracking", "Emotion recognition"]
    },
    {
        title: "Predictive Analytics Model",
        description: "Machine learning model for data prediction and analysis.",
        technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
        image: "predict.jpg",
        category: "AI/ML",
        highlights: ["Data preprocessing", "Model training", "Prediction analytics"]
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
                <img src="images/${project.image}" alt="${project.title}">
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