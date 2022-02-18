import { Component, OnInit, ViewChild } from '@angular/core';
import { Country } from '../interfaces/Country';
import { Statistic } from '../interfaces/Statistic';
import { CovidService } from '../services/covid.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge } from 'rxjs';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  statistic: Statistic;
  countries: Country;
  title: "Estado del covid-19 en el mundo"

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.getDataAllCountries();
  }

  getDataAllCountries() {
    this.covidService.getDataAllCountries().subscribe(d => {
      this.statistic = d;
      this.countries = d.Countries
    }), e => {
      console.error(e);
    }
  }

  displayedColumns: string[] = ['name', 'code', 'slug', 'newConfirmed', 'totalConfirmed', 'newDeaths', 'totalDeaths', 'newRecovered', 'totalRecovered', 'date'];

}

