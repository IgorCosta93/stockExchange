export function formatDate(date){
    if(date){
        let year = date.substring(0, 4);
        let month = date.substring(5, 7);
        let day = date.substring(8, 10);
        return `${day}/${month}/${year}`;
    }
}

export function formatDate2(date){
    if(date){
        let year = date.substring(0, 4);
        let month = date.substring(5, 7);
        let day = date.substring(8, 10);
        return `${year}-${month}-${day}`;
    }else return date
}

export function formatDateAndTime(date){
    let year = date.substring(0, 4);
    let month = date.substring(5, 7);
    let day = date.substring(8, 10);
    return `${day}/${month}/${year} - ${date.substring(11, 19)}`;
}

export function formatDateBR(date){
    if(date){
        let year = date.substring(0, 4);
        let month = date.substring(5, 7);
        let day = date.substring(8, 10);
        return `${day}-${month}-${year}`;
    }
}

export function formatDateBRWithHour(date){
    if(date){
        let year = date.substring(0, 4);
        let month = date.substring(5, 7);
        let day = date.substring(8, 10);

        let hour = date.substring(11, 13);
        let minutes = date.substring(14, 16);
        return `${day}-${month}-${year} - ${hour}:${minutes}`;
    }
}

export function formatDateEditMoment(date){
    if(date){
        let year = date.substring(0, 4);
        let month = date.substring(5, 7);
        let day = date.substring(8, 10);
        return `${month}/${day}/${year}`;
    }
}