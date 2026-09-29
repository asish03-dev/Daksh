import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

/**
 * CodeBlock — renders a fenced code block with a copy button.
 */
function CodeBlock({ children, className }) {
  const [copied, setCopied] = useState(false);
  const code = String(children).replace(/\n$/, "");
  const language = className ? className.replace("language-", "") : "code";

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-3 rounded-xl overflow-hidden border border-slate-700">
      {/* Header bar */}
      <div
        className="flex items-center justify-between px-4 py-2"
        style={{ background: "#1E293B", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <span className="text-2xs font-mono text-slate-400 uppercase tracking-wider">
          {language}
        </span>
        <button
          onClick={handleCopy}
          aria-label="Copy code"
          className="flex items-center gap-1.5 text-2xs text-slate-400 hover:text-white transition-colors duration-100"
        >
          {copied ? (
            <Check size={12} className="text-emerald-400" />
          ) : (
            <Copy size={12} />
          )}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
      {/* Code body */}
      <pre
        className="overflow-x-auto p-4 text-xs leading-relaxed"
        style={{ background: "#0D1117", color: "#E2E8F0", fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}

/**
 * MarkdownRenderer — renders AI response text as proper markdown.
 * Uses the `.prose-chat` CSS class defined in index.css.
 */
export default function MarkdownRenderer({ content }) {
  return (
    <div className="prose-chat">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Custom code block with copy button
          code({ node, className, children, ...props }) {
            const hasLang = /language-(\w+)/.test(className || "");
            const isMultiline = String(children).includes("\n");
            if (!hasLang && !isMultiline) {
              return (
                <code className="font-mono text-xs bg-slate-100 dark:bg-slate-800 text-orange dark:text-orange-light px-1.5 py-0.5 rounded" {...props}>
                  {children}
                </code>
              );
            }
            return <CodeBlock className={className}>{children}</CodeBlock>;
          },
          // Ensure pre doesn't double-wrap
          pre({ children }) {
            return <>{children}</>;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
