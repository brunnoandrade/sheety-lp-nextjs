import { NextRequest, NextResponse } from "next/server";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { headers } from "next/headers";

// Cache para rate limiting
const ipRequests = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 3600000; // 1 hora em millisegundos
const MAX_REQUESTS_PER_WINDOW = 5; // máximo de 5 requisições por IP por hora

function isValidEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const requestData = ipRequests.get(ip);

  if (!requestData) {
    ipRequests.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (now - requestData.timestamp > RATE_LIMIT_WINDOW) {
    // Reset se passou da janela de tempo
    ipRequests.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (requestData.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  requestData.count += 1;
  ipRequests.set(ip, requestData);
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Pegar IP real (mesmo atrás de proxy)
    const headersList = await headers();
    const forwardedFor = headersList.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0] : "unknown";

    // Verificar rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const body = await request.json();
    const { email } = body;

    // Validar email
    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Salvar no Firestore com dados do cliente
    const userAgent = request.headers.get("user-agent") || "unknown";

    await addDoc(collection(db, "leads"), {
      email,
      createdAt: new Date(),
      ip,
      userAgent,
      referrer: request.headers.get("referer") || "unknown",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving lead:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
