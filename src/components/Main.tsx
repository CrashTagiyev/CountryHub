import { Link } from 'react-router-dom'
import { ICountry } from '../Models/CountryModel'
import * as React from 'react';
import { Button } from 'antd';
const Main = ({ countryArray }: { countryArray: ICountry[] }) => {

  const [maxContent, setMaxContent] = React.useState(4);
  const showMoreHandler = () => {
    maxContent * 2 < countryArray.length ?
      setMaxContent((prev) => prev * 2) : setMaxContent(countryArray.length)
  }

  return (
    <>
      <nav className='countries-Nav'>
        {(countryArray as ICountry[]).map((country: ICountry, index: number) => (

          index < maxContent ? <Link className='country-Mini-Info-item' key={index} to={`/countries/:${country.name.common}`} state={country} >
            <img src={country.flags.png} alt={country.flag} />
            <div className='country-info'>
              <h2 className='mini-info-country-name'>{country.name.common}</h2>
              <div className='pupulation-Info'>
              <span>Capital:</span>
                <span>{country.capital?country.capital[0]:`N/A`}:</span>
              </div>
              <div  className='pupulation-Info'>
                <span className='population-img'></span>
                <span className='info-text'> {country.population}</span>
              </div>
              <div className='currency-Info'>
                <span className='currency-img'></span>
                <span className='info-text'> {country.currencies !== undefined ? Object.keys(country.currencies)[0] : `N/A`}</span>
              </div>
            </div>

          </Link> : null
        ))}
      </nav>
      <div className="show-more-div">
        {maxContent < countryArray.length ? <Button className="show-more-button" onClick={showMoreHandler}>Show more</Button> : null}
      </div>
    </>
  )
}

export default Main