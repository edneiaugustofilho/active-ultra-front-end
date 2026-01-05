import {
  AssetCategory,
  AssetFuelType,
  AssetOwnershipType, AssetStatus,
  AssetTransmissionType,
  AssetVehicleType
} from '../../../shared/all-types';

export interface AssetUpsertRequest {
  name: string;
  acquisitionValue: number;

  code: string;
  category: AssetCategory;
  status: AssetStatus;
  serialNumber?: string;
  location?: string;

  acquisitionDate?: string; // 'YYYY-MM-DD'
  expectedLifetimeMonths?: number;

  brand?: string;
  model?: string;
  modelYear?: number;
  manufactureYear?: number;
  licensePlate?: string;
  chassisNumber?: string;
  renavam?: string;
  fleetNumber?: string;
  color?: string;

  vehicleType?: AssetVehicleType;
  fuelType?: AssetFuelType;
  transmissionType?: AssetTransmissionType;
  ownershipType?: AssetOwnershipType;

  odometerKm?: number;
  seatingCapacity?: number;
  axleCount?: number;
  maxLoadKg?: number;
  engineDisplacementCc?: number;
  tankCapacityLiters?: number;

  insuranceCompany?: string;
  insurancePolicyNumber?: string;
  insuranceExpiryDate?: string;      // 'YYYY-MM-DD'
  registrationExpiryDate?: string;   // 'YYYY-MM-DD'
  currentDriver?: string;
  gpsTrackerId?: string;
  notes?: string;
}

export interface AssetResponse extends AssetUpsertRequest {
  id: string;
  createdAt: string;
  updatedAt: string;
}
