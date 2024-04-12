import { ICountry } from "../../Models/CountryModel";


export const filterByRegion = (country: ICountry, regions: string[]) => {
   return regions.find((region) => country.region === region)
}