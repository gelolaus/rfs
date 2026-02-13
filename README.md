# Full-Stack Guestbook Application

A personal profile website with a guestbook feature using Flask (backend), React (frontend), and Supabase (database).

## Architecture

- **Frontend**: React app hosted on Vercel.com
- **Backend**: Flask API hosted on Render.com
- **Database**: Supabase (PostgreSQL)

## Project Structure

```
my-personal-profile/
├── backend/                # Flask Application
│   ├── app.py
│   ├── requirements.txt
│   └── .env-sample
├── frontend/               # React Application
│   ├── src/
│   │   └── Guestbook.js
│   ├── public/
│   ├── package.json
│   └── .env-sample
├── .gitignore
└── README.md
```

## Setup Instructions

### 1. Database Setup (Supabase)

1. Log in to [Supabase](https://supabase.com)
2. Create a new project
3. Go to the SQL Editor and run:

```sql
create table guestbook (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  message text not null,
  created_at timestamp with time zone default now()
);
```

4. Get your `SUPABASE_URL` and `SUPABASE_KEY` from Project Settings > API

### 2. Local Development Setup

#### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env-sample .env
# Edit .env with your Supabase credentials
python app.py
```

#### Frontend Setup

```bash
cd frontend
npm install
cp .env-sample .env
# Edit .env with your backend URL
npm start
```

### 3. Deployment

#### Deploy Backend to Render.com

1. Log in to [Render](https://render.com)
2. Click **New** > **Web Service**
3. Connect your GitHub repository
4. Settings:
   - **Root Directory**: `backend`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app --bind 0.0.0.0:$PORT`
5. Add Environment Variables:
   - `SUPABASE_URL`: Your Supabase project URL
   - `SUPABASE_KEY`: Your Supabase API key

#### Deploy Frontend to Vercel.com

1. Log in to [Vercel](https://vercel.com)
2. Click **Add New** > **Project**
3. Import your GitHub repository
4. Settings:
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend`
5. Add Environment Variable:
   - `REACT_APP_API_URL`: Your Render backend URL (e.g., `https://your-app.onrender.com/guestbook`)

## API Endpoints

- `GET /guestbook` - Fetch all guestbook entries
- `POST /guestbook` - Create a new entry
- `PUT /guestbook/<id>` - Update an entry
- `DELETE /guestbook/<id>` - Delete an entry

## Features

- ✅ Full CRUD operations (Create, Read, Update, Delete)
- ✅ Loading states for Render's "cold start"
- ✅ Error handling
- ✅ Responsive design
- ✅ CORS enabled for cross-origin requests

## Notes

- Render's free tier "spins down" after 15 minutes of inactivity
- First load may take 30-60 seconds while the server wakes up
- The loading state handles this gracefully

## Environment Variables

### Backend (.env)
```
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_KEY=your-long-supabase-api-key-here
FLASK_APP=app.py
FLASK_DEBUG=1
```

### Frontend (.env)
```
REACT_APP_API_URL=http://127.0.0.1:5000/guestbook
```

## License

MIT
