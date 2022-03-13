import React, { useState } from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './App.css';
import { convert } from './utils/api'



const App = () => {
    const [filename, setFilename] = useState();
    const [zipName, setZipName] = useState();

    const onConvert = () => {
        convert(filename, zipName)
        setFilename()
    }
    const props = {
        action: '/api/upload/',
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

export default App;