# Detect mention deleting

If you're using [node views](https://tiptap.dev/docs/editor/guide/node-views) you can know when a specific mention is being deleted using the React/Vue component life cycle.

By extending the Mention extension you can add a node view and customize the parse and render html:

```tsx
import { default as MentionExtension } from "@tiptap/extension-mention";
import { ReactNodeViewRenderer, mergeAttributes } from "@tiptap/react";
import { Mention } from "../components/Mention";

export const CustomMention = MentionExtension.extend({
  addNodeView() {
    return ReactNodeViewRenderer(Mention);
  },
  parseHTML() {
    return [
      {
        tag: "mention-component",
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["mention-component", mergeAttributes(HTMLAttributes)];
  },
});
```

Inside your new metion node view component you can use a `useEffect` to know if the mention was deleted:

```tsx
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
```
