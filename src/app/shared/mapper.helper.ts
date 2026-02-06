export class MapperHelper {
  // ---------------- helpers ----------------

  /** yyyy-MM-dd (best for Java LocalDate) */
  public static toIsoDate(d: Date): string {
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  public static fromIsoDate(s: string): Date {
    const datePart = s.length >= 10 ? s.substring(0, 10) : s;
    const [y, m, d] = datePart.split('-').map(Number);
    return new Date(y, (m ?? 1) - 1, d ?? 1);
  }

  public static fromIsoDateTime(dt: string): string {
    const datePart = dt.length >= 10 ? dt.substring(0, 10) : dt;
    const timePart = dt.length >= 19 ? dt.substring(11, 19) : dt;
    const [y, m, d] = datePart.split('-').map(String);
    const [h, i, s] = timePart.split(':').map(String);
    return `${d}/${m}/${y} ${h}:${i}`;
  }

  public static fromIsoDateToMaskedDate(s: string): string {
    const [y, m, d] = s.split('-').map(String);
    return `${d}/${m}/${y}`;
  }

  public static fromMaskedDateToIsoDate(s: string): string {
    const [d, m, y] = s.split('/').map(String);
    return `${y}-${m}-${d}`;
  }

  public static optString(v: string | null): string | undefined {
    if (v == null) return undefined;
    const t = v.trim();
    return t.length ? t : undefined;
  }

  public static requiredTrim(v: string): string {
    return (v ?? '').trim();
  }

  public static optNumber(v: number | null): number | undefined {
    return v == null ? undefined : v;
  }

  public static requiredNumber(v: number | null): number {
    if (v == null) throw new Error('acquisitionValue is required');
    return v;
  }

  public static requiredValue<T>(v: T | null): T {
    return v as T;
  }
}
