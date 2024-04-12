import { ICountry } from "../../Models/CountryModel";

export const sortByValues = (
  sortType: string,
  country1: ICountry,
  country2: ICountry
) => {
  switch (sortType) {
    case "byAlphaAsc":
      return country1.name.common.localeCompare(country2.name.common);
    case "byAlphaDesc":
      return country2.name.common.localeCompare(country1.name.common);
    case "byPopulationAsc":
      return country2.population - country1.population;
    case "byPopulationDesc":
      return country1.population - country2.population;
  }
};
