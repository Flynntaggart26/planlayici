// ===== StudyFlow — app logic (TR/EN i18n) =====
const KEY = "dersPlanlayici_v1";
const THEME_KEY = "studyflow_theme";
const LANG_KEY = "studyflow_lang";
const GUNLER = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
const SHADES = ["#6366f1","#8b5cf6","#06b6d4","#10b981","#f59e0b","#ef4444","#ec4899","#14b8a6"];

let lang = localStorage.getItem(LANG_KEY) || "tr";
const LOC = () => lang === "tr" ? "tr-TR" : "en-US";

// ---------- dictionaries ----------
const T = {
tr: {
  logo_sub:"Ders Planlayıcı", nav_dashboard:"Dashboard", nav_tasks:"Görevler", nav_program:"Ders Programı",
  nav_calendar:"Takvim", nav_reports:"Raporlar", side_streak_t:"🔥 Çalışma serisi",
  side_streak_h:"Her gün en az 1 görev bitir, seriyi büyüt.", side_focus_t:"⏱ Odak skoru",
  export_backup:"⤓ Yedek al", new_task:"+ Yeni Görev",
  tab_panel_t:"Hoş geldin 👋", tab_panel_s:"Bugünün planına hızlıca göz at.",
  tab_gorevler_t:"Görevler ✓", tab_gorevler_s:"Tüm çalışma görevlerini yönet.",
  tab_program_t:"Ders Programı ◫", tab_program_s:"Haftalık rutinini oluştur.",
  tab_takvim_t:"Takvim 📅", tab_takvim_s:"Ayın genel görünümü.",
  tab_istatistik_t:"Raporlar 📊", tab_istatistik_s:"İlerlemeni analiz et.",
  kpi_today:"Bugünkü görev", kpi_open:"Bekleyen", kpi_open_h:"Tamamlanmayı bekliyor",
  kpi_focus:"Haftalık odak", kpi_focus_h:"Tamamlanan görev süresi", kpi_rate:"Tamamlanma",
  today_flow:"📌 Bugünün akışı", view_all:"Tümü →", remind_btn:"🔔 Günün özetini bildir",
  exam_t:"🎓 Sınav geri sayımı", exam_name_ph:"Sınav adı (örn. TYT Deneme)", add:"Ekle", add_ex:"+ Ekle",
  focus_t:"🍅 Odak", timer_start:"Başlat", timer_pause:"Duraklat", timer_reset:"Sıfırla",
  goal_t:"🎯 Haftalık hedef", goal_desc:"Bu hafta bitirmeyi hedeflediğin görev sayısı.",
  save:"Kaydet", upcoming_t:"⏭ Yaklaşan (3 gün)", goto_calendar:"Takvim →",
  search_ph:"🔍 Ders veya konu ara...", f_all:"Tümü", f_open:"Bekleyen", f_done:"Tamamlanan", f_over:"Geciken",
  all_cats:"Tüm kategoriler", sort_date:"Tarihe göre", sort_prio:"Önceliğe göre", sort_lesson:"Derse göre",
  clear_done:"🧹 Tamamlananları temizle", csv_btn:"⤓ CSV indir",
  cat_t:"🏷️ Kategoriler", new_cat_ph:"Yeni kategori adı (örn. Sayısal)",
  sched_t:"🗓️ Haftalık Ders Programı", s_ders_ph:"Ders (örn. Fizik)", cal_today:"Bugün",
  rep_total:"Toplam görev", rep_rate:"Tamamlanma", rep_time:"Planlanan süre",
  last7:"📊 Son 7 gün", last7_h:"Tamamlanan görev sayısı", by_lesson:"📚 Derse göre dağılım",
  data_t:"⚠️ Veri yönetimi", data_desc:"Veriler tarayıcında (localStorage) saklanır. Düzenli yedek almanı öneririm.",
  json_btn:"⤓ JSON indir", import_btn:"⤒ İçe aktar", wipe_btn:"Tümünü sil",
  foot:"StudyFlow • verilerin cihazında saklanır 💾",
  modal_t:"➕ Yeni çalışma görevi", f_lesson:"Ders *", f_cat:"Kategori", f_topic:"Konu / açıklama *",
  f_note_l:"Not (isteğe bağlı)", f_date:"Tarih", f_time:"Saat", f_dur:"Süre (dk)", f_prio:"Öncelik",
  cancel:"Vazgeç", f_ders_ph:"örn. Matematik", f_konu_ph:"örn. Türev — 2 test çöz",
  f_note_ph:"örn. Sayfa 40-55, formülleri tekrar et",
  prio_low:"▫ Düşük", prio_med:"◼ Orta", prio_high:"⬛ Yüksek",
  theme_dark:"🌙 Koyu mod", theme_light:"☀️ Açık mod",
  min_unit:"dk", today_progress:"Bugünkü ilerleme", today_none:"Bugün planlı görev yok",
  empty_tasks:"Görev bulunamadı — sağ üstten yeni görev ekle 👆",
  empty_today:"🎉 Bugün bekleyen iş yok!", empty_upcoming:"Önümüzdeki 3 günde planlı görev yok.",
  empty_cal:"Bu günde görev yok.", empty_exam:"Henüz sınav yok — ilkini yukarıdan ekle. 🎓",
  empty_cats:"Henüz kategori yok.", empty_sched:"— boş —",
  n_tasks:"görev", n_open:"bekleyen", n_over:"geciken", streak_days:"gün",
  sched_slots:"ders dilimi", sched_none:"Henüz program yok",
  overdue:"Gecikti!", done_tip:"Tamamla / geri al", postpone_tip:"Yarına ertele", dup_tip:"Kopyala", del_tip:"Sil",
  days_ago:"gün önce", days_left:"gün kaldı", today_ex:"BUGÜN!",
  focus_sessions:"odak oturumu",
  toast_required:"Ders ve konu zorunlu!", toast_cat_added:"Kategori eklendi ✅", toast_cat_del:"Kategori silindi",
  toast_task_added:"Görev eklendi 🎉", toast_task_done:"Harika, bir görev bitti! 🎉", toast_task_del:"Görev silindi",
  toast_postpone:"Yarına ertelendi ⏭", toast_dup:"Görev kopyalandı ⧉",
  toast_clean_none:"Temizlenecek tamamlanmış görev yok", toast_clean_n:" görev temizlendi 🧹",
  toast_csv:"CSV indirildi ⤓", toast_sched_added:"Programa eklendi ✅", toast_sched_req:"Ders adı ve başlangıç saati gerekli",
  toast_exam_added:"Sınav eklendi 🎓", toast_exam_req:"Sınav adı ve tarihi gerekli",
  toast_goal_saved:"Hedef güncellendi 🎯", toast_goal_invalid:"Geçerli bir hedef gir (1-200)",
  toast_backup:"Yedek indirildi 💾", toast_restore:"Yedek geri yüklendi ✅", toast_restore_err:"Geçersiz yedek dosyası!",
  toast_wipe:"Tüm veriler silindi", toast_summary:"Özet hazır 🔔",
  confirm_del_task:"Bu görev silinsin mi?", confirm_clear:" tamamlanmış görev silinsin mi?",
  confirm_wipe:"TÜM veriler silinsin mi? Geri alınamaz!",
  goal_text:"Bu hafta {d}/{tgt} görev tamamladın (%{p})", goal_reached:" 🏆 Hedef tuttu!",
  insight_yes:"💡 En çok \"{top}\" çalışmışsın ({n} görev). Dengeli ilerlemek için diğer derslere de zaman ayır.",
  insight_no:"💡 Henüz veri yok — ilk görevini ekle, raporlar burada canlansın.",
  best_day:"📈 En verimli günün: {day} ({n} görev).",
  focus_stats:"Bu cihazda: {s} oturum • {m} dk odak",
  side_sessions:"{s} odak oturumu",
  notif_title:"StudyFlow — Gün özeti", notif_empty:"Bekleyen iş yok, harikasın! 🎉",
  notif_some:" bekleyen işin var: ", notif_more:"daha",
  timer_done:"⏰ {m} dk odak tamamlandı! Toplam {t} dk 🎉",
  doc_title:"StudyFlow — Ders Çalışma Planlayıcısı"
},
en: {
  logo_sub:"Study Planner", nav_dashboard:"Dashboard", nav_tasks:"Tasks", nav_program:"Schedule",
  nav_calendar:"Calendar", nav_reports:"Reports", side_streak_t:"🔥 Study streak",
  side_streak_h:"Finish at least 1 task a day to grow the streak.", side_focus_t:"⏱ Focus score",
  export_backup:"⤓ Backup", new_task:"+ New Task",
  tab_panel_t:"Welcome 👋", tab_panel_s:"Take a quick look at today's plan.",
  tab_gorevler_t:"Tasks ✓", tab_gorevler_s:"Manage all your study tasks.",
  tab_program_t:"Schedule ◫", tab_program_s:"Build your weekly routine.",
  tab_takvim_t:"Calendar 📅", tab_takvim_s:"Month overview.",
  tab_istatistik_t:"Reports 📊", tab_istatistik_s:"Analyze your progress.",
  kpi_today:"Today's tasks", kpi_open:"Pending", kpi_open_h:"Waiting to be done",
  kpi_focus:"Weekly focus", kpi_focus_h:"Completed task time", kpi_rate:"Completion",
  today_flow:"📌 Today's flow", view_all:"All →", remind_btn:"🔔 Notify day summary",
  exam_t:"🎓 Exam countdown", exam_name_ph:"Exam name (e.g. Math Final)", add:"Add", add_ex:"+ Add",
  focus_t:"🍅 Focus", timer_start:"Start", timer_pause:"Pause", timer_reset:"Reset",
  goal_t:"🎯 Weekly goal", goal_desc:"Number of tasks you aim to finish this week.",
  save:"Save", upcoming_t:"⏭ Upcoming (3 days)", goto_calendar:"Calendar →",
  search_ph:"🔍 Search lessons or topics...", f_all:"All", f_open:"Pending", f_done:"Done", f_over:"Overdue",
  all_cats:"All categories", sort_date:"By date", sort_prio:"By priority", sort_lesson:"By lesson",
  clear_done:"🧹 Clear completed", csv_btn:"⤓ Download CSV",
  cat_t:"🏷️ Categories", new_cat_ph:"New category name (e.g. Science)",
  sched_t:"🗓️ Weekly Schedule", s_ders_ph:"Lesson (e.g. Physics)", cal_today:"Today",
  rep_total:"Total tasks", rep_rate:"Completion", rep_time:"Planned time",
  last7:"📊 Last 7 days", last7_h:"Completed task count", by_lesson:"📚 By lesson",
  data_t:"⚠️ Data management", data_desc:"Data is stored in your browser (localStorage). Back up regularly.",
  json_btn:"⤓ Download JSON", import_btn:"⤒ Import", wipe_btn:"Delete all",
  foot:"StudyFlow • your data stays on your device 💾",
  modal_t:"➕ New study task", f_lesson:"Lesson *", f_cat:"Category", f_topic:"Topic / details *",
  f_note_l:"Note (optional)", f_date:"Date", f_time:"Time", f_dur:"Duration (min)", f_prio:"Priority",
  cancel:"Cancel", f_ders_ph:"e.g. Math", f_konu_ph:"e.g. Derivatives — solve 2 tests",
  f_note_ph:"e.g. Pages 40-55, review formulas",
  prio_low:"▫ Low", prio_med:"◼ Medium", prio_high:"⬛ High",
  theme_dark:"🌙 Dark mode", theme_light:"☀️ Light mode",
  min_unit:"min", today_progress:"Today's progress", today_none:"No tasks scheduled today",
  empty_tasks:"No tasks found — add one from the top right 👆",
  empty_today:"🎉 Nothing pending today!", empty_upcoming:"No tasks in the next 3 days.",
  empty_cal:"No tasks on this day.", empty_exam:"No exams yet — add your first above. 🎓",
  empty_cats:"No categories yet.", empty_sched:"— empty —",
  n_tasks:"tasks", n_open:"pending", n_over:"overdue", streak_days:"days",
  sched_slots:"slots", sched_none:"No schedule yet",
  overdue:"Overdue!", done_tip:"Complete / undo", postpone_tip:"Postpone to tomorrow", dup_tip:"Duplicate", del_tip:"Delete",
  days_ago:"days ago", days_left:"days left", today_ex:"TODAY!",
  focus_sessions:"focus sessions",
  toast_required:"Lesson and topic are required!", toast_cat_added:"Category added ✅", toast_cat_del:"Category deleted",
  toast_task_added:"Task added 🎉", toast_task_done:"Great, one task done! 🎉", toast_task_del:"Task deleted",
  toast_postpone:"Postponed to tomorrow ⏭", toast_dup:"Task duplicated ⧉",
  toast_clean_none:"No completed tasks to clear", toast_clean_n:" tasks cleared 🧹",
  toast_csv:"CSV downloaded ⤓", toast_sched_added:"Added to schedule ✅", toast_sched_req:"Lesson name and start time required",
  toast_exam_added:"Exam added 🎓", toast_exam_req:"Exam name and date required",
  toast_goal_saved:"Goal updated 🎯", toast_goal_invalid:"Enter a valid goal (1-200)",
  toast_backup:"Backup downloaded 💾", toast_restore:"Backup restored ✅", toast_restore_err:"Invalid backup file!",
  toast_wipe:"All data deleted", toast_summary:"Summary ready 🔔",
  confirm_del_task:"Delete this task?", confirm_clear:" completed tasks will be deleted. Continue?",
  confirm_wipe:"Delete ALL data? This cannot be undone!",
  goal_text:"This week: {d}/{tgt} tasks done ({p}%)", goal_reached:" 🏆 Goal reached!",
  insight_yes:"💡 You studied \"{top}\" the most ({n} tasks). Make time for other lessons too.",
  insight_no:"💡 No data yet — add your first task and reports will come alive.",
  best_day:"📈 Your most productive day: {day} ({n} tasks).",
  focus_stats:"On this device: {s} sessions • {m} min focus",
  side_sessions:"{s} focus sessions",
  notif_title:"StudyFlow — Day summary", notif_empty:"Nothing pending, great job! 🎉",
  notif_some:" pending tasks: ", notif_more:"more",
  timer_done:"⏰ {m} min focus done! Total {t} min 🎉",
  doc_title:"StudyFlow — Study Planner"
}};
const DAYS = {
  tr: ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"],
  en: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
};
const DAY_SHORT = {
  tr: ["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"],
  en: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
};
const QUOTES = {
  tr: ["Başarı, her gün tekrarlanan küçük çabaların toplamıdır.","Bugün ektiğin her soru, yarınki netindir.",
    "Odaklan: bir konu, bir masa, bir hedef.","Erteleme; 25 dakika başlat, gerisi gelir.",
    "Düzenli tekrar, zekâdan daha güçlüdür.","Küçük ilerleme, hiç ilerlememekten büyüktür.",
    "Plan yapan değil, plana sadık kalan kazanır."],
  en: ["Success is the sum of small efforts repeated every day.","Every question you solve today is a point tomorrow.",
    "Focus: one topic, one desk, one goal.","Don't postpone; start 25 minutes and the rest follows.",
    "Regular review beats raw talent.","Small progress beats no progress.",
    "Winners aren't planners — they're plan-followers."]
};
const t = k => (T[lang] && T[lang][k] !== undefined) ? T[lang][k] : (T.tr[k] !== undefined ? T.tr[k] : k);
const fill = (s, o) => String(s).replace(/\{(\w+)\}/g, (_, k) => o[k]);

