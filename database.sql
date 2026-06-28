CREATE DATABASE IF NOT EXISTS get_github_analys;

USE get_github_analys;

CREATE TABLE profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(255),
    followers INT DEFAULT 0,
    following INT DEFAULT 0,
    public_repos INT DEFAULT 0,
    public_gists INT DEFAULT 0,
    avatar_url TEXT,
    profile_url TEXT,
    analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


SELECT * FROM profiles;

INSERT INTO profiles (
    username,
    name,
    followers,
    following,
    public_repos,
    public_gists,
    avatar_url,
    profile_url
)
VALUES (
    'pradum9691',
    'Pradum Karveti',
    1,
    0,
    10,
    0,
    'https://avatars.githubusercontent.com/u/214363466?v=4',
    'https://github.com/pradum9691'
);