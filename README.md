![Argio Studios Logo](https://res.cloudinary.com/dr9vuz2td/image/upload/v1747914534/banner_vxlbcw.png)

# **Argio Studios Portfolio** 🎥🎞️

**Argio Studios** is a multidisciplinary audiovisual production company specialized in **videography**, **photography**, **3D modeling**, and **graphic design**.  
This full-stack web application showcases the studio’s work and provides a scalable foundation for content management and client presentation.  
Built with a **Django** backend and a **React** frontend, and powered by a **PostgreSQL** database.

---

## 📌 **Table of Contents**

1. [⚙️ Installation and Requirements](#installation-and-requirements)
2. [🎨 App Design](#app-design)
3. [🏗️ Project Architecture](#project-architecture)
4. [💻 Technologies Used](#technologies-used)
5. [📚 Libraries](#libraries)
6. [🚀 Next Steps](#next-steps)
7. [🌐 Preview](#preview)
8. [🔖 License](#license)

---

## ⚙️ **Installation and Requirements**

### **Prerequisites**
Ensure the following are installed:

- **Python 3.11.0**
- **Django 5.2.0**
- **PostgreSQL**
- **Git**

---

### **Backend Setup**

```bash
git clone https://github.com/Bimai6/argio-studios-website.git
cd argio-studios-website/backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

Create a `.env` file inside the `backend/` directory with the following content:

```env
DB_NAME=argio_db
DB_USER=argio_user
DB_PASSWORD=supersecret
DB_HOST=localhost
DB_PORT=5432
```

Then, migrate and launch the backend server:

```bash
cd argiobackend/
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

> Backend runs at: http://127.0.0.1:8000/

---

### **Frontend Setup**

```bash
cd ../../frontend
npm install
npm run dev
```

> Frontend runs at: http://localhost:5173/

---

### **Scripts**

You can use the following scripts from the root directory:

- Start backend:
```bash
./scripts/0_run_back.sh
```

- Start frontend:
```bash
./scripts/1_run_front.sh
```

- Run backend tests:
```bash
./scripts/2_run_tests_back.sh
```

- Run frontend tests:
```bash
./scripts/3_run_tests_front.sh
```

---

## 🎨 **App Design**


### 🖥️ **Desktop Version**

| ![Home](https://res.cloudinary.com/dr9vuz2td/image/upload/v1750441870/Captura_de_pantalla_44_w2adhg.png) | ![Catalogue](https://res.cloudinary.com/dr9vuz2td/image/upload/v1750441870/Captura_de_pantalla_47_hhe80e.png) | ![About](https://res.cloudinary.com/dr9vuz2td/image/upload/v1750441871/Captura_de_pantalla_46_svhxm4.png) | ![Contact](https://res.cloudinary.com/dr9vuz2td/image/upload/v1750441870/Captura_de_pantalla_45_sgckjm.png) |
|:--:|:--:|:--:|:--:|
| **Home Page** | **Catalogue Page** | **About Us Page** | **Contact Page** |

---

### 📱 **Mobile Version**

| ![Home Mobile](https://res.cloudinary.com/dr9vuz2td/image/upload/v1750441870/Captura_de_pantalla_48_kvmrmm.png) | ![Catalogue Mobile](https://res.cloudinary.com/dr9vuz2td/image/upload/v1750441870/Captura_de_pantalla_51_ldtezr.png) | ![About Mobile](https://res.cloudinary.com/dr9vuz2td/image/upload/v1750441870/Captura_de_pantalla_50_tovvrl.png) | ![Contact Mobile](https://res.cloudinary.com/dr9vuz2td/image/upload/v1750441870/Captura_de_pantalla_49_svk2ht.png) |
|:--:|:--:|:--:|:--:|
| **Home Page** | **Catalogue Page** | **About Us Page** | **Contact Page** |

---

## 🏗️ **Project Architecture**

```
argio-studios-website/
│
├── backend/
│   ├── argiobackend/
│   ├── requirements.txt
│   ├── .env
|   └── ...
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── router/
│       └── utils/
│
├── scripts/
├── README.md
└── ...
```

---

## 💻 **Technologies Used**

| Layer      | Stack                             |
|------------|-----------------------------------|
| Frontend   | React 19, Vite 6, TailwindCSS 4   |
| Backend    | Django 5.2, DRF                   |
| Database   | PostgreSQL                        |
| Styling    | TailwindCSS                       |
| Routing    | React Router 7                    |
| API Calls  | Fetch                             |
| Testing    | Vitest, Pytest                    |

---

## 📚 **Libraries**

### ✅ Backend (`requirements.txt`)
- **Django 5.2** - Web framework
- **djangorestframework** - REST API
- **django-cors-headers** - CORS handling
- **django-extensions** - Extra dev tools
- **django-filter** - Filtering support
- **python-environ / dotenv** - Env var handling
- **psycopg2-binary** - PostgreSQL driver
- **colorama** - CLI color output
- **sqlparse** - SQL formatting
- **asgiref / tzdata** - Timezone / async support

#### 🧪 Backend Testing
- **coverage**, **pytest**, **pytest-django**, **pytest-cov**

---

### ✅ Frontend (`package.json`)

#### Core
- **react** `^19.0.0`
- **react-dom**
- **react-router-dom** `^7.6.0`

#### Styling & Tools
- **tailwindcss** `^4.1.6`
- **@tailwindcss/vite`**

#### Media & UI
- **@emailjs/browser** / **emailjs-com**
- **medium-zoom**
- **sweetalert2** `^11.22.0`

#### DevDependencies
- **vite** `^6.2.0`
- **@vitejs/plugin-react-swc**
- **eslint**, **eslint-plugin-react-hooks**, **react-refresh**
- **vitest**, **@vitest/coverage-v8**
- **@testing-library/react / jest-dom**
- **jsdom**, **globals**
- **@types/react**, **@types/react-dom**

---

## 🚀 **Next Steps**

- Deploy backend and frontend with Docker
- Add timeline when Argio Studios achieve more goals
- Improve animations.
- Improve design material chosen and their integrations.

---

## 🌐 **Preview**

> Coming soon...

---

## 🔖 **License**

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---
