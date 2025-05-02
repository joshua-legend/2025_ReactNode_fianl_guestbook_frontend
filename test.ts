// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { useAuthStore } from "./store/authStore";

// 1) 실제 미들웨어 함수
export function middleware(req: NextRequest) {
  // 요청된 경로와 시간을 콘솔에 출력
  console.log(`[Middleware] ${new Date().toISOString()} → ${req.nextUrl.pathname}`);
  const { accessToken } = useAuthStore();
  if (!accessToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  // 기본 동작: 다음 핸들러로 진행
  return NextResponse.next();
}

// 2) matcher 설정: '/test'로 시작하는 경로에만 적용
export const config = {
  matcher: ["/write/:path*"],
};
