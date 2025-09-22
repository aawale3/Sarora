// --- Emoji Shower Effect for Entrance ---
document.addEventListener('DOMContentLoaded', function () {
    const emojiBtns = document.querySelectorAll('.emoji-shower-btn');
    emojiBtns.forEach(btn => {
        btn.addEventListener('mouseenter', function () {
            for (let i = 0; i < 12; i++) {
                const emoji = document.createElement('span');
                emoji.className = 'emoji-shower';
                emoji.textContent = btn.dataset.emoji;
                // Randomize horizontal position and animation delay
                emoji.style.left = (40 + Math.random() * 20) + '%';
                emoji.style.animationDelay = (Math.random() * 0.3) + 's';
                btn.appendChild(emoji);
                setTimeout(() => emoji.remove(), 1300);
            }
        });
    });
});
// Sara's Birthday Adventure - Interactive Features

class SaraBirthdayAdventure {
    constructor() {
        this.isCandleLit = false;
        this.flowerCount = 0;
        this.currentArea = 'entrance';
        this.memoryModeActive = false;
        this.audioContext = null;
        this.init();
    }

    init() {
        this.setupThemeToggle();
        this.setupNavigation();
        this.setupZones();
        this.setupMemoryMode();
        this.setupZoomInteractions();
        this.loadAudio();
        this.startMemoryModeTimer();
        
        // Ensure entrance zone is active on initialization
        this.navigateToArea('entrance');
        
        // Test all buttons functionality
        this.testAllButtons();
    }

