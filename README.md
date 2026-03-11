# KPomo

KPomo is a simple Pomodoro focus timer designed for Kindle e-readers (e-ink devices).
It provides a minimal interface suitable for black-&-white displays and works entirely
in the browser shipped on the device.

## Overview

- 25‑minute work sessions followed by 5‑minute short breaks (configurable in the UI)
- Start, pause, reset controls
- Simple countdown display tuned for Kindle screen size
- No external dependencies: just HTML, CSS and vanilla JavaScript
- Installs as a Kindle booklet using the same packaging pattern as KWordle

## How to Install

1. Download the latest release from this repository (or build it yourself).
2. Connect your Kindle to your computer via USB.
3. Copy the entire `kpomo` folder and `kpomo.sh` file into the **Documents** folder
   of your Kindle.
4. Safely eject your Kindle.
5. On the device open the **KPomo** booklet to start the timer.

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