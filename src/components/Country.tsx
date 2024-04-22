import { Link, useLocation } from 'react-router-dom';
import { ICountry } from '../Models/CountryModel'
import '../assets/styles/CountryStyle.css';
import WorldMap from './WorldMap';


export const Country = () => {
  const { state } = useLocation();
  const Country = state as ICountry;
  const Languages: string[] = Object.values(Country.languages)

  return (
    <>
      {/* <Header></Header> */}
      {/* Bu variydi amma maindeki linkden bura gelende error
      verirdi ki context-i gore bilmir
      ona gore de ayri header duzeltmeli oldum country-ler uchun*/}
      <div className="header-style">
        <Link to={`/`} className="logo">
          <img className="logo-image " src="https://cdn.discordapp.com/attachments/1039503518404456458/1227235061716226159/image.png?ex=6627aab7&is=661535b7&hm=6da559478f65a63b3eb8625e38d77766d5f466520f94917b0345cad2cbfa19c1&" alt="" />
          <img src="https://cdn.discordapp.com/attachments/1039503518404456458/1227235223159312445/image.png?ex=6627aade&is=661535de&hm=0d6882ba88ca53ff1cd7b4cf5e4020e3a7e16e5eb4890b646e6515182a5354d2&" alt="" />
        </Link>
      </div>
      <div className='country-page-info'>
        <div className='info'>
          <div className='names'>
            <h2>Names:</h2>
            <div className='ordinary-style'>
              <span>Common:</span>
              <h2>{Country.name.common}</h2>
            </div>
            <div className='ordinary-style'>
              <span>Official:</span>
              <h2>{Country.name.official}</h2>
            </div>
          </div>
          <div className='native-names'>
            <div>
              <h2>Native names:</h2>
              <div className='ordinary-style'>
                <span>Common</span>
                <h2>{Country.name.nativeName[Object.keys(Country.name.nativeName)[0]].common}</h2>
              </div>
              <div className='ordinary-style'>
                <span>Official</span>
                <h2>{Country.name.nativeName[Object.keys(Country.name.nativeName)[0]].official}</h2>
              </div>
            </div>
          </div>
          <div className='ordinary-style'>
            <span>Capital:</span>
            <h2>{Country.capital === undefined ? `N/A` : Country.capital[0]}</h2>
          </div>
          <div className='ordinary-style'>
            <span>Region:</span>
            <h2>{Country.region === undefined ? `N/A` : Country.region}</h2>
          </div>
          <div className='ordinary-style'>
            <span>Subregion:</span>
            <h2>{Country.subregion === undefined ? `N/A` : Country.subregion}</h2>
          </div>
          <div className='ordinary-style'>
            <span>Population:</span>
            <h2>{Country.population === undefined ? `N/A` : Country.population}</h2>
          </div>
          <div className='Currencies'>
            <div>
              <h2>Currencies:</h2>
              <div className='ordinary-style'>
                <span>Name:</span>
                <h2>{Country.currencies === undefined ? `N/A` : (Country.currencies[Object.keys(Country.currencies)[0]] as { name: string }).name}</h2>
              </div>
              <div className='ordinary-style'>
                <span>Symbol:</span>
                <h2>{Country.currencies === undefined ? `N/A` : (Country.currencies[Object.keys(Country.currencies)[0]] as { symbol: string }).symbol}</h2>
              </div>
            </div>
          </div>
          <div >
            <div className='ordinary-style'>
              <span>Languages:</span>
              <ul className='Languages'>
                {Languages.map((L, index) =>
                  <li key={index}>
                    <h3>{L}{index !== Languages.length - 1 ? "," : null}</h3>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div>
            <div className='ordinary-style'>
              <span>Alt spellings:</span>
              <ul className='alt-spellings'>
                {Object.values(Country.altSpellings).map((as, index) => (
                  <li key={index}>
                    <h3>{as}</h3>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ marginTop: `10px` }} className='ordinary-style'>
              <span>Status:</span>
              <h2>{Country.status}</h2>
            </div>
            <div className='ordinary-style'>
              <span>Web pages:</span>
              <ul className='web-pages'>
                {Country.web_pages !== undefined ? Country.web_pages.map((wp, index) =>
                  <li><h3>{wp}</h3></li>
                ) : <h2>"N/A"</h2>}
              </ul>
            </div>
          </div>
        </div>
        <div className='flag-coatOfArms'>
          <img className='country-flag' src={Country.flags.png} alt="N/A" />
          <img className='country-coatOfArms' src={Country.coatOfArms.png} alt="Image did not found" />
          <div className='world-map'>
            <WorldMap latlng1={Country.latlng[0]} latlng2={Country.latlng[1]}></WorldMap>
          </div>
        </div>

      </div>
    </>
  );
};
