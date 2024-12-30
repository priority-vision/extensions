// snow-effects.js
import 'https://cdn.jsdelivr.net/npm/@zachleat/snow-fall@1.0.3/snow-fall.min.js';

// Add styles with dark mode support.
const styles = document.createElement('style');
styles.textContent = `
    snow-fall {
        z-index: 1;
    }

    :root {
        --snow-fall-color: rgba(255, 255, 255, 1);
    }

    [data-color-scheme="dark"] {
        --snow-fall-color: rgba(255, 255, 255, .2);
    }
    @media (prefers-color-scheme: dark) {
        [data-color-scheme="system"] {
            --snow-fall-color: rgba(255, 255, 255, .2);
        }
    }
`;
document.head.appendChild(styles);
