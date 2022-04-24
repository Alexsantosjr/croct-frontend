import { useRef } from 'react';
import { FileUploaderImage } from '../FileUploaderImage/FileUploaderImage';
import "./EditImageSave.scss";
import AvatarEditor from 'react-avatar-editor'

interface Props {
  file: File,
  scaleValue: number,
  onScaleChange: any,
  onCrop: (ref: any) => void,
  setError: (error: boolean) => void,
  setUploaderDisableStatus: (uploaderDisableStatus: boolean) => void,
  setActive: (active: boolean) => void,
}

export function EditImageSave({file, onCrop, scaleValue, onScaleChange, setError, setUploaderDisableStatus, setActive}: Props) {
  const avatarRef = useRef(null)

  return(
    <div className="content-edit-image">
      <div onClick={() => {setError(false), setUploaderDisableStatus(false), setActive(false)}} className="close"></div>
      <div className="content-edit">
        <div className="content-image">
          <AvatarEditor
            ref={avatarRef}
            image={file}
            width={114}
            height={114}
            border={0}
            scale={scaleValue}
            style={{borderRadius: '50%'}}
          />
          <div className="crop">
            <p>Crop</p>
            <input style={{ width: '100%' }} type="range" value={scaleValue} name="points" min="1" max="10" onChange={onScaleChange} />
            <button onClick={() => onCrop(avatarRef)} className="save">
                Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
