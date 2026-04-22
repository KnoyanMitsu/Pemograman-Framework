// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { signUp } from "../../utils/db/servicesfirebase";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  alamat: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (!email || !email.includes("@")) {
      return res.status(400).json({
        name: "Email tidak valid atau wajib diisi",
        alamat: "",
      });
    }

    if (!password || password.length < 6) {
      return res.status(400).json({
        name: "Password minimal harus 6 karakter",
        alamat: "",
      });
    }

    await signUp(req.body, (result: { status: string; message: string }) => {
      if (result.status === "success") {
        res.status(200).json({ name: result.message, alamat: "" });
      } else {
        res.status(400).json({ name: result.message, alamat: "" });
      }
    });
  } else {
    res.status(405).json({ name: "Method not allowed", alamat: "" });
  }
}
