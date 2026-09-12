"use client";

import { useState } from "react";
import { faqs } from "@/lib/siteContent";

export default function Faq() {
  const [open, setOpen] = useState<number>(0);
  return (
    <div>
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div className="acc__item" key={i} data-open={isOpen}>
            <button
              className="acc__trigger"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span>{item.q}</span>
              <span className="acc__sign" aria-hidden="true">
                +
              </span>
            </button>
            {isOpen && <p className="acc__panel su-text-body-md">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
