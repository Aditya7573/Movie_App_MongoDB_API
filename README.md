# Movie Reviews App — README

**What it is:** A simple web app to browse movies and read/write reviews. UI is plain HTML/CSS/JS (no frameworks).

## How it works (quick)
- **Browse & Search:** `index.html` loads `script.js`, which calls **TMDB** using a constant `APILINK` to fetch popular titles and search results. Cards show posters + a **reviews** link.
- **Reviews Page:** `movie.html` loads `movie.js`, reads the movie `id` & `title` from the URL, and calls a second `APILINK` that points to my **local reviews API**.
- **CRUD Actions:** From the reviews page you can **create, edit, and delete** reviews via fetch calls to the API.

## MongoDB (private/local)
- The reviews API is a Node/Express + **MongoDB** backend running on my machine (e.g., `http://localhost:8000/api/v1/reviews/`). 
- Endpoints used:
  - `GET /movie/:movieId` → list reviews
  - `POST /new` → add review
  - `PUT /:id` → update review
  - `DELETE /:id` → delete review
- It’s not publicly exposed for security/cost reasons. **You won’t see DB data** unless I start the database locally, but the feature works (demo on call is easy).

## Run it (frontend only)
1) Open `index.html` in a browser (or any static server).  
2) **Optional**: To test reviews, start my local MongoDB API; then open a movie’s **reviews** link.

## Live demo
I’ll attach a **working website link** for the frontend. (Database stays private/local; review actions are disabled on the public demo.)

— Aditya
