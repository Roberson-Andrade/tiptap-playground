import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { suggestion } from "./utils/suggestion";
import { VariablesExtension } from "./extensions/variableExtension";
import { VariablesContextProvider } from "./context/VariablesProvider";
import { useState } from "react";
import { Button } from "../ui/button";

export const TiptapEditor = () => {
  const [parseVariables, setParseVariables] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      VariablesExtension.configure({
        suggestion,
      }),
    ],
    content: "<p>Hello World!</p>",
    editorProps: {
      attributes: {
        class:
          "h-[60vh] w-[60vw] prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
      },
    },
  });

  return (
    <VariablesContextProvider parseVariables={parseVariables}>
      <div className="w-full h-full flex items-center justify-center">
        <EditorContent editor={editor} />

        <Button onClick={() => setParseVariables(!parseVariables)}>
          Toggle preview
        </Button>
      </div>
    </VariablesContextProvider>
  );
};
