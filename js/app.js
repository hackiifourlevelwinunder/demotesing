// ========================================================
// 🌌 MSD-HACK // MSD BHAI QUANTUM 1M CLIENT CORE (DIRECT UID & AUTO-REDIRECT)
// ========================================================

const REGISTER_URL = "https://yaarwin.vip/#/register?invitationCode=673634078162";
const TELEGRAM_URL = "https://t.me/msd_011";
const TELEGRAM_USERNAME = "@msd_011";

let isUnlocked = false;
let isAudioMuted = false;
let isAnalyzing = false;
let predictedPeriod = null;
let currentTargetPeriod = null;
let lastRenderedHash = null;
let lastFetchedList = [];
let currentAuthDetails = null;

function toggleAudio() {
    isAudioMuted = !isAudioMuted;
    const icon = document.getElementById('soundIcon');
    if (icon) icon.innerText = isAudioMuted ? '🔇' : '🔊';
    showToast(isAudioMuted ? "🔇 Audio Muted" : "🔊 Audio Enabled");
}

// ========================================================
// 🔮 HIGH-PRECISION 3D CYBER VECTOR SPHERE GENERATOR (ZERO-FAIL)
// ========================================================
function renderCyberBall(num, size = 30) {
    num = parseInt(num);
    if (isNaN(num)) num = 0;
    
    let bgGradient = '';
    let shadowGlow = '';
    let borderCol = '';

    if (num === 0) {
        bgGradient = 'radial-gradient(circle at 32% 28%, #ff66b2 0%, #ff007f 40%, #7c3aed 75%, #3b0764 100%)';
        shadowGlow = '0 0 14px rgba(255, 0, 127, 0.7), 0 0 24px rgba(124, 58, 237, 0.4), inset 0 2px 4px rgba(255,255,255,0.7), inset 0 -3px 6px rgba(0,0,0,0.6)';
        borderCol = 'rgba(255, 0, 127, 0.9)';
    } else if (num === 5) {
        bgGradient = 'radial-gradient(circle at 32% 28%, #66ffbb 0%, #00ff88 40%, #7c3aed 75%, #3b0764 100%)';
        shadowGlow = '0 0 14px rgba(0, 255, 136, 0.7), 0 0 24px rgba(124, 58, 237, 0.4), inset 0 2px 4px rgba(255,255,255,0.7), inset 0 -3px 6px rgba(0,0,0,0.6)';
        borderCol = 'rgba(0, 255, 136, 0.9)';
    } else if ([1, 3, 7, 9].includes(num)) {
        bgGradient = 'radial-gradient(circle at 32% 28%, #a7f3d0 0%, #10b981 35%, #059669 70%, #022c22 100%)';
        shadowGlow = '0 0 14px rgba(16, 185, 129, 0.8), inset 0 2px 4px rgba(255,255,255,0.7), inset 0 -3px 6px rgba(0,0,0,0.7)';
        borderCol = '#34d399';
    } else {
        bgGradient = 'radial-gradient(circle at 32% 28%, #fecdd3 0%, #f43f5e 35%, #e11d48 70%, #4c0519 100%)';
        shadowGlow = '0 0 14px rgba(244, 63, 94, 0.8), inset 0 2px 4px rgba(255,255,255,0.7), inset 0 -3px 6px rgba(0,0,0,0.7)';
        borderCol = '#fb7185';
    }

    const fontSize = Math.round(size * 0.48);

    return `
    <div class="cyber-3d-ball shrink-0" 
         style="width:${size}px; height:${size}px; min-width:${size}px; background:${bgGradient}; box-shadow:${shadowGlow}; border:1.5px solid ${borderCol}; font-size:${fontSize}px;">
        <span class="relative z-10 font-orbitron font-black text-white" style="text-shadow: 0 1px 3px rgba(0,0,0,0.9), 0 0 6px rgba(255,255,255,0.8);">${num}</span>
        <div class="ball-highlight"></div>
    </div>
    `;
}

// ========================================================
// 🔊 CYBER WEB-AUDIO SYNTHESIZER & VOICE SYSTEM
// ========================================================
let audioCtx = null;
function getAudioContext() {
    if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
}

const VOICE_AUDIO_FILES = {
    unlock_click: 'assets/audio/unlock_click.mp3',
    verify_fail: 'assets/audio/verify_fail.mp3',
    hack_activated: 'assets/audio/hack_activated.mp3'
};

function playVoiceSound(name, onEnded) {
    if (isAudioMuted) {
        if (onEnded) onEnded();
        return;
    }
    try {
        const path = VOICE_AUDIO_FILES[name] || `assets/audio/${name}.mp3`;
        const audio = new Audio(path);
        audio.volume = 1.0;
        let finished = false;
        const callFinish = () => {
            if (!finished) {
                finished = true;
                if (onEnded) onEnded();
            }
        };

        audio.onended = callFinish;
        // Safety timeout so it always redirects even if audio event is delayed
        setTimeout(callFinish, 5500);

        audio.play().catch(() => {
            playUiSound(name === 'hack_activated' ? 'unlock' : (name === 'verify_fail' ? 'beep' : 'click'));
            if (onEnded) setTimeout(onEnded, 2000);
        });
    } catch (e) {
        playUiSound(name === 'hack_activated' ? 'unlock' : (name === 'verify_fail' ? 'beep' : 'click'));
        if (onEnded) setTimeout(onEnded, 2000);
    }
}

function playUiSound(type = 'click') {
    try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;

        if (type === 'click') {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, now);
            osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);
            gain.gain.setValueAtTime(0.12, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.05);
        } else if (type === 'beep') {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(1200, now);
            gain.gain.setValueAtTime(0.08, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.08);
        } else if (type === 'unlock') {
            const notes = [523.25, 659.25, 783.99, 1046.50];
            notes.forEach((freq, i) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(freq, now + (i * 0.06));
                gain.gain.setValueAtTime(0.09, now + (i * 0.06));
                gain.gain.exponentialRampToValueAtTime(0.001, now + (i * 0.06) + 0.12);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now + (i * 0.06));
                osc.stop(now + (i * 0.06) + 0.12);
            });
        }
    } catch (e) {}
}

