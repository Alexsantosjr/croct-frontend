import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { FileUploaderImage } from "./FileUploaderImage/FileUploaderImage";

const fileTypes = ["JPG", "PNG"];

export function AvatarUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [active, setActive] = useState(false);
  const [uploaderDisableStatus, setUploaderDisableStatus] = useState(false)
  const [error, setError] = useState(false)
  const [volverActive, setVolverActive] = useState(false);

  const handleChange = (file: File, active: boolean) => {
    console.log(file, active);
    setFile(file);
    setUploaderDisableStatus(true)
    setActive(true);
    setVolverActive(true)
  };

  const handleError = () => {
    setError(true)
  }

  return (
    <div className="content">
      <FileUploader
        handleChange={handleChange}
        name="file"
        children={<FileUploaderImage
          error={error}
          setError={setError}
          file={file}
          active={active}
          setActive={setActive}
          setUploaderDisableStatus={setUploaderDisableStatus}
        />}
        disabled={uploaderDisableStatus}
        types={fileTypes}
        maxSize={5}
        multiple={false}
        onTypeError={handleError}
        onSizeError={handleError}
      />
    </div>
  );
}
