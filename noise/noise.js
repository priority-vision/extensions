const styles = document.createElement('style');
styles.textContent = `
    :root {
        --noise-image: url(https://cdn.jsdelivr.net/gh/priority-vision/extensions@0.0.1/noise/noise.svg);
        --noise-image-white: url(https://cdn.jsdelivr.net/gh/priority-vision/extensions@0.0.1/noise/noise-white.svg);
    }

    /* Dark mode noise image */
    [data-color-scheme="dark"]:root {
        --noise-image: var(--noise-image-white);
    }
    @media (prefers-color-scheme: dark) {
        [data-color-scheme="system"]:root {
            --noise-image: var(--noise-image-white);
        }
    }

    .noise {
        position: fixed;
        inset: 0;
        pointer-events: none;
        overflow: hidden;
        z-index: 1000000;
    }
    .noise:after {
        content: "";
        position: absolute;
        inset: -50%;
        animation: noise 0.3s steps(4) both infinite;
        background-image: var(--noise-image);
        background-size: 40px;
        opacity: 0.3;
    }

    @keyframes noise {
        0% { transform: translate3d(1%, -1%, 0) }
        25% { transform: translate3d(-12%, -5%, 0) }
        50% { transform: translate3d(10%, 9%, 0) }
        75% { transform: translate3d(-10%, 8%, 0) }
        100% { transform: translate3d(0, 8%, 0) }
    }
`;
document.head.appendChild(styles);
