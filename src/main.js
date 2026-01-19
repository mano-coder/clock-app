import "./style.css";
import dayjs from "dayjs";

const app = document.getElementById("app");

app.innerHTML = `
      <div
        id="content"
        class="text-bermuda text-right w-[502px] flex flex-col justify-end items-end gap-4 leading-none"
      >
        <p class="text-grey text-xl">Europe / London</p>
        <h1 id="time" class="text-[10rem] font-mono tabular-nums tracking-tighter">${dayjs().format("hh:mm:ss")}</h1>
        <p class="text-xl">${dayjs().format("dddd, D MMM, YYYY")}</p>
      </div>
  `;

const timeElement = document.getElementById("time");

const updateTime = () => {
  timeElement.textContent = dayjs().format("hh:mm:ss");
};

setInterval(updateTime, 1000);