// ---------- helpers ----------
const uid = () => Math.random().toString(36).slice(2, 10);
const todayStr = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
const fmtDate = s => { if(!s) return "-"; const [y,m,d] = s.split("-"); return lang === "tr" ? `${d}.${m}.${y}` : `${m}/${d}/${y}`; };
const esc = s => String(s ?? "").replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
const PRIO = () => ({ dusuk: t("prio_low"), orta: t("prio_med"), yuksek: t("prio_high") });
const PRIO_W = { dusuk:1, orta:2, yuksek:3 };

function shade(name){
  let h = 0; for(const c of String(name)) h = (h * 31 + c.charCodeAt(0)) % 997;
  return SHADES[h % SHADES.length];
}
function initials(name){ return String(name || "?").trim().split(/\s+/).map(w => w[0]).join("").slice(0, 2).toUpperCase(); }

const defaultData = () => ({
  tasks: lang === "tr" ? [
    { id: uid(), ders:"Matematik", konu:"Türev — 2 test çöz", note:"", tarih: todayStr(), saat:"18:00", sure:60, oncelik:"yuksek", kategori:"Sayısal", tamamlandi:false, createdAt:Date.now() },
    { id: uid(), ders:"Türkçe", konu:"Paragraf — 20 soru", note:"", tarih: todayStr(), saat:"20:00", sure:40, oncelik:"orta", kategori:"Sözel", tamamlandi:false, createdAt:Date.now() }
  ] : [
    { id: uid(), ders:"Math", konu:"Derivatives — solve 2 tests", note:"", tarih: todayStr(), saat:"18:00", sure:60, oncelik:"yuksek", kategori:"Science", tamamlandi:false, createdAt:Date.now() },
    { id: uid(), ders:"English", konu:"Reading — 20 questions", note:"", tarih: todayStr(), saat:"20:00", sure:40, oncelik:"orta", kategori:"Language", tamamlandi:false, createdAt:Date.now() }
  ],
  categories: lang === "tr" ? ["Sayısal","Sözel","Dil"] : ["Science","Language","Personal"],
  schedule: Object.fromEntries(GUNLER.map(g => [g, []])),
  exams: [], goal: { target: 10 }, focus: { sessions: 0, minutes: 0 }
});

