import React, { useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";
import Image from "./Components/ImageUpload/nio 192.png";

const MyEditor = () => {
  const [getimg, setgetimg] = useState(null);
  const editor = useRef(null);

  return (
    <div>
      <AvatarEditor
        ref={editor}
        image={Image}
        width={250}
        height={250}
        border={50}
        scale={1.2}
      />
      <button
        onClick={() => {
          if (editor) {
            // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
            // drawn on another canvas, or added to the DOM.
            const canvas = editor.current.getImage();

            // If you want the image resized to the canvas size (also a HTMLCanvasElement)
            const canvasScaled = editor.current.getImageScaledToCanvas();
            setgetimg(canvasScaled);
          }
        }}
      >
        Save
      </button>
      <img src={getimg} />
    </div>
  );
};

export default MyEditor;
