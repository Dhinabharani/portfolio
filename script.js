
    /* =================================================
   PAGE LOADER
================================================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    setTimeout(() => {

        document
            .querySelector(".loader")
            .classList.add("hide");

    }, 1500);

});


/* =================================================
   CURSOR GLOW
================================================= */

const cursorGlow =
    document.querySelector(".cursor-glow");

let mouseX =
    window.innerWidth / 2;

let mouseY =
    window.innerHeight / 2;

let glowX =
    mouseX;

let glowY =
    mouseY;


window.addEventListener(
    "mousemove",
    (event) => {

        mouseX =
            event.clientX;

        mouseY =
            event.clientY;

    }
);


function animateCursor() {

    glowX +=
        (mouseX - glowX) * .08;

    glowY +=
        (mouseY - glowY) * .08;


    if (cursorGlow) {

        cursorGlow.style.transform =

            `translate(
                ${glowX}px,
                ${glowY}px
            )
            translate(-50%, -50%)`;

    }


    requestAnimationFrame(
        animateCursor
    );

}


animateCursor();


/* =================================================
   CURSOR GROW ON INTERACTIVE ELEMENTS
================================================= */

const interactiveElements =
    document.querySelectorAll(
        "a, button, .project-card"
    );


interactiveElements.forEach(
    element => {

        element.addEventListener(
            "mouseenter",
            () => {

                if (!cursorGlow) return;

                cursorGlow.style.width =
                    "600px";

                cursorGlow.style.height =
                    "600px";

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                if (!cursorGlow) return;

                cursorGlow.style.width =
                    "430px";

                cursorGlow.style.height =
                    "430px";

            }
        );

    }
);


/* =================================================
   SCROLL PROGRESS
================================================= */

const progress =
    document.querySelector(
        ".scroll-progress"
    );


window.addEventListener(
    "scroll",
    () => {

        if (!progress) return;

        const scrollTop =
            window.scrollY;

        const pageHeight =
            document.documentElement.scrollHeight
            -
            window.innerHeight;

        const percentage =
            pageHeight > 0

                ? (
                    scrollTop /
                    pageHeight
                ) * 100

                : 0;


        progress.style.width =
            `${percentage}%`;

    }
);


/* =================================================
   MAGNETIC BUTTONS
================================================= */

document
    .querySelectorAll(".magnetic")
    .forEach(button => {

        button.addEventListener(
            "mousemove",
            event => {

                const rect =
                    button.getBoundingClientRect();

                const x =
                    event.clientX
                    -
                    rect.left
                    -
                    rect.width / 2;

                const y =
                    event.clientY
                    -
                    rect.top
                    -
                    rect.height / 2;


                button.style.transform =

                    `translate(
                        ${x * .18}px,
                        ${y * .18}px
                    )`;

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform =
                    "translate(0,0)";

            }
        );

    });


/* =================================================
   SCROLL REVEAL
================================================= */

const revealElements =
    document.querySelectorAll(
        ".scroll-reveal"
    );


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add(
                                "is-visible"
                            );


                        revealObserver
                            .unobserve(
                                entry.target
                            );

                    }

                }
            );

        },

        {
            threshold: .12
        }

    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);


/* =================================================
   PORTRAIT PARALLAX
================================================= */

const portrait =
    document.querySelector(
        "#portraitImg"
    );


window.addEventListener(
    "mousemove",
    event => {

        if (!portrait) return;


        const x =
            event.clientX /
            window.innerWidth
            -
            .5;

        const y =
            event.clientY /
            window.innerHeight
            -
            .5;


        portrait.style.transform =

            `translate(
                ${x * 18}px,
                ${y * 12}px
            )
            rotateY(
                ${x * 5}deg
            )
            rotateX(
                ${y * -4}deg
            )`;

    }
);


/* =================================================
   PROJECT CARD TILT
================================================= */

