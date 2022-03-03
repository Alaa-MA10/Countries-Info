export interface ICountry {
    name: Name;
    topLevelDomain: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: Currencies;
    idd: Idd;
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: Languages;
    translations: Translations;
    latlng: number[];
    landlocked: boolean;
    borders: string[];
    area: number;
    demonyms: Demonyms;
    flag: string;
    maps: Maps;
    population: number;
    gini: Gini;
    fifa: string;
    car: Car;
    timezones: string[];
    continents: string[];
    flags: Flags;
    coatOfArms: Flags;
    startOfWeek: string;
    capitalInfo: CapitalInfo;
    postalCode: PostalCode;
  }

  export interface Name {
    common: string;
    official: string;
    nativeName: string;//NativeName;
  }
  
//   export interface NativeName {
//     [key: string]: NativeNames;
//   }
  
//   export interface NativeNames {
//     official: string;
//     common: string;
//   }

  export interface Currencies {
    [code: string]: Currency;
  }
  
  export interface Currency {
    name: string;
    symbol: string;
  }

  export interface Idd {
    root: string;
    suffixes: string[];
  }

  export interface Languages {
    name: string;
    // [key: string]: string;
  }
  
  export interface Translations {
    ara: string;
    ces: string;
    cym: string;
    deu: string;
    est: string;
    fin: string;
    fra: string;
    hrv: string;
    hun: string;
    ita: string;
    jpn: string;
    kor: string;
    nld: string;
    per: string;
    pol: string;
    por: string;
    rus: string;
    slk: string;
    spa: string;
    swe: string;
    urd: string;
    zho: string;
  }

  export interface PostalCode {
    format: string;
    regex: string;
  }
  
  export interface CapitalInfo {
    latlng: number[];
  }
  
  export interface Flags {
    png: string;
    svg: string;
  }
  
  export interface Car {
    signs: string[];
    side: string;
  }
  
  export interface Gini {
    [year: string]: number;
  }
  
  export interface Maps {
    googleMaps: string;
    openStreetMaps: string;
  }
  
  export interface Demonyms {
    eng: Eng;
    fra: Eng;
  }
  
  export interface Eng {
    f: string;
    m: string;
  }