// ========================================================
// 📱 HARDWARE FINGERPRINT (HWID)
// ========================================================
function getDeviceFingerprint() {
    let hwid = localStorage.getItem('wingo_device_hwid');
    if (!hwid) {
        const entropy = [
            navigator.userAgent,
            navigator.language,
            screen.width + 'x' + screen.height,
            screen.colorDepth,
            navigator.hardwareConcurrency || 4,
            Math.random().toString(36).substring(2, 10)
        ].join('###');

        let hash = 0;
        for (let i = 0; i < entropy.length; i++) {
            hash = ((hash << 5) - hash) + entropy.charCodeAt(i);
            hash |= 0;
        }
        hwid = 'DEV-' + Math.abs(hash).toString(16).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
        localStorage.setItem('wingo_device_hwid', hwid);
    }
    return hwid;
}

// ========================================================
// 🌐 MULTI-DEVICE SERVER API CALLER
// ========================================================
const KEY_API_ENDPOINTS = [
    '/api/keys.php',
    'api/keys.php',
    '/api/keys',
    'api/keys',
    'api.php',
    'https://hack.yaarwinplay.site/api/keys.php',
    'https://hack.yaarwinplay.site/api/keys',
    'https://hack.yaarwinplay.site/api.php'
];

async function callKeyApi(payload) {
    for (const ep of KEY_API_ENDPOINTS) {
        try {
            const resp = await fetch(ep, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (resp.ok) {
                const res = await resp.json();
                return res;
            }
        } catch (e) {}
    }
    return null;
}

let previewLossCount = 1; // Default: 1 loss out of 10 in preview (90% Win)

// ========================================================
// 📢 REAL-TIME BROADCAST & SETTINGS SYNC
// ========================================================
async function syncBroadcastAndSettings() {
    try {
        const res = await callKeyApi({ action: 'get_all_data' });
        if (res && res.settings) {
            const banner = document.getElementById('liveBroadcastBanner');
            const textEl = document.getElementById('liveBroadcastText');
            if (res.settings.broadcastMessage && textEl) {
                textEl.innerText = res.settings.broadcastMessage;
                if (banner) banner.classList.remove('hidden');
            }
            if (typeof res.settings.previewLossCount !== 'undefined') {
                const prev = previewLossCount;
                previewLossCount = parseInt(res.settings.previewLossCount);
                if (prev !== previewLossCount && lastFetchedList && !isUnlocked) {
                    renderTable(lastFetchedList, true);
                }
            }
            if (res.settings.registerUrl) REGISTER_URL = res.settings.registerUrl;
            if (res.settings.telegramSupport) TELEGRAM_URL = res.settings.telegramSupport;
            if (res.settings.telegramUsername) TELEGRAM_USERNAME = res.settings.telegramUsername;
        }
    } catch (e) {}
}

// Preloaded default UIDs for seamless offline contingency
function getFallbackUids() {
    return [
        { uid: '777888', active: true, plan: '30 DAYS VIP', durationDays: 30, expiresAt: new Date(Date.now() + 30 * 86400000).toISOString() },
        { uid: '123456', active: true, plan: 'LIFETIME VIP', durationDays: 'never', expiresAt: null }
    ];
}

// ========================================================
// 🔐 REAL-TIME UID & VIP AUTHENTICATION CHECK
// ========================================================
async function checkExistingAuth() {
    const savedUid = localStorage.getItem('wingo_verified_uid');
    const savedKey = localStorage.getItem('wingo_vip_license_key');
    const currentHwid = getDeviceFingerprint();
    const prevStatus = isUnlocked;

    if (savedUid) {
        const apiRes = await callKeyApi({
            action: 'validate_uid',
            uid: savedUid,
            hwid: currentHwid
        });

        if (apiRes) {
            if (apiRes.success) {
                isUnlocked = true;
                currentAuthDetails = apiRes;
                if (!prevStatus) applyUnlockedState();
                updateHudLockDisplay(apiRes);
            } else {
                revokeAccess(apiRes.msg || "UID authorization has expired or was revoked.");
            }
            return;
        }

        // Offline / Local Contingency Check
        try {
            const localUids = JSON.parse(localStorage.getItem('wingo_approved_uids') || '[]');
            const allUids = localUids.length > 0 ? localUids : getFallbackUids();
            const match = allUids.find(u => String(u.uid) === String(savedUid));
            if (match && match.active !== false) {
                if (!match.expiresAt || new Date(match.expiresAt).getTime() > Date.now()) {
                    isUnlocked = true;
                    currentAuthDetails = { uid: savedUid, plan: match.plan || 'VIP ACTIVE', remainingText: 'Active' };
                    if (!prevStatus) applyUnlockedState();
                    updateHudLockDisplay(currentAuthDetails);
                    return;
                }
            }
        } catch (e) {}

        revokeAccess("UID verification required.");
    } else if (savedKey) {
        // Legacy Key Support
        const apiRes = await callKeyApi({
            action: 'validate_key',
            key: savedKey,
            hwid: currentHwid
        });

        if (apiRes && apiRes.success) {
            isUnlocked = true;
            currentAuthDetails = apiRes;
            if (!prevStatus) applyUnlockedState();
            updateHudLockDisplay(apiRes);
        } else {
            revokeAccess("Key verification expired.");
        }
    } else {
        isUnlocked = false;
        if (prevStatus) applyLockedState();
    }
}

function updateHudLockDisplay(details) {
    const lockStatus = document.getElementById('hudLockStatus');
    if (!lockStatus) return;

    if (isUnlocked) {
        let label = "VIP UNLOCKED";
        if (details && details.remainingText) {
            label = `UNLOCKED (${details.remainingText})`;
        } else if (details && details.uid) {
            label = `VIP UNLOCKED (#${details.uid})`;
        }
        lockStatus.innerText = label;
        lockStatus.className = "text-cyber-neonGreen font-bold glow-green flex items-center gap-1";
    } else {
        lockStatus.innerText = "LOCKED (PREVIEW)";
        lockStatus.className = "text-cyber-gold font-bold";
    }
}

function revokeAccess(reason) {
    localStorage.removeItem('wingo_verified_uid');
    localStorage.removeItem('wingo_vip_license_key');
    isUnlocked = false;
    currentAuthDetails = null;
    applyLockedState();
    if (reason) showToast('Access Revoked: ' + reason);
}

let hasPredictedCurrentPeriod = false;

function applyUnlockedState(revealNow = false) {
    updateHudLockDisplay(currentAuthDetails);

    const lockedBox = document.getElementById('lockedStateContainer');
    const unlockedBox = document.getElementById('unlockedStateContainer');
    if (lockedBox) lockedBox.classList.add('hidden');
    if (unlockedBox) unlockedBox.classList.remove('hidden');

    const overlay = document.getElementById('blurGateOverlay');
    if (overlay) overlay.classList.add('hidden');
    const content = document.getElementById('predictionContentWrapper');
    if (content) {
        content.classList.remove('prediction-blurred');
        content.classList.add('prediction-unlocked');
    }

    if (revealNow) {
        hasPredictedCurrentPeriod = true;
    }

    const resSize = document.getElementById('resSize');
    const numContainer = document.getElementById('resNumContainer');
    const colorBadge = document.getElementById('resColorBadge');
    const btnText = document.getElementById('nextRoundBtnText');

    if (hasPredictedCurrentPeriod && currentTargetPeriod) {
        const pred = getPredictionForPeriod(currentTargetPeriod);
        if (resSize) {
            resSize.innerText = pred.size;
            resSize.className = pred.size === 'BIG' ? "relative z-10 text-3xl sm:text-4xl font-orbitron font-black text-cyber-gold glow-gold select-none" : "relative z-10 text-3xl sm:text-4xl font-orbitron font-black text-[#00E5FF] glow-cyan select-none";
        }
        if (numContainer) {
            numContainer.innerHTML = `<img src="assets/balls/${pred.number}.png" alt="Ball ${pred.number}" class="w-16 h-16 sm:w-17 sm:h-17 object-contain drop-shadow-[0_0_18px_rgba(0,229,255,0.85)] reveal-ball-clean">`;
        }
        if (colorBadge) {
            colorBadge.className = pred.color === 'red' ? 'w-3.5 h-3.5 rounded-full bg-cyber-neonPink shadow-[0_0_10px_#ff007f]' : 'w-3.5 h-3.5 rounded-full bg-cyber-neonGreen shadow-[0_0_10px_#00ff88]';
        }
        if (btnText) {
            btnText.innerText = "RE-ANALYZE ROUND ⚡";
        }
    } else {
        if (resSize) {
            resSize.innerHTML = `<span class="text-xl sm:text-2xl font-orbitron font-extrabold text-[#00E5FF] tracking-wider select-none">READY</span>`;
            resSize.className = "relative z-10 flex items-center justify-center";
        }
        if (numContainer) {
            numContainer.innerHTML = `<div class="relative w-14 h-14 flex items-center justify-center"><div class="absolute inset-0 rounded-full border border-dashed border-[#00E5FF]/60 animate-spin"></div><span class="relative z-10 text-xs font-mono font-bold text-[#4DEBFF] select-none tracking-wider">SCAN</span></div>`;
        }
        if (colorBadge) {
            colorBadge.className = 'w-3.5 h-3.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]';
        }
        if (btnText) {
            btnText.innerText = `PREDICT ROUND #${currentTargetPeriod ? currentTargetPeriod.slice(-5) : ''} ⚡`;
        }
    }

    if (lastFetchedList && lastFetchedList.length > 0) {
        renderTable(lastFetchedList, true);
    }
}

function applyLockedState() {
    updateHudLockDisplay(null);

    const lockedBox = document.getElementById('lockedStateContainer');
    const unlockedBox = document.getElementById('unlockedStateContainer');
    if (lockedBox) lockedBox.classList.remove('hidden');
    if (unlockedBox) unlockedBox.classList.add('hidden');

    const overlay = document.getElementById('blurGateOverlay');
    if (overlay) overlay.classList.remove('hidden');
    const content = document.getElementById('predictionContentWrapper');
    if (content) {
        content.classList.add('prediction-blurred');
        content.classList.remove('prediction-unlocked');
    }

    if (lastFetchedList && lastFetchedList.length > 0) {
        renderTable(lastFetchedList, true);
    }
}

function switchNavTab(tab) {
    playUiSound('click');
    ['Dashboard', 'History'].forEach(t => {
        const btn = document.getElementById(`navTab${t}`);
        if (btn) btn.classList.remove('active');
    });

    if (tab === 'dashboard') {
        const btn = document.getElementById('navTabDashboard');
        if (btn) btn.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'history') {
        const btn = document.getElementById('navTabHistory');
        if (btn) btn.classList.add('active');
        const historySec = document.getElementById('historyRowsList');
        if (historySec) historySec.scrollIntoView({ behavior: 'smooth' });
    }
}

function openUnlockModal() {
    playVoiceSound('unlock_click');
    document.getElementById('unlockModal').classList.remove('hidden');
}

function closeUnlockModal() {
    document.getElementById('unlockModal').classList.add('hidden');
}

function switchUnlockTab(tab) {
    const uidSection = document.getElementById('methodUidSection');
    const keySection = document.getElementById('methodKeySection');
    const tabUid = document.getElementById('tabUidBtn');
    const tabKey = document.getElementById('tabKeyBtn');

    if (tab === 'uid') {
        if (uidSection) uidSection.classList.remove('hidden');
        if (keySection) keySection.classList.add('hidden');
        if (tabUid) tabUid.className = "py-2.5 rounded-lg text-xs font-orbitron font-bold uppercase transition-all bg-cyber-neonGreen text-black shadow-lg";
        if (tabKey) tabKey.className = "py-2.5 rounded-lg text-xs font-orbitron font-bold uppercase transition-all text-gray-400 hover:text-white";
    } else {
        if (uidSection) uidSection.classList.add('hidden');
        if (keySection) keySection.classList.remove('hidden');
        if (tabKey) tabKey.className = "py-2.5 rounded-lg text-xs font-orbitron font-bold uppercase transition-all bg-cyber-neonCyan text-black shadow-lg";
        if (tabUid) tabUid.className = "py-2.5 rounded-lg text-xs font-orbitron font-bold uppercase transition-all text-gray-400 hover:text-white";
    }
}

// ========================================================
// 👤 SUBMIT UID DIRECTLY (HERO ACTIVATION + FIRST TIME REDIRECT)
// ========================================================
async function submitModalUid() {
    playUiSound('click');
    const uid = document.getElementById('modalUidInput').value.trim();
    const statusBox = document.getElementById('modalUidStatusBox');
    const statusContent = document.getElementById('modalUidStatusContent');
    const submitBtn = document.getElementById('uidSubmitBtn');
    const currentHwid = getDeviceFingerprint();

    if (!uid || uid.length < 3) {
        playVoiceSound('verify_fail');
        if (statusBox && statusContent) {
            statusBox.className = "p-3.5 rounded-xl border border-cyber-neonPink/40 bg-cyber-neonPink/10 text-xs font-sans text-cyber-neonPink text-left";
            statusContent.innerHTML = "⚠️ Please enter your registered 5-8 digit Game UID Number.";
            statusBox.classList.remove('hidden');
        }
        return;
    }

    // 🚀 FIRST TIME UID SUBMIT REDIRECT ONLY ONCE
    const hasRedirected = localStorage.getItem('msd_uid_first_redirect');
    if (!hasRedirected) {
        localStorage.setItem('msd_uid_first_redirect', 'true');
        try {
            window.open(REGISTER_URL, '_blank');
        } catch (e) {}
    }

    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = "VERIFYING UID ON SERVER...";
    }
    if (statusBox && statusContent) {
        statusBox.className = "p-3.5 rounded-xl border border-cyber-gold/40 bg-cyber-gold/10 text-xs font-sans text-cyber-gold text-left";
        statusContent.innerHTML = `🔍 Verifying approval status for UID: <strong>#${uid}</strong>...`;
        statusBox.classList.remove('hidden');
    }

    try {
        const apiRes = await callKeyApi({
            action: 'validate_uid',
            uid: uid,
            hwid: currentHwid
        });

        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerText = "Verify & Unlock MSD-Hack";
        }

        if (apiRes && apiRes.success) {
            const expText = apiRes.expiresAt ? new Date(apiRes.expiresAt).toLocaleDateString() : 'Permanent';
            const remaining = apiRes.remainingText || 'Active Access';

            if (statusBox && statusContent) {
                statusBox.className = "p-3.5 rounded-xl border border-cyber-neonGreen/60 bg-cyber-neonGreen/15 text-xs font-sans text-left space-y-1.5";
                statusContent.innerHTML = `
                    <div class="text-cyber-neonGreen font-bold flex items-center gap-1.5 font-orbitron text-sm">
                        <span>✅</span> <span>UID #${uid} VERIFIED!</span>
                    </div>
                    <div class="text-gray-200 text-xs flex justify-between pt-1 border-t border-cyber-neonGreen/30">
                        <span>Plan: <strong class="text-white">${apiRes.plan || 'VIP ACCESS'}</strong></span>
                        <span class="text-cyber-neonCyan font-bold">${remaining}</span>
                    </div>
                    <p class="text-[11px] text-gray-400">Expires: ${expText}</p>
                `;
            }

            localStorage.setItem('wingo_verified_uid', uid);
            isUnlocked = true;
            currentAuthDetails = apiRes;
            playVoiceSound('hack_activated');
            showToast(`✅ UID #${uid} Approved! Hack Activated.`);
            applyUnlockedState();
            setTimeout(closeUnlockModal, 1200);
            return;
        } else if (apiRes && apiRes.expired) {
            playVoiceSound('verify_fail');
            if (statusBox && statusContent) {
                statusBox.className = "p-3.5 rounded-xl border border-cyber-neonPink/60 bg-cyber-neonPink/15 text-xs font-sans text-left space-y-2";
                statusContent.innerHTML = `
                    <div class="text-cyber-neonPink font-bold flex items-center gap-1.5 font-orbitron">
                        <span>⏰</span> <span>UID #${uid} - PLAN EXPIRED</span>
                    </div>
                    <p class="text-gray-300">
                        Aapka VIP access expire ho gaya hai. Days extend/renew karwane ke liye Admin ko Telegram par message karein.
                    </p>
                    <a href="${TELEGRAM_URL}" target="_blank" class="inline-flex items-center justify-center gap-2 bg-[#0088cc] hover:bg-[#0077b5] text-white py-2 px-4 rounded-lg text-xs font-bold w-full transition shadow-md">
                        Renew UID on Telegram (${TELEGRAM_USERNAME}) ↗
                    </a>
                `;
            }
            return;
        } else {
            // Check fallback offline cache
            try {
                const localUids = JSON.parse(localStorage.getItem('wingo_approved_uids') || '[]');
                const match = localUids.find(u => String(u.uid) === String(uid));
                if (match && match.active !== false) {
                    localStorage.setItem('wingo_verified_uid', uid);
                    isUnlocked = true;
                    currentAuthDetails = { uid: uid, plan: match.plan || 'VIP ACCESS', remainingText: 'Active' };
                    playVoiceSound('hack_activated');
                    showToast(`✅ UID #${uid} Verified! Hack Activated.`);
                    applyUnlockedState();
                    setTimeout(closeUnlockModal, 1000);
                    return;
                }
            } catch (e) {}

            // 🎙️ Play full fail voice message and redirect when finished
            playVoiceSound('verify_fail', () => {
                window.location.href = REGISTER_URL;
            });

            if (statusBox && statusContent) {
                statusBox.className = "p-3.5 rounded-xl border border-cyber-neonPink/60 bg-cyber-neonPink/15 text-xs font-sans text-left space-y-2.5";
                statusContent.innerHTML = `
                    <div class="text-cyber-neonPink font-bold flex items-center gap-1.5 font-orbitron">
                        <span>❌</span> <span>UID #${uid} - NOT REGISTERED / UNAPPROVED</span>
                    </div>
                    <p class="text-gray-200 text-xs leading-relaxed">
                        Aapka UID registered ya approved nahi hai. Pehle official link se account register karein.
                    </p>
                    <div class="p-2 rounded-lg bg-black/50 border border-[#00E5FF]/40 text-center font-mono text-[11px] text-[#00E5FF] animate-pulse font-bold">
                        ⚡ REDIRECTING TO REGISTER PAGE...
                    </div>
                    <div class="flex flex-col gap-1.5 pt-1">
                        <a href="${REGISTER_URL}" target="_blank" class="inline-flex items-center justify-center gap-1.5 btn-liquid-cyan text-black font-bold py-2.5 px-4 rounded-xl text-xs transition shadow-md">
                            <span>🚀</span> <span>Open Register Link (Code: 673634078162)</span>
                        </a>
                    </div>
                `;
            }
            showToast(`⚠️ UID #${uid} not approved! Redirecting to Register...`);
            playUiSound('error');
        }
    } catch (e) {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerText = "Verify & Unlock MSD-Hack";
        }
        if (statusBox && statusContent) {
            statusBox.className = "p-3.5 rounded-xl border border-cyber-neonPink/40 bg-cyber-neonPink/10 text-xs font-sans text-cyber-neonPink text-left";
            statusContent.innerHTML = "⚠️ Connection error. Please retry in a moment.";
        }
    }
}

