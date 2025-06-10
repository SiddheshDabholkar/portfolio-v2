import React, { useEffect, useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

type CustomRichTextEditorProps = React.FC<{
  handleClick?: () => void;
  value: string;
  disabled: boolean;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}>;
const CustomRichTextEditor: CustomRichTextEditorProps = ({
  handleClick = () => {},
  value,
  setValue,
  disabled = false,
}) => {
  const editorRef = useRef(null);

  console.log("value", value);

  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    editable: disabled,
    editorProps: {
      handleKeyDown(_, event) {
        if (event.key === "Enter") {
          handleClick();
          return true;
        }
        return false;
      },
    },
    autofocus: true,
    onUpdate: ({ editor }) => {
      setValue!(editor.getText());
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getText()) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  return (
    <div
      ref={editorRef}
      className="border-none rounded p-2 resize-none overflow-auto max-h-[8rem] text-[0.8rem]" // Styling for max and min height
      style={{
        lineHeight: "1.5rem",
      }}
    >
      <EditorContent
        editor={editor}
        style={{
          border: "none",
          outline: "none",
          boxShadow: "none",
        }}
        className="focus:outline-none active:outline-none"
      />
    </div>
  );
};

export default CustomRichTextEditor;
