

// Đây là Scan

import React, { useState, useEffect } from 'react';
import './index.css'; // Import your CSS file
import { Box } from "zmp-ui";
//cái này đ phải lỗi mà nhắc th

//khởi tạo giá trị




//Source
const App = () => {
    const [method, setMethod] = useState('upload');
    const [fileName, setFileName] = useState('');
    const [url, setUrl] = useState('');
    const [result, setResult] = useState('');
    const [outputType, setOutputType] = useState('image');
    const [labels, setLabels] = useState(false);
    const [stroke, setStroke] = useState('2'); // Default stroke value
    const [selectedApi, setSelectedApi] = useState(''); // Track selected API



    const handleFileChange = (e) => { 
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedApi) { 
            alert('Vui lòng chọn loại cây');
            return;
        }

        const settings = await getSettingsFromForm();

        try {
            const response = await fetch(settings.url, {
                method: settings.method,
                headers: { 'Content-Type': 'application/json' },
                body: settings.data,
            });
            const data = await response[settings.format === 'json' ? 'json' : 'blob']();

            if (settings.format === 'json') {
                setResult(JSON.stringify(data, null, 4));
            } else {
                const imageUrl = URL.createObjectURL(data);
                setResult(`<div class="zoom-container"><img src="${imageUrl}" alt="Result" class="zoom-image"/><div class="zoom-controls">Zoom</div></div>`);
            }
        } catch (error) {

        }
    };


    const getSettingsFromForm = async () => {
        const parts = [
            `${selectedApi}?api_key=LNwJ9wZ9UMWq7PGcnsrv` //đây là quả key trên roboflow
        ];

        const format = 'image';
        parts.push(`&format=${format}`);
        setOutputType(format);

        // Append labels and stroke if enabled
        parts.push(`&labels=on`);
        parts.push(`&stroke=3`);

        let xhr;
        if (format === 'image') {
            xhr = new XMLHttpRequest(); //Initialize object để gọi API
            xhr.responseType = 'arraybuffer';
        }

        const method = 'upload';
        if (method === 'upload') {
            const fileInput = document.getElementById('file');
            const file = fileInput.files[0];
            if (!file) return alert('Please select a file.');

            const base64image = await getBase64fromFile(file);
            return { url: parts.join(''), method: 'POST', data: base64image, xhr }; //bắt đầu gọi API Rest
        } else {
            const url = document.getElementById('url').value;
            if (!url) return alert('Please enter an image URL');

            parts.push(`&image=${encodeURIComponent(url)}`);
            return { url: parts.join(''), method: 'POST', xhr };
        }
    };

    const getBase64fromFile = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });


    //UI
    return (
        <div className="App" style={{ paddingTop: '70px'}}>
            <form id="inputForm" onSubmit={handleSubmit}>
                <div className="header">
                    <h1>Để logo vô cho anh</h1>
                </div>

                <div className="content">
                    <div className="content__grid">

                        {/* API Selection */}
                        <div className="col-12-m8">
                            <label className="input__label" htmlFor="apiSelect"> Chọn cây</label>
                            <select
                                id="apiSelect"
                                className="input"
                                onChange={(e) => setSelectedApi(e.target.value)}
                                value={selectedApi}
                            >
                                <option value="" > </option>
                                <option value="https://detect.roboflow.com/argritec/1">Cây Lúa</option>
                                <option value="https://detect.roboflow.com/argritec/2">Cây Cà Chua</option>
                            </select>
                        </div>

                        {/* File Upload */}
                        {method === 'upload' && (
                            <div className="col-12-m8" id="fileSelectionContainer">
                                <label className="input__label" htmlFor="file"></label>
                                <div className="flex">
                                    <input
                                        className="input input--left flex-1"
                                        type="text"
                                        id="fileName"
                                        value={fileName}
                                        disabled
                                    />
                                    <button
                                        id="fileMock"
                                        className="bttn right active"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById('file').click();
                                        }}
                                    >
                                        Tải ảnh
                                    </button>
                                </div>
                                <input
                                    style={{ display: 'none' }}
                                    type="file"
                                    id="file"
                                    onChange={handleFileChange}
                                />
                            </div>
                        )}

                        {/* URL Input */}
                        {method === 'url' && (
                            <div className="col-12-m8" id="urlContainer">
                                <label className="input__label" htmlFor="url"></label>
                                <div className="flex">
                                    <input
                                        type="text"
                                        id="url"
                                        placeholder="https://path.to/your.jpg"
                                        className="input"
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <button type="submit" className="bttn submit">
                    Gửi 
                </button>
            </form>

            <div id="output" className="result">
                {result && <div dangerouslySetInnerHTML={{ __html: result }} />}
            </div>

        </div>

    );
};

export default App;

