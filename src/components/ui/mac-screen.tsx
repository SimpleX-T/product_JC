import { ReactNode } from "react";

export default function MacScreen({
  content,
  title = "",
  isCode,
  borderColor = "transparent",
  isWindowFocused = true,
}: {
  content: string | ReactNode;
  title?: string;
  isCode: boolean;
  borderColor?: string;
  isWindowFocused?: boolean;
}) {
  return (
    <div
      className={`bg-[${borderColor}] rounded-lg p-4 border border-white/10`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div
            className={`w-3 h-3 rounded-full mr-2 ${
              isWindowFocused ? "bg-red-500" : "bg-gray-700"
            }`}
          />
          <div
            className={`w-3 h-3 rounded-full mr-2 ${
              isWindowFocused ? "bg-yellow-500" : "bg-gray-700"
            }`}
          />
          <div
            className={`w-3 h-3 rounded-full mr-2 ${
              isWindowFocused ? "bg-green-500" : "bg-gray-700"
            }`}
          />
        </div>
        <div className="text-white/60 text-xs">{title}</div>
      </div>

      {isCode ? (
        <pre className="text-white/80 text-xs font-mono overflow-x-auto">
          <code>{`${content}`}</code>
        </pre>
      ) : (
        <>{content}</>
      )}
    </div>
  );
}
