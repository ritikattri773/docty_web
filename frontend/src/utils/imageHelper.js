/**
 * Normalizes image URLs from database
 * Handles various path formats:
 * - "frontend/src/assets/doc1.png" -> "/doctor/doc1.png"
 * - "src/assets/doc1.png" -> "/doctor/doc1.png"
 * - "/doctor/doc1.png" -> "/doctor/doc1.png" (already correct)
 * - Cloudinary URLs -> unchanged
 */
export const normalizeImagePath = (imagePath) => {
    if (!imagePath) {
        return '' // Return empty string or a default placeholder
    }

    // If it's already a valid URL (http/https) or Cloudinary URL, return as is
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
        return imagePath
    }

    // If it's already a public path starting with /, return as is
    if (imagePath.startsWith('/')) {
        return imagePath
    }

    // Handle paths like "frontend/src/assets/doc1.png" or "src/assets/doc1.png"
    if (imagePath.includes('assets/') && imagePath.includes('doc')) {
        // Extract filename (e.g., "doc1.png")
        const filename = imagePath.split('/').pop()
        return `/doctor/${filename}`
    }

    // If it's a relative path like "doc1.png", assume it's in public/doctor
    if (imagePath.startsWith('doc') || imagePath.match(/^[^/]+\.(png|jpg|jpeg|gif|webp)$/i)) {
        return `/doctor/${imagePath}`
    }

    // Return as is if we can't determine
    return imagePath
}
