export function toCamelCase(str) {
    return str
        .split(/[\s_-]+/)
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            } else {
                return (
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                );
            }
        })
        .join("");
}
