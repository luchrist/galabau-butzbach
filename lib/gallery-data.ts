export interface GalleryItem {
  src: string;
  alt: string;
}

/**
 * Leer, weil public/assets/acquisition/ für diesen Betrieb keine echten Fotos
 * enthält. Solange die Liste leer ist, zeigt components/Galerie.tsx bewusst die
 * Template-Bilder als Platzhalter. Sobald eigene Aufnahmen vorliegen, hier fünf
 * Motive eintragen, das erste ist die große Kachel.
 */
export const galleryItems: GalleryItem[] = [];
