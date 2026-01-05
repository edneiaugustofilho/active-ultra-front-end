import {
  AssetCategory,
  AssetFuelType, AssetOwnershipType,
  AssetStatus,
  AssetTransmissionType,
  AssetVehicleType
} from '../../../../shared/all-types';

export type AssetFormValue = {

  id: string | null;
  createdAt: string | null;
  updatedAt: string | null;

  // UpsertRequest fields
  name: string;
  acquisitionValue: number | null;

  code: string;
  category: AssetCategory | null;
  serialNumber: string | null;
  location: string | null;
  status: AssetStatus | null;

  acquisitionDate: string | null;
  expectedLifetimeMonths: number | null;

  brand: string | null;
  model: string | null;
  modelYear: number | null;
  manufactureYear: number | null;
  licensePlate: string | null;
  chassisNumber: string | null;
  renavam: string | null;
  fleetNumber: string | null;
  color: string | null;

  vehicleType: AssetVehicleType | null;
  fuelType: AssetFuelType | null;
  transmissionType: AssetTransmissionType | null;
  ownershipType: AssetOwnershipType | null;

  odometerKm: number | null;
  seatingCapacity: number | null;
  axleCount: number | null;
  maxLoadKg: number | null;
  engineDisplacementCc: number | null;
  tankCapacityLiters: number | null;

  insuranceCompany: string | null;
  insurancePolicyNumber: string | null;
  insuranceExpiryDate: string | null;
  registrationExpiryDate: string | null;
  currentDriver: string | null;
  gpsTrackerId: string | null;
  notes: string | null;
};
