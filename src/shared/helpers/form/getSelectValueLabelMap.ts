import { ISelectOption } from 'shared/types/form';

type ValueLabelMap = Record<ISelectOption['value'], ISelectOption['label']>;

export default function getSelectValueLabelMap(selectOptions: ISelectOption[]): ValueLabelMap {
  return selectOptions.reduce((map, option) => {
    return { ...map, [option.value]: option.label };
  }, {});
}
