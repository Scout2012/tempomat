import moment from 'moment'

export default {
    now(): Date {
        return new Date()
    },

    workWeek(): Array<string> {
        const current = moment().startOf('isoWeek')
        const allDates = []
        for (let count = 1; count < 6; count++) {
            allDates.push(current.format('YYYY-MM-DD'))
            current.add(1, 'day')
        }
        return allDates
    }
}
