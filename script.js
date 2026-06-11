const STORAGE_KEY = "fatLossTrackerData";

const weeklySchedule = {
  monday: [
    { time: "08:00", title: "早餐：無糖豆漿＋茶葉蛋 2 顆＋香蕉＋蛋白粉", type: "meal" },
    { time: "09:10–12:00", title: "人工智慧倫理與治理", type: "class" },
    { time: "12:10", title: "午餐：港式燒臘，油雞或白切雞，飯半，少醬", type: "meal" },
    { time: "13:10–15:00", title: "體育", type: "class" },
    { time: "15:10–17:00", title: "電影與性別", type: "class" },
    { time: "17:30", title: "晚餐：健康餐，雞胸或魚，飯半～正常", type: "meal" },
    { time: "19:30–20:45", title: "重訓：胸、肩、三頭", type: "training" },
    { time: "21:00", title: "檢查蛋白質是否達標，不足再補蛋白粉", type: "reminder" }
  ],
  tuesday: [
    { time: "08:00", title: "早餐：無糖豆漿＋茶葉蛋 2 顆＋蛋白粉", type: "meal" },
    { time: "09:10–12:00", title: "智慧製造導論", type: "class" },
    { time: "12:10", title: "午餐：自己處理，雞胸＋地瓜或飯糰＋沙拉", type: "meal" },
    { time: "13:10–16:00", title: "統計學", type: "class" },
    { time: "16:20", title: "快走 20–30 分鐘，或累積步數", type: "cardio" },
    { time: "18:30–20:15", title: "大數據分析入門", type: "class" },
    { time: "20:30", title: "晚餐：自己處理或健康餐，半飯、肉多、菜多", type: "meal" }
  ],
  wednesday: [
    { time: "08:30", title: "早餐：無糖豆漿＋茶葉蛋 2 顆＋香蕉＋蛋白粉", type: "meal" },
    { time: "10:00–11:15", title: "重訓：腿、臀、核心", type: "training" },
    { time: "12:00", title: "午餐：豪品鐵板燒，雞肉 / 魚 / 牛肉，飯半，少油少醬", type: "meal" },
    { time: "13:10–15:00", title: "管理學", type: "class" },
    { time: "15:10–18:00", title: "數位影像處理", type: "class" },
    { time: "18:30", title: "晚餐：健康餐，雞胸或魚，飯半", type: "meal" }
  ],
  thursday: [
    { time: "09:00", title: "早餐：高蛋白優格 / 無糖豆漿＋茶葉蛋＋蛋白粉", type: "meal" },
    { time: "10:30", title: "有氧或快走 30–40 分鐘", type: "cardio" },
    { time: "12:10", title: "午餐：自己處理，雞胸＋沙拉＋地瓜", type: "meal" },
    { time: "13:10–16:00", title: "精算實務與軟體", type: "class" },
    { time: "18:00", title: "晚餐：自己處理，雞胸 / 豆腐 / 蛋＋菜＋半份澱粉", type: "meal" }
  ],
  friday: [
    { time: "08:30", title: "早餐：無糖豆漿＋茶葉蛋 2 顆＋蛋白粉", type: "meal" },
    { time: "10:10–12:00", title: "統計學實習", type: "class" },
    { time: "12:10", title: "午餐：港式燒臘，油雞或白切雞，飯半～正常，少醬", type: "meal" },
    { time: "13:10–16:00", title: "雲端大數據分析與應用", type: "class" },
    { time: "16:30", title: "訓練前：香蕉或地瓜", type: "meal" },
    { time: "18:00–19:15", title: "重訓：背、二頭、後肩", type: "training" },
    { time: "19:30", title: "晚餐：健康餐，雞胸、雞腿或魚，飯半～正常", type: "meal" }
  ],
  saturday: [
    { time: "09:30", title: "早餐：豆漿＋蛋＋香蕉＋蛋白粉", type: "meal" },
    { time: "11:00–12:15", title: "重訓：胸背混合、肩手補強", type: "training" },
    { time: "12:30", title: "午餐：優先自己處理，雞胸＋地瓜＋沙拉", type: "meal" },
    { time: "17:00", title: "走路或輕有氧 20–30 分鐘", type: "cardio" },
    { time: "18:00", title: "晚餐：健康餐或自己處理", type: "meal" }
  ],
  sunday: [
    { time: "09:00", title: "量體重、量腰圍", type: "body" },
    { time: "09:30", title: "早餐：豆漿＋蛋＋蛋白粉", type: "meal" },
    { time: "12:30", title: "午餐：自己處理", type: "meal" },
    { time: "15:00", title: "去全聯補食物", type: "reminder" },
    { time: "18:00", title: "晚餐：自己處理或健康餐", type: "meal" },
    { time: "20:00", title: "輕鬆走 20–30 分鐘", type: "cardio" }
  ]
};

