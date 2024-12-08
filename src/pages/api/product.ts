import getProduct from "@/service/getProduct";
import { ProductDetail } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: ProductDetail[]
}

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<Data>
){
  const { data } = await getProduct();

  res.status(200).json({
    data
  });
}