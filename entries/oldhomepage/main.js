// script.js

document.querySelector('.tunnel-container').addEventListener('click', () => {
    // Trigger the tunnel animation (collapse inward)
    document.querySelector('.tunnel').style.transform = 'scale(0)';
    document.querySelector('.tunnel').style.opacity = '0';
  
    // Delay showing the content until the tunnel animation is finished
    setTimeout(() => {
      document.getElementById('content').style.opacity = 1;
      document.getElementById('content').style.transform = 'scale(1)';
    }, 2000); // 2 seconds delay for the tunnel animation to finish
  });
  