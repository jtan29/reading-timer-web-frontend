export function convertGenre(string) {
    switch (string) {
        case ("GENERAL"): {
            return "Fiction book";
        }
        case ("YA"): {
            return "Young adult book";
        }
        case ("GRAPHIC"): {
            return "Graphic novel";
        }
        case ("CHILDREN"): {
            return "Children's book";
        }
        case ("SHORT_STORY"): {
            return "Short story";
        }
        case ("OTHER"): {
            return "Any other fictional material";
        }
        case ("ARTICLE"): {
            return "Non-fiction article";
        }
        case ("TEXTBOOK"): {
            return "Textbook or other educational book";
        }
        case ("MEMOIR"): {
            return "Memoir, biography, or autobiography";
        }
        case ("SELF_HELP"): {
            return "Self-help book";
        }
        default:
            return "Any other fictional material";
    }
}

export function calcReadingSpeed(wordCount, elapsedTime) {
    const elapsedMinutes = elapsedTime / 60;
    return Math.round(wordCount / elapsedMinutes);
}