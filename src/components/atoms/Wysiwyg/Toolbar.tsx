import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";

type ToolbarProps = {
  editor: DecoupledEditor | null;
};

const Toolbar = ({ editor }: ToolbarProps) => {
  if (!editor) return null;
  const handleBoldClick = () => {
    editor.execute("bold");
  };

  const handleItalicClick = () => {
    editor.execute("italic");
  };

  const handleUnderlineClick = () => {
    editor.execute("underline");
  };

  const handleStrikethroughClick = () => {
    editor.execute("strikethrough");
  };

  const handleUndoClick = () => {
    editor.execute("undo");
  };

  const handleRedoClick = () => {
    editor.execute("redo");
  };

  return (
    <div className="toolbar">
      {/* <button onClick={handleBoldClick}>Bold</button>
      <button onClick={handleItalicClick}>Italic</button>
      <button onClick={handleUnderlineClick}>Underline</button>
      <button onClick={handleStrikethroughClick}>Strikethrough</button>
      <button onClick={handleUndoClick}>Undo</button>
      <button onClick={handleRedoClick}>Redo</button> */}
    </div>
  );
};

export default Toolbar;
