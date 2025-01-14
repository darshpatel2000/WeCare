module.exports = {
    validateValues: value => {
        if (value != undefined){
            return value
        } else{
            return ''
        }
    },
    customDate: date => {
        try {
            date = date.toLocaleDateString()
            date = date.split("/")
            date[0] = (date[0] > 9) ? date[0] : `0${date[0]}`
            date[1] = (date[1] > 9) ? date[1] : `0${date[1]}`
            date = `${date[2]}-${date[0]}-${date[1]}`
            return date
        } catch (error) {
            console.log(error)
        }
    }
    
}