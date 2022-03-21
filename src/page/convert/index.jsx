import React, { useState } from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { urls } from '../../utils/api';
import { pdf_to_image} from './api'



const Convert = () => {
    const [filename, setFilename] = useState();
    const [zipName, setZipName] = useState();

    const onConvert = () => {
        pdf_to_image(filename)
        setFilename()
    }
    const props = {
        action: urls.upload,
        onChange({ file, fileList }) {
            if (file.status === 'done') {
              console.log(file, fileList);
              setFilename(file.response)

            }
          },
    }

    return (
        <div className="App">
        <Upload {...props}>
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
      {
          filename && <Button onClick={onConvert}>转为PNG</Button>
      }
      </div>
    )
};

export default Convert;