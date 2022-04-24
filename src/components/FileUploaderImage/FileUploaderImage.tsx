import { EditImageSave } from "../editImageSave/EditImageSave";
import { useState} from "react";
import "./FileUploaderImage.scss";

interface Props {
  file: File | null,
  active: boolean,
  setActive: (active: boolean) => void,
  error: boolean,
  setError: (error: boolean) => void,
  setUploaderDisableStatus: (uploaderDisableStatus: boolean) => void
}

export function FileUploaderImage({ file, active, setActive, error, setError, setUploaderDisableStatus}: Props) {

  const [profileImage, setProfileImage] = useState<string>("")

  const onCrop = (ref) => {
      const url = ref.current.getImageScaledToCanvas().toDataURL();
      setProfileImage(url);
      setActive(false);
      setError(false)
      setUploaderDisableStatus(false)
  }

  const [scaleValue, setScaleValue] = useState<number>(1)
  const onScaleChange = (scaleChangeEvent: any) =>{
    setScaleValue(parseFloat(scaleChangeEvent.target.value).toFixed(1))
  }

  return (
    <>
      {!active && (
          <>
            <div data-cy="upload-image" className={`upload-image ${file  ? 'active' : 'desactived'}`}>
              {profileImage && !error && <img src={profileImage} alt="" /> }
              {!error && (
                <div className="texts">
                  <h2>Organization Logo</h2>
                  <p>Drop the image here or click to browse</p>
                </div>
              )
              }
              {
                error && (
                  setUploaderDisableStatus(true),
                  <>
                    <div onClick={() => {setError(false), setUploaderDisableStatus(false)}}className="close"></div>
                    <div className="error">
                      <div className="image-error"></div>
                      <div className="text-error">
                        <p className="title-error">Sorry, the upload failed</p>
                        <p onClick={() => {setError(false), setUploaderDisableStatus(false)}} className="paragraph-error">Try again</p>
                      </div>
                    </div>
                  </>
                )
              }
            </div>
          </>
        )
      }
      {file && active && (
        <EditImageSave
          onCrop={onCrop}
          file={file}
          scaleValue={scaleValue}
          onScaleChange={onScaleChange}
          setError={setError}
          setActive={setActive}
          setUploaderDisableStatus={setUploaderDisableStatus}
        />
      )
      }
    </>
  )
}


