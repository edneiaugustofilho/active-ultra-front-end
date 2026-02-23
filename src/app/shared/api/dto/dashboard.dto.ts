import {AssetCategory, AssetStatus} from '../../all-types';

export interface DashboardDto {
  id: string | null;
  tenantId: string | null;
  totalAssets: number | null;
  totalAcquisitionValue: number | null;
  byStatus: DashboardByStatusDto[] | [];
  byCategory: DashboardByCategoryDto[] | [];
  updatedAt: string | null;
}

export interface DashboardByStatusDto {
  status: AssetStatus | null;
  totalAssets: number | null;
  totalAcquisitionValue: number | null;
}

export interface DashboardByCategoryDto {
  category: AssetCategory | null;
  totalAssets: number | null;
  totalAcquisitionValue: number | null;
}
