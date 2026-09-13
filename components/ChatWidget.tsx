"use client";

import { useEffect, useRef } from "react";

const N8N_WEBHOOK_URL = "https://n8n.vantriqai.com/webhook/678305e8-7b54-4a7f-9a04-4662389631b2/chat";

export default function ChatWidget() {
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    let app: { unmount: () => void } | undefined;
    (async () => {
      const { createChat } = await import("@n8n/chat");
      app = createChat({
        webhookUrl: N8N_WEBHOOK_URL,
        target: "#n8n-chat",
        mode: "window",
        showWelcomeScreen: false,
        initialMessages: [
          "Hi, I'm the VantriqAI assistant — the same Website Agent module described on this site, answering live. Ask about modules, packages or industries, or tell me what your business needs and I'll set up a discovery call.",
        ],
        i18n: {
          en: {
            title: "VantriqAI Assistant",
            subtitle: "We're here to help",
            footer: "",
            getStarted: "New conversation",
            inputPlaceholder: "Type your question…",
            closeButtonTooltip: "Close",
          },
        },
      });
    })();

    return () => {
      app?.unmount();
      started.current = false;
    };
  }, []);

  return <div id="n8n-chat" />;
}
