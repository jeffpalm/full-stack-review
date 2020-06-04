INSERT INTO
  users (email, PASSWORD)
VALUES
  ($1, $2)
RETURNING email, user_id;