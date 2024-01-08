export const passwordRule = (value:string) => {
    return(
        /[a-z]/.test(value|| "")&&
        /[A-Z]/.test(value|| "")&&
        /[1-7]/.test(value|| "")
    )
 }