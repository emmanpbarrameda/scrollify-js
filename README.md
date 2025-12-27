<h1 align="center">Scrollify - Scroll Progress Bar Indicator</h1>

<p align="center">A modern, lightweight scroll progress indicator + back-to-top button for web pages</p>

<p align="center">
  <img alt="Made by" src="https://img.shields.io/badge/MADE_BY-EMMAN_P_BARRAMEDA-1877F2?style=for-the-badge&labelColor=FFFFFF"/>
  <img alt="Open Source" src="https://img.shields.io/badge/OPEN_SOURCE-FE7D37?style=for-the-badge&logo=git&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS-1E90FF?style=for-the-badge&logo=css&logoColor=black"/>
  <img src="https://img.shields.io/badge/JavaScript-FFD700?style=for-the-badge&logo=javascript&logoColor=black"/>
</p>

<p align="center">
  <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Femmanpbarrameda%2Fscrollify-js&count_bg=%233D7CC8&title_bg=%23555555&icon=github.svg&icon_color=%23FFFFFF&title=visitors&edge_flat=true"/>
  <img src="https://img.shields.io/github/followers/emmanpbarrameda.svg?style=social&label=Follow"/>
  <img src="https://img.shields.io/github/license/emmanpbarrameda/scrollify-js.svg?style=flat-square"/>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/emmanpbarrameda/scrollify-js/main/preview/preview.gif" width="500" alt="Preview"/>
</p>

<p align="center">
  <a href="https://codepen.io/emmanpbarrameda/pen/emOGzYJ" target="_blank">
    <strong>Click Here for LIVE Demo</strong>
  </a>
  <br>
</p>

## ✨ Features

- Sleek and modern top scroll progress bar (GPU-friendly `transform: scaleX()`)
- Optional Back to Top button with circular scroll progress ring
- Fully customizable via `data-*` attributes (colors, size, position, offsets, etc.)
- Smooth animations (requestAnimationFrame + passive listeners)
- Lightweight with no dependencies
- Easy integration with any website

## 🚀 Installation

### 1) Include Required Files

Add the following links to your HTML:

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/emmanpbarrameda/scrollify-js@v2.0.0/scrollify-scrollprogress-indicator.css">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/gh/emmanpbarrameda/scrollify-js@v2.0.0/scrollify-scrollprogress-indicator.js"></script>
```

### 2) Add Top Progress Bar

```html
<div 
  class="scrollify_scroll_progress" 
  data-height="4px"
  data-background="linear-gradient(to left, #B374F8, #4da3ff)" 
  data-z-index="10000" 
  data-top="0px">
</div>
```

### 3) Add Back to Top Button (Optional)

```html
<button
  id="scrollify_scroll_progress_backToTop"
  class="scrollify-btt"
  data-position="right"
  data-offset="20"
  data-size="44"
  data-stroke="3"
  data-show="300"
  data-progress-color="#0ea5e9"
  data-track-color="rgba(14,165,233,0.2)"
  data-hover="true"
  aria-label="Back to top"
  title="Back to top">
