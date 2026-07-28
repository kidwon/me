"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";

// Convex serves HTTP actions on .convex.site (the .convex.cloud URL is for
// queries/mutations); NEXT_PUBLIC_CONVEX_URL is baked in at build time.
const CONVEX_SITE_URL = (process.env.NEXT_PUBLIC_CONVEX_URL ?? "").replace(
  /\.convex\.cloud$/,
  ".convex.site",
);

export default function Chat() {
  const { lang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const messagesRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: `${CONVEX_SITE_URL}/api/chat` }),
  });

  const busy = status === "streaming" || status === "submitted";

  useEffect(() => {
    const el = messagesRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, status]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    sendMessage({ text }, { body: { lang } });
    setInput("");
  }

  return (
    <>
      {open && (
        <div className="chat-panel" role="dialog" aria-label={t("chat.title")}>
          <div className="chat-head">
            <span className="chat-file">{t("chat.title")}</span>
            <button
              className="chat-close"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>
          <div className="chat-messages" ref={messagesRef}>
            <div className="chat-msg chat-msg-assistant">{t("chat.greeting")}</div>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chat-msg chat-msg-${message.role === "user" ? "user" : "assistant"}`}
              >
                {message.parts
                  .filter((part) => part.type === "text")
                  .map((part, i) => (
                    <span key={i}>{part.text}</span>
                  ))}
              </div>
            ))}
            {status === "submitted" && (
              <div className="chat-status">{t("chat.thinking")}</div>
            )}
          </div>
          {error && <div className="chat-error">{t("chat.error")}</div>}
          <form className="chat-form" onSubmit={handleSubmit}>
            <input
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t("chat.placeholder")}
              maxLength={500}
            />
            <button className="chat-send" type="submit" disabled={busy || !input.trim()}>
              {t("chat.send")}
            </button>
          </form>
          <div className="chat-disclaimer">{t("chat.disclaimer")}</div>
        </div>
      )}
      <button
        className="chat-fab"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="fab-dot" aria-hidden="true" />
        {t("chat.open")}
      </button>
    </>
  );
}
