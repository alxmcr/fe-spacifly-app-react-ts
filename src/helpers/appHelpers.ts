import { Launch } from "../@types/appTypes";

export function getRandomInt(min: number = 10000, max: number = 999999) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
    }
    return new Intl.DateTimeFormat('en-US', options).format(date)
}

export const convertStringToDate = (date: string): Date => {
    const [year, month, day] = date.split('-');
    return new Date(Number(year), Number(month) - 1, Number(day));
}

export const convertUnixTimestampToDate = (unixTimestamp: number = 0): Date => {
    return new Date(unixTimestamp * 1000);
}

export const convertUTCDateTimeToDate = (utcString: string = ''): Date => {
    return new Date(utcString);
}

export const formatMsToStr = (utcString: string = ''): string => {
    return formatDate(convertUTCDateTimeToDate(utcString));
}

export const convertMoneyToString = (money: number = 0): string => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(money);
}

export const getTotalLaunchBookings = (launches: Launch[]) => {
    return launches.reduce((total, launch) => {
        return total + Number(launch.ticketCostUSD);
    }, 0);
}
