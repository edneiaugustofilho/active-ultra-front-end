import {AssetEventType} from '../../all-types';

export interface AssetEventDto {

  id: string | null;
  assetId: string | null;
  assetDescription: string | null;
  eventType: AssetEventType | null;
  authorName: string | null;
  notes: string | null;
  summary: string | null;

}
