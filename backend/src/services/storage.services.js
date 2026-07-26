const ImageKit = require("imagekit");

const imagekit = process.env.IMAGEKIT_PUBLIC_KEY && process.env.IMAGEKIT_PRIVATE_KEY && process.env.IMAGEKIT_URL_ENDPOINT
    ? new ImageKit({
        publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
        privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
        urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
    })
    : null;

async function uploadFile(file, fileName) {
    if (!file) {
        return { url: `https://placehold.co/600x600?text=${encodeURIComponent(fileName || 'food')}` };
    }

    if (!imagekit) {
        return { url: `https://placehold.co/600x600?text=${encodeURIComponent(fileName || 'food')}` };
    }

    try {
        const result = await imagekit.upload({
            file: file,
            fileName: fileName,
        })

        return result;
    } catch (err) {
        console.error('ImageKit upload failed', err.message)
        return { url: `https://placehold.co/600x600?text=${encodeURIComponent(fileName || 'food')}` };
    }
}

module.exports = {
    uploadFile
}