export function vaidateEmail(email){
    const re = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
    return re.test(String(email).toLowerCase());
};