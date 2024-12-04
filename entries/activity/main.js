// Function to create a full-screen water splash with droplets
function createSplash() {
  const splashCount = 150; // Increased number of droplets for a larger splash

  // Create droplets around the center of the screen
  for (let i = 0; i < splashCount; i++) {
      const droplet = document.createElement('div');
      droplet.classList.add('droplet');

      // Set random sizes, positions, and directions for each droplet
      const angle = Math.random() * 2 * Math.PI; // Random angle in radians
      const distance = Math.random() * 800 + 200; // Increased distance for wider spread
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      const dropletSize = Math.random() * 20 + 15; // Random size between 15px and 35px for bigger droplets
      const dropletSpeed = Math.random() * 1 + 0.7; // Random speed for animation duration

      // Apply dynamic styles to each droplet
      droplet.style.left = `${window.innerWidth / 2 - dropletSize / 2}px`;
      droplet.style.top = `${window.innerHeight / 2 - dropletSize / 2}px`;

      // Set custom properties for random animation
      droplet.style.setProperty('--x', `${x}px`);
      droplet.style.setProperty('--y', `${y}px`);
      droplet.style.setProperty('--x2', `${x * 2}px`); // Farthest distance
      droplet.style.setProperty('--y2', `${y * 2}px`);
      
      // Add droplet size and animation duration dynamically
      droplet.style.width = `${dropletSize}px`;
      droplet.style.height = `${dropletSize}px`;
      droplet.style.animationDuration = `${dropletSpeed}s`;

      // Append the droplet to the body
      document.body.appendChild(droplet);

      // Remove the droplet after animation completes
      setTimeout(() => {
          droplet.remove();
      }, dropletSpeed * 1000); // Timeout matches animation duration
  }
}

// Trigger splash explosion when the page loads
window.addEventListener('load', createSplash);
