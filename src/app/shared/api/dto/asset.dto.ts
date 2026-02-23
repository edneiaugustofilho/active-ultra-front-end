import {
  AssetCategory,
  AssetFuelType,
  AssetOwnershipType, AssetStatus,
  AssetTransmissionType,
  AssetVehicleType
} from '../../all-types';

export interface AssetDto {
  id: string | null;
  createdAt: string | null;
  updatedAt: string | null;

  name: string;

  category: AssetCategory;
  status: AssetStatus;
  serialNumber: string;

  acquisitionValue: number | null;

  code: string | null;
  location: string | null;

  acquisitionDate: string | null; // 'YYYY-MM-DD'
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
  insuranceExpiryDate: string | null;      // 'YYYY-MM-DD'
  registrationExpiryDate: string | null;   // 'YYYY-MM-DD'
  currentDriver: string | null;
  gpsTrackerId: string | null;
  notes: string | null;
}
