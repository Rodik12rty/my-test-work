import dayjs from "dayjs";

export const formatDate = (date: number | Date, format: string) => {

    const getDate = typeof date === 'number' 
        ? new Date(date)
        : date instanceof Date ? date : date;
        
    return dayjs(getDate).format(format);
};
