export type AssetCategory = 'VEHICLE' | 'HEAVY_EQUIPMENT' | 'TRAILER' | 'FORKLIFT' | 'MACHINE' | 'MANUFACTURING_EQUIPMENT' | 'PRODUCTION_LINE' | 'PUMP' | 'MOTOR' | 'COMPRESSOR' | 'GENERATOR' | 'ELECTRICAL_SYSTEM' | 'UPS' | 'TRANSFORMER' | 'PANEL' | 'IT_EQUIPMENT' | 'HVAC' | 'AIR_CONDITIONER' | 'CHILLER' | 'BOILER' | 'BUILDING' | 'ROOM' | 'FACILITY' | 'STRUCTURE' | 'ROOFING' | 'FIRE_SYSTEM' | 'ELEVATOR' | 'TOOL' | 'POWER_TOOL' | 'INSTRUMENT' | 'SENSOR' | 'SAFETY_EQUIPMENT' | 'FIRE_EXTINGUISHER' | 'PPE' | 'FURNITURE' | 'OFFICE_EQUIPMENT' | 'LAND' | 'REAL_ESTATE' | 'OTHER' | 'UNKNOWN';
export type AssetStatus = 'ACTIVE' | 'INACTIVE' | 'UNDER_MAINTENANCE' | 'SOLD' | 'RENTED' | 'WASTED';
export type AssetVehicleType = 'CAR' | 'PICKUP' | 'TRUCK' | 'VAN' | 'BUS' | 'MOTORCYCLE' | 'TRAILER' | 'OTHER';
export type AssetFuelType = 'GASOLINE' | 'ETHANOL' | 'FLEX' | 'DIESEL' | 'CNG' | 'ELECTRIC' | 'HYBRID' | 'OTHER';
export type AssetTransmissionType = 'MANUAL' | 'AUTOMATIC' | 'CVT' | 'AUTOMATED';
export type AssetOwnershipType = 'OWNED' | 'LEASED' | 'RENTED' | 'THIRD_PARTY';


export const ASSET_CATEGORY_PT_BR: Record<string, string> = {
  VEHICLE: 'Veículo',
  HEAVY_EQUIPMENT: 'Equipamento Pesado',
  TRAILER: 'Reboque / Carreta',
  FORKLIFT: 'Empilhadeira',
  MACHINE: 'Máquina',
  MANUFACTURING_EQUIPMENT: 'Equipamento de Fabricação',
  PRODUCTION_LINE: 'Linha de Produção',
  PUMP: 'Bomba',
  MOTOR: 'Motor',
  COMPRESSOR: 'Compressor',
  GENERATOR: 'Gerador',
  ELECTRICAL_SYSTEM: 'Sistema Elétrico',
  UPS: 'No-break (UPS)',
  TRANSFORMER: 'Transformador',
  PANEL: 'Painel Elétrico',
  IT_EQUIPMENT: 'Equipamento de TI',
  HVAC: 'Sistema HVAC',
  AIR_CONDITIONER: 'Ar-condicionado',
  CHILLER: 'Chiller',
  BOILER: 'Caldeira',
  BUILDING: 'Prédio',
  ROOM: 'Sala / Ambiente',
  FACILITY: 'Instalação',
  STRUCTURE: 'Estrutura',
  ROOFING: 'Cobertura / Telhado',
  FIRE_SYSTEM: 'Sistema de Incêndio',
  ELEVATOR: 'Elevador',
  TOOL: 'Ferramenta',
  POWER_TOOL: 'Ferramenta Elétrica',
  INSTRUMENT: 'Instrumento',
  SENSOR: 'Sensor',
  SAFETY_EQUIPMENT: 'Equipamento de Segurança',
  FIRE_EXTINGUISHER: 'Extintor de Incêndio',
  PPE: 'EPI',
  FURNITURE: 'Mobiliário',
  OFFICE_EQUIPMENT: 'Equipamento de Escritório',
  LAND: 'Terreno',
  REAL_ESTATE: 'Imóvel',
  OTHER: 'Outro',
  UNKNOWN: 'Desconhecido',
};


export const ASSET_STATUS_PT_BR: Record<string, string> = {
  ACTIVE: 'Ativo',
  INACTIVE: 'Inativo',
  UNDER_MAINTENANCE: 'Em Manutenção',
  SOLD: 'Vendido',
  RENTED: 'Alugado',
  WASTED: 'Descartado',
};

export const ASSET_VEHICLE_TYPE_PT_BR: Record<string, string> = {
  CAR: 'Carro',
  PICKUP: 'Pickup',
  TRUCK: 'Caminhão',
  VAN: 'Van',
  BUS: 'Ônibus',
  MOTORCYCLE: 'Motocicleta',
  TRAILER: 'Reboque',
  OTHER: 'Outro',
};

export const ASSET_FUEL_TYPE_PT_BR: Record<string, string> = {
  GASOLINE: 'Gasolina',
  ETHANOL: 'Etanol',
  FLEX: 'Flex',
  DIESEL: 'Diesel',
  CNG: 'GNV',
  ELECTRIC: 'Elétrico',
  HYBRID: 'Híbrido',
  OTHER: 'Outro',
};

export const ASSET_TRANSMISSION_TYPE_PT_BR: Record<string, string> = {
  MANUAL: 'Manual',
  AUTOMATIC: 'Automático',
  CVT: 'CVT',
  AUTOMATED: 'Automatizado',
};


export const ASSET_OWNERSHIP_TYPE_PT_BR: Record<string, string> = {
  OWNED: 'Próprio',
  LEASED: 'Arrendado',
  RENTED: 'Alugado',
  THIRD_PARTY: 'Terceiros',
};