let db;
try { db = JSON.parse(localStorage.getItem(KEY)) || defaultData(); }
catch { db = defaultData(); }
if(!db.tasks) db = defaultData();
if(!Array.isArray(db.categories)) db.categories = [];
if(!db.schedule) db.schedule = {};
GUNLER.forEach(g => { if(!Array.isArray(db.schedule[g])) db.schedule[g] = []; });
if(!Array.isArray(db.exams)) db.exams = [];
if(!db.goal || typeof db.goal.target !== "number") db.goal = { target: 10 };
if(!db.focus) db.focus = { sessions: 0, minutes: 0 };
db.tasks.forEach(x => { if(x.note === undefined) x.note = ""; });
const save = () => localStorage.setItem(KEY, JSON.stringify(db));

// ---------- toast ----------
function toast(msg, type = ""){
  const box = document.getElementById("toasts");
  const el = document.createElement("div");
  el.className = "toast " + type;
  el.textContent = msg;
  box.appendChild(el);
  setTimeout(() => el.remove(), 2600);
}

// ---------- theme ----------
function applyTheme(){
  const th = localStorage.getItem(THEME_KEY) || "light";
  document.documentElement.dataset.theme = th;
  document.getElementById("theme-btn").textContent = th === "dark" ? t("theme_light") : t("theme_dark");
}
document.getElementById("theme-btn").onclick = () => {
  const cur = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem(THEME_KEY, cur); applyTheme();
};

