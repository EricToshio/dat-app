
const encodeKeys = async (key1, key2) => {
    return new Promise(resolve => {
        const data = {
            "key1": key1,
            "key2":key2,
        };
        const dataString = JSON.stringify(data);
        const dataBase64 = Buffer.from(dataString).toString('base64');
        resolve(dataBase64);
    });
}

const decodeKeys = async (encoded) => {
    return new Promise(resolve => {
        let dataString = Buffer(encoded, 'base64').toString('utf-8');  
        let data = JSON.parse(dataString);
        resolve(
            {
                datKey1: data.key1,
                datKey2: data.key2,
            }
        );
    });
}

exports.encodeKeys = encodeKeys;
exports.decodeKeys = decodeKeys;
