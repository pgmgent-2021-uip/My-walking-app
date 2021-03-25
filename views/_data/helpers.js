module.exports = {
    currentYear() {
        const today = new Date();
        return today.getFullYear();
    },
    currentDate() {
        const date = new Date();
        return `${date.getDay()} / ${date.getMonth()} / ${date.getFullYear()} @ ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }
    
}