import {FormBuilder, Validators} from '@angular/forms';
import {AssetFormModel} from './asset-form.model';

export function buildAssetForm(fb: FormBuilder) {
  return fb.group({
    id: fb.control<string | null>({ value: null, disabled: true }),
    createdAt: fb.control<string | null>({ value: null, disabled: true }),
    updatedAt: fb.control<string | null>({ value: null, disabled: true }),

    // required
    name: fb.nonNullable.control<string>('', [Validators.required]),
    category: fb.control<AssetFormModel['category'] | null>(null, [Validators.required]),
    status: fb.control<AssetFormModel['status'] | null>(null, [Validators.required]),
    serialNumber: fb.nonNullable.control<string>('', [Validators.required, Validators.min(3), Validators.max(60)]),

    // optional
    code: fb.control<string | null>(null),

    acquisitionValue: fb.control<number | null>(null),

    location: fb.control<string | null>(null),

    acquisitionDate: fb.control<string | null>(null),
    expectedLifetimeMonths: fb.control<number | null>(null),

    brand: fb.control<string | null>(null),
    model: fb.control<string | null>(null),
    modelYear: fb.control<number | null>(null),
    manufactureYear: fb.control<number | null>(null),
    licensePlate: fb.control<string | null>(null),
    chassisNumber: fb.control<string | null>(null),
    renavam: fb.control<string | null>(null),
    fleetNumber: fb.control<string | null>(null),
    color: fb.control<string | null>(null),

    vehicleType: fb.control<AssetFormModel['vehicleType'] | null>(null),
    fuelType: fb.control<AssetFormModel['fuelType'] | null>(null),
    transmissionType: fb.control<AssetFormModel['transmissionType'] | null>(null),
    ownershipType: fb.control<AssetFormModel['ownershipType'] | null>(null),

    odometerKm: fb.control<number | null>(null),
    seatingCapacity: fb.control<number | null>(null),
    axleCount: fb.control<number | null>(null),
    maxLoadKg: fb.control<number | null>(null),
    engineDisplacementCc: fb.control<number | null>(null),
    tankCapacityLiters: fb.control<number | null>(null),

    insuranceCompany: fb.control<string | null>(null),
    insurancePolicyNumber: fb.control<string | null>(null),
    insuranceExpiryDate: fb.control<string | null>(null),
    registrationExpiryDate: fb.control<string | null>(null),
    currentDriver: fb.control<string | null>(null),
    gpsTrackerId: fb.control<string | null>(null),
    notes: fb.control<string | null>(null),
  });
}
