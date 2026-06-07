import React from "react";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-zinc-950 text-zinc-100 font-sans px-4">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Warning Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-red-500/10 rounded-full blur-xl" />
            <AlertCircle className="relative h-16 w-16 text-red-500/80" />
          </div>
        </div>

        {/* 404 Header */}
        <div className="space-y-2">
          <h1 className="text-6xl font-bold tracking-tight text-white">404</h1>
          <h2 className="text-xl font-medium text-zinc-300">Page Not Found</h2>
        </div>

        {/* System Error Message */}
        <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mx-auto">
          The requested URL was not found on this server. That’s all we know.
        </p>

        {/* Subtle separator */}
        <div className="pt-6 border-t border-zinc-900 w-full text-xs text-zinc-700">
          HTTP Error 404 (Not Found)
        </div>
      </div>
    </div>
  );
}