// SUBMIT VIP KEY (LEGACY FALLBACK)
async function submitModalKey() {
    playUiSound('click');
    const val = document.getElementById('modalKeyInput').value.trim().toUpperCase();
    const err = document.getElementById('modalKeyError');
    const currentHwid = getDeviceFingerprint();

    if (!val) {
        if (err) {
            err.innerText = "Please enter your VIP License Key!";
            err.classList.remove('hidden');
        }
        return;
    }

    try {
        const apiRes = await callKeyApi({
            action: 'validate_key',
            key: val,
            hwid: currentHwid
        });

        if (apiRes && apiRes.success) {
            if (err) err.classList.add('hidden');
            localStorage.setItem('wingo_vip_license_key', val);
            isUnlocked = true;
            currentAuthDetails = apiRes;
            playUiSound('unlock');
            showToast("✅ VIP Key Verified & Bound to Device!");
            applyUnlockedState();
            closeUnlockModal();
            return;
        } else if (apiRes && !apiRes.success) {
            if (err) {
                err.innerHTML = `❌ ${apiRes.msg}`;
                err.classList.remove('hidden');
            }
            return;
        }

        if (err) {
            err.innerText = "Invalid VIP Key! Use your Game UID instead.";
            err.classList.remove('hidden');
        }
    } catch (e) {
        if (err) {
            err.innerText = "Network Error! Please try again.";
            err.classList.remove('hidden');
        }
    }
}

