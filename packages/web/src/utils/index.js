export const encodeKeys = async (key1, key2) => {
    return new Promise(resolve => {
        var data = {"key1":key1,"key2":key2};
        resolve(Buffer.from(JSON.stringify(data)).toString("base64"));
    });
}

export const decodeKeys = async (encoded) => {
    return new Promise(resolve => {
        let buff = Buffer.from(encoded, 'base64');  
        let data = JSON.parse(buff.toString('utf-8'));
        resolve([data.key1,data.key2]);
    });
}