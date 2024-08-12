export const convertDate = (date) =>{

    const dd = new Date(date).getUTCDate()
    const mm = new Date(date).getUTCMonth()
    const yyyy = new Date(date).getUTCFullYear()

    return `${dd}-${mm+1}-${yyyy}`

}