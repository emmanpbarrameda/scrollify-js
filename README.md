# Scrollify - Scroll Progress Bar Indicator

<h3 align='center'> Scrollify - A Simple Scroll Progress Indicator for Web Pages </h3>

<!-- personal badges -------------------------------------->
<br>
<p align="center">

  <!-- my name -->
  <img alt='/e/' src='https://img.shields.io/badge/MADE_BY - EMMAN_P_BARRAMEDA-100000?style=for-the-badge&logo=/e/&logoColor=1877F2&labelColor=FFFFFF&color=1877F2'/>
  
  <!-- open source -->
  <img alt='Git' src='https://img.shields.io/badge/OPEN_SOURCE-100000?style=for-the-badge&logo=Git&logoColor=FFF9F9&labelColor=FE7D37&color=FE7D37'/>
  
</p>

<!-- primary badges -------------------------------------->
<p align="center">
  
  <!-- language -->
  <img src='https://img.shields.io/badge/JavaScript-FFD700?style=for-the-badge&logo=javascript&logoColor=white' />  

  <!-- views -->
  <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Femmanpbarrameda%2Fscrollify-js&count_bg=%233D7CC8&title_bg=%23555555&icon=github.svg&icon_color=%23FFFFFF&title=visitors&edge_flat=true"/>
  
  <!-- follow -->
  <img src='https://img.shields.io/github/followers/emmanpbarrameda.svg?style=social&label=Follow&maxAge=2592000' />  
  
  <!-- license -->
  <img src='https://img.shields.io/github/license/emmanpbarrameda/scrollify-js.svg?style=flat-square' />    

</p>

<!-- ------ -->

## 💻 **How to Use**
To integrate the Scrollify progress bar indicator into your web page, follow these simple steps:

1. **Include the CSS and JavaScript Files**

    Add the following link to include the Scrollify progress bar CSS:

    ```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/emmanpbarrameda/scrollify-js@latest/scrollify-scrollprogress-indicator.css">
    ```

    Then, include the following script tag to add the functionality:

    ```html
    <script src="https://cdn.jsdelivr.net/gh/emmanpbarrameda/scrollify-js@latest/scrollify-scrollprogress-indicator.js"></script>
    ```

2. **Add the Progress Bar HTML**

    To display the scroll progress bar, place this `<div>` in your HTML code, where you want the progress bar to appear. You can customize the appearance using the data attributes such as `data-height`, `data-background`, `data-z-index`, and `data-top`.

    ```html
    <div 
        class="scrollify_scroll_progress" 
        data-height="4px"
        data-background="linear-gradient(to left, #B374F8, #4da3ff)" 
        data-z-index="10000" 
        data-top="0px">
    </div>
    ```

3. **Customize the Progress Bar**

    You can adjust the following properties to customize the progress bar:

    - `data-height`: Defines the height of the progress bar (default is `4px`).
    - `data-background`: Sets the background gradient color (default is `linear-gradient(to left, #B374F8, #4da3ff)`).
    - `data-z-index`: Defines the stacking order of the progress bar (default is `10000`).
    - `data-top`: Controls the top position of the progress bar (default is `0px`).

4. **Enjoy the Scroll Progress Indicator!**

    Once you have added the required HTML, CSS, and JavaScript, the scroll progress bar will appear at the top of your page, visually indicating the progress as the user scrolls.

<br>

## 👨‍💻 **Features**
- Visually indicates scroll progress on your web page
- Customizable height, background, and position
- Smooth transition effect when scrolling

<br>

## 💡 **Technologies Used**
- HTML
- CSS
- JavaScript

<br>

## ⚙️ **Requirements**
No special requirements. Simply add the provided HTML, CSS, and JS code to your web page.

<br>

## 📝 **License**
This project is licensed under the MIT License. [![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/emmanpbarrameda/scrollify-js/blob/main/LICENSE)

```txt
MIT License

Copyright (c) 2023 EMMANPBARRAMEDA

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
