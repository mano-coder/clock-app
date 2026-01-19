import "./style.css";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const app = document.getElementById("app");
let currentZone = "Europe/London";

const locations = [
  { city: "New York", zone: "America/New_York" },
  { city: "London", zone: "Europe/London" },
  { city: "Tokyo", zone: "Asia/Tokyo" },
];

app.innerHTML = `
      <div
        id="content"
        class="text-bermuda text-right min-w-[502px] flex flex-col justify-end items-end gap-4 leading-none"
      >
        <select id="dropdown"  class="text-grey text-xl cursor-pointer bg-none focus:outline-none"></select>
        <h1 id="time" class="text-[10rem] font-mono tabular-nums tracking-tighter w-[8ch] text-right">${dayjs().tz(currentZone).format("hh:mm:ss")}</h1>
        <p id="date" class="text-xl">${dayjs().tz(currentZone).format("dddd, D MMM, YYYY")}</p>
      </div>
  `;

const dropdown = document.querySelector("#dropdown");

const dropdownOptions = locations
  .map(
    (loc) =>
      `<option value="${loc.city}" ${loc.zone === currentZone ? "selected" : ""}>${loc.city}</option>`,
  )
  .join("");
dropdown.innerHTML = dropdownOptions;

const timeElement = document.getElementById("time");
const updateTime = () => {
  timeElement.textContent = dayjs().tz(currentZone).format("hh:mm:ss");
};

const dateElement = document.getElementById("date");
const updateDate = () => {
  dateElement.textContent = dayjs().tz(currentZone).format("dddd, D MMM, YYYY");
};

const tick = () => {
  const now = dayjs().tz(currentZone);
  timeElement.textContent = now.format("hh:mm:ss");
  dateElement.textContent = now.format("dddd, D MMM, YYYY");
};

setInterval(tick, 1000);

dropdown.addEventListener("change", (e) => {
  const selectedValue = e.target.value;
  const locationObj = locations.find((i) => i.city === selectedValue);

  if (locationObj) {
    currentZone = locationObj.zone;
    tick();
  }
});
