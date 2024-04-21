import { ICountry } from "../Models/CountryModel";

export const isIndependent = (independentType: string , country: ICountry) => {
  switch (independentType) {
    case "All":
      return country.independent === true || country.independent === false ||country.independent === undefined;
    case "Yes":
      return country.independent === true;
    case "No":
      return country.independent !== true;
  }
};