// because the API returns an array like [12,18] for movies' genre, we need to create a switch function to translate those numbers into genre name
const genreSwitcher = (g) => {
    switch (g) {
        case 28:
            g = `Action`;
            break;
        case 12:
            g = `Adventure`;
            break;
        case 16:
            g = `Animation`;
            break;
        case 35:
            g = `Comedy`;
            break;
        case 80:
            g = `Thriller`;
            break;
        case 99:
            g = `Documentary`;
            break;
        case 18:
            g = `Drama`;
            break;
        case 10751:
            g = `Family`;
            break;
        case 14:
            g = `Fantasy`;
            break;
        case 36:
            g = `History`;
            break;
        case 27:
            g = `Horror`;
            break;
        case 10402:
            g = `Music`;
            break;
        case 9648:
            g = `Mystery`;
            break;
        case 10749:
            g = `Romance`;
            break;
        case 878:
            g = `Sci-Fi`;
            break;
        case 10770:
            g = `Telefilm`;
            break;
        case 53:
            g = `Thriller`;
            break;
        case 10752:
            g = `War`;
            break;
        case 37:
            g = `Western`;
            break;
        default:
            break;
    }
    return g;
};

export default genreSwitcher;