document
    .querySelectorAll(
        ".project-card"
    )
    .forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;


                const rotateX =
                    (
                        y -
                        rect.height / 2
                    )
                    /
                    rect.height
                    *
                    -5;


                const rotateY =
                    (
                        x -
                        rect.width / 2
                    )
                    /
                    rect.width
                    *
                    5;


                card.style.transform =

                    `translateY(-12px)
                     perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });

    /* =================================================
   SMOOTH SECTION PARALLAX
================================================= */

const orbs =
    document.querySelectorAll(
        ".ambient-orb"
    );


window.addEventListener(
    "scroll",
    () => {

        const scroll =
            window.scrollY;


        orbs.forEach(
            (orb, index) => {

                const speed =
                    (index + 1) * .025;


                orb.style.marginTop =
                    `${scroll * speed}px`;

            }
        );

    },
    {
        passive: true
    }
);


/* =================================================
   SKILL BUTTON RANDOM FLOAT
================================================= */

const skills =
    document.querySelectorAll(
        ".skill"
    );


skills.forEach(
    (skill, index) => {

        skill.style.transitionDelay =
            `${index * 20}ms`;

    }
);


/* =================================================
   ACTIVE NAVIGATION
================================================= */

const sections =
    document.querySelectorAll(
        "section[id], footer[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(
            section => {

                const sectionTop =
                    section.offsetTop - 250;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    current =
                        section.id;

                }

            }
        );


        navLinks.forEach(
            link => {

                link.style.color = "";


                if (
                    link.getAttribute("href") ===
                    `#${current}`
                ) {

                    link.style.color =
                        "#e50914";

                }

            }
        );

    }
);


/* =================================================
   AUDIO REACTIVE ENGINE
   Microphone Input
================================================= */

const audioBtn =
    document.getElementById(
        "audioBtn"
    );

const audioLabel =
    document.getElementById(
        "audioLabel"
    );

const audioFlash =
    document.getElementById(
        "audioFlash"
    );

const barEls =
    document.querySelectorAll(
        ".audio-bars i"
    );


let audioCtx = null;
let analyser = null;
let source = null;
let freqData = null;
let audioActive = false;


/* =================================================
   SMOOTH AUDIO VALUES
================================================= */

const audio = {

    bass: 0,
    mid: 0,
    treble: 0,
    level: 0,
    beat: 0,
    beatCooldown: 0

};


/* =================================================
   BEAT DETECTION
================================================= */

const bassHistory = [];

const BASS_HISTORY_LEN = 43;

let bassAvg = 0;


/* =================================================
   ENABLE MICROPHONE AUDIO
================================================= */

async function enableAudio() {

    try {

        audioCtx =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();


        if (
            audioCtx.state ===
            "suspended"
        ) {

            await audioCtx.resume();

        }


        const stream =
            await navigator.mediaDevices
                .getUserMedia({

                    audio: {

                        echoCancellation: false,

                        noiseSuppression: false,

                        autoGainControl: false

                    }

                });


        source =
            audioCtx.createMediaStreamSource(
                stream
            );


        /* -------------------------
           LOW PASS FILTER
        ------------------------- */

        const filter =
            audioCtx.createBiquadFilter();


        filter.type =
            "lowpass";


        filter.frequency.value =
            8000;


        /* -------------------------
           ANALYSER
        ------------------------- */

        analyser =
            audioCtx.createAnalyser();


        analyser.fftSize =
            1024;


        analyser.smoothingTimeConstant =
            .78;


        source.connect(
            filter
        );


        filter.connect(
            analyser
        );


        freqData =
            new Uint8Array(
                analyser.frequencyBinCount
            );


        audioActive =
            true;


        if (audioBtn) {

            audioBtn.classList.add(
                "active"
            );

        }


        if (audioLabel) {

            audioLabel.textContent =
                "AUDIO LIVE";

        }

    }

    catch (err) {

        console.warn(
            "Mic denied:",
            err
        );


        if (audioLabel) {

            audioLabel.textContent =
                "DENIED";

        }


        if (audioBtn) {

            audioBtn.classList.remove(
                "active"
            );

        }


        audioActive =
            false;

    }

}


