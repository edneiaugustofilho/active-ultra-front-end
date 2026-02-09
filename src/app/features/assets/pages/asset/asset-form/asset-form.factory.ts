// asset-form.factory.ts
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AssetFormValue} from './asset-form.types';

export type AssetFormGroup = FormGroup<{
  id: FormControl<string | null>;
  createdAt: FormControl<string | null>;
  updatedAt: FormControl<string | null>;

  name: FormControl<string>;
  acquisitionValue: FormControl<number | null>;

  code: FormControl<string>;
  category: FormControl<AssetFormValue['category'] | null>;
  serialNumber: FormControl<string | null>;
  location: FormControl<string | null>;
  status: FormControl<AssetFormValue['status'] | null>;

  acquisitionDate: FormControl<string | null>;
  expectedLifetimeMonths: FormControl<number | null>;

  brand: FormControl<string | null>;
  model: FormControl<string | null>;
  modelYear: FormControl<number | null>;
  manufactureYear: FormControl<number | null>;
  licensePlate: FormControl<string | null>;
  chassisNumber: FormControl<string | null>;
  renavam: FormControl<string | null>;
  fleetNumber: FormControl<string | null>;
  color: FormControl<string | null>;

  vehicleType: FormControl<AssetFormValue['vehicleType']>;
  fuelType: FormControl<AssetFormValue['fuelType']>;
  transmissionType: FormControl<AssetFormValue['transmissionType']>;
  ownershipType: FormControl<AssetFormValue['ownershipType']>;

  odometerKm: FormControl<number | null>;
  seatingCapacity: FormControl<number | null>;
  axleCount: FormControl<number | null>;
  maxLoadKg: FormControl<number | null>;
  engineDisplacementCc: FormControl<number | null>;
  tankCapacityLiters: FormControl<number | null>;

  insuranceCompany: FormControl<string | null>;
  insurancePolicyNumber: FormControl<string | null>;
  insuranceExpiryDate: FormControl<string | null>;
  registrationExpiryDate: FormControl<string | null>;
  currentDriver: FormControl<string | null>;
  gpsTrackerId: FormControl<string | null>;
  notes: FormControl<string | null>;
}>;

export function buildAssetForm(fb: FormBuilder): AssetFormGroup {
  return fb.group({
    // meta (disabled)
    id: fb.control<string | null>({value: null, disabled: true}),
    createdAt: fb.control<string | null>({value: null, disabled: true}),
    updatedAt: fb.control<string | null>({value: null, disabled: true}),

    // required
    name: fb.nonNullable.control('', [Validators.required]),
    acquisitionValue: fb.control<number | null>(null, [Validators.required]),

    code: fb.nonNullable.control('', [Validators.required]),
    category: fb.control<AssetFormValue['category']>(null, [Validators.required]),
    status: fb.control<AssetFormValue['status']>(null, [Validators.required]),

    // optional
    serialNumber: fb.control<string | null>(null),
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

    vehicleType: fb.control<AssetFormValue['vehicleType']>(null),
    fuelType: fb.control<AssetFormValue['fuelType']>(null),
    transmissionType: fb.control<AssetFormValue['transmissionType']>(null),
    ownershipType: fb.control<AssetFormValue['ownershipType']>(null),

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
