export default function handler(req, res) {
  const { method } = req;
  console.log("method: ", method);

  res.status(200).json({ test: 'Testing API'});
}