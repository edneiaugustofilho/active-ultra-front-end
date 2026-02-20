import {AssetDto} from '../../../../../core/api/dto/asset.dto';
import {MapperHelper} from '../../../../../shared/mapper.helper';
import {AssetFormModel} from "./asset-form.model";

export class AssetMapper {

  /** API -> Form */
  static toFormPatch(a: AssetDto): Partial<AssetFormModel> {
    return {
      ...a,

      // meta (override API raw values)
      createdAt: a.createdAt ? MapperHelper.fromIsoDateTime(a.createdAt) : null,
      updatedAt: a.updatedAt ? MapperHelper.fromIsoDateTime(a.updatedAt) : null,

      // masked dates
      acquisitionDate: a.acquisitionDate ? MapperHelper.fromIsoDateToMaskedDate(a.acquisitionDate) : null,
      insuranceExpiryDate: a.insuranceExpiryDate ? MapperHelper.fromIsoDateToMaskedDate(a.insuranceExpiryDate) : null,
      registrationExpiryDate: a.registrationExpiryDate ? MapperHelper.fromIsoDateToMaskedDate(a.registrationExpiryDate) : null,
    };
  }

  /** Form -> API (create/update) */
  static toDto(v: AssetFormModel): AssetDto {
    return {
      ...v,
      createdAt: v.createdAt ? MapperHelper.fromMaskedDateToIsoDate(v.createdAt) : null,
      updatedAt: v.updatedAt ? MapperHelper.fromMaskedDateToIsoDate(v.updatedAt) : null,

      category: MapperHelper.requiredValue(v.category),
      status: MapperHelper.requiredValue(v.status),
      acquisitionDate: v.acquisitionDate ? MapperHelper.fromMaskedDateToIsoDate(v.acquisitionDate) : null,

      insuranceExpiryDate: v.insuranceExpiryDate ? MapperHelper.fromMaskedDateToIsoDate(v.insuranceExpiryDate) : null,
      registrationExpiryDate: v.registrationExpiryDate ? MapperHelper.fromMaskedDateToIsoDate(v.registrationExpiryDate) : null,
    };
  }
}
