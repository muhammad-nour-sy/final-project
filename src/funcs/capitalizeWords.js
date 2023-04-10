export function capitalizeWords(str) {
    return str
        .split(" ")
        .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
        .join(" ");
}
