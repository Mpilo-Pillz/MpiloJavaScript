import { IndustryField } from "../pages/Register/register.model";

export class FormConfigHelper {
    
    constructor(public options: IndustryField[] | undefined) {}

    removeDuplicateItems() {
        const filteredIndustries = this.options?.reduce(
            (fields: IndustryField[], current: IndustryField) => {
              const existingIndustry = fields.find(
                (item: IndustryField) => item.value === current.value
              );
              if (!existingIndustry) {
                return fields.concat([current]);
              } else {
                return fields;
              }
            },
            []
          );
          return filteredIndustries;
    }
}


// data.industries.forEach((industryItem: string) => {
  //   registerForm.industry.fields?.push({
  //     label: industryItem,
  //     value: industryItem,
  //   });
  // });

   // const formConfigHelper = new FormConfigHelper(registerForm.industry.fields);

  // Object.defineProperty(registerForm.industry, "fields", {
  //   value: formConfigHelper.removeDuplicateItems(),
  //   writable: false,
  // });