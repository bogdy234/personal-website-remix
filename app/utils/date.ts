export function formatDate(date: Date) {
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = new Date(date).toLocaleDateString("en-US", options);

    const day = new Date(date).getDate();
    let daySuffix;
    if (day === 1 || day === 21 || day === 31) {
        daySuffix = "st";
    } else if (day === 2 || day === 22) {
        daySuffix = "nd";
    } else if (day === 3 || day === 23) {
        daySuffix = "rd";
    } else {
        daySuffix = "th";
    }

    const formattedDateWithSuffix = formattedDate.replace(`${day}`, `${day}${daySuffix}`);

    return formattedDateWithSuffix;
}
