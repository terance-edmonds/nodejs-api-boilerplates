const originsList = ['http://localhost:3000'];

export default (origin: string | undefined, callback: (error: any, state: boolean) => void) => {
    if (!origin) return callback(null, true); // for * origins

    const origins = Object.values(originsList);
    let result = origins.find((url) => extractHostname(url) == extractHostname(origin));

    if (result || !origin) {
        callback(null, true);
    } else {
        callback(
            `The CORS policy for this site does not allow access from the specified Origin.(${origin})`,
            false
        );
    }
};

const extractHostname = (url: string) => {
    if (!url) return '';

    let hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf('//') > -1) {
        hostname = url.split('/')[2];
    } else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
};
