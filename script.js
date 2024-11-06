// Fake Notification for demo purposes
function showNotification() {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <img src="jewellery-3.jpg" alt="Earrings">
        <p>Someone just bought <strong>Rose Gold Earrings</strong></p>
        <span>2 Minutes ago</span>
    `;
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => notification.remove(), 3000);
}

// Show a notification every 5 seconds (for demo purposes)
setInterval(showNotification, 5000);
