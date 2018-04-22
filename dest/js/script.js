'use strict';

var routeTo = function routeTo(target) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : target.getAttribute('data-navigator');

  var tabTitle = title,
      body = document.body,
      currentTab = data[tabTitle],
      main = document.querySelector('main');

  document.documentElement.style.setProperty('background-color', 'var(--' + tabTitle + '-border)');
  document.title = title.charAt(0).toUpperCase() + title.slice(1) + ' \xB7 Olaolu Olawuyi';
  body.style.setProperty('background-color', 'var(--' + tabTitle + '-bg)');

  body.className = body.className !== currentTab.name ? currentTab.name : body.className;
  main.className = main.className !== currentTab.name ? currentTab.name : main.className;

  main.innerHTML = main.innerHTML !== currentTab.content ? currentTab.content : main.innerHTML;
  document.querySelector('meta[name="theme-color"]').setAttribute('content', getComputedStyle(document.documentElement).getPropertyValue('--' + tabTitle + '-bg'));

  if (!target.classList.contains('active')) {
    var activeLink = document.querySelector('.active');
    if (activeLink) activeLink.classList.remove('active');
    target.classList.add('active');
  }
  positionSocialIcons();
};

var navigators = [].slice.call(document.querySelectorAll('[data-navigator]'));
var hash = window.location.hash.replace('#', ''),
    pages = ['home', 'about', 'contact'],
    aboutLink = navigators[1];

if (!pages.includes(hash) || !hash) navigators[0].className = 'active';
navigators.forEach(function (link) {
  return link.addEventListener('click', function (e) {
    return routeTo(e.target);
  });
});

var restoreTab = function restoreTab() {
  pages.forEach(function (page, i) {
    if (hash === page) navigators[i].click();
  });
};

var favicons = [].slice.call(document.querySelectorAll('link[rel="icon"]'));
favicons.forEach(function (favicon) {
  return favicon.href = /Android/i.test(navigator.userAgent) ? 'images/favicon-white.png' : favicon.href;
});

window.addEventListener('hashchange', function () {
  var hash = location.hash.replace('#', '');
  if (hash) routeTo(document.querySelector('[data-navigator=' + hash + ']'));else routeTo(navigators[0]);
});

var positionSocialIcons = function positionSocialIcons() {
  var bodyHeight = document.body.clientHeight,
      elemsHeight = document.querySelector('header').clientHeight + document.querySelector('main').clientHeight,
      availHeight = bodyHeight - elemsHeight,
      social = document.querySelector('aside');

  if (bodyHeight > elemsHeight) social.style.setProperty('margin-top', availHeight - 100 + 'px');
};

document.querySelector('header > a').addEventListener('click', function () {
  return navigators[0].click();
});

document.addEventListener('DOMContentLoaded', restoreTab);
document.addEventListener('DOMContentLoaded', positionSocialIcons);
window.addEventListener('resize', positionSocialIcons);
//# sourceMappingURL=script.js.map