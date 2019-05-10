'use strict';

// INFO: see https://olaolu.me/src/js/data.js for the real sauce.
var data = {
  home: {
    content: '\n    <h1>Hi<span>.</span> I\'m Olaolu<span>,</span></h1>\n    <p>A Front end engineer and UX Strategist based in <a href="https://www.google.com/maps/place/Lagos/@6.5483768,3.1438711,11z/data=!3m1!4b1!4m5!3m4!1s0x103b8b2ae68280c1:0xdc9e87a367c3d9cb!8m2!3d6.5243793!4d3.3792057" target="_blank" rel="noopener">Lagos, Nigeria</a>.I\'m passionate about web development best practices, crafting design systems (which I\'ve done for almost every project), interface engineering, performance, user experience and overall product success. You can check out some of my work on <a href="https://github.com/whizkydee" target="_blank" rel="noopener">GitHub</a>.</p>\n    <a href="/#about" onclick="aboutLink.click()">about</a>\n    ',
    tabId: 'home'
  },
  about: {
    content: '\n    <h1>about me</h1>\n    <p>lover of - unicorns \xB7 purples \xB7 donuts</p>\n    <p>I like to call myself a UX Strategist and front end developer. I\'m currently based in the city of Lagos in Nigeria... living a simple life being optimistic about things and smiling a lot. When I\'m not in front of my computer, I\'m either trying to make music or fondling with my camera and trying new things.</p>\n    <p>Over the past 8 years, I\'ve built products for businesses all around the globe ranging from basic websites to complex solutions with focus on creating blazing fast, elegant and accessible user experiences. Right now, I\'m a Senior Front End Engineering contractor with <a href="https://pixel2html.com" rel="noopener noreferrer" target="_blank">Pixel2HTML</a>, an agency comprised of some of the most talented front end developers scattered around the globe. Previously, I led the front-end engineering team at Conectar LLC through building several React applications into a single powerful online learning platform. I deliver quality stuff freelancing and consulting for a bunch of organizations internationally. I also created the <a href="https://marketplace.visualstudio.com/items?itemName=whizkydee.material-palenight-theme" rel="noopener" target="_blank">Palenight theme</a> for VS Code with hundreds of thousands of downloads.</p>\n    <p>I\'m passionate about web performance, great user experiences and JavaScript applications, also open for consultation, and remote or contract work. Leave a message!</p>\n    <p>(Available for full time roles starting July 2019)</p>\n    ',
    tabId: 'about'
  },
  contact: {
    content: '\n    <h1>contact</h1>\n    <form action="https://formspree.io/mrolaolu@gmail.com"\n      method="POST">\n      <input type="hidden" name="_subject" value="Message from olaolu.me!">\n      <input title="Name should be at least three characters long, not exceed 70 characters and contain only letters."\n        type="text" name="name" placeholder="Your Name" required pattern="[A-Za-z]{3,70}">\n      <input type="email" name="_replyto" placeholder="Email Address" required minlength="5" maxlength="254">\n      <textarea placeholder="Your Message" name="message" rows="7" required minlength="30"></textarea>\n      <input type="submit" value="shoot!" id="submit">\n      <span>or <a href="https://github.com/whizkydee/ama" target="_blank" rel="noopener">ask me anything</a> instead.</span>\n    </form>\n    ',
    tabId: 'contact'
  }
};
//# sourceMappingURL=data.js.map