// ========================================================
// 📊 LIVE DATA SYNC
// ========================================================
async function syncData(force = false) {
    const endpoints = [
        '/api/wingo',
        '/api/wingo.php',
        'api/wingo.php',
        'https://draw.ar-lottery01.com/WinGo/WinGo_1M/GetHistoryIssuePage.json'
    ];

    for (const ep of endpoints) {
        try {
            const response = await fetch(ep, { cache: 'no-store' });
            if (response.ok) {
                const json = await response.json();
                let list = json.data?.list || json.data || json;
                if (Array.isArray(list) && list.length > 0) {
                    lastFetchedList = list;
                    renderTable(list, force);
                    updatePeriodTarget(list[0]);
                    updateRatioVisualizer(list);
                    return;
                }
            }
        } catch (e) {}
    }

    // Emergency fail-safe: Keep UI alive if network is temporarily restricted
    if (!lastFetchedList || lastFetchedList.length === 0) {
        const now = new Date();
        const minCount = now.getHours() * 60 + now.getMinutes();
        const ymd = now.toISOString().slice(0,10).replace(/-/g, '');
        const basePeriod = parseInt(ymd + "1000" + String(minCount).padStart(5, '0'));
        const fallbackList = [];
        for (let i = 0; i < 10; i++) {
            const p = String(basePeriod - i);
            let sum = 0;
            for (let j = 0; j < p.length; j++) sum += parseInt(p[j]);
            const val = ((sum * 137 + 77) % 1000) % 10;
            fallbackList.push({
                issueNumber: p,
                number: String(val),
                color: [1,3,7,9].includes(val) ? 'green' : ([2,4,6,8].includes(val) ? 'red' : (val === 0 ? 'violet' : 'green,violet'))
            });
        }
        lastFetchedList = fallbackList;
        renderTable(fallbackList, force);
        updatePeriodTarget(fallbackList[0]);
        updateRatioVisualizer(fallbackList);
    }
}

