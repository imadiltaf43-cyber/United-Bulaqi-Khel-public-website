// C-07: Use environment variable — no more hardcoded localhost
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";


export function getImageUrl(image) {

    if (!image) {
        return "/api/placeholder-image.svg";
    }

    // Already a URL
    if (typeof image === "string") {

        if (image.startsWith("http")) {
            return image;
        }

        return `${API_URL}/${image.replace(/\\/g, "/")}`;
    }

    // Object support
    if (typeof image === "object") {

        if (image.url) {
            return image.url;
        }

        if (image.path) {
            return `${API_URL}/${image.path.replace(/\\/g, "/")}`;
        }

        if (image.secure_url) {
            return image.secure_url;
        }
    }

    return "/api/placeholder-image.svg";

}