const signInPageUrl = (redirectTo) => {
    let url = `/signin`;
    if (redirectTo) {
        url += '?continue=' + redirectTo;
    }
    return url;
};
const _signInPageUrl = signInPageUrl;
export { _signInPageUrl as signInPageUrl };

