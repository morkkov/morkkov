// generate_readme.js (uses native fetch in Node 18+)
import fs from "fs";

const username = process.env.USERNAME;
const token = process.env.GH_TOKEN;

if (!username || !token) {
  console.error("Ошибка: задайте секреты USERNAME и GH_TOKEN в настройках репозитория");
  process.exit(1);
}

async function getStats() {
  // Получаем все репозитории пользователя
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100`,
    {
      headers: { Authorization: `token ${token}` },
    },
  );
  const repos = await res.json();

  if (!Array.isArray(repos)) {
    throw new Error(repos.message || "Не удалось получить репозитории. Проверьте GH_TOKEN.");
  }

  const langs = {};

  for (const repo of repos) {
    const langRes = await fetch(repo.languages_url, {
      headers: { Authorization: `token ${token}` },
    });
    const repoLangs = await langRes.json();
    for (const lang in repoLangs) {
      langs[lang] = (langs[lang] || 0) + repoLangs[lang];
    }
  }

  return langs;
}

(async () => {
  const langs = await getStats();
  let langMd = "";
  for (const [lang, bytes] of Object.entries(langs).sort(
    (a, b) => b[1] - a[1],
  )) {
    langMd += `- ${lang} (${bytes} bytes)\n`;
  }

  const readmeContent = `
# Привет! 👋 Я — Fullstack разработчик

Разрабатываю веб-приложения от backend до frontend.

---

## 🛠 Стек технологий
Backend: Python, FastAPI, asyncio, Celery, SQLAlchemy  
Frontend: React, TypeScript, HTML/CSS  
Базы данных: PostgreSQL, SQLite  
Инструменты: Git, Docker, Selenium

---

## 📊 Языки программирования
${langMd}

---

## 📈 Общая статистика GitHub
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=default&hide_border=true)

---

## 📫 Связь
- Telegram: [@jdueje](https://t.me/jdueje)
`;

  fs.writeFileSync("README.md", readmeContent);
})();
