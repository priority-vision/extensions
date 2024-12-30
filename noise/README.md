# Noise

A component that adds noise effect to your Ghost site, specifically prepared for [Priority Vision](https://www.priority.vision/) themes, but can be used on any site.

## Installation

To add custom code, follow these steps:

- Log in to Ghost admin
- Go to  **Settings → Advanced → Code injection** and click **Edit**
- Add this custom code to **Site footer** editor:

```html
<!-- Noise Effect -->
<script type="module" src="https://cdn.jsdelivr.net/npm/@11ty/is-land@4.0.0/is-land.min.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/gh/priority-vision/extensions@0.0.1/noise/noise.js"></script>

<is-land on:media="(prefers-reduced-motion: no-preference)" on:idle>
    <div class="noise"></div>
</is-land>
<!-- /Noise Effect -->
```
