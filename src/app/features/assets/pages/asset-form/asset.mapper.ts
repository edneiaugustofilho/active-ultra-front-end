// asset.mapper.ts
import { AssetResponse, AssetUpsertRequest } from '../../../../core/api/dto/asset.dto';
import { AssetFormValue } from './asset-form.types';

export class AssetMapper {

  /** API -> Form */
  static toFormValue(a: AssetResponse): AssetFormValue {
    return {
      // meta
      id: a.id ?? null,
      createdAt: a.createdAt ?? null,
      updatedAt: a.updatedAt ?? null,

      // required on API
      name: a.name ?? '',
      acquisitionValue: a.acquisitionValue ?? null,

      code: a.code ?? '',
      category: a.category ?? null,
      status: a.status ?? null,

      // optionals
      serialNumber: a.serialNumber ?? null,
      location: a.location ?? null,

      acquisitionDate: a.acquisitionDate ? this.fromIsoDateToMaskedDate(a.acquisitionDate) : null,
      expectedLifetimeMonths: a.expectedLifetimeMonths ?? null,

      brand: a.brand ?? null,
      model: a.model ?? null,
      modelYear: a.modelYear ?? null,
      manufactureYear: a.manufactureYear ?? null,
      licensePlate: a.licensePlate ?? null,
      chassisNumber: a.chassisNumber ?? null,
      renavam: a.renavam ?? null,
      fleetNumber: a.fleetNumber ?? null,
      color: a.color ?? null,

      vehicleType: a.vehicleType ?? null,
      fuelType: a.fuelType ?? null,
      transmissionType: a.transmissionType ?? null,
      ownershipType: a.ownershipType ?? null,

      odometerKm: a.odometerKm ?? null,
      seatingCapacity: a.seatingCapacity ?? null,
      axleCount: a.axleCount ?? null,
      maxLoadKg: a.maxLoadKg ?? null,
      engineDisplacementCc: a.engineDisplacementCc ?? null,
      tankCapacityLiters: a.tankCapacityLiters ?? null,

      insuranceCompany: a.insuranceCompany ?? null,
      insurancePolicyNumber: a.insurancePolicyNumber ?? null,
      insuranceExpiryDate: a.insuranceExpiryDate ? this.fromIsoDate(a.insuranceExpiryDate) : null,
      registrationExpiryDate: a.registrationExpiryDate ? this.fromIsoDate(a.registrationExpiryDate) : null,
      currentDriver: a.currentDriver ?? null,
      gpsTrackerId: a.gpsTrackerId ?? null,
      notes: a.notes ?? null,
    };
  }

  /** Form -> API (create/update) */
  static toUpsertRequest(v: AssetFormValue): AssetUpsertRequest {
    console.log(v.acquisitionDate);
    console.log(v.acquisitionDate ? this.fromMaskedDateToIsoDate(v.acquisitionDate) : null);
    return {
      name: this.requiredTrim(v.name),
      acquisitionValue: this.requiredNumber(v.acquisitionValue),

      code: this.requiredTrim(v.code),
      category: this.requiredValue(v.category),
      status: this.requiredValue(v.status),

      // Optional strings become undefined if blank
      serialNumber: this.optString(v.serialNumber),
      location: this.optString(v.location),

      acquisitionDate: v.acquisitionDate ? this.fromMaskedDateToIsoDate(v.acquisitionDate) : undefined,
      expectedLifetimeMonths: this.optNumber(v.expectedLifetimeMonths),

      brand: this.optString(v.brand),
      model: this.optString(v.model),
      modelYear: this.optNumber(v.modelYear),
      manufactureYear: this.optNumber(v.manufactureYear),
      licensePlate: this.optString(v.licensePlate),
      chassisNumber: this.optString(v.chassisNumber),
      renavam: this.optString(v.renavam),
      fleetNumber: this.optString(v.fleetNumber),
      color: this.optString(v.color),

      vehicleType: v.vehicleType ?? undefined,
      fuelType: v.fuelType ?? undefined,
      transmissionType: v.transmissionType ?? undefined,
      ownershipType: v.ownershipType ?? undefined,

      odometerKm: this.optNumber(v.odometerKm),
      seatingCapacity: this.optNumber(v.seatingCapacity),
      axleCount: this.optNumber(v.axleCount),
      maxLoadKg: this.optNumber(v.maxLoadKg),
      engineDisplacementCc: this.optNumber(v.engineDisplacementCc),
      tankCapacityLiters: this.optNumber(v.tankCapacityLiters),

      insuranceCompany: this.optString(v.insuranceCompany),
      insurancePolicyNumber: this.optString(v.insurancePolicyNumber),
      insuranceExpiryDate: v.insuranceExpiryDate ? this.toIsoDate(v.insuranceExpiryDate) : undefined,
      registrationExpiryDate: v.registrationExpiryDate ? this.toIsoDate(v.registrationExpiryDate) : undefined,
      currentDriver: this.optString(v.currentDriver),
      gpsTrackerId: this.optString(v.gpsTrackerId),
      notes: this.optString(v.notes),
    };
  }

  // ---------------- helpers ----------------

  /** yyyy-MM-dd (best for Java LocalDate) */
  private static toIsoDate(d: Date): string {
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  private static fromIsoDate(s: string): Date {
    const datePart = s.length >= 10 ? s.substring(0, 10) : s;
    const [y, m, d] = datePart.split('-').map(Number);
    return new Date(y, (m ?? 1) - 1, d ?? 1);
  }

  private static fromIsoDateToMaskedDate(s: string): string {
    const [y, m, d] = s.split('-').map(String);
    // return `${d.toString().padStart(2, '0')}/${m.toString().padStart(2, '0')}/${y}`;
    return `${d}/${m}/${y}`;
  }

  private static fromMaskedDateToIsoDate(s: string): string {
    const [d, m, y] = s.split('/').map(String);
    return `${y}-${m}-${d}`;
  }

  private static optString(v: string | null): string | undefined {
    if (v == null) return undefined;
    const t = v.trim();
    return t.length ? t : undefined;
  }

  private static requiredTrim(v: string): string {
    return (v ?? '').trim();
  }

  private static optNumber(v: number | null): number | undefined {
    return v == null ? undefined : v;
  }

  private static requiredNumber(v: number | null): number {
    if (v == null) throw new Error('acquisitionValue is required');
    return v;
  }

  private static requiredValue<T>(v: T | null): T {
    return v as T;
  }
}
