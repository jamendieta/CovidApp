import { Country } from "./Country";

export interface Statistic {
  ID: string;
  Message: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: Date;
  Countries: Country[]
}