// ---------- i18n ----------
function applyI18n(){
  document.documentElement.lang = lang;
  document.title = t("doc_title");
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  document.querySelectorAll(".lang-seg .seg-btn").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
  // schedule day select (values stay Turkish keys)
  const sg = document.getElementById("s-gun");
  const cur = sg.value || GUNLER[0];
  sg.innerHTML = GUNLER.map((g,i) => `<option value="${g}">${DAYS[lang][i]}</option>`).join("");
  if(GUNLER.includes(cur)) sg.value = cur;
  // calendar weekday header
  document.getElementById("cal-head").innerHTML = DAY_SHORT[lang].map(d => `<span>${d}</span>`).join("");
  document.getElementById("today-pill").textContent =
    new Date().toLocaleDateString(LOC(), { weekday:"long", day:"numeric", month:"long" });
  document.getElementById("quote").textContent = "💡 " + QUOTES[lang][new Date().getDate() % QUOTES[lang].length];
  const active = document.querySelector(".nav-item.active");
  if(active){ const tab = active.dataset.tab;
    document.getElementById("page-title").textContent = t("tab_" + tab + "_t");
    document.getElementById("page-sub").textContent = t("tab_" + tab + "_s");
  }
  document.getElementById("timer-start").textContent = timerId ? t("timer_pause") : t("timer_start");
  applyTheme();
}
document.querySelectorAll(".lang-seg .seg-btn").forEach(b => b.onclick = () => {
  if(lang === b.dataset.lang) return;
  lang = b.dataset.lang;
  localStorage.setItem(LANG_KEY, lang);
  applyI18n(); renderAll(); renderCalendar(); renderStats();
  toast(lang === "tr" ? "Türkçe'ye geçildi 🇹🇷" : "Switched to English 🇬🇧", "ok");
});

// ---------- navigation ----------
document.querySelectorAll(".nav-item").forEach(btn => btn.onclick = () => goto(btn.dataset.tab));
document.querySelectorAll("[data-goto]").forEach(b => b.onclick = () => goto(b.dataset.goto));
function goto(tab){
  document.querySelectorAll(".nav-item").forEach(b => b.classList.toggle("active", b.dataset.tab === tab));
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("tab-" + tab).classList.add("active");
  document.getElementById("page-title").textContent = t("tab_" + tab + "_t");
  document.getElementById("page-sub").textContent = t("tab_" + tab + "_s");
  if(tab === "takvim") renderCalendar();
  if(tab === "istatistik") renderStats();
  if(tab === "panel") renderPanel();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ---------- modal ----------
const back = document.getElementById("modal-back");
document.getElementById("open-modal").onclick = () => { back.classList.add("open"); setTimeout(() => document.getElementById("f-ders").focus(), 50); };
const closeModal = () => back.classList.remove("open");
document.getElementById("close-modal").onclick = closeModal;
document.getElementById("cancel-modal").onclick = closeModal;
back.addEventListener("click", e => { if(e.target === back) closeModal(); });
document.addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });

// ---------- categories ----------
function renderCats(){
  document.getElementById("f-kategori").innerHTML = db.categories.map(c => `<option>${esc(c)}</option>`).join("") || `<option>Genel</option>`;
  const sel = document.getElementById("filter-kategori");
  const cur = sel.value || "all";
  sel.innerHTML = `<option value="all">${esc(t("all_cats"))}</option>` + db.categories.map(c => `<option>${esc(c)}</option>`).join("");
  if([...sel.options].some(o => o.value === cur)) sel.value = cur;
  document.getElementById("cat-list").innerHTML = db.categories.map(c =>
    `<span class="chip">${esc(c)} <button data-del-cat="${esc(c)}" title="✕">✕</button></span>`).join("")
    || `<span class="muted small">${t("empty_cats")}</span>`;
  document.querySelectorAll("[data-del-cat]").forEach(b => b.onclick = () => {
    db.categories = db.categories.filter(x => x !== b.dataset.delCat);
    save(); renderCats(); renderAll(); toast(t("toast_cat_del"));
  });
}
document.getElementById("add-cat").onclick = () => {
  const v = document.getElementById("new-cat").value.trim();
  if(!v) return;
  if(!db.categories.includes(v)) db.categories.push(v);
  document.getElementById("new-cat").value = "";
  save(); renderCats(); toast(t("toast_cat_added"), "ok");
};

