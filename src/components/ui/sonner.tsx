import React, { useEffect, useRef } from "react";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const markToasts = () => {
      const toasts = container.querySelectorAll<HTMLElement>(".toast");
      toasts.forEach((t) => {
        if (!t.hasAttribute("data-testid")) {
          t.setAttribute("data-testid", "toast");
        }
      });
    };

    markToasts();

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((n) => {
          if (n instanceof HTMLElement) {
            if (n.classList.contains("toast")) {
              if (!n.hasAttribute("data-testid")) n.setAttribute("data-testid", "toast");
            }

            // also mark any .toast descendants inside the added node
            const descendants = n.querySelectorAll?.(".toast") ?? [];
            descendants.forEach((d: Element) => {
              if (d instanceof HTMLElement && !d.hasAttribute("data-testid")) d.setAttribute("data-testid", "toast");
            });
          }
        });
      }
    });

    observer.observe(container, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} data-testid="toaster-container">
      <Sonner
        className="toaster group"
        toastOptions={{
          classNames: {
            toast:
              "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
            description: "group-[.toast]:text-muted-foreground",
            actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
            cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          },
        }}
        {...props}
      />
    </div>
  );
};

export { Toaster };
