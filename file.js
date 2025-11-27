let links = document.querySelectorAll('nav .links a');
const about_text = document.querySelector('.about-text');
const animation = document.querySelector('.technologies');
const project_container = document.querySelector('.projects .project-container');




links.forEach(link => {     
    link.addEventListener('click', () => {
        links.forEach(index => index.classList.remove('active'));   

        link.classList.add('active');
    }   
    );
});

const techObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            animation.classList.add('show');
        }else{
            animation.classList.remove('show');
        }

    }
    );
},
{}
);
techObserver.observe(animation);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){   
            about_text.classList.add('show');
        }else{
            about_text.classList.remove('show');
        }
    }
    );
},
{}
);
observer.observe(about_text);

const project_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){   
            project_container.classList.add('show');
        }else{
            project_container.classList.remove('show');
        }
    }
    );
},
{}
);
project_observer.observe(project_container);

