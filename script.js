//---------------------------------------------------------------------------------------------------------------------
const text = "Hi I'm Pratik";
    let i = 0;
    function typeWriter() {
    if (i < text.length) {
        document.getElementById("name").textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100); // typing speed
    }
    }
    typeWriter();
//---------------------------------------------------------------------------------------------------------------------
const getYear = new Date().getFullYear();
const year = document.querySelector('.year').textContent = `© 2007 - ${(getYear)} Pratik Thapa | All rights reserved`;
const age = document.getElementById('age').textContent = `${(getYear - 2007)}`;
//---------------------------------------------------------------------------------------------------------------------
const lists = document.querySelectorAll('.navLi');
lists.forEach(list=>{
        list.addEventListener('click',()=>{
            lists.forEach(li=>{li.classList.remove('.selectedLi')})
            list.classList.add('selectedLi');
        })
    })
    
//---------------------------------------------------------------------------------------------------------------------
// Active nav link based on visible section
// Maps each section ID → the nav link that corresponds to it
const sectionNavMap = {
    'detail':    'a[href="#"]',
    'skills':    'a[href="#callSkills"]',
    'projects':  'a[href="#callProjects"]',
    'academics': 'a[href="#callAcademics"]',
    'contact':   'a[href="#callContact"]',
};

function setActiveNav(sectionId) {
    // Remove active from all nav links first
    document.querySelectorAll('.links a').forEach(a => a.classList.remove('nav-active'));
    // Add active to the matching link
    const selector = sectionNavMap[sectionId];
    if (selector) {
        const link = document.querySelector(`.links ${selector}`);
        if (link) link.classList.add('nav-active');
    }
}

// threshold: 0.4 means the section must be at least 40% visible to activate
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setActiveNav(entry.target.id);
        }
    });
}, { threshold: 0.4 });

// Observe every section
document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});
//---------------------------------------------------------------------------------------------------------------------
    function syncIcon() {
        const current = document.documentElement.getAttribute('data-theme');
        const iconEl = document.querySelector('#icon i');
        if (current === 'dark') {
            iconEl.className = 'fas fa-moon';
        } else {
            iconEl.className = 'fas fa-sun';
        }
    }
    syncIcon(); // run immediately on load

    function changeTheme(){
        const root = document.documentElement;
        const current = root.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        localStorage.setItem('forma-theme', next);
        syncIcon(); // update icon after theme changes
    }