</button>
```

Want a gradient ring? Use `data-progress-gradient`:

```html
data-progress-gradient="linear-gradient(to left, #B374F8, #4da3ff)"
```

## 🎨 Customization

### Progress Bar (`.scrollify_scroll_progress`)

| Attribute | Description | Default Value |
|----------|-------------|---------------|
| `data-height` | Height of the progress bar | `4px` |
| `data-background` | Background color/gradient | `linear-gradient(to left, #B374F8, #4da3ff)` |
| `data-z-index` | Stack order of the bar | `999` |
| `data-top` | Top position of the bar | `0px` |

### Back To Top (`#scrollify_scroll_progress_backToTop`)

| Attribute | Description | Default Value |
|----------|-------------|---------------|
| `data-position` | `left` or `right` | `right` |
| `data-offset` | Bottom + side spacing (px) | `20` |
| `data-size` | Button width/height (px) | `44` |
| `data-stroke` | Ring thickness | `3` |
| `data-show` | Show after scrollY (px) | `300` |
| `data-progress-color` | Ring progress color | `#0ea5e9` |
| `data-progress-gradient` | Ring progress gradient | *(none)* |
| `data-track-color` | Ring track color | `rgba(14,165,233,0.2)` |
| `data-hover` | Hover nudge (icon) `true/false` | `true` |
| `data-spin` | Spin ring `true/false` | `false` |

## 💻 Full Implementation

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Scrollify Demo</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/emmanpbarrameda/scrollify-js@v2.0.0/scrollify-scrollprogress-indicator.css">
    
  </head>
  <body>
    <div
      class="scrollify_scroll_progress"
      data-height="3px"
      data-background="linear-gradient(to left, #B374F8, #4da3ff)"
      data-z-index="999"
      data-top="0px">
    </div>

    <button
      id="scrollify_scroll_progress_backToTop"
      class="scrollify-btt"
      data-position="right"
      data-offset="20"
      data-size="44"
      data-stroke="3"
      data-show="300"
      data-progress-gradient="linear-gradient(to left, #B374F8, #4da3ff)"
      data-track-color="rgba(14,165,233,0.2)"
      data-hover="true"
      aria-label="Back to top"
      title="Back to top">
    </button>

    <div style="height: 2000px; padding: 24px;">
      Scroll down to see Scrollify in action! <br />
      © emmanpbarrameda -
      <a href="https://emmanpbarrameda.github.io/" target="_blank" rel="noopener noreferrer">
        https://emmanpbarrameda.github.io/
      </a>
    </div>

    <script src="https://cdn.jsdelivr.net/gh/emmanpbarrameda/scrollify-js@v2.0.0/scrollify-scrollprogress-indicator.js"></script>
  </body>
</html>
```

## 🤝 Contributing

Want to contribute? That's great! You can:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/NewFeature`)
3. Push your changes (`git push origin feature/NewFeature`)
4. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 💪 Support the Project

If you find this project helpful, consider:

- ⭐ Starring the repository on GitHub
- 🐦 Sharing it on Twitter
- ☕ Supporting via PayPal: https://paypal.me/emmanpbarrameda

## 👤 Get in touch

<table width="100%" align="center">
  <tr>
    <td align="center">
      <a href="https://emmanpbarrameda.github.io">
        <strong>Visit My Portfolio</strong>
        <br />
        <img src="https://avatars.githubusercontent.com/u/67356375?v=4" alt="Profile Image" width="180" style="border-radius: 50%;" />
      </a>
      <br />
      <p>Check out <a href="https://emmanpbarrameda.github.io" target="_blank">my portfolio</a> to learn more about me!</p>
      <a href="https://github.com/emmanpbarrameda" target="_blank"><img src="https://img.shields.io/github/followers/emmanpbarrameda.svg?style=social&label=Follow on GitHub&maxAge=2592000" alt="GitHub Followers" /></a>
    </td>
    <td align="center">
      <a href="https://emmanpbarrameda.github.io">
        <img src="https://i.imgur.com/HXUaVAA.png" alt="Cover Image"/>
      </a>
    </td>
  </tr>
</table>

<p align="center">
  <a href="https://emmanpbarrameda.github.io" target="_blank"><img src="https://img.shields.io/badge/My Portfolio-%20-blue?style=for-the-badge&logo=web"></a>
  &nbsp;&nbsp;
  <a href="mailto:emmanuelbarrameda1@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Email-%20-red?style=for-the-badge&logo=gmail"></a>
  &nbsp;&nbsp;
  <a href="https://facebook.com/emmanpbarrameda/" target="_blank"><img src="https://img.shields.io/badge/Facebook-%20-blue?style=for-the-badge&logo=facebook"></a>
  &nbsp;&nbsp;
  <a href="https://t.me/emmanpbarrameda/" target="_blank"><img src="https://img.shields.io/badge/Telegram-%20-blue?style=for-the-badge&logo=telegram"></a>
  &nbsp;&nbsp;
  <a href="https://linkedin.com/in/emmanpbarrameda/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-%20-blue?style=for-the-badge&logo=linkedin"></a>
  &nbsp;&nbsp;
  <a href="https://github.com/emmanpbarrameda/" target="_blank"><img src="https://img.shields.io/badge/GitHub-%20-black?style=for-the-badge&logo=github"></a>
</p>

------------

<p align="center">Made with ❤️ by <a href="https://emmanpbarrameda.github.io">emmanpbarrameda</a></p>