# Installation Guide 📦

## Requirements

Before starting, make sure you have the following installed:

**General:**
- Git  
- Python 3.11.0 (make shure you have this one when you are running the `.venv`)  
- Node.js 20.17.0 
- PostgreSQL 

---

## 1. Clone the Repository

Clone this repository to your local machine:

```
git clone https://github.com/Bimai6/argio-studios-website.git
```

---

## 2. Set Up the Backend

### Step 1: Navigate to the backend directory

```
cd backend
```

### Step 2: Create the virtual environment

Make sure you're using the correct Python version posted above, then run:

```
python -m venv .venv
```

### Step 3: Activate the virtual environment

On **Windows** (Command Prompt):

```
.venv\Scripts\activate
```

On **macOS/Linux**:

```
source .venv/bin/activate
```

### Step 4: Install dependencies

```
pip install -r requirements.txt
```

### Step 5: Create the `.env` file

Create a `.env` file inside the `backend/` directory.  
This file should contain the following variables:

```
DB_NAME=argio_db
DB_USER=argio_user
DB_PASSWORD=supersecret
DB_HOST=localhost
DB_PORT=5432
```

### Step 6: Navigate to project folder

(rootfolder/backend/argiobackend)

```
cd argiobackend/
```

### Step 7: Run migrations

```
python manage.py migrate
```

### Step 8: Create a superuser for the admin interface:

```
python manage.py createsuperuser
```

### Step 9: Run the development server

```
python manage.py runserver
```

The backend will be available at:
http://127.0.0.1:8000/

---

## 3. Set Up the Frontend

### Step 1: Navigate to the frontend directory

```
cd frontend
```

### Step 2: Install dependencies

```
npm install
```

### Step 3: Run the frontend development server

```
npm run dev
```

---

## 4. Running Tests 

### Ensure the `.env` file is present in `backend/`, and packages and dependencies are updated for both backend and frontend, then use the associated scripts listed on the following section.
---

## Scripts

After you have done the first time setup, you can make use of the scripts as shortcuts to run the server:

-To run backend:

```
./scripts/0_run_back.sh
```

-To run frontend:

```
./scripts/1_run_front.sh
```

### For testing you have:

```
./scripts/2_run_tests_back.sh
```

```
./scripts/3_run_tests_front.sh
```

---

## Notes

- Do not commit the `.env` file or `.venv/` directory.
- Make sure PostgreSQL is installed and running locally (or accessible remotely).
- Use the exact Python version if possible to match the `.venv`.
- `.env` must live in `backend/`, not deeper.