/* =================================================
   DISABLE AUDIO
================================================= */

function disableAudio() {

    audioActive =
        false;


    if (audioBtn) {

        audioBtn.classList.remove(
            "active"
        );

    }


    if (audioLabel) {

        audioLabel.textContent =
            "AUDIO OFF";

    }


    if (audioCtx) {

        audioCtx.close();

        audioCtx =
            null;

        analyser =
            null;

        source =
            null;

    }


    audio.bass =
        audio.mid =
        audio.treble =
        audio.level =
        audio.beat =
        0;

}


/* =================================================
   AUDIO BUTTON
================================================= */

if (audioBtn) {

    audioBtn.addEventListener(
        "click",
        () => {

            if (!audioActive) {

                enableAudio();

            }

            else {

                disableAudio();

            }

        }
    );

}


/* =================================================
   SAMPLE + SMOOTH AUDIO
================================================= */

function sampleAudio() {

    if (
        !audioActive ||
        !analyser ||
        !freqData
    ) {

        return;

    }


    analyser.getByteFrequencyData(
        freqData
    );


    const bEnd = 8;

    const mEnd = 55;

    const tEnd = 200;


    let bSum = 0;

    let mSum = 0;

    let tSum = 0;


    for (
        let i = 2;
        i < bEnd;
        i++
    ) {

        bSum +=
            freqData[i];

    }


    for (
        let i = bEnd;
        i < mEnd;
        i++
    ) {

        mSum +=
            freqData[i];

    }


    for (
        let i = mEnd;
        i < tEnd;
        i++
    ) {

        tSum +=
            freqData[i];

    }


    const bassRaw =
        (
            bSum /
            (bEnd - 2)
        ) / 255;


    const midRaw =
        (
            mSum /
            (mEnd - bEnd)
        ) / 255;


    const trebleRaw =
        (
            tSum /
            (tEnd - mEnd)
        ) / 255;


    /* -------------------------
       SMOOTHING
    ------------------------- */

    audio.bass =
        audio.bass * .7 +
        bassRaw * .3;


    audio.mid =
        audio.mid * .75 +
        midRaw * .25;


    audio.treble =
        audio.treble * .8 +
        trebleRaw * .2;


    audio.level =
        audio.bass * .55 +
        audio.mid * .3 +
        audio.treble * .15;


    /* =================================================
       BEAT DETECTION
    ================================================= */

    bassHistory.push(
        audio.bass
    );


    if (
        bassHistory.length >
        BASS_HISTORY_LEN
    ) {

        bassHistory.shift();

    }


    bassAvg =
        bassHistory.reduce(
            (a, b) => a + b,
            0
        ) /
        bassHistory.length;


    if (
        audio.beatCooldown > 0
    ) {

        audio.beatCooldown--;

    }


    if (

        audio.bass >
        bassAvg * 1.35 &&

        audio.bass >
        .35 &&

        audio.beatCooldown === 0

    ) {

        audio.beat =
            1;


        audio.beatCooldown =
            8;


        onBeat();

    }


    audio.beat *= .9;


    /* =================================================
       AUDIO BARS
    ================================================= */

    for (
        let i = 0;
        i < barEls.length;
        i++
    ) {

        const sample =
            freqData[
                (i + 1) * 12
            ];


        barEls[i].style.height =
            Math.max(
                3,
                (sample / 255) * 14
            ) + "px";

    }


    /* =================================================
       SCREEN FLASH
    ================================================= */

    if (audioFlash) {

        audioFlash.style.opacity =
            Math.min(
                .9,
                audio.level * .85
            ).toFixed(3);

    }

}


/* =================================================
   BEAT EVENT
================================================= */

function onBeat() {

    const cx =
        window.innerWidth *
        (
            .5 +
            (Math.random() - .5) *
            .25
        );


    const cy =
        window.innerHeight *
        (
            .5 +
            (Math.random() - .5) *
            .25
        );


    const r =
        document.createElement(
            "div"
        );


    r.className =
        "beat-ripple";


    r.style.left =
        cx + "px";


    r.style.top =
        cy + "px";


    document.body.appendChild(
        r
    );


    setTimeout(
        () => r.remove(),
        950
    );

}


