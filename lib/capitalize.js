const capitalize = (string) => {
    let firstLetter = string[0].toUpperCase();
    let stringTail = string.substring(1).toLowerCase();
    return `${firstLetter}${stringTail}`
}

export { capitalize }
