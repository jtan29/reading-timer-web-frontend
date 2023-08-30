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
            return "Other fictional material";
        }
        case ("ARTICLE"): {
            return "Non-fiction article";
        }
        case ("TEXTBOOK"): {
            return "Textbook/educational book";
        }
        case ("MEMOIR"): {
            return "Biographical book";
        }
        case ("SELF_HELP"): {
            return "Self-help book";
        }
        case ("NF_OTHER"): {
            return "Other non-fictional material"
        }
        default:
            return "Other fictional material";
    }
}

export function calcReadingSpeed(wordCount, elapsedTime) {
    if (elapsedTime === 0) {
        return wordCount;
    }
    const elapsedMinutes = elapsedTime / 60;
    return Math.round(wordCount / elapsedMinutes);
}