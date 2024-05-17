import { cn } from "@/lib/utils";
import { NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import { useVariablesContext } from "../../context/useVariablesContext";

export function Variable(props: NodeViewProps) {
  const { parseVariables, values } = useVariablesContext();
  return (
    <NodeViewWrapper className="inline w-fit">
      <span
        className={cn(
          "rounded bg-neutral-700 px-1 py-0.5 text-custom-primary-100"
        )}
      >
        {parseVariables
          ? values?.find((value) => value.id === props.node.attrs.id)?.value ??
            `variable not found`
          : `@${props.node.attrs.label}`}
      </span>
    </NodeViewWrapper>
  );
}
