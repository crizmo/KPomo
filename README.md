# KPomo
<img width="auto" height="600" alt="image" src="https://github.com/user-attachments/assets/0422d226-58ab-48d8-ae23-8f1d3766347a" />
<br /><br />
<a href="https://ko-fi.com/kurizu" target="_blank">
   <img src="https://ko-fi.com/img/githubbutton_sm.svg" alt="Support me on Ko-fi" />
</a>
<br /><br />
KPomo is a simple Pomodoro focus timer designed for Kindle e-readers (e-ink devices).
It provides a minimal interface suitable for black-&-white displays and works entirely
in the browser shipped on the device.

## Overview

- 25‑minute work sessions followed by 5‑minute short breaks (configurable in the UI)
- Start, pause, reset controls
- Simple countdown display tuned for Kindle screen size
- No external dependencies: just HTML, CSS and vanilla JavaScript
- Installs as a Kindle booklet using the same packaging pattern as [KWordle](https://github.com/crizmo/KWordle)

## How to Install

**Note:** If you have an older Kindle (5.6.1.1), download the zip with `-legacy` in its name.

1. Download the latest release from this repository (or build it yourself).
2. Connect your Kindle to your computer via USB.
3. Copy the entire `kpomo` folder and `kpomo.sh` file into the **Documents** folder
   of your Kindle.
4. Safely eject your Kindle.
5. On the device open the **KPomo** booklet to start the timer.
6. [Disable screensaver on your Kindle](https://kindlemodding.org/kindle-apps-and-services/) ( If you want , if your timer is big, tho I think the timer should be running in the background even if its on screensaver screen , Idk haven't tested )
```
lipc-set-prop com.lab126.powerd preventScreenSaver 1 # Disable screensaver
```

## Usage

1. Tap **Start** to begin a work session (default 25 minutes).
2. When the work timer ends, an alert is shown and you may tap **Start Break**
   to begin a short break.
3. Use **Pause** to pause the countdown or **Reset** to return to the current
   session length.
4. You can adjust durations by editing the values in the top-right corner.
   
## Development

The code lives entirely in the `kpomo` directory. Modify `main.js` for logic,
`main.css` for styling and `index.html` for structure. The `config.xml` file makes
Kindle aware of the booklet and configures the chrome bar.