// ---------- task form ----------
document.getElementById("task-form").onsubmit = e => {
  e.preventDefault();
  const ders = document.getElementById("f-ders").value.trim();
  const konu = document.getElementById("f-konu").value.trim();
  if(!ders || !konu) return toast(t("toast_required"), "err");
  db.tasks.push({
    id: uid(), ders, konu,
    note: document.getElementById("f-note").value.trim(),
    tarih: document.getElementById("f-tarih").value || todayStr(),
    saat: document.getElementById("f-saat").value || "",
    sure: parseInt(document.getElementById("f-sure").value || "0", 10) || 0,
    oncelik: document.getElementById("f-oncelik").value,
    kategori: document.getElementById("f-kategori").value || db.categories[0] || "Genel",
    tamamlandi: false, createdAt: Date.now()
  });
  save(); e.target.reset(); document.getElementById("f-tarih").value = todayStr();
  closeModal(); renderAll(); toast(t("toast_task_added"), "ok");
};

// ---------- task cards ----------
function taskCard(x){
  const over = !x.tamamlandi && x.tarih < todayStr();
  return `<div class="task ${x.tamamlandi ? "done" : ""}">
    <div class="task-left">
      <button class="check ${x.tamamlandi ? "on" : ""}" data-toggle="${x.id}" title="${t("done_tip")}">${x.tamamlandi ? "✓" : ""}</button>
      <div class="avatar" style="background:${shade(x.ders)}">${esc(initials(x.ders))}</div>
      <div>
        <div class="t-title">${esc(x.ders)} — ${esc(x.konu)}</div>
        ${x.note ? `<div class="t-note">📝 ${esc(x.note)}</div>` : ""}
        <div class="t-meta">
          <span class="pill">${esc(x.kategori || "")}</span>
          <span class="badge ${x.oncelik}">${PRIO()[x.oncelik]}</span>
          <span>📅 ${fmtDate(x.tarih)}${x.saat ? " • " + esc(x.saat) : ""}</span>
          ${x.sure ? `<span>⏱ ${x.sure} ${t("min_unit")}</span>` : ""}
          ${over ? `<span class="badge over">${t("overdue")}</span>` : ""}
        </div>
      </div>
    </div>
    <div class="t-actions">
      <button class="icon-btn" data-postpone="${x.id}" title="${t("postpone_tip")}">⏭</button>
      <button class="icon-btn" data-dup="${x.id}" title="${t("dup_tip")}">⧉</button>
      <button class="icon-btn" data-del="${x.id}" title="${t("del_tip")}">🗑</button>
    </div>
  </div>`;
}
function shiftDate(ds, days){
  const d = new Date(ds + "T12:00"); d.setDate(d.getDate() + days);
  return todayStr(d);
}
function bindTaskButtons(root){
  root.querySelectorAll("[data-toggle]").forEach(b => b.onclick = () => {
    const x = db.tasks.find(v => v.id === b.dataset.toggle);
    if(x){ x.tamamlandi = !x.tamamlandi; save(); renderAll();
      if(x.tamamlandi) toast(t("toast_task_done"), "ok"); }
  });
  root.querySelectorAll("[data-del]").forEach(b => b.onclick = () => {
    if(!confirm(t("confirm_del_task"))) return;
    db.tasks = db.tasks.filter(v => v.id !== b.dataset.del);
    save(); renderAll(); toast(t("toast_task_del"));
  });
  root.querySelectorAll("[data-postpone]").forEach(b => b.onclick = () => {
    const x = db.tasks.find(v => v.id === b.dataset.postpone);
    if(x){ x.tarih = shiftDate(x.tarih, 1); save(); renderAll(); toast(t("toast_postpone"), "ok"); }
  });
  root.querySelectorAll("[data-dup]").forEach(b => b.onclick = () => {
    const x = db.tasks.find(v => v.id === b.dataset.dup);
    if(x){ db.tasks.push({ ...x, id: uid(), tamamlandi: false, createdAt: Date.now() }); save(); renderAll(); toast(t("toast_dup"), "ok"); }
  });
}
const emptyState = msg => `<div class="empty"><div class="big">🎈</div><p>${msg}</p></div>`;

// ---------- tasks page ----------
function renderTasks(){
  const durum = document.getElementById("filter-durum").value;
  const kat = document.getElementById("filter-kategori").value;
  const q = document.getElementById("search").value.toLowerCase();
  const sort = document.getElementById("sort-by").value;
  let list = [...db.tasks];
  if(durum === "open") list = list.filter(x => !x.tamamlandi);
  if(durum === "done") list = list.filter(x => x.tamamlandi);
  if(durum === "over") list = list.filter(x => !x.tamamlandi && x.tarih < todayStr());
  if(kat !== "all") list = list.filter(x => x.kategori === kat);
  if(q) list = list.filter(x => (x.ders + " " + x.konu + " " + (x.note || "")).toLowerCase().includes(q));
  if(sort === "date") list.sort((a,b) => (a.tarih + a.saat).localeCompare(b.tarih + b.saat));
  if(sort === "prio") list.sort((a,b) => (PRIO_W[b.oncelik] || 0) - (PRIO_W[a.oncelik] || 0));
  if(sort === "lesson") list.sort((a,b) => a.ders.localeCompare(b.ders, LOC()));
  const el = document.getElementById("task-list");
  el.innerHTML = list.map(taskCard).join("") || emptyState(t("empty_tasks"));
  bindTaskButtons(el);
  const open = db.tasks.filter(x => !x.tamamlandi).length;
  const over = db.tasks.filter(x => !x.tamamlandi && x.tarih < todayStr()).length;
  document.getElementById("bulk-info").textContent =
    `${db.tasks.length} ${t("n_tasks")} • ${open} ${t("n_open")}${over ? ` • ${over} ${t("n_over")}` : ""}`;
  const nc = document.getElementById("nav-count");
  nc.textContent = open || ""; nc.style.display = open ? "" : "none";
}
["filter-durum","filter-kategori","sort-by"].forEach(id => document.getElementById(id).onchange = renderTasks);
document.getElementById("search").oninput = renderTasks;
document.getElementById("clear-done").onclick = () => {
  const n = db.tasks.filter(x => x.tamamlandi).length;
  if(!n) return toast(t("toast_clean_none"));
  if(!confirm(n + t("confirm_clear"))) return;
  db.tasks = db.tasks.filter(x => !x.tamamlandi);
  save(); renderAll(); toast(n + t("toast_clean_n"), "ok");
};
document.getElementById("csv-btn").onclick = () => {
  const head = lang === "tr"
    ? ["Ders","Konu","Not","Tarih","Saat","SureDk","Oncelik","Kategori","Durum"]
    : ["Lesson","Topic","Note","Date","Time","Minutes","Priority","Category","Status"];
  const rows = [head];
  db.tasks.forEach(x => rows.push([x.ders, x.konu, x.note || "", x.tarih, x.saat || "", x.sure || 0, x.oncelik, x.kategori || "", x.tamamlandi ? "1" : "0"]));
  const csv = rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(";")).join("\r\n");
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "studyflow-" + todayStr() + ".csv";
  a.click(); URL.revokeObjectURL(a.href);
  toast(t("toast_csv"), "ok");
};

