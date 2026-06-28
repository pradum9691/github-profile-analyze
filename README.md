# GitHub Profile Analyzer API

A backend REST API built with Node.js, Express.js, MySQL, and GitHub Public API. This project fetches a GitHub user's public profile, stores the profile details in a MySQL database, and provides APIs to retrieve the stored data.

---

## Tech Stack

* Node.js
* Express.js
* MySQL
* Axios
* Dotenv

---

## Features

* Fetch GitHub profile using username
* Store profile data in MySQL
* Update existing profile if username already exists
* Get all analyzed profiles
* Get a single analyzed profile by ID

---

## Installation

### Clone the repository

```bash
git clone <https://github.com/pradum9691/github-profile-analyze.git>
```

### Install dependencies

```bash
npm install
```

### Create a .env file

```env
PORT=5000

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=get_github_analys
```

### Start the server

```bash
npm run dev
```

---

## API Endpoints

### Analyze GitHub Profile

```http
GET /api/profile/find/:username
```

Example

```http
GET /api/profile/find/pradum9691
```

---

### Get All Profiles

```http
GET /api/profile
```

---

### Get Single Profile

```http
GET /api/profile/:id
```

---

## Database

Database Name

```
get_github_analys
```

Table

```
profiles
```

---

## Author

**Pradum Karveti**

GitHub: https://github.com/pradum9691