    // Theme Toggle Functionality
    setupThemeToggle() {
        const themeBtn = document.getElementById('themeBtn');
        const currentTheme = localStorage.getItem('sara-theme') || 'light';
        
        // Apply saved theme
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        if (themeBtn) {
            themeBtn.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'olive' ? 'light' : 'olive';
                
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('sara-theme', newTheme);
                
                // Add transition effect
                document.body.style.transition = 'all 0.3s ease';
                setTimeout(() => {
                    document.body.style.transition = '';
                }, 300);
                
                // Show theme change message
                this.showMessage(`Switched to ${newTheme} theme`, 'info');
            });
        } else {
            console.warn('Theme button not found');
        }
    }

    // Navigation System
    setupNavigation() {
        const navButtons = document.querySelectorAll('.nav-btn');
        
        if (navButtons.length === 0) {
            console.warn('No navigation buttons found');
            return;
        }
        
        navButtons.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                const targetArea = btn.getAttribute('data-area');
                console.log('Navigating to:', targetArea); // Debug log
                this.navigateToArea(targetArea);
            });
            
            // Add hover effect for better UX
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'translateY(-2px)';
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = '';
            });
        });
        
        console.log(`Setup ${navButtons.length} navigation buttons`);
    }

    navigateToArea(areaName) {
        console.log('Navigating to area:', areaName); // Debug log
        
        // Update navigation buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        const navBtn = document.querySelector(`.nav-btn[data-area="${areaName}"]`);
        if (navBtn) {
            navBtn.classList.add('active');
            console.log('Navigation button updated for:', areaName);
        } else {
            console.warn('Navigation button not found for area:', areaName);
        }

        // Update zones
        document.querySelectorAll('.zone').forEach(zone => {
            zone.classList.remove('active');
        });
        const zone = document.querySelector(`.zone[data-area="${areaName}"]`);
        if (zone) {
            zone.classList.add('active');
            console.log('Zone updated for:', areaName);
            
            // Force a reflow to ensure the transition works
            zone.offsetHeight;
        } else {
            console.warn('Zone not found for area:', areaName);
        }

        this.currentArea = areaName;
        
        // Play ambient sound for the area
        this.playAmbientSound(areaName);
        
        // Add navigation effect
        this.addNavigationEffect();
        
        // Show area-specific message
        this.showAreaMessage(areaName);
        
        // Debug: Log all zones and their states
        console.log('All zones after navigation:');
        document.querySelectorAll('.zone').forEach(z => {
            console.log(`Zone ${z.getAttribute('data-area')}: active=${z.classList.contains('active')}`);
        });
    }

    addNavigationEffect() {
        const activeZone = document.querySelector('.zone.active');
        activeZone.style.animation = 'none';
        setTimeout(() => {
            activeZone.style.animation = 'zoneEnter 0.5s ease-out';
        }, 10);
    }

    showAreaMessage(areaName) {
        const messages = {
            'entrance': 'Welcome to Sara\'s Birthday Adventure! 🎉',
            'window-perch': 'The sweetest spot for birthday celebrations...',
            'sunbeam': 'A treasure trove of friendship and joy...',
            'garden': 'A magical garden of birthday wishes...',
            'memory': 'Light up the birthday memories with celebration...'
        };
        
        if (messages[areaName]) {
            this.showMessage(messages[areaName], 'area');
        }
    }

    // Zone Setup
    setupZones() {
        this.setupEntranceZone();
        this.setupWindowPerchZone();
        this.setupSunbeamZone();
        this.setupGardenZone();
        this.setupMemoryZone();
    }

    // Entrance Zone
    setupEntranceZone() {
        const kimikoEntrance = document.getElementById('kimikoEntrance');
        const bellIcon = document.querySelector('.bell-icon');
        
        if (kimikoEntrance) {
            kimikoEntrance.addEventListener('mouseenter', () => {
                this.playSound('chime');
                this.addHoverEffect(kimikoEntrance);
            });
            
            kimikoEntrance.addEventListener('mouseleave', () => {
                this.removeHoverEffect(kimikoEntrance);
            });
        }
        
        if (bellIcon) {
            bellIcon.addEventListener('click', () => {
                this.playSound('chime');
                this.showMessage('Party celebration sounds! 🎉', 'celebration');
            });
        }
    }

    // Window Perch Zone
    setupWindowPerchZone() {
        const kimikoWindowPerch = document.getElementById('kimikoWindowPerch');
        
        if (kimikoWindowPerch) {
            kimikoWindowPerch.addEventListener('click', () => {
                this.toggleWindowDreaming(kimikoWindowPerch);
            });
            
            kimikoWindowPerch.addEventListener('mouseenter', () => {
                this.addWindowHoverEffect(kimikoWindowPerch);
            });
            
            kimikoWindowPerch.addEventListener('mouseleave', () => {
                this.removeWindowHoverEffect(kimikoWindowPerch);
            });
        }
    }

    // Sunbeam Zone
    setupSunbeamZone() {
        const kimikoSunbeam = document.getElementById('kimikoSunbeam');
        
        if (kimikoSunbeam) {
            kimikoSunbeam.addEventListener('click', () => {
                this.toggleSunbeamStretch(kimikoSunbeam);
            });
            
            kimikoSunbeam.addEventListener('mouseenter', () => {
                this.addSunbeamHoverEffect(kimikoSunbeam);
            });
            
            kimikoSunbeam.addEventListener('mouseleave', () => {
                this.removeSunbeamHoverEffect(kimikoSunbeam);
            });
        }
    }

    // Garden Zone
    setupGardenZone() {
        const placeFlowerBtn = document.getElementById('placeFlowerBtn');
        const gardenArea = document.getElementById('gardenArea');
        
        if (placeFlowerBtn && gardenArea) {
            placeFlowerBtn.addEventListener('click', () => {
                this.placeFlower(gardenArea);
            });
            console.log('Flower button setup complete');
        } else {
            console.warn('Flower button or garden area not found');
        }
    }

    // Memory Zone
    setupMemoryZone() {
        const candle = document.getElementById('candle');
        
        if (candle) {
            candle.addEventListener('click', () => {
                this.toggleCandle(candle);
            });
            console.log('Candle setup complete');
        } else {
            console.warn('Candle not found');
        }
    }

    // Memory Mode
    setupMemoryMode() {
        const memoryModeBtn = document.getElementById('memoryModeBtn');
        
        if (memoryModeBtn) {
            memoryModeBtn.addEventListener('click', () => {
                this.toggleMemoryMode();
            });
            console.log('Memory mode button setup complete');
        } else {
            console.warn('Memory mode button not found');
        }
    }

    // Zoom Interactions
    setupZoomInteractions() {
        const zoomAreas = document.querySelectorAll('.zoom-area');
        const zoomOverlay = document.getElementById('zoomOverlay');
        const zoomClose = document.getElementById('zoomClose');
        
        console.log(`Found ${zoomAreas.length} zoom areas`);
        
        // Setup zoom area clicks
        zoomAreas.forEach((area, index) => {
            area.addEventListener('click', () => {
                const zoomType = area.getAttribute('data-zoom');
                console.log(`Zoom area ${index + 1} clicked: ${zoomType}`);
                this.openZoom(zoomType);
            });
        });
        
        // Setup close button
        if (zoomClose) {
            zoomClose.addEventListener('click', () => {
                this.closeZoom();
            });
            console.log('Zoom close button setup complete');
        } else {
            console.warn('Zoom close button not found');
        }
        
        // Close on overlay click
        if (zoomOverlay) {
            zoomOverlay.addEventListener('click', (e) => {
                if (e.target === zoomOverlay) {
                    this.closeZoom();
                }
            });
            console.log('Zoom overlay setup complete');
        } else {
            console.warn('Zoom overlay not found');
        }
        
        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && zoomOverlay && zoomOverlay.classList.contains('active')) {
                this.closeZoom();
            }
        });
    }

    openZoom(zoomType) {
        const zoomOverlay = document.getElementById('zoomOverlay');
        const zoomDetails = document.querySelectorAll('.zoom-detail');
        
        // Hide all zoom details
        zoomDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        
        // Show the specific zoom detail
        const targetDetail = document.getElementById(zoomType);
        if (targetDetail) {
            targetDetail.classList.add('active');
        }
        
        // Show overlay
        if (zoomOverlay) {
            zoomOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
        
        // Play gentle sound
        this.playSound('chime');
        
        // Show appropriate message
        const messages = {
            'entrance-detail': 'Exploring Sara\'s birthday celebration entrance...',
            'window-detail': 'Discovering the sweetest birthday moments...',
            'sunbeam-detail': 'Finding treasures of friendship...',
            'memory-detail': 'Celebrating precious birthday memories...'
        };
        
        if (messages[zoomType]) {
            this.showMessage(messages[zoomType], 'peaceful');
        }
        
        // Setup zoom candle if it's the memory detail
        if (zoomType === 'memory-detail') {
            this.setupZoomCandle();
        }
        
        // Setup photo gallery if it's the entrance detail
        if (zoomType === 'entrance-detail') {
            this.setupPhotoGallery();
        }
    }

    closeZoom() {
        const zoomOverlay = document.getElementById('zoomOverlay');
        const zoomDetails = document.querySelectorAll('.zoom-detail');
        
        // Hide overlay
        if (zoomOverlay) {
            zoomOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
        
        // Hide all zoom details
        zoomDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        
        // Play gentle sound
        this.playSound('chime');
    }

    // Zoom Candle Setup
    setupZoomCandle() {
        const zoomCandle = document.getElementById('zoomCandle');
        const zoomCandleGlow = document.getElementById('zoomCandleGlow');
        const zoomCandleHint = document.querySelector('.zoom-candle-hint');
        
        if (zoomCandle) {
            // Remove existing event listeners
            const newCandle = zoomCandle.cloneNode(true);
            zoomCandle.parentNode.replaceChild(newCandle, zoomCandle);
            
            // Add click event
            newCandle.addEventListener('click', () => {
                this.toggleZoomCandle(newCandle, zoomCandleGlow, zoomCandleHint);
            });
            
            console.log('Zoom candle setup complete');
        } else {
            console.warn('Zoom candle not found');
        }
    }

    toggleZoomCandle(candle, glow, hint) {
        const isLit = candle.classList.contains('lit');
        
        if (isLit) {
            // Unlight the candle
            candle.classList.remove('lit');
            candle.src = 'assets/images/candle_unlit.png';
            if (glow) glow.classList.remove('active');
            if (hint) hint.textContent = 'Click to light the birthday candle';
            this.showMessage('Birthday candle ready to light! 🕯️', 'info');
        } else {
            // Light the candle
            candle.classList.add('lit');
            candle.src = 'assets/images/candle_lit.png';
            if (glow) glow.classList.add('active');
            if (hint) hint.textContent = 'Click to extinguish';
            this.showMessage('The birthday candle glows with celebration! 🎂✨', 'celebration');
        }
        
        // Play sound
        this.playSound('chime');
    }
    
    // Photo Gallery Setup
    setupPhotoGallery() {
        const photos = document.querySelectorAll('.sara-photo');
        const prevBtn = document.getElementById('prevPhoto');
        const nextBtn = document.getElementById('nextPhoto');
        const counter = document.querySelector('.photo-counter');
        
        let currentPhotoIndex = 0;
        const totalPhotos = photos.length;
        
        // Update photo display
        const updatePhotoDisplay = () => {
            photos.forEach((photo, index) => {
                photo.classList.toggle('active', index === currentPhotoIndex);
            });
            
            if (counter) {
                counter.textContent = `${currentPhotoIndex + 1} / ${totalPhotos}`;
            }
            
            // Update button states
            if (prevBtn) {
                prevBtn.disabled = currentPhotoIndex === 0;
            }
            if (nextBtn) {
                nextBtn.disabled = currentPhotoIndex === totalPhotos - 1;
            }
        };
        
        // Previous photo
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentPhotoIndex > 0) {
                    currentPhotoIndex--;
                    updatePhotoDisplay();
                }
            });
        }
        
        // Next photo
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (currentPhotoIndex < totalPhotos - 1) {
                    currentPhotoIndex++;
                    updatePhotoDisplay();
                }
            });
        }
        
        // Click on photos to advance
        photos.forEach((photo, index) => {
            photo.addEventListener('click', () => {
                currentPhotoIndex = (currentPhotoIndex + 1) % totalPhotos;
                updatePhotoDisplay();
                this.showMessage('Beautiful memories of Sara! 📸✨', 'celebration');
            });
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (document.getElementById('zoomOverlay').classList.contains('active')) {
                if (e.key === 'ArrowLeft' && currentPhotoIndex > 0) {
                    currentPhotoIndex--;
                    updatePhotoDisplay();
                } else if (e.key === 'ArrowRight' && currentPhotoIndex < totalPhotos - 1) {
                    currentPhotoIndex++;
                    updatePhotoDisplay();
                }
            }
        });
        
        // Initialize display
        updatePhotoDisplay();
        
        console.log('Photo gallery setup complete');
    }

    // Audio Management
    loadAudio() {
        // Preload audio files
        this.audioFiles = {
            meow: new Audio('assets/audio/meow.mp3'),
            chime: new Audio('assets/audio/chime.mp3'),
            birds: new Audio('assets/audio/birds_chirping.mp3'),
            stretch: new Audio('assets/audio/cat_stretch.mp3'),
            memory: new Audio('assets/audio/memory_music.mp3')
        };
        
        // Set volume levels
        this.audioFiles.meow.volume = 0.6;
        this.audioFiles.chime.volume = 0.4;
        this.audioFiles.birds.volume = 0.4;
        this.audioFiles.stretch.volume = 0.4;
        this.audioFiles.memory.volume = 0.3;
        
        // Handle audio loading errors gracefully
        Object.values(this.audioFiles).forEach(audio => {
            audio.addEventListener('error', () => {
                console.log('Audio file not found, continuing without sound');
            });
        });
    }

    playSound(soundName) {
        try {
            if (this.audioFiles && this.audioFiles[soundName]) {
                this.audioFiles[soundName].currentTime = 0;
                this.audioFiles[soundName].play().catch(() => {
                    // Silently handle autoplay restrictions
                });
            }
        } catch (error) {
            console.log('Audio playback not available');
        }
    }

    playAmbientSound(areaName) {
        const ambientSounds = {
            'window-perch': 'birds',
            'sunbeam': 'birds'
        };
        
        if (ambientSounds[areaName]) {
            this.playSound(ambientSounds[areaName]);
        }
    }

    // Visual Effects
    addHoverEffect(element) {
        element.style.transform = 'scale(1.05)';
        element.style.filter = 'brightness(1.1)';
    }

    removeHoverEffect(element) {
        element.style.transform = '';
        element.style.filter = '';
    }

    // Window Perch Effects
    addWindowHoverEffect(element) {
        element.style.transform = 'scale(1.08) rotate(2deg)';
        element.style.filter = 'drop-shadow(0 6px 12px var(--shadow)) brightness(1.05)';
    }

    removeWindowHoverEffect(element) {
        element.style.transform = '';
        element.style.filter = '';
    }

    toggleWindowDreaming(element) {
        const isDreaming = element.classList.contains('dreaming');
        
        if (isDreaming) {
            element.classList.remove('dreaming');
            this.showMessage('Birthday magic awakens! ✨', 'celebration');
        } else {
            element.classList.add('dreaming');
            this.showMessage('Birthday magic sparkles around the cake! 🎂✨', 'dreamy');
        }
    }

    // Sunbeam Effects
    addSunbeamHoverEffect(element) {
        element.style.transform = 'scale(1.1)';
        element.style.filter = 'drop-shadow(0 6px 12px var(--shadow)) brightness(1.2)';
    }

    removeSunbeamHoverEffect(element) {
        element.style.transform = '';
        element.style.filter = '';
    }

    toggleSunbeamStretch(element) {
        element.style.animation = 'giftSparkle 2s ease-in-out';
        this.playSound('chime');
        this.showMessage('Gift treasure sparkles with friendship! 🎁✨', 'celebration');
        
        setTimeout(() => {
            element.style.animation = '';
        }, 2000);
    }

    // Birthday Wish Placement
    placeFlower(gardenArea) {
        this.flowerCount++;
        
        // Create wish element (using star emoji)
        const wish = document.createElement('div');
        wish.innerHTML = '🌟';
        wish.className = 'flower';
        wish.style.cssText = `
            position: absolute;
            font-size: 2rem;
            pointer-events: none;
            z-index: 5;
            animation: wishSparkle 2s ease-out;
        `;
        
        // Random position within garden bounds
        const maxX = gardenArea.offsetWidth - 40;
        const maxY = gardenArea.offsetHeight - 40;
        const x = Math.random() * maxX;
        const y = Math.random() * maxY;
        
        wish.style.left = `${x}px`;
        wish.style.top = `${y}px`;
        
        // Add to garden
        gardenArea.appendChild(wish);
        
        // Play chime sound
        this.playSound('chime');
        
        // Show random birthday wish message
        this.showBirthdayWish();
        
        // Add special effect for milestone wish counts
        if (this.flowerCount % 5 === 0) {
            this.addWishMilestoneEffect(gardenArea);
        }
        
        // Remove wish after animation completes
        setTimeout(() => {
            if (wish.parentNode) {
                wish.style.transition = 'opacity 0.5s ease';
                wish.style.opacity = '0';
                setTimeout(() => {
                    if (wish.parentNode) {
                        wish.parentNode.removeChild(wish);
                    }
                }, 500);
            }
        }, 3000);
    }
    
    showBirthdayWish() {
        const wishes = [
            'Sara is amazing because she lights up every room 💖',
            'Sara is the kind of friend everyone dreams of 🌸',
            'Sara, you inspire us every day ✨',
            'Sara brings joy wherever she goes 🎉',
            'Sara makes the world a brighter place 🌟',
            'Sara, you are truly special and loved 💕',
            'Sara, your kindness touches everyone around you 🌺',
            'Sara, you are a gift to all who know you 🎁'
        ];
        
        const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
        this.showMessage(randomWish, 'celebration');
    }

    addWishMilestoneEffect(gardenArea) {
        const celebration = document.createElement('div');
        celebration.innerHTML = '🎂 ✨ 🎉';
        celebration.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 2rem;
            color: var(--accent);
            animation: celebration 1s ease-out;
            pointer-events: none;
            z-index: 10;
        `;
        
        gardenArea.appendChild(celebration);
        
        // Trigger confetti effect
        this.triggerConfetti();
        
        setTimeout(() => {
            if (celebration.parentNode) {
                celebration.parentNode.removeChild(celebration);
            }
        }, 1000);
    }

    // Candle Toggle
    toggleCandle(candle) {
        this.isCandleLit = !this.isCandleLit;
        
        if (this.isCandleLit) {
            candle.src = 'assets/images/candle_lit.png';
            candle.classList.add('lit');
            this.addCandleGlowEffect(candle);
            this.showMessage('The birthday candle glows with celebration! 🎂✨', 'celebration');
        } else {
            candle.src = 'assets/images/candle_unlit.png';
            candle.classList.remove('lit');
            this.removeCandleGlowEffect(candle);
            this.showMessage('Birthday candle ready to light! 🕯️', 'info');
        }
    }

    addCandleGlowEffect(candle) {
        // Create glow effect
        const glow = document.createElement('div');
        glow.className = 'candle-glow';
        glow.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 120px;
            height: 120px;
            background: radial-gradient(circle, var(--glow) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
            animation: glowPulse 2s ease-in-out infinite;
        `;
        
        candle.parentNode.appendChild(glow);
    }

    removeCandleGlowEffect(candle) {
        const glow = candle.parentNode.querySelector('.candle-glow');
        if (glow) {
            glow.remove();
        }
    }

    // Birthday Mode
    toggleMemoryMode() {
        this.memoryModeActive = !this.memoryModeActive;
        const memoryModeBtn = document.getElementById('memoryModeBtn');
        
        if (this.memoryModeActive) {
            memoryModeBtn.innerHTML = '<span>⏸️</span> Pause Birthday Mode';
            this.startMemoryMode();
        } else {
            memoryModeBtn.innerHTML = '<span>🎵</span> Birthday Mode';
            this.stopMemoryMode();
        }
    }

    startMemoryMode() {
        this.playSound('memory');
        this.showMessage('Birthday mode activated - celebration tour begins! 🎉', 'celebration');
        
        // Auto-navigate through areas
        const areas = ['entrance', 'window-perch', 'sunbeam', 'garden', 'memory'];
        let currentIndex = 0;
        
        this.memoryModeInterval = setInterval(() => {
            this.navigateToArea(areas[currentIndex]);
            currentIndex = (currentIndex + 1) % areas.length;
        }, 10000); // Change area every 10 seconds
    }

    stopMemoryMode() {
        if (this.memoryModeInterval) {
            clearInterval(this.memoryModeInterval);
        }
        this.showMessage('Birthday mode paused', 'info');
    }
    
    // Confetti Animation
    triggerConfetti() {
        const confettiCount = 50;
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
        
        for (let i = 0; i < confettiCount; i++) {
            setTimeout(() => {
                this.createConfettiPiece(colors);
            }, i * 20);
        }
    }
    
    createConfettiPiece(colors) {
        const confetti = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)];
        const shape = Math.random() > 0.5 ? 'circle' : 'square';
        
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${color};
            top: -10px;
            left: ${Math.random() * 100}vw;
            z-index: 1000;
            pointer-events: none;
            border-radius: ${shape === 'circle' ? '50%' : '0'};
            animation: confettiFall 3s linear forwards;
        `;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 3000);
    }

    startMemoryModeTimer() {
        // Auto-start memory mode after 2 minutes of inactivity
        setTimeout(() => {
            if (!this.memoryModeActive) {
                this.toggleMemoryMode();
            }
        }, 120000);
    }

    showMessage(message, type) {
        // Create a temporary message element
        const messageEl = document.createElement('div');
        messageEl.textContent = message;
        messageEl.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--accent);
            color: var(--text-primary);
            padding: 15px 25px;
            border-radius: 25px;
            font-size: 1.1rem;
            font-weight: 600;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
            box-shadow: 0 4px 15px var(--shadow);
        `;
        
        document.body.appendChild(messageEl);
        
        // Fade in
        setTimeout(() => {
            messageEl.style.opacity = '1';
        }, 10);
        
        // Fade out and remove
        setTimeout(() => {
            messageEl.style.opacity = '0';
            setTimeout(() => {
                if (messageEl.parentNode) {
                    messageEl.parentNode.removeChild(messageEl);
                }
            }, 300);
        }, 1000);
    }

    // Test all buttons functionality
    testAllButtons() {
        console.log('Testing all buttons functionality...');
        
        // Test navigation buttons
        const navButtons = document.querySelectorAll('.nav-btn');
        console.log(`Found ${navButtons.length} navigation buttons`);
        navButtons.forEach((btn, index) => {
            const area = btn.getAttribute('data-area');
            console.log(`Navigation button ${index + 1}: ${area}`);
        });
        
        // Test theme toggle
        const themeBtn = document.getElementById('themeBtn');
        console.log(`Theme button: ${themeBtn ? 'Found' : 'Missing'}`);
        
        // Test memory mode button
        const memoryBtn = document.getElementById('memoryModeBtn');
        console.log(`Memory mode button: ${memoryBtn ? 'Found' : 'Missing'}`);
        
        // Test flower button
        const flowerBtn = document.getElementById('placeFlowerBtn');
        console.log(`Flower button: ${flowerBtn ? 'Found' : 'Missing'}`);
        
        // Test candle
        const candle = document.getElementById('candle');
        console.log(`Candle: ${candle ? 'Found' : 'Missing'}`);
        
        // Test zoom areas
        const zoomAreas = document.querySelectorAll('.zoom-area');
        console.log(`Found ${zoomAreas.length} zoom areas`);
        
        // Test interactive elements
        const bellIcon = document.querySelector('.bell-icon');
        
        console.log(`Interactive elements:`);
        console.log(`- Bell icon: ${bellIcon ? 'Found' : 'Missing'}`);
        
        // Test Kimiko images
        const kimikoEntrance = document.getElementById('kimikoEntrance');
        const kimikoWindow = document.getElementById('kimikoWindowPerch');
        const kimikoSunbeam = document.getElementById('kimikoSunbeam');
        
        console.log(`Kimiko images:`);
        console.log(`- Entrance: ${kimikoEntrance ? 'Found' : 'Missing'}`);
        console.log(`- Window: ${kimikoWindow ? 'Found' : 'Missing'}`);
        console.log(`- Sunbeam: ${kimikoSunbeam ? 'Found' : 'Missing'}`);
        
        console.log('Button functionality test complete!');
    }
}