// ---------- dashboard ----------
function renderPanel(){
  const bugun = todayStr();
  const todays = db.tasks.filter(x => x.tarih === bugun);
  const doneToday = todays.filter(x => x.tamamlandi).length;
  const open = db.tasks.filter(x => !x.tamamlandi).length;
  const weekAgo = new Date(); weekAgo.setDate(weekAgo.getDate() - 7);
  const mins = db.tasks.filter(x => x.tamamlandi && x.tarih >= todayStr(weekAgo)).reduce((s,x) => s + (x.sure || 0), 0);
  const total = db.tasks.length, done = db.tasks.filter(x => x.tamamlandi).length;
  const oran = total ? Math.round(done / total * 100) : 0;

  document.getElementById("st-bugun").textContent = `${doneToday}/${todays.length}`;
  document.getElementById("st-bugun-hint").textContent = todays.length ? t("today_progress") : t("today_none");
  document.getElementById("st-bekleyen").textContent = open;
  document.getElementById("st-sure").textContent = mins + " " + t("min_unit");
  document.getElementById("st-oran").textContent = oran + "%";
  document.getElementById("st-bar").style.width = oran + "%";

  const el = document.getElementById("today-list");
  const relevant = db.tasks.filter(x => x.tarih <= bugun && !x.tamamlandi)
    .sort((a,b) => (a.tarih + a.saat).localeCompare(b.tarih + b.saat));
  el.innerHTML = relevant.map(taskCard).join("") || emptyState(t("empty_today"));
  bindTaskButtons(el);

  const up = document.getElementById("upcoming-list");
  const d2 = new Date(); d2.setDate(d2.getDate() + 3);
  const coming = db.tasks.filter(x => !x.tamamlandi && x.tarih > bugun && x.tarih <= todayStr(d2))
    .sort((a,b) => (a.tarih + a.saat).localeCompare(b.tarih + b.saat)).slice(0, 5);
  up.innerHTML = coming.map(x =>
    `<div class="mini"><div class="avatar" style="background:${shade(x.ders)};width:32px;height:32px;font-size:12px">${esc(initials(x.ders))}</div>
     <div><b>${esc(x.ders)}</b> <span class="muted">• ${esc(x.konu)}</span><br><span class="muted small">📅 ${fmtDate(x.tarih)}${x.saat ? " • " + esc(x.saat) : ""}</span></div></div>`
  ).join("") || `<p class="muted small">${t("empty_upcoming")}</p>`;

  let streak = 0; const cur = new Date();
  for(;;){
    const ds = todayStr(cur);
    if(db.tasks.some(x => x.tarih === ds && x.tamamlandi)) { streak++; cur.setDate(cur.getDate() - 1); }
    else break;
    if(streak > 365) break;
  }
  document.getElementById("streak").textContent = streak + " " + t("streak_days");

  renderGoal();
  renderExams();
  renderFocus();
}

// ---------- weekly goal ----------
function weekRange(){
  const now = new Date();
  const dow = (now.getDay() + 6) % 7;
  const mon = new Date(now); mon.setDate(now.getDate() - dow);
  const sun = new Date(mon); sun.setDate(mon.getDate() + 6);
  return [todayStr(mon), todayStr(sun)];
}
function renderGoal(){
  document.getElementById("goal-input").value = db.goal.target;
  const [mon, sun] = weekRange();
  const done = db.tasks.filter(x => x.tamamlandi && x.tarih >= mon && x.tarih <= sun).length;
  const pct = Math.min(100, Math.round(done / Math.max(1, db.goal.target) * 100));
  document.getElementById("goal-fill").style.width = pct + "%";
  document.getElementById("goal-text").textContent =
    fill(t("goal_text"), { d: done, tgt: db.goal.target, p: pct }) + (done >= db.goal.target ? t("goal_reached") : "");
}
document.getElementById("goal-save").onclick = () => {
  const v = parseInt(document.getElementById("goal-input").value, 10);
  if(!v || v < 1) return toast(t("toast_goal_invalid"), "err");
  db.goal.target = Math.min(200, v);
  save(); renderGoal(); toast(t("toast_goal_saved"), "ok");
};

