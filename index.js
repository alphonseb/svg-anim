import { TweenMax, Linear, Power3 } from 'gsap';

TweenMax.to('#leaf_blue', 3, {
    rotation: 30,
    transformOrigin: 'bottom right',
    repeat: -1,
    yoyo: true,
    ease: Linear.easeNone
});

TweenMax.to('#leaf_white', 3, {
    rotation: -40,
    transformOrigin: 'bottom right',
    repeat: -1,
    yoyo: true,
    ease: Linear.easeNone
});

TweenMax.fromTo('#message_1', 0.4, { scaleY: 0 }, {
    scaleY: 1,
    transformOrigin: '0 100%',
    ease: Power3.easeOut
})