async function detectBlobType(blob) {
    const reader = new FileReader();
    return new Promise((resolve) => {
        reader.onload = function (event) {
            const bytes = new Uint8Array(event.target.result);
            if (bytes[0] === 0xFF && bytes[1] === 0xD8) {
                resolve('JPEG');
            } else if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4E &&
                bytes[3] === 0x47) {
                resolve('PNG');
            } else {
                const text = new TextDecoder().decode(bytes);
                if (text.trim().startsWith('<svg')) {
                    resolve('SVG');
                } else {
                    resolve('Unknown');
                }
            }
        };
        reader.readAsArrayBuffer(blob); // Read the blob as an ArrayBuffer
    });
}

module.exports = {
    detectBlobType
};