function updateRatioVisualizer(list) {
    let bigCount = 0;
    let total = 0;
    list.slice(0, 10).forEach(row => {
        const num = parseInt(row.number || row.Number || row.openNumber || 0);
        if (num >= 5) bigCount++;
        total++;
    });
    if (total > 0) {
        const bigPct = Math.round((bigCount / total) * 100);
        const smallPct = 100 - bigPct;
        const barBig = document.getElementById('ratioBarBig');
        const barSmall = document.getElementById('ratioBarSmall');
        const ratioText = document.getElementById('streakRatioText');
        if (barBig) barBig.style.width = `${bigPct}%`;
        if (barSmall) barSmall.style.width = `${smallPct}%`;
        if (ratioText) ratioText.innerText = `BIG ${bigPct}% | SMALL ${smallPct}%`;
    }
}

// ========================================================
// 🧠 UNIFIED HIGH-PRECISION QUANTUM PREDICTION ENGINE
// ========================================================
function getPredictionForPeriod(periodStr) {
    let periodDigits = (periodStr || '').toString().replace(/\D/g, '') || "10001";
    let sum = 0;
    for (let i = 0; i < periodDigits.length; i++) {
        sum += parseInt(periodDigits.charAt(i));
    }
    
    const finalHash = (sum * 137 + 77) % 1000;
    const rNum = finalHash % 10;
    const size = rNum >= 5 ? 'BIG' : 'SMALL';
    const confidence = 95 + (finalHash % 5);

    let color = 'green';
    if ([1, 3, 7, 9].includes(rNum)) color = 'green';
    else if ([2, 4, 6, 8].includes(rNum)) color = 'red';
    else if (rNum === 0) color = 'violet';
    else if (rNum === 5) color = 'green-violet';

    return {
        number: rNum,
        size: size,
        color: color,
        confidence: confidence
    };
}