const typeLabels = {
  class: "課程",
  meal: "飲食",
  training: "重訓",
  cardio: "有氧",
  reminder: "提醒",
  body: "體重"
};

const defaultSavedFoods = [
  { id: cryptoId(), category: "早餐", name: "無糖豆漿", calories: 150, protein: 15, carbs: 10, fat: 5 },
  { id: cryptoId(), category: "早餐", name: "茶葉蛋 1 顆", calories: 75, protein: 7, carbs: 1, fat: 5 },
  { id: cryptoId(), category: "早餐", name: "香蕉 1 根", calories: 100, protein: 1, carbs: 25, fat: 0 },
  { id: cryptoId(), category: "早餐", name: "地瓜 1 條", calories: 180, protein: 3, carbs: 40, fat: 0 },
  { id: cryptoId(), category: "早餐", name: "高蛋白優格", calories: 150, protein: 15, carbs: 15, fat: 3 },
  { id: cryptoId(), category: "早餐", name: "蛋白粉 1 份", calories: 120, protein: 24, carbs: 3, fat: 2 },
  { id: cryptoId(), category: "午餐", name: "自己處理雞胸＋地瓜＋沙拉", calories: 650, protein: 55, carbs: 65, fat: 15 },
  { id: cryptoId(), category: "午餐", name: "港式燒臘油雞飯半飯少醬", calories: 750, protein: 50, carbs: 75, fat: 25 },
  { id: cryptoId(), category: "午餐", name: "港式燒臘白切雞飯半飯少醬", calories: 700, protein: 50, carbs: 70, fat: 20 },
  { id: cryptoId(), category: "午餐", name: "豪品鐵板燒雞肉飯半少油", calories: 800, protein: 50, carbs: 75, fat: 30 },
  { id: cryptoId(), category: "午餐", name: "豪品鐵板燒魚肉飯半少油", calories: 750, protein: 50, carbs: 70, fat: 25 },
  { id: cryptoId(), category: "晚餐", name: "健康餐雞胸半飯", calories: 650, protein: 55, carbs: 60, fat: 15 },
  { id: cryptoId(), category: "晚餐", name: "健康餐雞腿半飯", calories: 750, protein: 50, carbs: 65, fat: 25 },
  { id: cryptoId(), category: "晚餐", name: "健康餐魚肉半飯", calories: 700, protein: 50, carbs: 60, fat: 22 },
  { id: cryptoId(), category: "晚餐", name: "自己處理雞胸＋沙拉＋地瓜", calories: 650, protein: 55, carbs: 65, fat: 15 }
];

const defaultData = {
  settings: {
    height: 180,
    targetCalories: 2400,
    proteinMin: 160,
    proteinMax: 180,
    stepGoal: 8000,
    stepGoalHigh: 10000,
    weeklyStrengthGoal: 4,
    weeklyCardioGoal: 2,
    proteinPowder: {
      calories: 120,
      protein: 24,
      carbs: 3,
      fat: 2
    }
  },
  foodLogs: [],
  bodyLogs: [],
  trainingLogs: [],
  savedFoods: defaultSavedFoods,
  scheduleChecks: {}
};

let state = loadData();
let selectedDate = formatDate(new Date());

document.addEventListener("DOMContentLoaded", () => {
  bindNavigation();
  bindForms();
  setDefaultDates();
  fillSettingsForm();
  renderAll();
});

function getTodaySchedule(date = selectedDate) {
  const dayMap = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const todayKey = dayMap[parseDate(date).getDay()];
  return weeklySchedule[todayKey] || [];
}

