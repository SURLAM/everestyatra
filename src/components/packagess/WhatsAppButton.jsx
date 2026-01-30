"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+14168764277"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-9999
        bg-green-600 hover:bg-green-500
        text-white
        w-10 h-10
        rounded-full
        flex items-center justify-center
        shadow-2xl
        transition
      "
      aria-label="Talk to a Trek Expert"
    >
      <MessageCircle size={22} />
    </a>
  );
}
