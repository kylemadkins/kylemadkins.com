"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Code({
  language,
  code,
}: {
  language: string;
  code: string;
}) {
  return (
    <div className="my-16 border-y-[1px] border-borderColor py-16">
      <div className="mx-auto max-w-[63rem]">
        <SyntaxHighlighter
          className="code text-sm"
          language={language}
          style={nightOwl}
          showLineNumbers
          lineNumberStyle={{
            color: "var(--border-color)",
            borderRight: "1px solid var(--border-color)",
            width: "3rem",
            marginRight: "1rem",
            paddingRight: "1rem",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
