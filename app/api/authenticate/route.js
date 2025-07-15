import { NextResponse } from "next/server";
import { createClient } from "@deepgram/sdk";

export async function POST() {
  // Hardcoded API key for Cloudflare deployment
  const DEEPGRAM_API_KEY = "2e02d835716495cd0e50c81cfe5d2cee948a0dce";
  
  try {
    console.log("🔑 Creating Deepgram client with API key");
    const deepgram = createClient(DEEPGRAM_API_KEY);
    
    console.log("🎫 Requesting token from Deepgram");
    const { result: token, error: tokenError } = await deepgram.auth.grantToken();
    
    if (tokenError) {
      console.error("❌ Token error:", tokenError);
      return NextResponse.json({ error: "Failed to create token", details: tokenError }, { status: 500 });
    }
    
    console.log("✅ Token created successfully:", token);
    return NextResponse.json({ key: token.access_token });
  } catch (error) {
    console.error("❌ Error creating token:", error);
    return NextResponse.json({ error: "Failed to create token", message: error.message }, { status: 500 });
  }
}
