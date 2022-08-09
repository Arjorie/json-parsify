export const jsonParsify = (str: string | null | undefined, defaultVal: any = null): any => {
    let parsedJson: any;
    if (typeof str !== 'string' || str === '') return defaultVal;
    try {
        parsedJson = JSON.parse(str);
    } catch (err: any) {
        console.error(err?.message);
        parsedJson = defaultVal;
    }
    return parsedJson;
}
