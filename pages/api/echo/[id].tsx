import { NextApiRequest, NextApiResponse } from "next";

export default function getById(req:NextApiRequest, res:NextApiResponse) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send(req.query.id);
}
