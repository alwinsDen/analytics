export interface CardsInterace {
  header: string;
  subHeader: string;
  subContent: string;
}
export interface IconInterface {
  background: string;
}

export interface TableDataInterface {
  email: string;
  invited: number;
  country: string;
}

export interface LabelMeasureGraphs {
  mainHeader: string;
  buttonArray: string[];
  graphContent: {
    series: number[];
    labelJSX: JSX.Element[];
  };
  expandContent: string;
  gap: number;
}
