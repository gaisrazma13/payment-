export default function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    console.log("Webhook masuk:", data);

    if (data.status === "PAID") {
      console.log("Pembayaran sukses!");
    }

    res.status(200).send("OK");
  }
}