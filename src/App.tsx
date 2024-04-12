import { useState } from 'react'
import './App.css'
import { CountryAPI } from './Service/CountryService'
import { ICountry } from './Models/CountryModel'
import { isIndependent } from './assets/FilterMethods/isIndependentFilter'
import { sortByValues } from './assets/FilterMethods/sortingFilter'
import Main from './components/Main'
import Header from './components/Header'
import { filterByRegion } from './assets/FilterMethods/filterByRegion'
import { searchFilter } from './assets/FilterMethods/searchByFilter'


const App: React.FC = () => {

  //search and sort states
  const [searchValue, setSearchValue] = useState<string>("")
  const [searchByValue, setSearchByValue] = useState<string>("Name")
  const [isIndependentState, setIsIndependentState] = useState<string>("All")
  const [sortState, setSortState] = useState<string>("byPopulationDesc")
  const [sortByRegion, setSortByRegionState] = useState<string[]>([])
  console.log(searchByValue)
  //rtk query data
  const { data } = CountryAPI.useFetchAllCountriesQuery(undefined, {
    selectFromResult: ({ data }: any) => ({
      //sortings
      data: data ? data?.filter((country: ICountry) => isIndependent(isIndependentState, country))
        .filter((country: ICountry) => (searchFilter(country, searchByValue, searchValue)))
        .filter((country: ICountry) => {
          if (sortByRegion.length > 0)
            return filterByRegion(country, sortByRegion)
          else {
            return true;
          }
        })
        .sort((country1: ICountry, country2: ICountry) => sortByValues(sortState, country1, country2))
        : []
    })
  })

  console.log(data)


  return (
    <>
      <Header setSearchBy={setSearchByValue} setSearch={setSearchValue} setSort={setSortState} setIndependent={setIsIndependentState} setSortByRegion={setSortByRegionState}></Header>
      <Main countryArray={data}></Main>
    </>
  )
}

export default App
