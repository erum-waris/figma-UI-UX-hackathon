import { client } from "@/sanity/lib/client";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    try {
      const body = await req.json();
      const {
        name,
        email,
        address,
        city,
        postalCode,
        country,
        phone,
        orderItems,
        totalAmount,
      } = body;

      // Create a new order document
      const order = await client.create({
        _type: "order",
        Name: name,
        email,
        address,
        city,
        postalCode,
        country,
        phone,
        orderItems,
        totalAmount,
        status: "pending", // default status
      });
     

      return Response.json({ success: true, order }, { status: 200 });
    } catch (error) {
      console.error(error);
      return Response.json({ success: false, error: "Failed to save order" }, { status: 500 });
    }
  } else {
    return Response.json({ success: false, error: "Method not allowed" }, { status: 405 });
  }
}