// Add animations to CSS
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes celebration {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
        }
        50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
        }
    }
    
    @keyframes glowPulse {
        0%, 100% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1);
        }
        50% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1.1);
        }
    }
    
    @keyframes zoneEnter {
        0% {
            opacity: 0;
            transform: translateX(50px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes giftSparkle {
        0% { transform: scale(1) rotate(0deg); }
        25% { transform: scale(1.1) rotate(5deg); }
        50% { transform: scale(1.15) rotate(-5deg); }
        75% { transform: scale(1.1) rotate(5deg); }
        100% { transform: scale(1) rotate(0deg); }
    }
    
    @keyframes wishSparkle {
        0% { transform: scale(0) rotate(0deg); opacity: 0; }
        50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
        100% { transform: scale(1) rotate(360deg); opacity: 0.8; }
    }
    
    @keyframes confettiFall {
        0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
    
    .kimiko-window-perch.dreaming {
        animation: gentleBreathing 3s ease-in-out infinite;
    }
    
    @keyframes gentleBreathing {
        0%, 100% {
            transform: scale(1) rotate(0deg);
        }
        50% {
            transform: scale(1.02) rotate(1deg);
        }
    }
`;
document.head.appendChild(animationStyles);

// Initialize the birthday adventure when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SaraBirthdayAdventure();
    
    // Trigger confetti on page load
    setTimeout(() => {
        const adventure = new SaraBirthdayAdventure();
        adventure.triggerConfetti();
    }, 1000);
});

// Add smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add loading state management
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add error handling for missing images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Replace with a placeholder or hide gracefully
            this.style.display = 'none';
            console.log(`Image failed to load: ${this.src}`);
        });
    });
}); 
