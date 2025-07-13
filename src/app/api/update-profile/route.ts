// app/api/update-profile/route.ts

import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { customer_id, phone, username, email } = body;

    // Check if user exists
    const { data: user, error: userError } = await supabaseAdmin
      .from("users")
      .select("*")
      .eq("customer_id", customer_id)
      .eq("phone", phone)
      .single();

    if (userError || !user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const { error } = await supabaseAdmin
      .from("users")
      .update({ username, email })
      .eq("id", user.id);

    if (error) {
      return NextResponse.json(
        { error: "Failed to update user" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error updating profile:", err);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
