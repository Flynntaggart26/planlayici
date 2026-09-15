# 📚 StudyFlow — Study Planner

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![No Build](https://img.shields.io/badge/Setup-No_Build-6366f1)
![i18n](https://img.shields.io/badge/i18n-TR_%2F_EN-10b981)
![Storage](https://img.shields.io/badge/Storage-localStorage-06b6d4)
![Theme](https://img.shields.io/badge/Theme-Light_%2F_Dark-8b5cf6)
![Responsive](https://img.shields.io/badge/Design-Responsive-ec4899)
![License](https://img.shields.io/badge/License-MIT-green)

**StudyFlow** is a modern, zero-setup **study planner for students**.
It brings task tracking, a weekly timetable, a calendar, an exam countdown, a Pomodoro focus timer
and progress reports together in one sleek dashboard. Your data lives **only in your own browser** —
no accounts, no servers, no internet connection required.

> 🇹🇷 **Türkçe?** The app UI is fully bilingual — switch to Turkish anytime from the sidebar.
> The app itself ships with 75+ translated strings and locale-aware date formats.

---

## ✨ Highlights

| Area | What it does |
|---|---|
| 📝 **Task management** | Rich tasks with lesson + topic + note + date/time + duration + priority + category |
| ⏭⧉ **Quick actions** | One-click complete, postpone to tomorrow, duplicate, delete |
| 🗓️ **Weekly timetable** | Monday–Sunday lesson slots with time ranges and per-day counters |
| 📅 **Monthly calendar** | See task density inside day cells; click any day for details |
| 🎓 **Exam countdown** | Add exams and see remaining days automatically (last 7 days highlighted) |
| 🍅 **Focus timer** | 25 / 45 / 60 min Pomodoro with automatic session scoring |
| 🎯 **Weekly goal** | Set a target number of tasks and track it with a progress bar |
| 🔥 **Study streak** | Counts consecutive days with at least one finished task |
| 📊 **Reports** | Last-7-days chart, per-lesson breakdown, most-productive-day insights |
| 🔔 **Notifications** | Get the day's pending work as a browser notification |
| 🌙 **Dark / light mode** | One-click theme switch, preference is remembered |
| 🌍 **TR / EN languages** | 75+ UI strings translate instantly, date format adapts |
| 💾 **Backup** | JSON download / restore + Excel-friendly CSV export |
| 📱 **Responsive** | Collapses to a single column on phones |

---

## 🖥️ Pages Explained

### 1. Dashboard — your daily command center
- **4 colorful KPI cards:** today's progress (`done/total`), pending count, weekly focus time, overall completion rate.
- **Today's flow:** overdue + today's pending tasks in one glanceable stream.
- **Focus card:** Pomodoro timer plus the session/minute score accumulated on this device.
- **Weekly goal card:** ratio of tasks finished in the Monday–Sunday window vs. your target.
- **Upcoming (3 days):** a quick peek at the next 3 days of tasks.
- **Exam countdown:** add an exam name + date and see the remaining days as a badge.

### 2. Tasks — mission control for all work
- Full-text search (across lesson + topic + notes), status filter (all / pending / done / overdue),
  category filter, and 3 sort modes (date / priority / lesson).
- Summary bar (`X tasks • Y pending • Z overdue`), bulk-clear completed tasks, CSV download.
- Category management: add / delete categories (they instantly appear in the task form).

### 3. Schedule — your weekly routine
- Add slots with day + lesson + start/end time; per-day counters plus a grand total.
- Enter fixed school/course hours once and keep them always in sight.

### 4. Calendar — the month at a glance
- Monday-first grid, today highlighted, up to 3 lesson badges per day + overflow counter.
- Click any day to open that day's task cards in the side panel (completable right there).

### 5. Reports — data for your motivation
- Total tasks, completion percentage, total planned time.
- Last-7-days completion chart, per-lesson bars, plus
  "most studied lesson" and "most productive day" insights.

---

## 🚀 Usage

There is **no installation** — pure HTML + CSS + JS, no build step.

**Option 1 — Double-click (easiest):**
1. Download this repo (`Code → Download ZIP`) or clone it.
2. Double-click `index.html`. That's it. ✅

**Option 2 — Clone:**
```bash
git clone https://github.com/Flynntaggart26/planlayici.git
cd planlayici
# open index.html in your browser
```

**Option 3 — VS Code Live Server:**
Right-click `index.html` → *Open with Live Server* (ideal for development with auto-reload).

> 💡 **Where is my data?** Everything is stored in your browser's `localStorage`
> (key `dersPlanlayici_v1`). It does not sync across browsers/devices —
> use **Reports → Download JSON / Import** to move it around.

---

## ⌨️ Shortcuts & Tips

| Tip | Explanation |
|---|---|
| `Esc` | Closes the open task dialog |
| 🔔 *Notify day summary* | Asks for notification permission on first click, then shows the summary as a notification |
| 🧹 *Clear* | Deletes only completed tasks, never touches pending ones |
| 🎯 *Goal* | The week is calculated over the Monday–Sunday range |

---

## 🗺️ Roadmap

- [ ] Drag-and-drop for schedule/tasks
- [ ] Scheduled (automatic) reminders
- [ ] Per-lesson time targets
- [ ] PWA support (offline install + app-like feel on mobile)
- [ ] GitHub Pages live demo link

Please use [Issues](https://github.com/Flynntaggart26/planlayici/issues) for ideas or bug reports.

---

## 🤝 Contributing

1. Fork the repo and create a branch (`git checkout -b feature/xyz`).
2. Make your change and commit it.
3. Open a Pull Request — don't forget a short description.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — use, modify and share freely. 💜
