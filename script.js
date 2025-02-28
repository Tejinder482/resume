// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// Projects Data
const projects = [
    {
        title: "E-commerce Platform",
        description: "Built with Django and Stripe integration for secure payments",
        technologies: ["Python", "Django", "Stripe", "PostgreSQL"],
        image: "project1.jpg"
    },
    {
        title: "AI Chat Application",
        description: "Integrated OpenAI and Google Gemini for intelligent responses",
        technologies: ["FastAPI", "OpenAI", "Google Gemini", "React"],
        image: "project2.jpg"
    },
    {
        title: "Data Scraping Tool",
        description: "Automated web scraping solution for market research",
        technologies: ["Python", "BeautifulSoup", "Selenium", "MongoDB"],
        image: "project3.jpg"
    }
    // Add more projects as needed
];

// Populate Projects
const projectsGrid = document.querySelector('.projects-grid');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.setAttribute('data-aos', 'fade-up');
    
    projectCard.innerHTML = `
        <div class="project-image">
            <img src="images/${project.image}" alt="${project.title}">
        </div>
        <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
        </div>
    `;
    
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

// Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
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