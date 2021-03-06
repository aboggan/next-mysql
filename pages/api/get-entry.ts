import { NextApiHandler } from "next";
import { query } from "../../lib/db";
import Cors from "cors";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});
// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

const handler: NextApiHandler = async (req, res) => {
  const { id } = req.query;
  try {
    if (!id) {
      return res.status(400).json({ message: "`id` required" });
    }
    if (typeof parseInt(id.toString()) !== "number") {
      return res.status(400).json({ message: "`id` must be a number" });
    }
    const results = await query(
      `
      SELECT id, title, content
      FROM entries
      WHERE id = ?
    `,
      id
    );
        // Run the middleware
   await runMiddleware(req, res, cors)
    return res.json(results[0]);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
