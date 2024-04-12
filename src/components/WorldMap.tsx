import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";
import { ICountry } from "../Models/CountryModel";

const WorldMap = ({ countryProp}: { countryProp: ICountry }) => {
  return (
    <ComposableMap
    className="world-map"
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        scale:150
      }}
    >
      <Geographies
        geography="/features.json"
        fill="deepskyblue"
        stroke="red"
        strokeWidth={0.5}
        
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography  key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[countryProp.latlng[1],countryProp.latlng[0]]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "Black",
          strokeWidth: 2,
          strokeLinecap: "round"
          
        }}
      >
        <image
          x="-8"
          y="-8"
          width="46"
          height="46"
          xlinkHref={countryProp.flags.png}
        />
      </Annotation>
    </ComposableMap>
  );
};

export default WorldMap;