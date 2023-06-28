import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";
import Paragraph from "../Text/Paragraph";
import "./Wysiwyg.css";

type WysiwygProps = {
  field: string;
  formik: any;
};

const Wysiwyg = ({ field, formik }: WysiwygProps) => {
  const [editor, setEditor] = useState(null); // Estado para almacenar el editor
  const [currentLength, setCurrentLength] = useState(0);

  const editorConfig = {
    placeholder: "!Dinos los pasos para hacer tu receta!",
    toolbar: {
      items: [
        "bold",
        // "fontFamily",
        "italic",
        "underline",
        "strikethrough",
        // "highlight",
        // "alignment",
        "|",
        "numberedList",
        "bulletedList",
        "|",
        "fontSize",
        "|",
        // "heading",

        // "indent",
        // "outdent",
        // "link",
        // "blockQuote",
        // "insertTable",
        // "mediaEmbed",
        "undo",
        "redo",
      ],
      shouldNotGroupWhenFull: true,
    },
    language: "es",
    fontSize: {
      options: [10, 12],
    },
  };

  return (
    <div className="wysiwyg-container">
      {/* <Toolbar editor={editor ? editor : null} /> */}
      {/* <div className="toolbar"></div> */}
      <CKEditor
        editor={DecoupledEditor}
        config={editorConfig}
        data={formik.values[field]}
        onReady={(editor: any) => {
          // Guarda una referencia al editor para utilizarlo en el componente Toolbar
          setEditor(editor);

          editor.ui
            .getEditableElement()
            .parentElement.insertBefore(
              editor.ui.view.toolbar.element,
              editor.ui.getEditableElement()
            );
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          formik.setFieldValue(field, data);
          setCurrentLength(data.length);
        }}
        // onBlur={(event, editor) => {
        //   console.log("Blur.", editor);
        // }}
        // onFocus={(event, editor) => {
        //   console.log("Focus.", editor);
        // }}
      />
      <div className="flex w-full items-center justify-end">
        <Paragraph
          className={`mb-1 mr-10 pt-2 text-[12px] ${
            currentLength <= 5000 ? "text-gray" : "text-danger"
          }`}
        >
          {currentLength > 0 ? "Caracteres: " : ""}
          {currentLength} / 5000
        </Paragraph>
      </div>
    </div>
  );
};

export default Wysiwyg;
