import { useLocation } from 'react-router-dom';
import { ICountry } from '../Models/CountryModel'
import WorldMap from './WorldMap';
import '../assets/styles/CountryStyle.css'
export const Country = () => {
  const { state } = useLocation();

  return (
    <div  className='country-page-info'>
      <div className='info'>
        <div className='names'>
          <h2>Names:</h2>
          <div className='ordinary-style'>
            <span>Common:</span>
            <h2>{state.name.common}</h2>
          </div>
          <div className='ordinary-style'>
            <span>Official:</span>
            <h2>{state.name.official}</h2>
          </div>
        </div>
        <div className='native-names'>
          <div>
            <h2>Native names:</h2>
            <div className='ordinary-style'>
              <span>Common</span>
              <h2>{state.name.nativeName[Object.keys(state.name.nativeName)[0]].common}</h2>
            </div>
            <div className='ordinary-style'>
              <span>Official</span>
              <h2>{state.name.nativeName[Object.keys(state.name.nativeName)[0]].official}</h2>
            </div>
          </div>
        </div>
        <div className='ordinary-style'>
          <span>Capital:</span>
          <h2>{(state as ICountry).capital === undefined ? `N/A` : (state as ICountry).capital[0]}</h2>
        </div>
        <div className='ordinary-style'>
          <span>Region:</span>
          <h2>{(state as ICountry).region === undefined ? `N/A` : (state as ICountry).region}</h2>
        </div>
        <div className='ordinary-style'>
          <span>Subregion:</span>
          <h2>{(state as ICountry).subregion === undefined ? `N/A` : (state as ICountry).subregion}</h2>
        </div>
        <div className='ordinary-style'>
          <span>Population:</span>
          <h2>{(state as ICountry).population === undefined ? `N/A` : (state as ICountry).population}</h2>
        </div>
        <div className='Currencies'>
          <div>
            <h2>Currencies:</h2>
            <div className='ordinary-style'>
              <span>Name:</span>
              <h2>{(state as ICountry).currencies=== undefined ? `N/A` : ((state as ICountry).currencies[Object.keys((state as ICountry).currencies)[0]] as { name: string }).name}</h2>
            </div>
            <div className='ordinary-style'>
              <span>Symbol:</span>
              <h2>{(state as ICountry).currencies === undefined ? `N/A` : ((state as ICountry).currencies[Object.keys((state as ICountry).currencies)[0]] as { symbol: string }).symbol}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='world-map'>
        <WorldMap countryProp={state as ICountry}></WorldMap>
      </div>
      <div className='flag-coatOfArms'>
        <img className='country-flag' src={(state as ICountry).flags.png} alt="N/A" />
        <img className='country-coatOfArms' src={(state as ICountry).coatOfArms.png} alt="Image did not found" />
      </div>
    </div>
  );
};
