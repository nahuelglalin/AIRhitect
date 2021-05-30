const config = {
    type: 'carousel',
    perView: 3,
    animationDuration: 1000,
    startAt: 2,
    autoplay: 4000,
    animationTimingFunc: "ease-in-out",
    gap: 0,
    breakpoints: {
        900: {
            perView: 2
        },
        480: {
            perView: 1,
            peek: {
                before: 0,
                after: 0
            }
        }
    }
}
new Glide('.glide', config).mount();