function loadData() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
    return structuredClone(defaultData);
  }

  try {
    const parsed = JSON.parse(stored);
    return {
      ...structuredClone(defaultData),
      ...parsed,
      settings: { ...structuredClone(defaultData.settings), ...(parsed.settings || {}) },
      savedFoods: parsed.savedFoods?.length ? parsed.savedFoods : structuredClone(defaultSavedFoods)
    };
  } catch {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
    return structuredClone(defaultData);
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function bindNavigation() {
  document.querySelectorAll(".bottom-nav button").forEach((button) => {
    button.addEventListener("click", () => showView(button.dataset.view));
  });

  document.getElementById("todayShortcut").addEventListener("click", () => {
    setViewedDate(formatDate(new Date()));
    showView("dashboard");
  });

  document.getElementById("previousDay").addEventListener("click", () => {
    setViewedDate(formatDate(addDays(parseDate(selectedDate), -1)));
  });

  document.getElementById("nextDay").addEventListener("click", () => {
    setViewedDate(formatDate(addDays(parseDate(selectedDate), 1)));
  });

  document.getElementById("goToday").addEventListener("click", () => {
    setViewedDate(formatDate(new Date()));
    showView("dashboard");
  });

  document.getElementById("viewDate").addEventListener("change", (event) => {
    if (event.target.value) setViewedDate(event.target.value);
  });
}

function showView(viewName) {
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
  document.getElementById(`view-${viewName}`).classList.add("active");
  document.querySelectorAll(".bottom-nav button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewName);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function bindForms() {
  document.getElementById("foodForm").addEventListener("submit", handleFoodSubmit);
  document.getElementById("bodyForm").addEventListener("submit", handleBodySubmit);
  document.getElementById("trainingForm").addEventListener("submit", handleTrainingSubmit);
  document.getElementById("settingsForm").addEventListener("submit", handleSettingsSubmit);
  document.getElementById("savedFoodForm").addEventListener("submit", handleSavedFoodSubmit);
  document.getElementById("fillSavedFoodForm").addEventListener("click", () => {
    const form = document.getElementById("savedFoodForm");
    form.reset();
    form.elements.id.value = "";
    form.classList.remove("hidden");
    form.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.getElementById("resetData").addEventListener("click", () => {
    if (!confirm("確定要清除所有紀錄並回到預設資料？")) return;
    state = structuredClone(defaultData);
    saveData();
    setDefaultDates();
    fillSettingsForm();
    renderAll();
  });
}

function setDefaultDates() {
  const today = selectedDate;
  document.querySelectorAll('input[type="date"]').forEach((input) => {
    if (!input.value) input.value = today;
  });
}

function setViewedDate(date) {
  if (!date) return;
  selectedDate = date;
  document.querySelectorAll('input[type="date"]').forEach((input) => {
    input.value = date;
  });
  renderAll();
}

function handleFoodSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  state.foodLogs.push({
    id: cryptoId(),
    date: data.get("date"),
    meal: data.get("meal"),
    name: data.get("name").trim(),
    portion: data.get("portion").trim(),
    calories: numberValue(data.get("calories")),
    protein: numberValue(data.get("protein")),
    carbs: numberValue(data.get("carbs")),
    fat: numberValue(data.get("fat")),
    eatOut: data.get("eatOut") === "on",
    note: data.get("note").trim()
  });
  saveData();
  form.reset();
  setDefaultDates();
  renderAll();
}

function handleBodySubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const date = data.get("date");
  const existingIndex = state.bodyLogs.findIndex((log) => log.date === date);
  const entry = {
    id: existingIndex >= 0 ? state.bodyLogs[existingIndex].id : cryptoId(),
    date,
    weight: numberValue(data.get("weight")),
    waist: numberValue(data.get("waist")),
    steps: numberValue(data.get("steps")),
    sleep: numberValue(data.get("sleep")),
    note: data.get("note").trim()
  };
  if (existingIndex >= 0) state.bodyLogs.splice(existingIndex, 1, entry);
  else state.bodyLogs.push(entry);
  saveData();
  form.reset();
  setDefaultDates();
  renderAll();
}

function handleTrainingSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  state.trainingLogs.push({
    id: cryptoId(),
    date: data.get("date"),
    type: data.get("type"),
    completed: data.get("completed") === "on",
    duration: data.get("duration").trim(),
    strength: data.get("strength"),
    note: data.get("note").trim()
  });
  saveData();
  form.reset();
  setDefaultDates();
  form.elements.completed.checked = true;
  renderAll();
}

function handleSettingsSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  state.settings = {
    height: numberValue(data.get("height")),
    targetCalories: numberValue(data.get("targetCalories")),
    proteinMin: numberValue(data.get("proteinMin")),
    proteinMax: numberValue(data.get("proteinMax")),
    stepGoal: numberValue(data.get("stepGoal")),
    stepGoalHigh: numberValue(data.get("stepGoalHigh")),
    weeklyStrengthGoal: numberValue(data.get("weeklyStrengthGoal")),
    weeklyCardioGoal: numberValue(data.get("weeklyCardioGoal")),
    proteinPowder: state.settings.proteinPowder || structuredClone(defaultData.settings.proteinPowder)
  };
  saveData();
  renderAll();
}

function handleSavedFoodSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const id = data.get("id") || cryptoId();
  const food = {
    id,
    category: data.get("category"),
    name: data.get("name").trim(),
    calories: numberValue(data.get("calories")),
    protein: numberValue(data.get("protein")),
    carbs: numberValue(data.get("carbs")),
    fat: numberValue(data.get("fat"))
  };
  const index = state.savedFoods.findIndex((item) => item.id === id);
  if (index >= 0) state.savedFoods.splice(index, 1, food);
  else state.savedFoods.push(food);
  saveData();
  form.reset();
  form.classList.add("hidden");
  renderAll();
}

function renderAll() {
  renderDashboard();
  renderSchedule();
  renderFoodPage();
  renderBodyPage();
  renderTrainingPage();
  fillSettingsForm();
}

function renderDashboard() {
  const today = selectedDate;
  const totals = getFoodTotals(today);
  const body = getBodyLog(today);
  const trainingDone = isTrainingComplete(today);
  const settings = state.settings;
  const viewedDate = parseDate(today);
  const weekday = new Intl.DateTimeFormat("zh-Hant-TW", { weekday: "long" }).format(viewedDate);
  const isToday = today === formatDate(new Date());

  document.getElementById("viewDate").value = today;
  document.getElementById("todayLabel").textContent = `${today} ${weekday}${isToday ? " 今日" : ""}`;
  renderMetric("calorie", totals.calories, settings.targetCalories, "kcal", true);
  renderMetric("protein", totals.protein, settings.proteinMin, "g", false);
  renderMetric("step", body?.steps || 0, settings.stepGoal, "步", false);

  const trainingCard = document.getElementById("trainingCard");
  trainingCard.className = `metric-card ${trainingDone ? "good" : "warn"}`;
  document.getElementById("trainingSummary").textContent = trainingDone ? "已完成" : "尚未完成";
  document.getElementById("trainingStatus").textContent = trainingDone ? "今日訓練有紀錄或行事曆已勾選" : "可在行事曆勾選或新增訓練紀錄";

  const weekly = getWeeklyTrainingStats(viewedDate);
  document.getElementById("avgWeight").textContent = formatMaybe(getAverageWeight7Days(viewedDate), " kg");
  document.getElementById("weekWeightChange").textContent = formatMaybe(getWeekChange("weight", viewedDate), " kg", true);
  document.getElementById("weekWaistChange").textContent = formatMaybe(getWeekChange("waist", viewedDate), " cm", true);
  document.getElementById("strengthCount").textContent = `${weekly.strength} 次`;
  document.getElementById("cardioCount").textContent = `${weekly.cardio} 次`;
  document.getElementById("bodyInsight").textContent = getBodyInsight(viewedDate);
  document.getElementById("trainingInsight").textContent = getTrainingInsight(weekly);
  renderAdvice(totals, body, trainingDone, today);
}

