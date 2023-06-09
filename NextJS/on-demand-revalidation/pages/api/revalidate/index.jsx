export default async function handler(req, res) {
  if (req.query.secret !== process.env.SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    await res.revalidate('/test-static-page');
    return res.json({ revalidated: true });
  } catch (error) {
    console.log('error ==',error)
    return res.status(500).send(error.message);
  }
}

