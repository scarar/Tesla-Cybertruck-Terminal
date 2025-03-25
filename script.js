document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.command-input');
    const output = document.querySelector('.output');
    const cybertruck = document.querySelector('.cybertruck');
    
    // Matrix-style background animation
    createMatrixEffect();

    
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = input.value.trim();
            input.value = '';
            
            // Add command to output
            output.innerHTML += `<div><span class="prompt">$</span> ${command}</div>`;
            
            // Process command
            if (command === 'help') {
                output.innerHTML += `<div class="command-list">
    <div><span class="cmd-name">help</span>: Show this help</div>
    <div><span class="cmd-name">launch cybertruck</span>: Trigger Cybertruck reveal</div>
    <div><span class="cmd-name">sysinfo</span>: Show system diagnostics</div>
    <div><span class="cmd-name">clear</span>: Reset terminal</div>
</div>`;
            } else if (command === 'clear') {
                output.innerHTML = '';
            } else if (command === 'sysinfo') {
                output.innerHTML += `<div class="matrix">TESLA OS v3.14
                BATTERY: [||||||||||] 100%
                OVERDRIVE: READY
                HACK MODE: ACTIVATED</div>`;
            
                
                    
                
                
                
                
                    
                            
                        
                    
                    
                    
                    
                        
            } else if (command === 'launch cybertruck') {
    // Clear terminal
    output.innerHTML = '<div class="terminal-header">TESLA HACKER TERMINAL v3.0</div>';
    
    // Disable input during animation
    input.disabled = true;
    input.placeholder = 'EXECUTING CYBERTRUCK PROTOCOL...';
    
    // Hacking sequence messages
    const messages = [
        "> ACCESSING TESLA MAINFRAME...",
        "> BYPASSING SECURITY PROTOCOLS...",
        "> INITIATING CYBERTRUCK RELEASE...",
        "> ENGAGING HOLOGRAPHIC DISPLAY..."
    ];

    // Play hacking sound
    const hackSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-tech-robot-scan-1684.mp3');
    hackSound.loop = true;
    hackSound.play();

    // Type out messages with realistic delay
    let i = 0;
    const typeNextMessage = () => {
        if (i < messages.length) {
            output.innerHTML += `<div class="hack-message">${messages[i]}</div>`;
            output.scrollTop = output.scrollHeight;
            i++;
            setTimeout(typeNextMessage, 1500);
        } else {
            hackSound.pause();
            revealCybertruck();
        }
    };

    // Start the sequence
    typeNextMessage();

    function revealCybertruck() {
        // Create iframe container
        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.zIndex = '1000';
        container.style.backgroundColor = 'rgba(0,0,0,0.9)';
        document.body.appendChild(container);

        // Create close button
        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'CLOSE';
        closeBtn.style.position = 'fixed';
        closeBtn.style.top = '20px';
        closeBtn.style.right = '20px';
        closeBtn.style.zIndex = '1001';
        closeBtn.style.padding = '10px 20px';
        closeBtn.style.background = '#f00';
        closeBtn.style.color = 'white';
        closeBtn.style.border = 'none';
        closeBtn.style.borderRadius = '5px';
        closeBtn.style.cursor = 'pointer';
        document.body.appendChild(closeBtn);

        // Create iframe with Cybertruck
        const iframe = document.createElement('iframe');
        iframe.src = 'cybertruck.html';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        container.appendChild(iframe);

        // Close functionality
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(container);
            document.body.removeChild(closeBtn);
            input.disabled = false;
            input.placeholder = 'Enter command...';
            input.focus();
        });

        // Final message with cool effect
        output.innerHTML += '<div class="success-message">>> CYBERTRUCK ACTIVATED <<</div>';
        output.scrollTop = output.scrollHeight;
        
        // Play activation sound
        new Audio('https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3').play();
    }
} else {
    output.innerHTML += `<div>Unknown command: ${command}</div>`;
}
            
            // Scroll to bottom
            output.scrollTop = output.scrollHeight;
        }
    });
});

function createMatrixEffect() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.2';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = "01";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0f0';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            drops[i]++;
        }
    }
    
    setInterval(draw, 33);
}