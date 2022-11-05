function aos(){

    const observer = new IntersectionObserver ((aos) => {
        aos.forEach((entry) => {
            // console.log('test')
            if(entry.isIntersecting) {
                entry.target.classList.add('elementShow');
            }
            else {
                entry.target.classList.remove('elementShow');
            }
        });
    });

    const fromBottom = document.querySelectorAll('.bottomHidden');
    fromBottom.forEach((el) => observer.observe(el));

    const fromTop = document.querySelectorAll('.topHidden');
    fromTop.forEach((el) => observer.observe(el));

    const fromLeft = document.querySelectorAll('.leftHidden');
    fromLeft.forEach((el) => observer.observe(el));

    const fromRight = document.querySelectorAll('.rightHidden');
    fromRight.forEach((el) => observer.observe(el));

    // console.log(fromTop);
    // console.log(fromBottom);
    // console.log(fromLeft);
    // console.log(fromRight);
}
aos();

function skillBar(){
    const observer = new IntersectionObserver ((bars) => {
        bars.forEach((bar) => {
            // console.log('bar')
            if(bar.isIntersecting) {
                bar.target.classList.add('progress-bar_animation');
            }
            else {
                bar.target.classList.remove('progress-bar_animation');
            }
        });
    });

    const bar = document.querySelectorAll('.progress-bar');
    bar.forEach((barElement) => observer.observe(barElement));
}

skillBar();