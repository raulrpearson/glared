let filter = document.createElement('div');
filter.style.cssText = `
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background: #fff;
z-index: 9999;
mix-blend-mode: exclusion;
pointer-events: none;
`;
document.body.appendChild(filter);

let style = document.createElement('style');
style.innerHTML = `img { filter:invert(100%) brightness(140%); }`;
document.body.appendChild(style);