/* =================================================
   APPLY AUDIO TO VISUALS
================================================= */

const redLightEls =
    document.querySelectorAll(
        ".ambient-orb"
    );


const portraitImg =
    document.querySelector(
        "#portraitImg"
    );


const portraitRings =
    document.querySelectorAll(
        ".portrait-ring"
    );


const cursorGlowEl =
    document.querySelector(
        ".cursor-glow"
    );


function applyAudioToVisuals() {

    if (!audioActive) return;


    const b =
        audio.bass;


    const l =
        audio.level;


    /* -------------------------
       AMBIENT ORBS
    ------------------------- */

    redLightEls.forEach(
        orb => {

            orb.style.opacity =
                Math.min(
                    1,
                    .8 + l * .8
                ).toFixed(3);


            orb.style.filter =
                `blur(${30 + b * 40}px)
                 brightness(${1 + b * 1.2})`;

        }
    );


    /* -------------------------
       PORTRAIT BREATHING
    ------------------------- */

    if (portraitImg) {

        const s =
            1 +
            b * .04 +
            audio.beat * .03;


        portraitImg.style.setProperty(
            "--audio-scale",
            s
        );

    }


    /* -------------------------
       PORTRAIT RINGS
    ------------------------- */

    portraitRings.forEach(
        ring => {

            ring.style.borderColor =
                `rgba(
                    229,
                    9,
                    20,
                    ${.25 + b * .7}
                )`;


            ring.style.boxShadow =
                `0 0
                 ${b * 40}px
                 rgba(
                    229,
                    9,
                    20,
                    ${b * .55}
                 )`;

        }
    );


    /* -------------------------
       CURSOR GLOW
    ------------------------- */

    if (cursorGlowEl) {

        cursorGlowEl.style.opacity =
            Math.min(
                1,
                .8 + l * .4
            ).toFixed(3);

    }

}


/* =================================================
   AUDIO ANIMATION LOOP
================================================= */

(function audioLoop() {

    sampleAudio();

    applyAudioToVisuals();

    requestAnimationFrame(
        audioLoop
    );

})();

/* =================================================
   PORTRAIT PARALLAX + MOUSE TRAIL + CLICK RIPPLE
================================================= */

const portraitEl =
    document.querySelector(
        "#portraitImg"
    );


/* =================================================
   MOUSE TRAIL
================================================= */

const TRAIL_MAX = 18;

const trailDots = [];


for (
    let i = 0;
    i < TRAIL_MAX;
    i++
) {

    const dot =
        document.createElement(
            "div"
        );


    dot.className =
        "trail-dot";


    dot.style.opacity =
        "0";


    document.body.appendChild(
        dot
    );


    trailDots.push({

        el: dot,

        x:
            window.innerWidth / 2,

        y:
            window.innerHeight / 2,

        life: 0

    });

}


let trailPointer = 0;

let lastTrailSpawn = 0;


/* =================================================
   MOUSE MOVE
================================================= */

window.addEventListener(
    "mousemove",
    (event) => {


        /* -------------------------
           PORTRAIT PARALLAX
        ------------------------- */

        if (portraitEl) {

            const x =
                event.clientX /
                window.innerWidth -
                .5;


            const y =
                event.clientY /
                window.innerHeight -
                .5;


            portraitEl.style.transform =

                `translate(
                    ${x * 18}px,
                    ${y * 12}px
                )
                rotateY(
                    ${x * 5}deg
                )
                rotateX(
                    ${y * -4}deg
                )`;

        }


        /* -------------------------
           TRAIL DOT
        ------------------------- */

        const now =
            performance.now();


        if (
            now -
            lastTrailSpawn >
            22
        ) {

            lastTrailSpawn =
                now;


            const dot =
                trailDots[
                    trailPointer
                ];


            dot.x =
                event.clientX;


            dot.y =
                event.clientY;


            dot.life =
                1;


            trailPointer =
                (
                    trailPointer + 1
                ) %
                TRAIL_MAX;

        }

    }
);


