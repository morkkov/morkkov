# Инструкция: Статистика с приватными репозиториями

Используем **GitHub Readme Stats Action** — карточки генерируются в workflow и учитывают приватные репо через PAT.

---

## Шаг 1: Создать Personal Access Token (PAT)

1. GitHub → **Settings** → **Developer settings** → **Personal access tokens**
2. **Generate new token (classic)**
3. Имя: `github-readme-stats`
4. **Права:** отметь **оба**:
   - **repo** — для Top Languages и Stats
   - **read:user** — для Stats (коммиты, PR, issues)
5. Сгенерируй и **скопируй токен**

---

## Шаг 2: Добавить секрет в репозиторий

1. Открой репозиторий **morkkov/morkkov**
2. **Settings** → **Secrets and variables** → **Actions**
3. **New repository secret**
4. **Name:** `GH_TOKEN`
5. **Value:** вставь свой PAT

---

## Шаг 3: Запустить workflow

1. Вкладка **Actions** → **Update README**
2. **Run workflow** (кнопка справа)

Workflow сгенерирует `profile/stats.svg` и `profile/top-langs.svg` и закоммитит их. Карточки в README обновятся автоматически.

---

## Обновление карточек

- **Вручную:** Actions → Update README → Run workflow
- **По расписанию:** каждый день в 12:00 UTC

---

## Важно

- PAT с правами **repo** + **read:user** даёт доступ к приватным репо
- Не храни токен в коде — только в секретах репозитория
