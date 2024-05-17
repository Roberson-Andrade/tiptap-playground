import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { suggestion } from "./utils/suggestion";
import { CustomMention } from "./extensions/CustomMention";

export const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CustomMention.configure({
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
    <div className="w-full h-full flex items-center justify-center">
      <EditorContent editor={editor} />
    </div>
  );
};
