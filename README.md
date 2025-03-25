# Tesla Cybertruck Terminal

![Demo](demo.gif) *Replace with actual demo GIF later*

A hacker-style terminal that reveals the Tesla Cybertruck with sound effects and animations.

## Features
- Type `launch cybertruck` for the full reveal sequence
- Type `help` to display available commands
- Matrix-style background animation
- Sound effects for hacking sequence and reveal
- Responsive design works on desktop/mobile

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/scarar/Tesla-Cybertruck-Terminal.git
cd Tesla-Cybertruck-Terminal
```

2. Run the terminal:
```bash
python3 server.py
```
Then open http://localhost:54336 in your browser

3. Available commands:
- `help` - Show command list
- `launch cybertruck` - Reveal Cybertruck animation
- `sysinfo` - Show system diagnostics  
- `clear` - Reset terminal

## Customization
Edit these files to customize:
- `cybertruck.html` - Cybertruck design and animations
- `script.js` - Terminal logic and commands
- `style.css` - Visual styling

## Deploy to GitHub Pages
1. Enable GitHub Pages in repo settings (branch: main, folder: /root)
2. Your site will be at:  
   https://scarar.github.io/Tesla-Cybertruck-Terminal/
