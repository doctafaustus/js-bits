// For use on https://js-bits-bug-bash.thinkific.com/manage/courses/1515791/settings/code
import css from '@/styles/footer-script.scss';

document.head.insertAdjacentHTML('beforeend', `<style>${css}</style>`);

const allCoursesLink = document.querySelector('.header__nav-item a[href="/collections"]');
allCoursesLink.textContent = 'JS Bits with Bill';

const mainContent = document.querySelector('#main-content');
mainContent.insertAdjacentHTML('afterbegin', `
  <div class="wrapper">
    <section class="course-hero">
      <div class="course-hero-left">
        <div class="course-hero-left-inner">
          <h1 class="bug-bash">Bug Bash</h1>
          <h2 class="mini-course">Mini-Course <span class="bug-emoji">🐛</span></h2>
          <div class="learn">
            Learn debugging techniques.
          </div>
        </div>
      </div>
      <div class="course-hero-right">
        <img class="browser-bg" src="https://res.cloudinary.com/dzynqn10l/image/upload/v1630009193/JS%20Bits/browser-bg_n3nhrn.webp">
        <img class="green-bug" src="https://res.cloudinary.com/dzynqn10l/image/upload/v1630009209/JS%20Bits/green-bug_xanq7n.webp">
      </div>
    </section>

    <section class="enroll">
      <a href="/enroll/1588383" class="enroll-btn">Begin Course</a>
    </section>

    <section class="course-info">
      <h2 class="subheading">We're gonna bash some bugs</h2>
      <p>We all know it: JavaScript is weird. Web development in general is riddled with bugs. Over <b>55%</b> of developers say they spend <b>10-20 hours a week</b> fixing bugs instead of writing new code. While this may seem like an inordinate amount of time, it is often the case that <b>the biggest moments of learning arise from the time spent fixing bugs. 🛠️</b></p>

      <p>That's why I've put together this <b>13-lesson video mini-course</b> that will feature an assortment of HTML, CSS, and JS bugs. You'll have both the opportunity to solve them on your own or simply watch how we can debug them together. We'll look at common bugs, uncommon bugs, and even some incredibly tricky JavaScript quirks!</p>
    </section>

    <figure class="preview">
      <img class="gemwizard-image" src="https://res.cloudinary.com/dzynqn10l/image/upload/v1630023910/JS%20Bits/Screen_Shot_2021-08-26_at_7.22.49_PM_fh1zby.png">
      <figcaption>This "GemWizard" mock ecommerce site has a lot of bugs we'll need to bash together!</figcaption>
    </figure>

    <section class="about-me">
      <h2 class="subheading">Your Instructor</h2>
      <div class="about-me-main">
        <img src="https://res.cloudinary.com/dzynqn10l/image/upload/v1638062406/Bug%20Bash/me-pic_1_kwhy2v.png">
        <p>
          Hi! I'm Bill Coloe, and you might have seen me on <a href="https://www.tiktok.com/@js_bits">TikTok</a>, <a href="https://twitter.com/JS_Bits_Bill">Twitter</a>, or <a href="https://blog.jsbits-yo.com/">on my blog</a>. I started my development career in 2013, first learning a little Ruby on Rails before going all in on JavaScript. I've had the pleasure of working as a 3rd party Front-End Developer for a digital optimization agency, developing client-side AB tests for Fortune 500 websites.
        </p> 
        <p class="about-me-2">
          Since so much of my work has been developing outside the context of a client's source code, I've developed a knack for understanding what's under the hood of websites and have become more skilled in how to debug front-end applications. I hope the techniques and practice this course provides will prove beneficial to your skillset and career!
        </p>
      </div>
    </section>

    <section class="course-info">
      <h2 class="subheading">What's included:</h2>
      <ul class="value-props">
        <li>
          <img src="https://res.cloudinary.com/dzynqn10l/image/upload/v1630025742/JS%20Bits/bullet-5_vrct1z.webp">
          <span class="vp-text">13 short video lessons, each investigating a different bug</span></li>
          <li>
          <img src="https://res.cloudinary.com/dzynqn10l/image/upload/v1630025742/JS%20Bits/bullet-3_mndjku.webp">
          <span class="vp-text">Debug a wide array of HTML, CSS, and JS bugs</span>
        </li>
        <li>
          <img src="https://res.cloudinary.com/dzynqn10l/image/upload/v1630025742/JS%20Bits/bullet-1_bmyvdq.webp">
          <span class="vp-text">Difficulty ranges from easy to downright diabolical</span></li>
        <li>
          <img src="https://res.cloudinary.com/dzynqn10l/image/upload/v1630025742/JS%20Bits/bullet-2_rl2ght.webp">
          <span class="vp-text">Mock "GemWizard" ecommerce website infested with bugs to bash</span></li>
        <li>
          <img src="https://res.cloudinary.com/dzynqn10l/image/upload/v1630025742/JS%20Bits/bullet-4_rs9001.webp">
          <span class="vp-text">Follow along with a cloned version of the site's repo or just watch!</span></li>
      </ul>

      <p>By the time you've finished the course, I'm sure you will have learned something you didn't know before. 😉</b></p>
    </section>
  </div>
`);