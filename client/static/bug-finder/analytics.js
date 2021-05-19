// TODO: Add some kind of GA code to mask the delay

const footer = document.querySelector('footer');
if (footer) {
  for (let i = 0; i < 1000000000; i++) {
    window.x = i + 10;
  }
}