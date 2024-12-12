export default function handler(req, res) {
  const ip = req.headers['x-real-ip'] || req.headers['x-forwarded-for'];
  console.log('IP address:', ip);
  console.log('All headers:', req.headers);

  res.status(200).json({ message: 'Hello from Vercel!' })
}