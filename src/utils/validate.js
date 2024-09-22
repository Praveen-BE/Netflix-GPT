
export const checkValidateData = (email, password)=>{
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    if(!emailPattern) return "Email Id Not Valid";
    if(!passwordRegex) return "Password is not Valid";
    return null;

}