// ---------- exams ----------
document.getElementById("exam-add").onclick = () => {
  const ad = document.getElementById("exam-name").value.trim();
  const tarih = document.getElementById("exam-date").value;
  if(!ad || !tarih) return toast(t("toast_exam_req"), "err");
  db.exams.push({ id: uid(), ad, tarih });
  db.exams.sort((a,b) => a.tarih.localeCompare(b.tarih));
  document.getElementById("exam-name").value = "";
  document.getElementById("exam-date").value = "";
  save(); renderExams(); toast(t("toast_exam_added"), "ok");
};
function daysLeft(ds){
  const a = new Date(todayStr() + "T12:00"), b = new Date(ds + "T12:00");
  return Math.round((b - a) / 86400000);
}
function renderExams(){
  const el = document.getElementById("exam-list");
  el.innerHTML = db.exams.map(x => {
    const k = daysLeft(x.tarih);
    const label = k < 0 ? `${-k} ${t("days_ago")}` : k === 0 ? t("today_ex") : `${k} ${t("days_left")}`;
    return `<div class="exam"><div><div class="exam-name">${esc(x.ad)}</div>
      <div class="muted small">📅 ${fmtDate(x.tarih)}</div></div>
      <div style="display:flex;gap:8px;align-items:center">
        <span class="exam-count${k >= 0 && k <= 7 ? " soon" : ""}">${label}</span>
        <button class="icon-btn" data-exdel="${x.id}" title="✕">✕</button>
      </div></div>`;
  }).join("") || `<p class="muted small">${t("empty_exam")}</p>`;
  el.querySelectorAll("[data-exdel]").forEach(b => b.onclick = () => {
    db.exams = db.exams.filter(x => x.id !== b.dataset.exdel);
    save(); renderExams();
  });
}

// ---------- reminder ----------
document.getElementById("remind-btn").onclick = () => {
  const bugun = todayStr();
  const list = db.tasks.filter(x => x.tarih <= bugun && !x.tamamlandi);
  const text = list.length
    ? list.length + t("notif_some") + list.slice(0, 3).map(x => `${x.ders} (${x.konu})`).join(", ") + (list.length > 3 ? ` +${list.length - 3} ${t("notif_more")}` : "")
    : t("notif_empty");
  if("Notification" in window && Notification.permission === "granted"){
    new Notification(t("notif_title"), { body: text });
  } else if("Notification" in window && Notification.permission !== "denied"){
    Notification.requestPermission().then(p => {
      if(p === "granted") new Notification(t("notif_title"), { body: text });
      else toast(text);
    });
  } else toast(text);
  toast(t("toast_summary"), "ok");
};

// ---------- schedule ----------
document.getElementById("s-add").onclick = () => {
  const gun = document.getElementById("s-gun").value;
  const ders = document.getElementById("s-ders").value.trim();
  const bas = document.getElementById("s-bas").value;
  const bit = document.getElementById("s-bit").value;
  if(!ders || !bas) return toast(t("toast_sched_req"), "err");
  db.schedule[gun].push({ ders, bas, bit });
  db.schedule[gun].sort((a,b) => a.bas.localeCompare(b.bas));
  document.getElementById("s-ders").value = "";
  save(); renderSchedule(); toast(t("toast_sched_added"), "ok");
};
function renderSchedule(){
  const total = GUNLER.reduce((s,g) => s + (db.schedule[g] || []).length, 0);
  document.getElementById("sched-total").textContent = total ? `${total} ${t("sched_slots")}` : t("sched_none");
  document.getElementById("schedule").innerHTML = GUNLER.map((g,i) => {
    const items = (db.schedule[g] || []).map((s,j) =>
      `<div class="slot"><span><b>${esc(s.bas)}${s.bit ? "–" + esc(s.bit) : ""}</b> · ${esc(s.ders)}</span>
       <button data-sdel="${g}::${j}" title="✕">✕</button></div>`).join("")
      || `<p class="muted small">${t("empty_sched")}</p>`;
    return `<div class="day-col"><h4>${DAYS[lang][i]} <span class="day-count">${(db.schedule[g] || []).length}</span></h4>${items}</div>`;
  }).join("");
  document.querySelectorAll("[data-sdel]").forEach(b => b.onclick = () => {
    const sep = b.dataset.sdel.lastIndexOf("::");
    const g = b.dataset.sdel.slice(0, sep), j = parseInt(b.dataset.sdel.slice(sep + 2), 10);
    db.schedule[g].splice(j, 1); save(); renderSchedule();
  });
}

