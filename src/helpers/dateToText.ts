const ONE_DAY = 86400000
const HOURS_IN_DAY = 12

function dateToText(date: string | number | Date): string {
    const now = new Date()
    const updatedAt = new Date(date)

    const nowDate = new Date(`${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`)
    const updatedDate = new Date(`${updatedAt.getMonth() + 1}/${updatedAt.getDate()}/${updatedAt.getFullYear()}`)
    const daysPassed = (nowDate.getTime() - updatedDate.getTime()) / ONE_DAY

    const day = daysPassed === 0 ? 'Today' : daysPassed === 1 ? 'Yesterday' : `${daysPassed} days ago`
    const time = convertTime(updatedAt)

    return `${day} at ${time}`
}

function convertTime(date: Date): string {
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const dateTime = hours > HOURS_IN_DAY ? 'pm' : 'am'
    const time =
        dateTime === 'pm'
            ? `${convertNumber(hours - HOURS_IN_DAY)}:${convertNumber(minutes)} ${dateTime}`
            : `${convertNumber(hours)}:${convertNumber(minutes)} ${dateTime}`

    return time
}

function convertNumber(num: number): string {
    return num < 10 ? `0${num}` : String(num)
}

export default dateToText
