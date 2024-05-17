import { cn } from "@/lib/utils";
import { NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import { useEffect } from "react";

export function Mention(props: NodeViewProps) {
  useEffect(() => {
    return () => {
      console.log(`Mention ${props.node.attrs.label} deleted`);
    };
  }, []);

  return (
    <NodeViewWrapper className="inline w-fit">
      <span
        className={cn(
          "rounded bg-custom-primary-100/20 px-1 py-0.5 font-medium text-custom-primary-100"
        )}
      >
        @{props.node.attrs.label}
      </span>
    </NodeViewWrapper>
  );
}