// ---------- calendar ----------
let calCursor = new Date(); calCursor.setDate(1);
let selectedDay = todayStr();
function renderCalendar(){
  const y = calCursor.getFullYear(), m = calCursor.getMonth();
  document.getElementById("cal-title").textContent =
    calCursor.toLocaleDateString(LOC(), { month:"long", year:"numeric" });
  const startOffset = (new Date(y, m, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const daysPrev = new Date(y, m, 0).getDate();
  let html = "";
  for(let i = startOffset - 1; i >= 0; i--) html += `<div class="cell dim"><div class="d">${daysPrev - i}</div></div>`;
  for(let d = 1; d <= daysInMonth; d++){
    const ds = `${y}-${String(m+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
    const ts = db.tasks.filter(x => x.tarih === ds);
    html += `<div class="cell${ds === todayStr() ? " today" : ""}${ds === selectedDay ? " selected" : ""}" data-day="${ds}">
      <div class="d">${d}</div>` +
      ts.slice(0,3).map(x => `<span class="dot${x.tamamlandi ? " done" : ""}">${esc(x.ders)}</span>`).join("") +
      (ts.length > 3 ? `<span class="dot">+${ts.length - 3}</span>` : "") + `</div>`;
  }
  document.getElementById("cal-grid").innerHTML = html;
  document.querySelectorAll("#cal-grid .cell[data-day]").forEach(c => c.onclick = () => { selectedDay = c.dataset.day; renderCalendar(); });
  document.getElementById("cal-detail-title").textContent = fmtDate(selectedDay);
  const det = document.getElementById("cal-detail");
  det.innerHTML = db.tasks.filter(x => x.tarih === selectedDay).map(taskCard).join("") || emptyState(t("empty_cal"));
  bindTaskButtons(det);
}
document.getElementById("cal-prev").onclick = () => { calCursor.setMonth(calCursor.getMonth() - 1); renderCalendar(); };
document.getElementById("cal-next").onclick = () => { calCursor.setMonth(calCursor.getMonth() + 1); renderCalendar(); };
document.getElementById("cal-today").onclick = () => { calCursor = new Date(); calCursor.setDate(1); selectedDay = todayStr(); renderCalendar(); };

// ---------- stats ----------
function renderStats(){
  const total = db.tasks.length;
  const done = db.tasks.filter(x => x.tamamlandi).length;
  document.getElementById("is-toplam").textContent = total;
  document.getElementById("is-tamam").textContent = total ? Math.round(done / total * 100) + "%" : "0%";
  document.getElementById("is-dakika").textContent = db.tasks.reduce((s,x) => s + (x.sure || 0), 0) + " " + t("min_unit");

  const days = [];
  for(let i = 6; i >= 0; i--){ const d = new Date(); d.setDate(d.getDate() - i); days.push(todayStr(d)); }
  const counts = days.map(ds => db.tasks.filter(x => x.tarih === ds && x.tamamlandi).length);
  const mx = Math.max(1, ...counts);
  document.getElementById("chart").innerHTML = days.map((ds,i) => {
    const h = Math.round(counts[i] / mx * 120) + 8;
    const gun = new Date(ds + "T12:00").toLocaleDateString(LOC(), { weekday:"short" });
    return `<div class="bar"><b>${counts[i]}</b><div class="bar-fill" style="height:${h}px;opacity:${0.45 + 0.55 * (counts[i] / mx)}"></div><span>${gun}</span></div>`;
  }).join("");

  const map = {};
  db.tasks.forEach(x => { map[x.ders] = (map[x.ders] || 0) + 1; });
  const entries = Object.entries(map).sort((a,b) => b[1] - a[1]).slice(0, 8);
  const m2 = Math.max(1, ...entries.map(e => e[1]));
  document.getElementById("by-lesson").innerHTML = entries.map(([k,v]) =>
    `<div class="lesson-row"><div class="avatar" style="background:${shade(k)};width:32px;height:32px;font-size:12px">${esc(initials(k))}</div>
     <div class="name">${esc(k)}</div><div class="track"><div class="fill" style="width:${v / m2 * 100}%"></div></div><b>${v}</b></div>`
  ).join("") || `<p class="muted small">—</p>`;

  const top = entries[0];
  document.getElementById("insight").textContent = top
    ? fill(t("insight_yes"), { top: top[0], n: top[1] })
    : t("insight_no");
  const bestIdx = counts.indexOf(Math.max(...counts));
  document.getElementById("best-day").textContent = fill(t("best_day"), {
    day: new Date(days[bestIdx] + "T12:00").toLocaleDateString(LOC(), { weekday:"long" }), n: counts[bestIdx]
  });
}
document.getElementById("wipe").onclick = () => {
  if(!confirm(t("confirm_wipe"))) return;
  localStorage.removeItem(KEY); db = defaultData(); save(); renderAll(); toast(t("toast_wipe"));
};

// ---------- backup ----------
function downloadBackup(){
  const blob = new Blob([JSON.stringify(db, null, 2)], { type:"application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "studyflow-" + todayStr() + ".json";
  a.click(); URL.revokeObjectURL(a.href);
  toast(t("toast_backup"), "ok");
}
document.getElementById("export-btn").onclick = downloadBackup;
document.getElementById("export-btn-2").onclick = downloadBackup;
document.getElementById("import-file").onchange = e => {
  const f = e.target.files[0]; if(!f) return;
  const r = new FileReader();
  r.onload = () => {
    try {
      const data = JSON.parse(r.result);
      if(!data.tasks) throw 0;
      db = data;
      GUNLER.forEach(g => { if(!Array.isArray(db.schedule[g])) db.schedule[g] = []; });
      if(!Array.isArray(db.exams)) db.exams = [];
      if(!db.goal) db.goal = { target: 10 };
      if(!db.focus) db.focus = { sessions: 0, minutes: 0 };
      save(); renderAll(); toast(t("toast_restore"), "ok");
    } catch { toast(t("toast_restore_err"), "err"); }
  };
  r.readAsText(f); e.target.value = "";
};

// ---------- timer + focus ----------
let totalSec = 25 * 60, timerSec = totalSec, timerId = null;
function drawTimer(){
  document.getElementById("timer-display").textContent =
    String(Math.floor(timerSec / 60)).padStart(2,"0") + ":" + String(timerSec % 60).padStart(2,"0");
}
function renderFocus(){
  document.getElementById("focus-stats").textContent = fill(t("focus_stats"), { s: db.focus.sessions, m: db.focus.minutes });
  document.getElementById("side-focus").textContent = db.focus.minutes + " " + t("min_unit");
  document.getElementById("side-sessions").textContent = fill(t("side_sessions"), { s: db.focus.sessions });
}
document.getElementById("timer-start").onclick = e => {
  if(timerId){ clearInterval(timerId); timerId = null; e.target.textContent = t("timer_start"); return; }
  e.target.textContent = t("timer_pause");
  timerId = setInterval(() => {
    timerSec--;
    if(timerSec <= 0){
      clearInterval(timerId); timerId = null;
      document.getElementById("timer-start").textContent = t("timer_start");
      const mins = Math.round(totalSec / 60);
      db.focus.sessions++; db.focus.minutes += mins; save(); renderFocus();
      timerSec = totalSec; drawTimer();
      toast(fill(t("timer_done"), { m: mins, t: db.focus.minutes }), "ok");
      return;
    }
    drawTimer();
  }, 1000);
};
document.getElementById("timer-reset").onclick = () => {
  clearInterval(timerId); timerId = null; timerSec = totalSec; drawTimer();
  document.getElementById("timer-start").textContent = t("timer_start");
};
document.querySelectorAll(".seg-btn[data-min]").forEach(b => b.onclick = () => {
  document.querySelectorAll(".seg-btn[data-min]").forEach(x => x.classList.remove("active"));
  b.classList.add("active");
  totalSec = parseInt(b.dataset.min, 10) * 60; timerSec = totalSec;
  clearInterval(timerId); timerId = null;
  document.getElementById("timer-start").textContent = t("timer_start");
  drawTimer();
});

// ---------- init ----------
function renderAll(){ renderCats(); renderTasks(); renderPanel(); renderSchedule(); }
(function init(){
  document.getElementById("f-tarih").value = todayStr();
  applyI18n(); drawTimer(); renderAll();
})();
