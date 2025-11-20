// Controls and interactions for the UI with slide transitions
// Lamp
const lampOn = document.getElementById('lampOn');
const lampOff = document.getElementById('lampOff');
const lampStatus = document.getElementById('lampStatus');
const lampQuickStatus = document.getElementById('lampQuickStatus');
const lampBrightness = document.getElementById('lampBrightness');
const brightnessStatus = document.getElementById('brightnessStatus');

let lampState = false;

function updateLampButtons() {
  if (lampState) {
    lampOn.classList.add('active');
    lampOff.classList.remove('active');
    lampOff.classList.add('inactive');
  } else {
    lampOn.classList.remove('active');
    lampOff.classList.add('active');
    lampOff.classList.remove('inactive');
  }
}

if (lampOn) {
  lampOn.addEventListener('click', () => {
    lampState = true;
    lampStatus.textContent = 'Įjungta';
    if (lampQuickStatus) lampQuickStatus.textContent = 'Įjungta';
    updateLampButtons();
  });
}

if (lampOff) {
  lampOff.addEventListener('click', () => {
    lampState = false;
    lampStatus.textContent = 'Išjungta';
    if (lampQuickStatus) lampQuickStatus.textContent = 'Išjungta';
    updateLampButtons();
  });
}

if (lampBrightness) {
  lampBrightness.addEventListener('input', () => {
    brightnessStatus.textContent = lampBrightness.value + '%';
  });
}

// Thermostat
const temperature = document.getElementById('temperature');
const tempStatus = document.getElementById('tempStatus');
const thermostatQuickStatus = document.getElementById('thermostatQuickStatus');
if (temperature) {
  temperature.addEventListener('input', () => {
    const temp = temperature.value + '°C';
    tempStatus.textContent = temp;
    if (thermostatQuickStatus) thermostatQuickStatus.textContent = temp;
  });
}

// Blinds
const blindsUp = document.getElementById('blindsUp');
const blindsDown = document.getElementById('blindsDown');
const blindsRange = document.getElementById('blindsRange');
const blindsStatus = document.getElementById('blindsStatus');
const blindsQuickStatus = document.getElementById('blindsQuickStatus');

function updateBlindsStatus() {
  const value = parseInt(blindsRange.value);
  let status;
  if (value === 0) {
    status = 'Uždaryta (0%)';
  } else if (value === 100) {
    status = 'Atidaryта (100%)';
  } else {
    status = 'Atidaryта (' + value + '%)';
  }
  blindsStatus.textContent = status;
  if (blindsQuickStatus) blindsQuickStatus.textContent = value + '%';
}

if (blindsUp) {
  blindsUp.addEventListener('click', () => {
    blindsRange.value = 100;
    updateBlindsStatus();
  });
}
if (blindsDown) {
  blindsDown.addEventListener('click', () => {
    blindsRange.value = 0;
    updateBlindsStatus();
  });
}
if (blindsRange) {
  blindsRange.addEventListener('input', () => {
    updateBlindsStatus();
  });
}

// Music
const musicOn = document.getElementById('musicOn');
const musicOff = document.getElementById('musicOff');
const musicStatus = document.getElementById('musicStatus');
const musicQuickStatus = document.getElementById('musicQuickStatus');
const volume = document.getElementById('volume');
const volumeStatus = document.getElementById('volumeStatus');
const songSelect = document.getElementById('songSelect');

let musicState = false;

function updateMusicButtons() {
  if (musicState) {
    musicOn.classList.add('active');
    musicOff.classList.remove('active');
    musicOff.classList.add('inactive');
  } else {
    musicOn.classList.remove('active');
    musicOff.classList.add('active');
    musicOff.classList.remove('inactive');
  }
}

if (musicOn) {
  musicOn.addEventListener('click', () => {
    musicState = true;
    musicStatus.textContent = 'Įjungta';
    if (musicQuickStatus) musicQuickStatus.textContent = 'Įjungta';
    updateMusicButtons();
  });
}

if (musicOff) {
  musicOff.addEventListener('click', () => {
    musicState = false;
    musicStatus.textContent = 'Išjungta';
    if (musicQuickStatus) musicQuickStatus.textContent = 'Išjungta';
    updateMusicButtons();
  });
}
if (volume) {
  volume.addEventListener('input', () => {
    volumeStatus.textContent = volume.value + '%';
  });
}
if (songSelect) {
  songSelect.addEventListener('change', () => {
    if (musicToggle.checked) {
      musicStatus.textContent = 'Groja: ' + songSelect.value;
    }
  });
}

// Alarm
const alarmOn = document.getElementById('alarmOn');
const alarmOff = document.getElementById('alarmOff');
const alarmStatus = document.getElementById('alarmStatus');
const alarmQuickStatus = document.getElementById('alarmQuickStatus');

let alarmState = false;

function updateAlarmButtons() {
  if (alarmState) {
    alarmOn.classList.add('active');
    alarmOff.classList.remove('active');
    alarmOff.classList.add('inactive');
  } else {
    alarmOn.classList.remove('active');
    alarmOff.classList.add('active');
    alarmOff.classList.remove('inactive');
  }
}

if (alarmOn) {
  alarmOn.addEventListener('click', () => {
    alarmState = true;
    alarmStatus.textContent = 'Įjungta';
    if (alarmQuickStatus) alarmQuickStatus.textContent = 'Įjungta';
    updateAlarmButtons();
  });
}

if (alarmOff) {
  alarmOff.addEventListener('click', () => {
    alarmState = false;
    alarmStatus.textContent = 'Išjungta';
    if (alarmQuickStatus) alarmQuickStatus.textContent = 'Išjungta';
    updateAlarmButtons();
  });
}

// Light (Svetlo)
const lightBrightness = document.getElementById('lightBrightness');
const lightStatus = document.getElementById('lightStatus');
const lightQuickStatus = document.getElementById('lightQuickStatus');
if (lightBrightness) {
  lightBrightness.addEventListener('input', () => {
    lightStatus.textContent = lightBrightness.value + '%';
    if (lightQuickStatus) lightQuickStatus.textContent = lightBrightness.value + '%';
  });
}

// Slide handling
const slides = document.querySelectorAll('.slide');

function showSlide(id) {
  slides.forEach(s => {
    if (s.id === id) {
      s.classList.add('active');
    } else {
      s.classList.remove('active');
    }
  });
}

// Device card click handlers
const deviceCards = document.querySelectorAll('.device-card');
deviceCards.forEach(card => {
  card.addEventListener('click', () => {
    const deviceId = card.getAttribute('data-device');
    showSlide(deviceId);
  });
});

// Start on home
document.addEventListener('DOMContentLoaded', () => {
  showSlide('home');
});

// Back button: return to home
const backBtns = document.querySelectorAll('.back-btn');
backBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    showSlide('home');
  });
});
