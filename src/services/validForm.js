export function validForm(data){
    let valid = true;

    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            if(data[key] === undefined) valid = false
        }
    }

    return valid
}