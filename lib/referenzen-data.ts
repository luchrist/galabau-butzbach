export interface Referenz {
  id: string;
  /** Short project title, e.g. "Hanggarten mit Sitzmauer". */
  title: string;
  /** Real place name. Never invent one. */
  ort: string;
  /** Must match one of the `label` values in lib/galabau.ts services. */
  leistung: string;
  jahr?: string;
  text: string;
  /** Finished state. Required. */
  afterImage: string;
  /**
   * Before state. OPTIONAL and only ever a genuine before shot of the SAME
   * project. Without it the card renders as a single image instead of a
   * before/after slider, which is the honest fallback.
   */
  beforeImage?: string;
  alt: string;
}

/**
 * Leer, weil der Foto-Pool aus der Akquise (public/assets/acquisition/) für
 * diesen Betrieb keine einzige echte Projektaufnahme enthält. Die zuvor hier
 * hinterlegten Bilder sind Template-Material und zeigen keine Projekte von
 * Galabau Butzbach; als "Unsere Referenzen" mit Vorher-Nachher-Slider ausgegeben
 * wären sie eine Falschaussage.
 *
 * Sobald echte Projektfotos vorliegen (idealerweise mit passender
 * Baustellenaufnahme als Vorher-Bild), hier eintragen. Die Sektion und der
 * Navigationspunkt "Referenzen" erscheinen dann wieder.
 */
export const referenzen: Referenz[] = [];
