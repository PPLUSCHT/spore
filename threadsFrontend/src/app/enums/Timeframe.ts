export enum Timeframe{
    Today = 1,
    Week = 2,
    Month = 3,
    Year = 4,
    Alltime = 5
}

export function timeframeToString(t: Timeframe): string{
    switch(t){
        case Timeframe.Today:
            return "Today"
        case Timeframe.Week:
            return "Week"
        case Timeframe.Month:
            return "Month"
        case Timeframe.Year:
            return "Year"
        case Timeframe.Alltime:
            return "AllTime"
    }
}
