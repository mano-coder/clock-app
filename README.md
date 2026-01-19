# 🌍 Modern World Clock

A sleek, responsive world clock built with **Vite**, **Tailwind CSS v4**, and **Day.js**. This project features real-time timezone switching, persistent user preferences via LocalStorage, and a high-precision "snapping" clock heartbeat.

![Screeshot](./Screeshot.png)

## ✨ Features

- **Real-Time Sync:** High-precision clock that "snaps" to the system second for perfect accuracy.
- **Timezone Selection:** Support for global timezones via an external `locations.json` configuration.
- **Persistence:** Remembers your last selected timezone even after closing the browser (LocalStorage).
- **Modern Styling:** Built with the latest **Tailwind CSS v4** engine for a fast, utility-first UI.
- **Monospace Precision:** Uses `tabular-nums` and fixed character widths (`ch` units) to prevent layout "jitter" as numbers change.

## 🚀 Tech Stack

- **Bundler:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Time Logic:** [Day.js](https://day.js.org/) (UTC & Timezone plugins)
- **Editor:** [Neovim](https://neovim.io/) with [Oil.nvim](https://github.com/stevearc/oil.nvim)

## 🛠️ Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
    cd YOUR_REPO_NAME
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 📖 Lessons Learned

- **Handling Timezones:** Implementing `dayjs.extend` to manage complex UTC offsets.

- **UI Stability:** Using CSS `ch` units and monospace fonts to handle the variable width of digital numbers.

- **Data Separation:** Moving hardcoded arrays into JSON files for better project scalability.

- **CI/CD:** Automating deployments via GitHub Actions for Vite-based projects.
