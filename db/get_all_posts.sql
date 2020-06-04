SELECT
  u.email,
  p.content,
  p.post_id,
  u.user_id,
  p.created_at
FROM
  posts p
  JOIN users u ON p.user_id = u.user_id;