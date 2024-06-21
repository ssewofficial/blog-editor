import React, { useEffect, useState } from "react";
import EditorJS from "@editorjs/editorjs";

const Editor = () => {
  //   const ref = React.useRef<EditorJS>();
  const [isMounted, setIsMounted] = useState<boolean>();
  const _titleRef = React.useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  const initializeEditor = React.useCallback(() => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    // @ts-ignore
    const Header = (await import("@editorjs/header")).default;
    // @ts-ignore
    const Embed = (await import("@editorjs/embed")).default;
    // @ts-ignore
    const Table = (await import("@editorjs/table")).default;
    // @ts-ignore
    const List = (await import("@editorjs/list")).default;
    // @ts-ignore
    const Code = (await import("@editorjs/code")).default;
    // @ts-ignore
    const InlineCode = (await import("@editorjs/inline-code")).default;
    // @ts-ignore
    const ImageTool = (await import("@editorjs/image")).default;
    if (!isMounted) {
      return;
    }
  });

  initializeEditor();

  return <div id="editot" className="min-h-[50%]"></div>;
};

export default Editor;