function renderMetric(prefix, value, target, unit, highIsBad) {
  const ratio = target ? Math.min((value / target) * 100, 140) : 0;
  const card = document.getElementById(`${prefix}Card`);
  const progress = document.getElementById(`${prefix}Progress`);
  const statusClass = getMetricStatus(value, target, highIsBad);
  card.className = `metric-card ${statusClass}`;
  progress.style.width = `${ratio}%`;

  if (prefix === "calorie") {
    document.getElementById("calorieSummary").textContent = `${round(value)} / ${target} ${unit}`;
    document.getElementById("calorieRemain").textContent = value <= target ? `剩餘 ${round(target - value)} kcal` : `超過 ${round(value - target)} kcal`;
  }

  if (prefix === "protein") {
    document.getElementById("proteinSummary").textContent = `${round(value)} / ${target} ${unit}`;
    document.getElementById("proteinRemain").textContent = value >= target ? "已達下限" : `剩餘 ${round(target - value)} g`;
  }

  if (prefix === "step") {
    document.getElementById("stepSummary").textContent = `${round(value)} / ${target} ${unit}`;
    document.getElementById("stepStatus").textContent = value >= target ? "已達標" : `還差 ${round(target - value)} 步`;
  }
}

function getMetricStatus(value, target, highIsBad) {
  if (!target) return "warn";
  const ratio = value / target;
  if (highIsBad) {
    if (ratio > 1) return "bad";
    if (ratio >= 0.85) return "warn";
    return "good";
  }
  if (ratio >= 1) return "good";
  if (ratio >= 0.75) return "warn";
  return "bad";
}

function renderSchedule() {
  const today = selectedDate;
  const checks = state.scheduleChecks[today] || {};
  const schedule = getTodaySchedule(today);
  const root = document.getElementById("todaySchedule");
  document.getElementById("scheduleCount").textContent = `${schedule.length} 項`;

  root.innerHTML = schedule.map((item) => {
    const key = scheduleKey(item);
    const checked = checks[key] ? "checked" : "";
    const doneClass = checks[key] ? "done" : "";
    return `
      <article class="schedule-card ${doneClass}">
        <div class="schedule-time">${escapeHtml(item.time)}</div>
        <div class="schedule-title">${escapeHtml(item.title)}</div>
        <div class="schedule-actions">
          <span class="type-pill type-${item.type}">${typeLabels[item.type] || item.type}</span>
          <label>
            <input type="checkbox" data-schedule-key="${escapeAttribute(key)}" ${checked}>
            完成
          </label>
        </div>
      </article>
    `;
  }).join("");

  root.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      state.scheduleChecks[today] = state.scheduleChecks[today] || {};
      state.scheduleChecks[today][checkbox.dataset.scheduleKey] = checkbox.checked;
      saveData();
      renderAll();
    });
  });
}

function renderAdvice(totals, body, trainingDone, date = selectedDate) {
  const todayScheduleText = getTodaySchedule(date).map((item) => item.title).join(" ");
  const day = parseDate(date).getDay();
  const advice = [];

  if (totals.calories > state.settings.targetCalories) advice.push("今天熱量偏高，晚餐或宵夜不要再補高油食物。");
  if (totals.protein < 140) advice.push("今天蛋白質偏低，可以補一份蛋白粉或無糖豆漿＋茶葉蛋。");
  if (totals.protein >= state.settings.proteinMin) advice.push("蛋白質達標，今天不用再硬補蛋白粉。");
  if (todayScheduleText.includes("鐵板燒")) advice.push("今天午餐油脂可能偏高，晚餐建議健康餐半飯，主菜選雞胸或魚。");
  if (todayScheduleText.includes("燒臘")) advice.push("今天午餐鈉和油可能偏高，晚餐少醬、多喝水、主菜選低油蛋白質。");
  if (getTodaySchedule(date).some((item) => item.type === "training") && !trainingDone) advice.push("今天原本安排重訓，可以改成明天補練或至少快走 30 分鐘。");
  if ((body?.steps || 0) < state.settings.stepGoal) advice.push("今天活動量偏低，睡前可以補走 15–20 分鐘。");
  if (day === 0) advice.push("今天記得量體重、腰圍，並補下週早餐食物。");
  if (!advice.length) advice.push("今天狀態不錯，照目前節奏完成飲食、步數和訓練即可。");

  document.getElementById("adviceList").innerHTML = advice.map((item) => `<p class="advice">${escapeHtml(item)}</p>`).join("");
}

