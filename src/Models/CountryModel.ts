export interface ICountry {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        common: string;
        official: string;
      };
    };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: { [key: string]: { name: string; symbol: string } };
  idd: { root: string; suffixes: { [key: string]: string } };
  capital: string[];
  capitalInfo: {
    latlng: number[];
  };
  coatOfArms:{
    png:string,
    svg:string
  }
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: { [key: string]: string };
  translations: { [key: string]: { official: string; common: string } };
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: { [key: string]: { f: string; m: string } };
  flag: string;
  maps: { [key: string]: string };
  population: number;
  flags: {
    png: string;
    svg: string;
  };
  web_pages: string[];
  national_sport: string;
  national_animal: string;
}
