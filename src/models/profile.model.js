import pool from "../config/db.js";

const saveProfile = async (profile) => {
  const query = `
    INSERT INTO profiles
    (
      username,
      name,
      followers,
      following,
      public_repos,
      public_gists,
      avatar_url,
      profile_url
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
      name = VALUES(name),
      followers = VALUES(followers),
      following = VALUES(following),
      public_repos = VALUES(public_repos),
      public_gists = VALUES(public_gists),
      avatar_url = VALUES(avatar_url),
      profile_url = VALUES(profile_url),
      analyzed_at = CURRENT_TIMESTAMP
  `;

  const values = [
    profile.login,
    profile.name,
    profile.followers,
    profile.following,
    profile.public_repos,
    profile.public_gists,
    profile.avatar_url,
    profile.html_url,
  ];

  const [result] = await pool.execute(query, values);

  return result;
};

const getAllProfiles = async () => {
  const [rows] = await pool.execute("SELECT * FROM profiles");
  return rows;
};

const getProfileById = async (id) => {
  const [rows] = await pool.execute(
    "SELECT * FROM profiles WHERE id = ?",
    [id]
  );

  return rows[0];
}; 

export { saveProfile, getAllProfiles, getProfileById};