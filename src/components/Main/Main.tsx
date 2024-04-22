import { Link } from 'react-router-dom'
import { ICountry } from '../../Models/CountryModel'
import * as React from 'react';
import { Button } from 'antd';
import '../../assets/styles/MainStyle.css'


const Main = ({ countryArray }: { countryArray: ICountry[] }) => {
  const [maxContent, setMaxContent] = React.useState<number>(() => {
    const savedMaxContent = sessionStorage.getItem("MaxContentOption");
    return savedMaxContent ? JSON.parse(savedMaxContent) : 4;
  });

  const showMoreHandler = () => {
    const newMaxContent = maxContent * 2 < countryArray.length ? maxContent * 2 : countryArray.length;
    setMaxContent(newMaxContent);
    sessionStorage.setItem('MaxContentOption', JSON.stringify(newMaxContent));
  }

  return (
    <>
      <nav className='countries-Nav'>
        {(countryArray as ICountry[]).map((country: ICountry, index: number) => (
          index < maxContent ? (
            <Link to={`/countries/:${country.name.common}`} className='country-Mini-Info-item' key={index}  state={country}>
              <img className='country-mini-info-image' src={country.flags.png} alt={country.flag} />
              <div className='country-info'>
                <h2 className='mini-info-country-name'>{country.name.common}</h2>
                <div className='pupulation-Info'>
                  <span>Capital:</span>
                  <span>{country.capital ? country.capital[0] : `N/A`}</span>
                </div>
                <div className='pupulation-Info'>
                  <span className='population-img'></span>
                  <span className='info-text'> {country.population}</span>
                </div>
                <div className='currency-Info'>
                  <span className='currency-img'></span>
                  <span className='info-text'> {(country as ICountry).currencies === undefined ? `N/A` : ((country as ICountry).currencies[Object.keys((country as ICountry).currencies)[0]] as { symbol: string }).symbol}</span>
                </div>
              </div>
            </Link>
          ) : null
        ))}
      </nav>
      <div className="show-more-div">
        {maxContent < countryArray.length && <Button className="show-more-button" onClick={showMoreHandler}>Show more</Button>}
      </div>
    </>
  )
}

export default Main
