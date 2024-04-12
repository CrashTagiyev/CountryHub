import { ICountry } from "../../Models/CountryModel";


export const searchFilter = (country: ICountry, searchBy: string, arg: string) => {
    switch (searchBy) {
        case "Name":
            return country.name.common.toLowerCase().includes(arg.toLowerCase())
        case "Capital":
            return  country.capital !==undefined? country.capital[0].toLowerCase().includes(arg.toLowerCase()) : false
    }
    return false;
}