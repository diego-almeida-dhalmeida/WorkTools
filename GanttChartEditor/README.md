# 📅 Gantt Chart Editor (HTML + JavaScript)

A lightweight and interactive Gantt chart editor built using **HTML**, **JavaScript**, and **Bootstrap**, designed for managing tasks by **periods of the day (morning/afternoon)** on **business days only**. No external server required — runs 100% client-side.

---

## 🚀 Features

### ✅ Task Management

- Add, edit, and delete tasks
- Each task supports:
  - **Description**
  - **Color selection** from 20 pastel options
  - **Number of periods** (1–60 blocks = 30 business days)

### 📅 Calendar Visualization

- Tasks are auto-allocated across business days in **morning (09:00–12:00)** and **afternoon (13:00–16:00)**
- **No overlap** allowed: periods are skipped if occupied
- **Headers rotate** vertically when >5 columns
- Maximum: **60 blocks** shown (30 days)

### 🎨 Color Logic

- Users choose from 20 predefined **pastel colors** by name (e.g. "Azul Pastel", "Verde Pastel")
- Colors in use are **removed from the picker** and only reappear if the task is deleted or changed

### 🧠 Smart UI

- Press **ENTER** to quickly add a task with 1 period and next available color
- Press **ESC** or click ❌ to cancel editing
- Form switches between **"Include"** and **"Edit"** modes visually and functionally

### 💾 Data Handling

- **Export** all tasks as a `.json` file
- **Import** from `.json` file to restore planning state
- Tasks with predefined agendas are preserved

---

## 🧰 Technologies

- HTML5
- JavaScript (Vanilla)
- Bootstrap 5 (CDN)
- No libraries or frameworks required

---

## 🖥️ How to Run

1. Download the file:

   👉 [`GanttChart_Editor_Final_OK.html`](./GanttChart_Editor_Final_OK.html)

2. Open it in any modern web browser (Chrome, Firefox, Edge, Safari)

   > 📌 All functionality runs **client-side**, so no internet or server is required after first load.

---

## 📤 Export / Import

Use the buttons:

- **Exportar JSON** → Download a `.json` of all tasks
- **Importar JSON** → Load an existing `.json` file and repopulate the chart

---

## 📌 Example Use Cases

- Internal QA test planning
- Academic weekly study planners
- Sprint preparation for task allocation
- Manual support call routing diagrams

---

## 🛠 Roadmap Ideas

Want to extend the tool? Here are some ideas:

- Export to PDF / Excel
- Support for half-hour or hourly periods
- Login support with localStorage or Firebase
- Responsive version for mobile and tablet
- Collaborative live version (multi-user)

---

## 📃 License

This project is free to use and modify for personal and commercial purposes.

---

## 🙌 Created with the help of OpenAI ChatGPT
