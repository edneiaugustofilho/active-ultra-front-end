import {AssetDto} from '../../../../../shared/api/dto/asset.dto';

export type AssetFormModel =
  Omit<AssetDto, 'category' | 'status'> & {
  category: AssetDto['category'] | null;
  status: AssetDto['status'] | null;
};
