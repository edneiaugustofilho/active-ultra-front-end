import {AssetResponse, AssetUpsertRequest} from '../../../../../core/api/dto/asset.dto';
import {AssetFormValue} from './asset-form.types';
import {MapperHelper} from '../../../../../shared/mapper.helper';

export class AssetMapper {

  /** API -> Form */
  static toFormValue(a: AssetResponse): AssetFormValue {
    return {
      // meta
      id: a.id ?? null,
      createdAt: a.createdAt ? MapperHelper.fromIsoDateTime(a.createdAt) : null,
      updatedAt: a.updatedAt ? MapperHelper.fromIsoDateTime(a.updatedAt) : null,

      // required on API
      name: a.name ?? '',
      acquisitionValue: a.acquisitionValue ?? null,

      code: a.code ?? '',
      category: a.category ?? null,
      status: a.status ?? null,

      // optionals
      serialNumber: a.serialNumber ?? null,
      location: a.location ?? null,

      acquisitionDate: a.acquisitionDate ? MapperHelper.fromIsoDateToMaskedDate(a.acquisitionDate) : null,
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

      insuranceExpiryDate: a.insuranceExpiryDate ? MapperHelper.fromIsoDateToMaskedDate(a.insuranceExpiryDate) : null,
      registrationExpiryDate: a.registrationExpiryDate ? MapperHelper.fromIsoDateToMaskedDate(a.registrationExpiryDate) : null,

      currentDriver: a.currentDriver ?? null,
      gpsTrackerId: a.gpsTrackerId ?? null,
      notes: a.notes ?? null,
    };
  }

  /** Form -> API (create/update) */
  static toUpsertRequest(v: AssetFormValue): AssetUpsertRequest {
    return {
      name: MapperHelper.requiredTrim(v.name),
      acquisitionValue: MapperHelper.requiredNumber(v.acquisitionValue),

      code: MapperHelper.requiredTrim(v.code),
      category: MapperHelper.requiredValue(v.category),
      status: MapperHelper.requiredValue(v.status),

      // Optional strings become undefined if blank
      serialNumber: MapperHelper.optString(v.serialNumber),
      location: MapperHelper.optString(v.location),

      acquisitionDate: v.acquisitionDate ? MapperHelper.fromMaskedDateToIsoDate(v.acquisitionDate) : undefined,
      expectedLifetimeMonths: MapperHelper.optNumber(v.expectedLifetimeMonths),

      brand: MapperHelper.optString(v.brand),
      model: MapperHelper.optString(v.model),
      modelYear: MapperHelper.optNumber(v.modelYear),
      manufactureYear: MapperHelper.optNumber(v.manufactureYear),
      licensePlate: MapperHelper.optString(v.licensePlate),
      chassisNumber: MapperHelper.optString(v.chassisNumber),
      renavam: MapperHelper.optString(v.renavam),
      fleetNumber: MapperHelper.optString(v.fleetNumber),
      color: MapperHelper.optString(v.color),

      vehicleType: v.vehicleType ?? undefined,
      fuelType: v.fuelType ?? undefined,
      transmissionType: v.transmissionType ?? undefined,
      ownershipType: v.ownershipType ?? undefined,

      odometerKm: MapperHelper.optNumber(v.odometerKm),
      seatingCapacity: MapperHelper.optNumber(v.seatingCapacity),
      axleCount: MapperHelper.optNumber(v.axleCount),
      maxLoadKg: MapperHelper.optNumber(v.maxLoadKg),
      engineDisplacementCc: MapperHelper.optNumber(v.engineDisplacementCc),
      tankCapacityLiters: MapperHelper.optNumber(v.tankCapacityLiters),

      insuranceCompany: MapperHelper.optString(v.insuranceCompany),
      insurancePolicyNumber: MapperHelper.optString(v.insurancePolicyNumber),
      insuranceExpiryDate: v.insuranceExpiryDate ? MapperHelper.fromMaskedDateToIsoDate(v.insuranceExpiryDate) : undefined,
      registrationExpiryDate: v.registrationExpiryDate ? MapperHelper.fromMaskedDateToIsoDate(v.registrationExpiryDate) : undefined,
      currentDriver: MapperHelper.optString(v.currentDriver),
      gpsTrackerId: MapperHelper.optString(v.gpsTrackerId),
      notes: MapperHelper.optString(v.notes),
    };
  }
}
