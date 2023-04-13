var app;
function initPixi(targetEl, bgImg) {
    let target = document.querySelector(targetEl);
    app = new PIXI.Application({width: target.offsetWidth, height: target.offsetHeight});
    target.appendChild(app.view);

    
    if (bgImg === undefined) {
        maskImg = target.offsetWidth > 800 ? 'img/furniture/hero.jpg' : 'img/furniture/img7.jpg'; 
    } else {
        maskImg = bgImg;
    }
    var image = new PIXI.Sprite.from(maskImg);
    image.width = target.offsetWidth;
    image.height = target.offsetHeight;
    app.stage.addChild(image);

    displacementSprite = new PIXI.Sprite.from("assets/img/bg/displacement.jpg");
    displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    app.stage.addChild(displacementSprite);
    app.stage.filters = [displacementFilter];

    app.renderer.view.style.transform = 'scale(1.05)';
    displacementSprite.scale.x = 1.5;
    displacementSprite.scale.y = 1.5;
    animate();
}
function animate() {
    displacementSprite.x += 0.7;
    displacementSprite.y += 0.7;
    requestAnimationFrame(animate);
}

// -------------------PIXI code ends--------------------------------------------------------

function isInViewListener() {
    window.addEventListener('scroll', function() {
        let value = window.scrollY;
        document.getElementById('float-back').style.transform = "translateY(-" + value * 0.2 + "px) translateZ(-30px)";
        document.getElementById('float-front').style.transform = "translateY(-" + value * 0.4 + "px) translateZ(30px)";
        document.getElementById('blue').style.transform = "translateY(-" + value * 0.1 + "px) translateZ(-30px)";
        document.getElementById('red').style.transform = "translateY(-" + value * 0.5 + "px) translateZ(-30px)";
        toggleVisibleClass('#job-card-1', 'visible');
        toggleVisibleClass('#job-card-2', 'visible');
        toggleVisibleClass('#job-card-1-count', 'visible');
        toggleVisibleClass('#job-card-2-count', 'visible');
        toggleVisibleClass('.bulb-container', 'bounce');
        toggleVisibleClass('#experience .heading-primary', 'isNotHidden');
        toggleVisibleDualClass('.timeline-card-1 > .vertical-timeline-element', 'is-hidden', 'bounce-in');
        toggleVisibleDualClass('.timeline-card-2 > .vertical-timeline-element', 'is-hidden', 'bounce-in');
        toggleVisibleDualClass('.timeline-card-3 > .vertical-timeline-element', 'is-hidden', 'bounce-in');
        toggleVisibleDualClass('.timeline-card-4 > .vertical-timeline-element', 'is-hidden', 'bounce-in');
        // runWhenVisible('.carousel-item.active');
        
    })
}

function isInViewport(selectorName) {
    const element = document.querySelector(selectorName);
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function isInViewport2(selectorName) {
    const element = document.querySelector(selectorName);
    const rect = element.getBoundingClientRect();
    return (
        // rect.top >= 0 &&
        // rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        //  && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function toggleVisibleClass(selectorName, className) {
    let item = $(selectorName);
    if (isInViewport(selectorName) && !item.hasClass(className)) {
        item.addClass(className);
    } else if (!isInViewport(selectorName) && item.hasClass(className)) {
        item.removeClass(className);
    }
}

// function addVisibleClass(selectorName, className) {                      // Add class when element shows only for first time.
//     let item = $(selectorName);
//     if (isInViewport(selectorName) && !item.hasClass(className)) {
//         item.addClass(className);
//     }
// }

// function toggleVisibleDualClass(selectorName, class1, class2) {                    // toggle dual classes on an item.
//     let item = $(selectorName);
//     if (isInViewport2(selectorName)) {
//         item.removeClass(class1);
//         item.addClass(class2);
//     } else if (!isInViewport2(selectorName)) {
//         item.removeClass(class2);
//         item.addClass(class1);
//     }
// }

function toggleVisibleDualClass(selectorName, class1, class2) {                       // customised toggleVisibleDualClass function for timeline component.
    let target = selectorName + '-content';
    let card = $(target);
    let icon = $(selectorName + '-icon');
    if (isInViewport2(target)) {
        card.removeClass(class1);
        card.addClass(class2);
        icon.removeClass(class1);
        icon.addClass(class2);
    } else if (!isInViewport2(target)) {
        card.removeClass(class2);
        card.addClass(class1);
        icon.removeClass(class2);
        icon.addClass(class1);
    }
}

// function runWhenVisible(selectorName) {
//     if (isInViewport(selectorName)) {
//         // window.instances.next();
//         console.log(window.instances);
//     }
// }




// --------------------------------- Toggle isInViewport ends ------------------------------------------------------


function init_Tilt() {
    console.log('run tilt');
    // VanillaTilt.init(document.querySelector("#job-card-1"),{max: 25,	speed: 400, glare: false, "max-glare": 1});
    // VanillaTilt.init(document.querySelector("#job-card-2"),{max: 25,	speed: 400, glare: false, "max-glare": 1});
    VanillaTilt.init(document.querySelector("#hero-image"),{max: 25,	speed: 400, glare: false, "maxGlare": 0.1, "full-page-listening": true});
    VanillaTilt.init(document.querySelector(".drop.left"),{max: 25,	speed: 400, glare: false, "max-glare": 0.5});
    VanillaTilt.init(document.querySelector(".drop.middle"),{max: 25,	speed: 400, glare: false, "maxGlare": 0.1});
    VanillaTilt.init(document.querySelector(".drop.right"),{max: 25,	speed: 400, glare: false, "max-glare": 0.5});
    VanillaTilt.init(document.querySelector("#job-card-1"),{max: 25,	speed: 400, glare: false, "max-glare": 1});
    VanillaTilt.init(document.querySelector("#job-card-2"),{max: 25,	speed: 400, glare: false, "max-glare": 1});
    // VanillaTilt.init(document.querySelector("#htmlCard"),{max: 25,	speed: 400, glare: false, "max-glare": 1});
}



// AOS.init();


function initProjectCarousel() {
    var elems = document.querySelectorAll('.carousel');
    instances = M.Carousel.init(elems);
}