function renderFoodPage() {
  const today = selectedDate;
  const totals = getFoodTotals(today);
  const settings = state.settings;
  document.getElementById("foodTotalCalories").textContent = `${round(totals.calories)} kcal`;
  document.getElementById("foodTotalProtein").textContent = `${round(totals.protein)} g`;
  document.getElementById("foodTotalCarbs").textContent = `${round(totals.carbs)} g`;
  document.getElementById("foodTotalFat").textContent = `${round(totals.fat)} g`;
  document.getElementById("foodRemainCalories").textContent = `${round(settings.targetCalories - totals.calories)} kcal`;
  document.getElementById("foodRemainProtein").textContent = `${Math.max(0, round(settings.proteinMin - totals.protein))} g`;

  renderQuickFoods();
  renderFoodLogs(today);
}

function renderQuickFoods() {
  const root = document.getElementById("quickFoods");
  root.innerHTML = state.savedFoods.map((food) => `
    <article class="food-card">
      <header>
        <div>
          <strong>${escapeHtml(food.name)}</strong>
          <p class="log-meta">${escapeHtml(food.category)} · ${food.calories} kcal · 蛋白質 ${food.protein}g</p>
        </div>
      </header>
      <p class="muted">碳水 ${food.carbs}g · 脂肪 ${food.fat}g</p>
      <div class="food-actions">
        <button type="button" data-add-food="${food.id}">加入今天</button>
        <button class="secondary-button" type="button" data-edit-food="${food.id}">修改</button>
        <button class="danger-button" type="button" data-delete-food="${food.id}">刪除</button>
      </div>
    </article>
  `).join("");

  root.querySelectorAll("[data-add-food]").forEach((button) => {
    button.addEventListener("click", () => addSavedFoodToToday(button.dataset.addFood));
  });
  root.querySelectorAll("[data-edit-food]").forEach((button) => {
    button.addEventListener("click", () => editSavedFood(button.dataset.editFood));
  });
  root.querySelectorAll("[data-delete-food]").forEach((button) => {
    button.addEventListener("click", () => deleteSavedFood(button.dataset.deleteFood));
  });
}

function addSavedFoodToToday(id) {
  const food = state.savedFoods.find((item) => item.id === id);
  if (!food) return;
  state.foodLogs.push({
    id: cryptoId(),
    date: selectedDate,
    meal: food.category,
    name: food.name,
    portion: "常用食物快速加入",
    calories: food.calories,
    protein: food.protein,
    carbs: food.carbs,
    fat: food.fat,
    eatOut: false,
    note: ""
  });
  saveData();
  renderAll();
}

function editSavedFood(id) {
  const food = state.savedFoods.find((item) => item.id === id);
  if (!food) return;
  const form = document.getElementById("savedFoodForm");
  form.classList.remove("hidden");
  form.elements.id.value = food.id;
  form.elements.name.value = food.name;
  form.elements.category.value = food.category;
  form.elements.calories.value = food.calories;
  form.elements.protein.value = food.protein;
  form.elements.carbs.value = food.carbs;
  form.elements.fat.value = food.fat;
  form.scrollIntoView({ behavior: "smooth", block: "start" });
}

function deleteSavedFood(id) {
  if (!confirm("確定刪除這個常用食物？")) return;
  state.savedFoods = state.savedFoods.filter((item) => item.id !== id);
  saveData();
  renderAll();
}

function renderFoodLogs(today) {
  const logs = state.foodLogs.filter((log) => log.date === today).slice().reverse();
  const root = document.getElementById("foodLogs");
  root.innerHTML = logs.length ? logs.map((log) => `
    <article class="log-item">
      <header>
        <div>
          <strong>${escapeHtml(log.meal)} · ${escapeHtml(log.name)}</strong>
          <p class="log-meta">${log.calories} kcal · 蛋白質 ${log.protein}g · 碳水 ${log.carbs}g · 脂肪 ${log.fat}g</p>
        </div>
      </header>
      ${log.portion ? `<p class="muted">${escapeHtml(log.portion)}</p>` : ""}
      ${log.note ? `<p>${escapeHtml(log.note)}</p>` : ""}
      <div class="log-actions"><button class="danger-button" type="button" data-delete-log="${log.id}" data-kind="food">刪除</button></div>
    </article>
  `).join("") : `<p class="muted">今天還沒有飲食紀錄。</p>`;

  root.querySelectorAll("[data-delete-log]").forEach((button) => {
    button.addEventListener("click", () => deleteLog(button.dataset.kind, button.dataset.deleteLog));
  });
}

