function getFormattedDate() {
    const date = new Date()
    const todayShortDate = (date).toLocaleDateString('en-US')
    const formattedTodayShortDate = todayShortDate.replaceAll('/', '-')
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    
    return `${formattedTodayShortDate}-${hours}-${minutes}-${seconds}`
}

module.exports = getFormattedDate
