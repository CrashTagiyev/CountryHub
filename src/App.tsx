import { createContext, useEffect, useState } from 'react';
import './App.css';
import { CountryAPI } from './Service/CountryService';
import { ICountry } from './Models/CountryModel';
import { isIndependent } from './FilterMethods/isIndependentFilter';
import { sortByValues } from './FilterMethods/sortingFilter';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import { filterByRegion } from './FilterMethods/filterByRegion';
import { searchFilter } from './FilterMethods/searchByFilter';

export const AppContext = createContext<any>(null);

const App: React.FC = () => {

  const [searchValue, setSearchValue] = useState<string>(() => sessionStorage.getItem('searchValue') || '');
  const [searchByValue, setSearchByValue] = useState<string>(() => sessionStorage.getItem('searchByOptions') || 'Name');
  const [isIndependentState, setIsIndependentState] = useState<string>(() => sessionStorage.getItem('isIndependentOptions') || 'All');
  const [sortByRegion, setSortByRegionState] = useState<string[]>(() => JSON.parse(sessionStorage.getItem('sortByRegionOptions') || '[]'));
  const [sortState, setSortState] = useState<string>(() => sessionStorage.getItem('sortOptions') || 'byAlphaAsc');


  useEffect(() => {
    sessionStorage.setItem('searchValue', searchValue);
    sessionStorage.setItem('searchByOptions', searchByValue);
    sessionStorage.setItem('isIndependentOptions', isIndependentState);
    sessionStorage.setItem('sortByRegionOptions', JSON.stringify(sortByRegion));
    sessionStorage.setItem('sortOptions', sortState);
  }, [searchValue, searchByValue, isIndependentState, sortByRegion, sortState]);

  const { data } = CountryAPI.useFetchAllCountriesQuery(undefined, {
    selectFromResult: ({ data }: any) => ({
      data: data ? data
        .filter((country: ICountry) => isIndependent(isIndependentState, country))
        .filter((country: ICountry) => searchFilter(country, searchByValue, searchValue))
        .filter((country: ICountry) => sortByRegion.length > 0 ? filterByRegion(country, sortByRegion) : true)
        .sort((country1: ICountry, country2: ICountry) => sortByValues(sortState, country1, country2))
        : []
    })
  });

  return (
    <AppContext.Provider value={{
      searchValue,
      setSearchValue,
      searchByValue,
      setSearchByValue,
      isIndependentState,
      setIsIndependentState,
      sortState,
      setSortState,
      sortByRegion,
      setSortByRegionState,
    }}>
      <Header />
      <Main countryArray={data} />
    </AppContext.Provider>
  );
}

export default App;