function renderBodyPage() {
  const logs = state.bodyLogs.slice().sort((a, b) => b.date.localeCompare(a.date));
  const root = document.getElementById("bodyLogs");
  root.innerHTML = logs.length ? logs.map((log) => `
    <article class="log-item">
      <header>
        <div>
          <strong>${escapeHtml(log.date)}</strong>
          <p class="log-meta">體重 ${log.weight || "--"}kg · 腰圍 ${log.waist || "--"}cm · 步數 ${log.steps || 0}</p>
        </div>
      </header>
      <p class="muted">睡眠 ${log.sleep || "--"} 小時 ${log.note ? `· ${escapeHtml(log.note)}` : ""}</p>
      <div class="log-actions"><button class="danger-button" type="button" data-delete-log="${log.id}" data-kind="body">刪除</button></div>
    </article>
  `).join("") : `<p class="muted">還沒有身體紀錄。</p>`;

  root.querySelectorAll("[data-delete-log]").forEach((button) => {
    button.addEventListener("click", () => deleteLog(button.dataset.kind, button.dataset.deleteLog));
  });
}

function renderTrainingPage() {
  const weekly = getWeeklyTrainingStats();
  document.getElementById("trainingPageStrength").textContent = `${weekly.strength} 次`;
  document.getElementById("trainingPageCardio").textContent = `${weekly.cardio} 次`;
  document.getElementById("trainingPageInsight").textContent = getTrainingInsight(weekly);

  const logs = state.trainingLogs.slice().sort((a, b) => b.date.localeCompare(a.date));
  const root = document.getElementById("trainingLogs");
  root.innerHTML = logs.length ? logs.map((log) => `
    <article class="log-item">
      <header>
        <div>
          <strong>${escapeHtml(log.date)} · ${escapeHtml(log.type)}</strong>
          <p class="log-meta">${log.completed ? "已完成" : "未完成"} · ${escapeHtml(log.duration || "未填時間")} · 狀態 ${escapeHtml(log.strength)}</p>
        </div>
      </header>
      ${log.note ? `<p>${escapeHtml(log.note)}</p>` : ""}
      <div class="log-actions"><button class="danger-button" type="button" data-delete-log="${log.id}" data-kind="training">刪除</button></div>
    </article>
  `).join("") : `<p class="muted">還沒有訓練紀錄。</p>`;

  root.querySelectorAll("[data-delete-log]").forEach((button) => {
    button.addEventListener("click", () => deleteLog(button.dataset.kind, button.dataset.deleteLog));
  });
}

function deleteLog(kind, id) {
  if (!confirm("確定刪除這筆紀錄？")) return;
  const map = {
    food: "foodLogs",
    body: "bodyLogs",
    training: "trainingLogs"
  };
  state[map[kind]] = state[map[kind]].filter((log) => log.id !== id);
  saveData();
  renderAll();
}

function fillSettingsForm() {
  const form = document.getElementById("settingsForm");
  const settings = state.settings;
  form.elements.height.value = settings.height;
  form.elements.targetCalories.value = settings.targetCalories;
  form.elements.proteinMin.value = settings.proteinMin;
  form.elements.proteinMax.value = settings.proteinMax;
  form.elements.stepGoal.value = settings.stepGoal;
  form.elements.stepGoalHigh.value = settings.stepGoalHigh;
  form.elements.weeklyStrengthGoal.value = settings.weeklyStrengthGoal;
  form.elements.weeklyCardioGoal.value = settings.weeklyCardioGoal;
}

function getFoodTotals(date) {
  return state.foodLogs
    .filter((log) => log.date === date)
    .reduce((totals, log) => {
      totals.calories += numberValue(log.calories);
      totals.protein += numberValue(log.protein);
      totals.carbs += numberValue(log.carbs);
      totals.fat += numberValue(log.fat);
      return totals;
    }, { calories: 0, protein: 0, carbs: 0, fat: 0 });
}

