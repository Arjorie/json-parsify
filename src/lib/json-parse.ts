export const safeJsonParse = (str: string = '', defaultVal: any = null): any => {
    let parseJson: any;
    try {
        parseJson = JSON.parse(str);
    } catch (err: any) {
        console.warn(err?.message);
        parseJson = defaultVal;
    }
    return parseJson;
}
