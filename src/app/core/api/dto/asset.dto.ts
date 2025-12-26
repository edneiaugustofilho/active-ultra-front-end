export type AssetCategory = 'VEHICLE' | 'HEAVY_EQUIPMENT' | 'TRAILER' | 'FORKLIFT' | 'MACHINE' | 'MANUFACTURING_EQUIPMENT' | 'PRODUCTION_LINE' | 'PUMP' | 'MOTOR' | 'COMPRESSOR' | 'GENERATOR' | 'ELECTRICAL_SYSTEM' | 'UPS' | 'TRANSFORMER' | 'PANEL' | 'IT_EQUIPMENT' | 'HVAC' | 'AIR_CONDITIONER' | 'CHILLER' | 'BOILER' | 'BUILDING' | 'ROOM' | 'FACILITY' | 'STRUCTURE' | 'ROOFING' | 'FIRE_SYSTEM' | 'ELEVATOR' | 'TOOL' | 'POWER_TOOL' | 'INSTRUMENT' | 'SENSOR' | 'SAFETY_EQUIPMENT' | 'FIRE_EXTINGUISHER' | 'PPE' | 'FURNITURE' | 'OFFICE_EQUIPMENT' | 'LAND' | 'REAL_ESTATE' | 'OTHER' | 'UNKNOWN';
export type AssetStatus = 'ACTIVE' | 'INACTIVE' | 'UNDER_MAINTENANCE' | 'SOLD' | 'RENTED' | 'WASTED';
export type AssetVehicleType = 'CAR' | 'PICKUP' | 'TRUCK' | 'VAN' | 'BUS' | 'MOTORCYCLE' | 'TRAILER' | 'OTHER';
export type AssetFuelType = 'GASOLINE' | 'ETHANOL' | 'FLEX' | 'DIESEL' | 'CNG' | 'ELECTRIC' | 'HYBRID' | 'OTHER';
export type AssetTransmissionType = 'MANUAL' | 'AUTOMATIC' | 'CVT' | 'AUTOMATED';
export type AssetOwnershipType = 'OWNED' | 'LEASED' | 'RENTED' | 'THIRD_PARTY';

export interface AssetUpsertRequest {
  name: string;
  acquisitionValue: number;

  code: string;
  category: AssetCategory;
  serialNumber?: string;
  location?: string;
  status: AssetStatus;

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
