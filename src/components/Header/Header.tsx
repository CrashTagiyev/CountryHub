import * as React from "react"
import { Select, Radio } from 'antd';
import type { SelectProps, RadioChangeEvent } from 'antd';
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import '../../assets/styles/HeaderStyle.css'

const regions: string[] = [`Europe`, `Asia`, `Africa`, `Americas`, `Oceania`, `Nort America`]
const options: SelectProps['options'] = [];
regions.forEach((region) => {

  options.push({
    label: region,
    value: region,
  });
})
const sortByChoices: string[] = [`byAlphaAsc`, `byAlphaDesc`, `byPopulationAsc`, `byPopulationDesc`]
const sortByOption: SelectProps['options'] = [];
sortByChoices.forEach((choice) => {

  sortByOption.push({
    label: choice,
    value: choice,
  });
})

const searchFilterChoice: string[] = [`Name`, `Capital`]
const searchFilterOption: SelectProps['options'] = [];
searchFilterChoice.forEach((choice) => {

  searchFilterOption.push({
    label: choice,
    value: choice,
  });
})


const Header: React.FC = () => {

  const {
    setSearchValue,
    setSearchByValue,
    setIsIndependentState,
    setSortState,
    setSortByRegionState,
  } = React.useContext(AppContext);

  const savedSearchValue = sessionStorage.getItem('searchValue');
  const savedSearchByOptions = sessionStorage.getItem('searchByOptions');
  const savedIsIntependentOptions = sessionStorage.getItem('isIndependentOptions');
  const savedSortByRegionOptions = JSON.parse(sessionStorage.getItem('sortByRegionOptions') as string);
  const savedSortOptions = sessionStorage.getItem('sortOptions');

  const onChange = (e: RadioChangeEvent) => {
    setIsIndependentState(e.target.value);
    sessionStorage.setItem('isIndependentOptions', e.target.value);
  }

  const handleChange = (value: string[]) => {
    setSortByRegionState(value)
    sessionStorage.setItem('sortByRegionOptions', JSON.stringify(value))
  };
  const sortByHandleChange = (value: string) => {
    setSortState(value)
    sessionStorage.setItem('sortOptions', value)
  };

  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false)
  const menuHandler = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const searchByHandleChange = (value: string) => {
    setSearchByValue(value);
    sessionStorage.setItem('searchByOptions', value)
  };
  


  
  return (
    <div className="header-style">
      <Link  to={`/`} className="logo">
        <img  className="logo-image " src="https://cdn.discordapp.com/attachments/1039503518404456458/1227235061716226159/image.png?ex=6627aab7&is=661535b7&hm=6da559478f65a63b3eb8625e38d77766d5f466520f94917b0345cad2cbfa19c1&" alt="" />
        <img src="https://cdn.discordapp.com/attachments/1039503518404456458/1227235223159312445/image.png?ex=6627aade&is=661535de&hm=0d6882ba88ca53ff1cd7b4cf5e4020e3a7e16e5eb4890b646e6515182a5354d2&" alt="" />
      </Link>
      <div className="search-div">

        <input placeholder="Search" value={savedSearchValue === null ? "" : savedSearchValue as string} className="search-Input" onInput={(e: any) => {
          setSearchValue(e.target.value)
          sessionStorage.setItem('searchValue', e.target.value)

        }} />
        <Select

          style={{ backgroundColor: `deepskyblue !important` }}
          value={savedSearchByOptions === null ? "" : savedSearchByOptions as string}
          onChange={searchByHandleChange}
          options={searchFilterOption}
          className="searchBy-selector"
        />
      </div>
      <button style={isMenuOpen ? { transform: `rotate(90deg)` } : {}} onClick={menuHandler} className="burger-button"></button>
      <div style={isMenuOpen ? { display: `flex` } : { display: `none` }} onClick={menuHandler} className="menu-background">
      </div>
      <div style={isMenuOpen ? { width: `400px` } : { width: `0px` }} className="burger-menu" >
        <h3 style={{ textAlign: `center`, marginTop: `10px` }}>Filters</h3>
        <div className="filters-div">
          <div className="div-label">
            <h3>Independent</h3>
            <Radio.Group onChange={onChange} value={savedIsIntependentOptions === null ? `All` : savedIsIntependentOptions as string}>
              <Radio.Button value={`All`}>All</Radio.Button>
              <Radio.Button value={`Yes`}>Yes</Radio.Button>
              <Radio.Button value={`No`}>No</Radio.Button>
            </Radio.Group>
          </div>
          <div className="div-label">
            <h3>Region</h3>
            <Select
              value={savedSortByRegionOptions === null ? "" : savedSortByRegionOptions}
              mode="multiple"
              style={{ width: "200px" }}
              onChange={handleChange}
              options={options}
            />
          </div>
          <div className="div-label">
            <h3>Sort by</h3>
            <Select
              value={savedSortOptions === null ? "" : savedSortOptions}
              style={{ width: '200px' }}
              onChange={sortByHandleChange}
              options={sortByOption}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header