const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        // console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



function skillBar(){
    const observer = new IntersectionObserver ((bars) => {
        bars.forEach((bar) => {
            console.log(bar)
            if(bar.isIntersecting) {
                bar.target.classList.add('progress-bar_animation');
            }
            else {
                bar.target.classList.remove('progress-bar_animation');
            }
        });
    });

    const bar = document.querySelectorAll('.progress-bar');
    bar.forEach((el) => observer.observe(el));
}

skillBar();