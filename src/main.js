import "./style.css";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import locations from "./locations.json";
dayjs.extend(utc);
dayjs.extend(timezone);

const app = document.getElementById("app");
let currentZone = localStorage.getItem("selectedZone") || locations[0].zone;

// 1. Initial Render
// Note: The H1 is on a single line to prevent ghost whitespace from affecting width
app.innerHTML = `
      <div
        id="content"
        class="text-bermuda text-right min-w-[502px] flex flex-col justify-end items-end gap-4 leading-none"
      >
        <select id="dropdown" class="w-full max-w-[400px] text-grey text-xl cursor-pointer bg-transparent focus:outline-none truncate text-right"></select>
        <h1 id="time" class="text-[10rem] font-mono tabular-nums tracking-tighter w-[8ch] text-right">${dayjs().tz(currentZone).format("hh:mm:ss")}</h1>
        <p id="date" class="text-xl">${dayjs().tz(currentZone).format("dddd, D MMM, YYYY")}</p>
      </div>
  `;

const dropdown = document.querySelector("#dropdown");
const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

// 2. Populate Dropdown
const dropdownOptions = locations
  .sort((a, b) => a.city.localeCompare(b.city))
  .map(
    (loc) =>
      `<option value="${loc.city}" ${loc.zone === currentZone ? "selected" : ""}>${loc.city}</option>`,
  )
  .join("");
dropdown.innerHTML = dropdownOptions;

// 3. Update Function (The Heartbeat)
const tick = () => {
  const now = dayjs().tz(currentZone);
  timeElement.textContent = now.format("hh:mm:ss");
  dateElement.textContent = now.format("dddd, D MMM, YYYY");
};

// 4. Precision Start Logic
// This ensures the interval starts exactly when the millisecond hits 0
const startClock = () => {
  const msUntilNextSecond = 1000 - dayjs().millisecond();

  setTimeout(() => {
    tick();
    setInterval(tick, 1000);
  }, msUntilNextSecond);
};

// 5. Event Listeners
dropdown.addEventListener("change", (e) => {
  const selectedValue = e.target.value;
  const locationObj = locations.find((i) => i.city === selectedValue);

  if (locationObj) {
    currentZone = locationObj.zone;
    localStorage.setItem("selectedZone", currentZone);
    tick(); // Update immediately on change
  }
});

startClock();
