import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

interface Product {
  name: string;
  price: number;
  image?: {
    asset?: {
      url: string;
    };
  };
}

interface CartItem {
  product: Product;
  quantity?: number;
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
console.log("Stripe Secret Key:", process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
  try {
    const { amount, cart } = await req.json();
    console.log("Received Data:", { amount, cart });
    if (amount) {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100,
        currency: "usd",
        automatic_payment_methods: { enabled: true },
      });
      return NextResponse.json({ client_secret: paymentIntent.client_secret });
    }

    if (cart?.length) {
      const lineItems = cart.map((item:CartItem) => ({
        price_data: {
          currency: "gbp",
          product_data: { name: item.product.name, images: [item.product.image?.asset?.url || ""] },
          unit_amount: Math.round(item.product.price * 100),
        },
        quantity: item.quantity || 1,
      }));

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
      });

      return NextResponse.json({ url: session.url });
    }

    return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
  } catch (error) {
    console.error("Stripe API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
