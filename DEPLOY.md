# Инструкция: Статистика с приватными репозиториями через Vercel

Чтобы карточки в README учитывали **приватные репозитории**, нужен свой экземпляр github-readme-stats на Vercel с твоим токеном.

---

## Шаг 1: Создать Personal Access Token (PAT)

1. GitHub → **Settings** → **Developer settings** → **Personal access tokens**
2. **Generate new token (classic)**
3. Имя: `github-readme-stats`
4. Права: **repo** (полный доступ к репозиториям)
5. Сгенерируй и **скопируй токен** (один раз — потом его не будет видно)

---

## Шаг 2: Форкнуть github-readme-stats

1. Перейди на https://github.com/anuraghazra/github-readme-stats
2. Нажми **Fork** → создастся копия в твоём аккаунте

---

## Шаг 3: Задеплоить на Vercel

1. Зайди на https://vercel.com и войди через GitHub
2. **Add New** → **Project**
3. **Import** твой форк `github-readme-stats`
4. **Перед деплоем** открой **Environment Variables**:
   - **Name:** `PAT_1`
   - **Value:** вставь свой токен
   - **Environment:** Production
5. Нажми **Deploy**

---

## Шаг 4: Обновить README

После деплоя Vercel покажет URL, например:
- `github-readme-stats-xxx.vercel.app`

В `README.md` уже используются URL:

- Top Languages: `https://github-readme-stats-kappa-indol-47.vercel.app/api/top-langs/?username=morkkov&layout=compact&theme=default&hide_border=true&langs_count=8&count_private=true`
- GitHub Stats: `https://github-readme-stats-kappa-indol-47.vercel.app/api?username=morkkov&show_icons=true&theme=default&hide_border=true&count_private=true`

---

## Итоговая проверка

- [ ] PAT создан и добавлен в Vercel как `PAT_1`
- [ ] Форк задеплоен на Vercel
- [ ] URL заменены в README
- [ ] `count_private=true` добавлен в URL карточек