function getBodyLog(date) {
  return state.bodyLogs.find((log) => log.date === date);
}

function isTrainingComplete(date) {
  const hasTrainingLog = state.trainingLogs.some((log) => log.date === date && log.completed && log.type !== "休息");
  const checks = state.scheduleChecks[date] || {};
  const scheduleTrainingDone = getTodaySchedule(date).some((item) => {
    return ["training", "cardio"].includes(item.type) && checks[scheduleKey(item)];
  });
  return hasTrainingLog || scheduleTrainingDone;
}

function getWeeklyTrainingStats(referenceDate = parseDate(selectedDate)) {
  const { start, end } = getWeekRange(referenceDate);
  return state.trainingLogs.reduce((stats, log) => {
    const date = parseDate(log.date);
    if (!log.completed || date < start || date > end) return stats;
    if (log.type === "有氧") stats.cardio += 1;
    else if (log.type !== "休息") stats.strength += 1;
    return stats;
  }, { strength: 0, cardio: 0 });
}

function getAverageWeight7Days(referenceDate = parseDate(selectedDate)) {
  const today = new Date(referenceDate);
  const start = addDays(today, -6);
  const weights = state.bodyLogs
    .filter((log) => log.weight && parseDate(log.date) >= start && parseDate(log.date) <= today)
    .map((log) => Number(log.weight));
  if (!weights.length) return null;
  return weights.reduce((sum, value) => sum + value, 0) / weights.length;
}

function getWeekChange(field, referenceDate = parseDate(selectedDate)) {
  const { start, end } = getWeekRange(referenceDate);
  const logs = state.bodyLogs
    .filter((log) => log[field] && parseDate(log.date) >= start && parseDate(log.date) <= end)
    .sort((a, b) => a.date.localeCompare(b.date));
  if (logs.length < 2) return null;
  return Number(logs[logs.length - 1][field]) - Number(logs[0][field]);
}

function getBodyInsight(referenceDate = parseDate(selectedDate)) {
  const change = getWeekChange("weight", referenceDate);
  if (change === null) return "身體紀錄至少需要本週兩筆體重，才會判斷下降速度。";
  const loss = -change;
  if (loss >= 0.4 && loss <= 0.8) return "速度合理，繼續目前熱量。";
  if (loss > 1) return "下降速度偏快，注意訓練表現與飢餓感。";
  if (loss < 0.1 && hasTwoWeeksBodyData(referenceDate)) return "可考慮每日熱量減少 100 kcal，或每日多走 2000 步。";
  return "本週變化還不明顯，先維持紀錄並觀察趨勢。";
}

function getTrainingInsight(weekly) {
  const strengthDone = weekly.strength >= state.settings.weeklyStrengthGoal;
  const cardioDone = weekly.cardio >= state.settings.weeklyCardioGoal;
  if (strengthDone && cardioDone) return "本週重訓與有氧都達標。";
  if (!strengthDone && !cardioDone) return "本週重訓與有氧都還可以補一些。";
  if (!strengthDone) return "有氧達標，重訓次數還可以再補。";
  return "重訓達標，有氧或快走還可以再補。";
}

function hasTwoWeeksBodyData(referenceDate = parseDate(selectedDate)) {
  const today = new Date(referenceDate);
  const start = addDays(today, -13);
  return state.bodyLogs.filter((log) => log.weight && parseDate(log.date) >= start && parseDate(log.date) <= today).length >= 4;
}

function getWeekRange(date) {
  const target = new Date(date);
  target.setHours(0, 0, 0, 0);
  const day = target.getDay() || 7;
  const start = addDays(target, 1 - day);
  const end = addDays(start, 6);
  end.setHours(23, 59, 59, 999);
  return { start, end };
}

function scheduleKey(item) {
  return `${item.time}-${item.title}`;
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function numberValue(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function round(value) {
  return Math.round(numberValue(value) * 10) / 10;
}

function formatMaybe(value, unit, signed = false) {
  if (value === null || value === undefined || Number.isNaN(value)) return `--${unit}`;
  const rounded = round(value);
  const prefix = signed && rounded > 0 ? "+" : "";
  return `${prefix}${rounded}${unit}`;
}

function cryptoId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}
