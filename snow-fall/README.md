# Snow Fall

A web component that adds snow effect to your Ghost site, specifically prepared for [Priority Vision](https://www.priority.vision/) themes, but can be used on any site. This component uses two libraries:

- https://github.com/zachleat/snow-fall
- https://github.com/11ty/is-land

## Installation

To add custom code, follow these steps:

- Log in to Ghost admin
- Go to  **Settings → Advanced → Code injection** and click **Edit**
- Add this custom code to **Site footer** editor:

```html
<!-- Snow Fall Effect -->
<script type="module" src="https://cdn.jsdelivr.net/npm/@11ty/is-land@4.0.0/is-land.min.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/@zachleat/snow-fall@1.0.3/snow-fall.min.js"></script>

<style>
    snow-fall {
        z-index: 1;
    }

    /* Snow color */
    :root {
        --snow-fall-color: rgba(255, 255, 255, 1);
    }

    /* Dark mode snow color */
    [data-color-scheme="dark"]:root {
        --snow-fall-color: rgba(255, 255, 255, .2);
    }
    @media (prefers-color-scheme: dark) {
        [data-color-scheme="system"]:root {
            --snow-fall-color: rgba(255, 255, 255, .2);
        }
    }
</style>

<is-land on:media="(prefers-reduced-motion: no-preference)" on:idle>
    <snow-fall></snow-fall>
</is-land>
<!-- /Snow Fall Effect -->
```
