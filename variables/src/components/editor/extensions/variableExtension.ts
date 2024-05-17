import { default as MentionExtension } from "@tiptap/extension-mention";
import { ReactNodeViewRenderer, mergeAttributes } from "@tiptap/react";
import { Variable } from "../components/Variable";

export const VariablesExtension = MentionExtension.extend({
  addNodeView() {
    return ReactNodeViewRenderer(Variable);
  },
  parseHTML() {
    return [
      {
        tag: "variable-component",
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["variable-component", mergeAttributes(HTMLAttributes)];
  },
});