/* =================================================
   TRAIL ANIMATION
================================================= */

function animateTrail() {

    for (
        const dot of trailDots
    ) {

        dot.life *=
            .92;


        const energy =
            audioActive
                ? audio.level
                : 0;


        const size =
            5 +
            energy * 6 *
            dot.life;


        dot.el.style.width =
            size + "px";


        dot.el.style.height =
            size + "px";


        dot.el.style.opacity =
            dot.life.toFixed(3);


        dot.el.style.transform =

            `translate(
                ${dot.x}px,
                ${dot.y}px
            )
            translate(-50%, -50%)`;


        dot.el.style.background =

            `rgba(
                229,
                ${Math.floor(
                    80 -
                    energy * 80
                )},
                20,
                ${dot.life}
            )`;

    }


    requestAnimationFrame(
        animateTrail
    );

}


animateTrail();



/* =================================================
   CLICK RIPPLE
================================================= */

window.addEventListener(
    "click",
    (event) => {


        /* -------------------------
           Skip buttons / links
        ------------------------- */

        if (
            event.target.closest(
                "a, button, .audio-btn"
            )
        ) {

            return;

        }


        const r =
            document.createElement(
                "div"
            );


        r.className =
            "click-ripple";


        r.style.left =
            event.clientX + "px";


        r.style.top =
            event.clientY + "px";


        document.body.appendChild(
            r
        );


        setTimeout(
            () => r.remove(),
            850
        );

    }
);



/* =================================================
   PREMIUM MOUSE SYSTEM
   Cursor + Hover + Click +
   Double Click + Audio
================================================= */

const cursorDot =
    document.querySelector(
        ".cursor-dot"
    );


const cursorRing =
    document.querySelector(
        ".cursor-ring"
    );


let premiumMouseX =
    window.innerWidth / 2;


let premiumMouseY =
    window.innerHeight / 2;


let premiumRingX =
    premiumMouseX;


let premiumRingY =
    premiumMouseY;


/* =================================================
   PREMIUM CURSOR POSITION
================================================= */

window.addEventListener(
    "mousemove",
    (event) => {

        premiumMouseX =
            event.clientX;


        premiumMouseY =
            event.clientY;

    }
);


/* =================================================
   SMOOTH CURSOR
================================================= */

function animatePremiumCursor() {

    premiumRingX +=
        (
            premiumMouseX -
            premiumRingX
        ) * .16;


    premiumRingY +=
        (
            premiumMouseY -
            premiumRingY
        ) * .16;


    if (cursorDot) {

        cursorDot.style.left =
            premiumMouseX + "px";


        cursorDot.style.top =
            premiumMouseY + "px";

    }


    if (cursorRing) {

        cursorRing.style.left =
            premiumRingX + "px";


        cursorRing.style.top =
            premiumRingY + "px";

    }


    requestAnimationFrame(
        animatePremiumCursor
    );

}


animatePremiumCursor();



/* =================================================
   MOUSE AUDIO
================================================= */

let mouseAudio = null;

let soundEnabled = true;


/* =================================================
   CREATE AUDIO CONTEXT
================================================= */

function createMouseAudio() {

    if (!soundEnabled) {

        return false;

    }


    if (!mouseAudio) {

        mouseAudio =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();

    }


    if (
        mouseAudio.state ===
        "suspended"
    ) {

        mouseAudio.resume();

    }


    return true;

}



/* =================================================
   TONE GENERATOR
================================================= */

