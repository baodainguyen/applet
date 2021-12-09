import React, { useEffect } from 'react';

export function isEmail(email) {
    email = !email ? '' : String(email).toLowerCase();
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export function isEmpty(str) {
    if (!str) return true;
    return str.trim() === '';
}

export function isEqualLowCase(txt1, txt2) {
    txt1 = txt1.trim().toLowerCase();
    txt2 = txt2.trim().toLowerCase();
    return txt1 === txt2;
}

export function getAverageRGB(imgEl) {
    var blockSize = 5, // only visit every 5 pixels
        defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height,
        i = -4,
        length,
        rgb = { r: 0, g: 0, b: 0 },
        count = 0;

    if (!context) {
        return defaultRGB;
    }

    height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

    context.drawImage(imgEl, 0, 0);

    try {
        data = context.getImageData(0, 0, width, height);
    } catch (e) {
        /* security error, img on diff domain *///alert('x');
        return defaultRGB;
    }

    length = data.data.length;

    while ((i += blockSize * 4) < length) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i + 1];
        rgb.b += data.data[i + 2];
    }

    // ~~ used to floor values
    rgb.r = ~~(rgb.r / count);
    rgb.g = ~~(rgb.g / count);
    rgb.b = ~~(rgb.b / count);

    return rgb;
}
export function getLuminanceFrom(r, g, b) {
    const luminance = .2126 * r + .7152 * g + .0722 * b;
    console.log(luminance)
    if (luminance < 221)
        return ('white');
    return ('black');
}

export function BootStrapJs() {

    useEffect(() => {
        const script = document.createElement('script');

        script.src = "bootstrapjs.bundle.js";
        script.async = true;

        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []) // empty dependency array = only called on mount and unmount
    return (<></>);
}