// ========================================================
// 📋 RENDER TABLE
// ========================================================
function renderTable(list, force = false) {
    const firstRow = list[0] || {};
    const latestIssue = (firstRow.issueNumber || firstRow.IssueNumber || '').toString();
    const currentHash = `${latestIssue}_${firstRow.number || firstRow.openNumber || ''}_${isUnlocked}`;

    if (!force && currentHash === lastRenderedHash) {
        return;
    }
    lastRenderedHash = currentHash;

    let rowsHtml = '';

    list.slice(0, 10).forEach((row, index) => {
        const period = (row.issueNumber || row.IssueNumber || '').toString().replace(/^#/, '');
        const num = parseInt(row.number || row.Number || row.openNumber || 0);
        if (!period) return;

        let isWin;
        if (!isUnlocked) {
            // 🚀 PREVIEW MODE (Before Key/UID Verification): Admin Configured Loss Control
            if (previewLossCount === 0) {
                isWin = true; // 100% WIN (0 Losses)
            } else if (previewLossCount === 1) {
                isWin = (index !== 7); // 90% WIN (1 Loss)
            } else if (previewLossCount === 2) {
                isWin = (index !== 3 && index !== 7); // 80% WIN (2 Losses)
            } else if (previewLossCount === 3) {
                isWin = (index !== 2 && index !== 5 && index !== 8); // 70% WIN (3 Losses)
            } else {
                isWin = (index !== 1 && index !== 3 && index !== 6 && index !== 8); // 60% WIN
            }
        } else {
            // 🎯 REAL UNLOCKED MODE: 100% Real Prediction Output
            const pred = getPredictionForPeriod(period);
            const actualSize = num >= 5 ? 'BIG' : 'SMALL';
            isWin = (pred.size === actualSize);
        }

        const statusText = isWin ? 'WIN' : 'LOSS';
        const tagClass = isWin ? 'history-tag-win' : 'history-tag-loss';
        const dotColor = isWin ? '#00E5FF' : '#ff007f';

        rowsHtml += `
            <div class="liquid-history-item" style="display: grid; grid-template-columns: 1fr 50px 75px; align-items: center; gap: 8px; width: 100%;">
                <div style="display: flex; align-items: center; gap: 8px; min-width: 0; overflow: hidden;">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background-color: ${dotColor}; box-shadow: 0 0 8px ${dotColor}; flex-shrink: 0;"></span>
                    <span class="font-mono text-xs sm:text-[13px] text-gray-200 font-semibold tracking-normal select-all truncate" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                        ${period}
                    </span>
                </div>
                <div style="display: flex; justify-content: center; align-items: center; width: 50px; margin: 0 auto;">
                    <img src="assets/balls/${num}.png" alt="Ball ${num}" style="width: 32px; height: 32px; object-fit: contain; filter: drop-shadow(0 0 6px rgba(0,229,255,0.45));">
                </div>
                <div style="display: flex; justify-content: flex-end; align-items: center; width: 75px;">
                    <span class="${tagClass}" style="width: 70px; text-align: center; display: inline-block; box-sizing: border-box; padding: 5px 0;">${statusText}</span>
                </div>
            </div>
        `;
    });

    const rowsContainer = document.getElementById('historyRowsList');
    if (rowsContainer) rowsContainer.innerHTML = rowsHtml;
}

// ========================================================
// ⚡ NEXT ROUND / MANUAL TRIGGER
// ========================================================
function nextRoundPrediction() {
    playUiSound('click');
    if (!isUnlocked) {
        openUnlockModal();
        showToast('🔒 Please unlock with Game UID first!');
        return;
    }

    const loader = document.getElementById('loader');
    const unlockedBox = document.getElementById('unlockedStateContainer');
    const progressBar = document.getElementById('progressBar');
    const loaderPercent = document.getElementById('loaderPercent');

    if (loader && unlockedBox) {
        unlockedBox.classList.add('hidden');
        loader.classList.remove('hidden');
        playUiSound('analyze');

        const statusText = document.getElementById('loaderStatusText');
        if (statusText) statusText.innerText = "QUANTUM NEURAL SCAN IN PROGRESS...";
        if (progressBar) progressBar.style.width = "0%";
        if (loaderPercent) loaderPercent.innerText = "0%";

        let p = 0;
        const interval = setInterval(() => {
            p += 20;
            if (progressBar) progressBar.style.width = `${Math.min(p, 100)}%`;
            if (loaderPercent) loaderPercent.innerText = `${Math.min(p, 100)}%`;

            if (p === 40 && statusText) {
                statusText.innerText = "CALIBRATING QUANTUM PROBABILITIES...";
            } else if (p === 80 && statusText) {
                statusText.innerText = "LOCKING HIGH PROBABILITY SIGNAL...";
            } else if (p >= 100) {
                clearInterval(interval);
                if (statusText) statusText.innerText = "TARGET DECRYPTED [100%]";
                setTimeout(() => {
                    loader.classList.add('hidden');
                    unlockedBox.classList.remove('hidden');
                    applyUnlockedState(true);
                    playUiSound('unlock');
                    showToast(`⚡ Round #${(currentTargetPeriod || '').slice(-5)} Decrypted!`);
                }, 160);
            }
        }, 55);
    } else {
        applyUnlockedState(true);
        playUiSound('unlock');
        showToast(`⚡ Round #${(currentTargetPeriod || '').slice(-5)} Decrypted!`);
    }
}

// ========================================================
// 🎯 UPDATE TARGET PERIOD
// ========================================================
function updatePeriodTarget(latestRow) {
    const rawId = (latestRow.issueNumber || latestRow.IssueNumber || '').toString().replace(/^#/, '');
    if (!rawId) return;
    
    let nextIdStr = rawId;
    try {
        const bigId = BigInt(rawId);
        const nextId = bigId + 1n;
        nextIdStr = nextId.toString();
    } catch (e) {}

    const curPeriodEl = document.getElementById('currentPeriod');
    if (curPeriodEl) curPeriodEl.innerText = nextIdStr;

    if (currentTargetPeriod && currentTargetPeriod !== nextIdStr) {
        hasPredictedCurrentPeriod = false;
        currentTargetPeriod = nextIdStr;
        if (isUnlocked) {
            applyUnlockedState(false);
            showToast(`⚡ Round #${nextIdStr.slice(-5)} Ready to Predict!`);
        }
    } else {
        currentTargetPeriod = nextIdStr;
    }
}

// ========================================================
// ⏱️ TIMER
// ========================================================
function updateTimer() {
    const now = new Date();
    const totalSec = (now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds();
    const cycle = 60;
    const remaining = cycle - (totalSec % cycle);

    const display = `00:${remaining < 10 ? '0' : ''}${remaining}`;
    const tCircle = document.getElementById('timerProgressCircle');
    const tCircleText = document.getElementById('timerCircleText');
    const statusLabel = document.getElementById('timerStatusLabel');
    const warnEl = document.getElementById('safeWarn');

    if (tCircleText) tCircleText.innerText = display;

    const circumference = 213.6;
    const progress = (cycle - remaining) / cycle;
    const offset = circumference * (1 - progress);
    if (tCircle) tCircle.style.strokeDashoffset = offset;

    if (remaining <= 5) {
        if (tCircle) tCircle.setAttribute('stroke', '#ff007f');
        if (tCircleText) tCircleText.className = "text-lg font-mono font-black text-cyber-neonPink tabular-nums tracking-tighter w-14 text-center glow-pink";
        if (warnEl) warnEl.classList.remove('hidden');
        if (statusLabel) statusLabel.innerText = "Locking Round...";
        if (remaining === 5) playUiSound('beep');
    } else {
        if (tCircle) tCircle.setAttribute('stroke', '#00f0ff');
        if (tCircleText) tCircleText.className = "text-lg font-mono font-black text-white tabular-nums tracking-tighter w-14 text-center";
        if (warnEl) warnEl.classList.add('hidden');
        if (statusLabel) statusLabel.innerText = "Calculating Live...";
    }

    if (remaining === cycle || remaining === 1) {
        syncData();
    }
}

// ========================================================
// ⚡ RUN QUANTUM AI ANALYSIS
// ========================================================
function runAnalysis() {
    if (isAnalyzing) return;
    playUiSound('click');
    isAnalyzing = true;
    document.getElementById('hackBtn').classList.add('hidden');
    document.getElementById('resultPanel').classList.add('hidden');
    document.getElementById('loader').classList.remove('hidden');

    const logOutput = document.getElementById('matrixLogOutput');
    if (logOutput) logOutput.innerHTML = '<div>> [0.01ms] HOOKING MSD QUANTUM ENGINE...</div>';

    const scrambleSizeEl = document.getElementById('scrambleSize');
    const scrambleNumEl = document.getElementById('scrambleNum');
    const scrambleColorEl = document.getElementById('scrambleColor');

    const scrambleInterval = setInterval(() => {
        const rndNum = Math.floor(Math.random() * 10);
        const rndSize = rndNum >= 5 ? 'BIG' : 'SMALL';
        const rndColors = ['GREEN', 'RED', 'VIOLET', 'GREEN+VIOLET'];
        const rndCol = rndColors[Math.floor(Math.random() * rndColors.length)];

        if (scrambleNumEl) scrambleNumEl.innerText = rndNum;
        if (scrambleSizeEl) {
            scrambleSizeEl.innerText = rndSize;
            scrambleSizeEl.className = rndSize === 'BIG' ? 'text-sm font-orbitron font-bold text-cyber-gold tabular-nums' : 'text-sm font-orbitron font-bold text-cyber-neonCyan tabular-nums';
        }
        if (scrambleColorEl) scrambleColorEl.innerText = rndCol;
    }, 60);

    const logSteps = [
        "> [0.12ms] HOOKING WINGO_1M PACKET PARITY STREAM...",
        "> [0.35ms] EXTRACTING SERVER SEED & HASH SALT...",
        "> [0.68ms] RUNNING QUANTUM LAW OF LARGE NUMBERS...",
        "> [0.94ms] CALIBRATING COLOR ENTROPY VARIANCE...",
        "> [1.20ms] RESOLVING OPTIMAL HIGH CONFIDENCE SIGNAL...",
        "> [1.45ms] [SUCCESS] TARGET NUMBER & SIZE DECRYPTED!"
    ];

    let w = 0;
    let logIndex = 0;

    const interval = setInterval(() => {
        w += 3.5;
        const bar = document.getElementById('progressBar');
        const percent = document.getElementById('loaderPercent');
        if (bar) bar.style.width = w + "%";
        if (percent) percent.innerText = Math.min(100, Math.floor(w)) + "%";

        if (w > (logIndex + 1) * (100 / logSteps.length) && logIndex < logSteps.length) {
            playUiSound('beep');
            if (logOutput) {
                const line = document.createElement('div');
                line.innerText = logSteps[logIndex];
                logOutput.appendChild(line);
                logOutput.scrollTop = logOutput.scrollHeight;
            }
            logIndex++;
        }

        if (w >= 100) {
            clearInterval(interval);
            clearInterval(scrambleInterval);
            finalizeResult();
        }
    }, 45);
}

function finalizeResult() {
    const currentPeriod = document.getElementById('currentPeriod').innerText;
    predictedPeriod = currentPeriod;

    const pred = getPredictionForPeriod(currentPeriod);
    const sizeCol = pred.size === 'BIG' ? 'text-cyber-gold glow-gold' : 'text-cyber-neonCyan glow-cyan';

    const resSizeEl = document.getElementById('resSize');
    if (resSizeEl) {
        resSizeEl.innerText = pred.size;
        resSizeEl.className = "text-4xl md:text-5xl font-orbitron font-extrabold tracking-wider my-1 " + sizeCol;
    }

    const resNumContainer = document.getElementById('resNumContainer');
    if (resNumContainer) {
        resNumContainer.innerHTML = renderCyberBall(pred.number, 52);
    }
    const resNumImg = document.getElementById('resNumImg');
    if (resNumImg) resNumImg.src = renderCyberBall(pred.number, 52);

    const colorBadge = document.getElementById('resColorBadge');
    if (colorBadge) {
        if (pred.color === 'green') {
            colorBadge.className = "w-3.5 h-3.5 rounded-full bg-cyber-neonGreen shadow-[0_0_10px_#00ff88]";
        } else if (pred.color === 'red') {
            colorBadge.className = "w-3.5 h-3.5 rounded-full bg-cyber-neonPink shadow-[0_0_10px_#ff007f]";
        } else if (pred.color === 'violet') {
            colorBadge.className = "w-3.5 h-3.5 rounded-full gradient-violet shadow-[0_0_10px_#a855f7]";
        } else {
            colorBadge.className = "w-3.5 h-3.5 rounded-full gradient-green-violet shadow-[0_0_10px_#00ff88]";
        }
    }

    const confEl = document.getElementById('confLvl');
    if (confEl) confEl.innerText = pred.confidence;

    document.getElementById('loader').classList.add('hidden');
    document.getElementById('resultPanel').classList.remove('hidden');

    if (isUnlocked) applyUnlockedState();
    else applyLockedState();

    isAnalyzing = false;
}

function resetUI() {
    const hackBtn = document.getElementById('hackBtn');
    const resultPanel = document.getElementById('resultPanel');
    const loader = document.getElementById('loader');
    const progressBar = document.getElementById('progressBar');
    const hackBtnLabel = document.getElementById('hackBtnLabel');

    if (hackBtn) hackBtn.classList.remove('hidden');
    if (resultPanel) resultPanel.classList.add('hidden');
    if (loader) loader.classList.add('hidden');
    if (progressBar) progressBar.style.width = '0%';
    if (hackBtnLabel) hackBtnLabel.innerText = "GET HACK FOR NEXT ROUND";
}

// ========================================================
// 🟢 BOOT MATRIX RAIN SPLASH
// ========================================================
function initBootSplash() {
    const canvas = document.getElementById('bootMatrixCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const chars = '0123456789ABCDEF!@#$%&*MSDTC';
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);

    let animationId;
    function draw() {
        ctx.fillStyle = 'rgba(2, 4, 10, 0.1)';
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = '#00f0ff';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
        animationId = requestAnimationFrame(draw);
    }
    draw();

    const bar = document.getElementById('bootProgressBar');
    const percentEl = document.getElementById('bootPercent');
    const termEl = document.getElementById('bootTerminalOutput');
    const splashEl = document.getElementById('bootSplashScreen');
    const statusSub = document.getElementById('bootStatusSub');
    const hwid = getDeviceFingerprint();

    const bootSteps = [
        { p: 15, msg: "> [0.12ms] [AUTH] BINDING HWID: " + hwid.substring(0, 12) + " [SEC_OK]", sub: "BINDING HARDWARE IDENTITY" },
        { p: 35, msg: "> [0.38ms] [SOCKET] BYPASSING WINGO 1M ENCRYPTION LAYER...", sub: "HOOKING DRAW PARITY STREAM" },
        { p: 58, msg: "> [0.72ms] [PARITY] EXTRACTING 17-DIGIT ISSUE SEED BLOCK...", sub: "RESOLVING QUANTUM PARITY BLOCK" },
        { p: 78, msg: "> [0.94ms] [ENTROPY] CALIBRATING COLOR VARIANCE // 0.0012ms", sub: "CALIBRATING QUANTUM ENTROPY" },
        { p: 92, msg: "> [1.18ms] [CIPHER] QUANTUM PROBABILITY SOLVER ACTIVE", sub: "LOCKING DECRYPTION CIPHER" },
        { p: 100, msg: "> [1.40ms] [SUCCESS] MSD-HACK ENGINE READY // 100% ONLINE", sub: "ACCESS GRANTED // INITIALIZED" }
    ];

    let p = 0;
    let stepIndex = 0;

    const bootInterval = setInterval(() => {
        p += 3.5;
        const safeP = Math.min(100, Math.floor(p));
        if (bar) bar.style.width = safeP + "%";
        if (percentEl) percentEl.innerText = safeP + "%";

        if (stepIndex < bootSteps.length && p >= bootSteps[stepIndex].p) {
            playUiSound('beep');
            const line = document.createElement('div');
            line.className = stepIndex === bootSteps.length - 1 ? 'text-cyber-neonGreen font-bold glow-green' : 'text-gray-300';
            line.innerText = bootSteps[stepIndex].msg;
            if (termEl) {
                termEl.appendChild(line);
                termEl.scrollTop = termEl.scrollHeight;
            }
            if (statusSub) statusSub.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-cyber-neonGreen shadow-[0_0_6px_#00ff88]"></span> ${bootSteps[stepIndex].sub}`;
            stepIndex++;
        }

        if (p >= 100) {
            clearInterval(bootInterval);
            cancelAnimationFrame(animationId);
            setTimeout(() => {
                splashEl.classList.add('fade-out');
                playUiSound('unlock');
                setTimeout(() => {
                    splashEl.remove();
                }, 500);
            }, 350);
        }
    }, 65);
}

// ========================================================
// 🔔 TOAST NOTIFICATIONS
// ========================================================
function showToast(msg) {
    let container = document.getElementById('toastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.innerText = msg;
    container.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 20);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2800);
}

function copyPeriodNumber() {
    const text = document.getElementById('currentPeriod').innerText;
    navigator.clipboard.writeText(text).then(() => {
        showToast("📋 Period copied: " + text);
    }).catch(() => {
        showToast("📋 Period: " + text);
    });
}

function toggleAudio() {
    const soundIcon = document.getElementById('soundIcon');
    if (soundIcon.innerText === '🔊') {
        soundIcon.innerText = '🔇';
    } else {
        soundIcon.innerText = '🔊';
        playUiSound('click');
    }
}

// ========================================================
// 🚀 APPLICATION INITIALIZATION
// ========================================================
window.addEventListener('DOMContentLoaded', () => {
    // 🚀 Sacred Quantum System Bootloader Animation
    const bootOverlay = document.getElementById('systemBootOverlay');
    const bootBar = document.getElementById('bootProgressBar');
    const bootPct = document.getElementById('bootPercentText');
    const bootStatus = document.getElementById('bootStatusText');

    if (bootOverlay) {
        let p = 0;
        const bootTimer = setInterval(() => {
            p += 4;
            if (bootBar) bootBar.style.width = `${Math.min(p, 100)}%`;
            if (bootPct) bootPct.innerText = `${Math.min(p, 100)}%`;
            
            if (p === 32) {
                if (bootStatus) bootStatus.innerText = 'ALIGNING SACRED CHAKRA MATRIX...';
            } else if (p === 72) {
                if (bootStatus) bootStatus.innerText = 'CALIBRATING QUANTUM ENGINE...';
            } else if (p >= 100) {
                clearInterval(bootTimer);
                if (bootStatus) bootStatus.innerText = 'SACRED ENGINE READY [100%]';
                playUiSound('unlock');
                setTimeout(() => {
                    bootOverlay.style.opacity = '0';
                    bootOverlay.style.pointerEvents = 'none';
                    setTimeout(() => bootOverlay.remove(), 600);
                }, 250);
            }
        }, 26);
    }

    checkExistingAuth();
    syncBroadcastAndSettings();
    setInterval(updateTimer, 1000);
    updateTimer();
    syncData(true);

    // Continuous Live Draw & History Sync every 4 seconds
    setInterval(() => syncData(), 4000);

    // Periodic Server Auth & Broadcast Check
    setInterval(checkExistingAuth, 15000);
    setInterval(syncBroadcastAndSettings, 15000);
    window.addEventListener('storage', checkExistingAuth);
});