function tone(
    frequency,
    start,
    duration,
    volume,
    type = "sine",
    endFrequency = null
) {

    if (
        !createMouseAudio()
    ) {

        return;

    }


    const osc =
        mouseAudio.createOscillator();


    const gain =
        mouseAudio.createGain();


    const now =
        mouseAudio.currentTime +
        start;


    osc.type =
        type;


    osc.frequency.setValueAtTime(
        frequency,
        now
    );


    if (endFrequency) {

        osc.frequency.exponentialRampToValueAtTime(
            endFrequency,
            now + duration
        );

    }


    gain.gain.setValueAtTime(
        .0001,
        now
    );


    gain.gain.exponentialRampToValueAtTime(
        volume,
        now + .008
    );


    gain.gain.exponentialRampToValueAtTime(
        .001,
        now + duration
    );


    osc.connect(
        gain
    );


    gain.connect(
        mouseAudio.destination
    );


    osc.start(
        now
    );


    osc.stop(
        now +
        duration +
        .02
    );

}



/* =================================================
   HOVER SOUND
================================================= */

function hoverSound() {

    tone(
        720,
        0,
        .07,
        .018,
        "sine",
        900
    );

}



/* =================================================
   CLICK SOUND
================================================= */

function clickSound() {

    tone(
        420,
        0,
        .12,
        .055,
        "sine",
        170
    );

}



/* =================================================
   DOUBLE CLICK SOUND
================================================= */

function doubleClickSound() {

    tone(
        390,
        0,
        .28,
        .07,
        "sine",
        520
    );


    tone(
        520,
        .08,
        .32,
        .055,
        "sine",
        780
    );

}



/* =================================================
   PREMIUM HOVER ELEMENTS
================================================= */

const premiumHoverElements =
    document.querySelectorAll(
        "a, button, .project-card, .portrait-container, .magnetic"
    );


premiumHoverElements.forEach(
    element => {


        element.addEventListener(
            "mouseenter",
            () => {


                if (cursorRing) {

                    cursorRing.classList.add(
                        "hovering"
                    );

                }


                hoverSound();

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {


                if (cursorRing) {

                    cursorRing.classList.remove(
                        "hovering"
                    );

                }

            }
        );

    }
);



/* =================================================
   NORMAL CLICK
================================================= */

window.addEventListener(
    "click",
    (event) => {


        clickSound();


        if (cursorRing) {

            cursorRing.classList.add(
                "clicking"
            );


            setTimeout(
                () => {

                    cursorRing.classList.remove(
                        "clicking"
                    );

                },
                180
            );

        }


        createClickSpark(
            event.clientX,
            event.clientY
        );

    }
);



/* =================================================
   DOUBLE CLICK
================================================= */

window.addEventListener(
    "dblclick",
    (event) => {


        doubleClickSound();


        createDoublePulse(
            event.clientX,
            event.clientY
        );

    }
);



/* =================================================
   DOUBLE CLICK PULSE
================================================= */

function createDoublePulse(
    x,
    y
) {

    const pulse =
        document.createElement(
            "div"
        );


    pulse.className =
        "double-click-pulse";


    pulse.style.left =
        x + "px";


    pulse.style.top =
        y + "px";


    document.body.appendChild(
        pulse
    );


    setTimeout(
        () => pulse.remove(),
        950
    );

}



/* =================================================
   CLICK SPARK
================================================= */

function createClickSpark(
    x,
    y
) {

    for (
        let i = 0;
        i < 5;
        i++
    ) {


        const spark =
            document.createElement(
                "div"
            );


        spark.className =
            "click-spark";


        spark.style.left =
            x + "px";


        spark.style.top =
            y + "px";


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            20 +
            Math.random() *
            25;


        spark.style.setProperty(
            "--dx",
            Math.cos(angle) *
                distance +
                "px"
        );


        spark.style.setProperty(
            "--dy",
            Math.sin(angle) *
                distance +
                "px"
        );


        document.body.appendChild(
            spark
        );


        setTimeout(
            () => spark.remove(),
            600
        );

    }

}



/* =================================================
   KEYBOARD SHORTCUT
   M = Toggle Mouse Sound
================================================= */

window.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key.toLowerCase() ===
            "m"
        ) {

            soundEnabled =
                !soundEnabled;

        }

    }
);


/* =================================================
   END OF PREMIUM MOUSE SYSTEM
================================================= */
