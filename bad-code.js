async function getUser(id) {
  const user = db.query("SELECT * FROM users WHERE id = " + id);
  return user;
}