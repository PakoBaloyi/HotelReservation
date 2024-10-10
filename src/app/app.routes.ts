import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';

export const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"list", component:ReservationFormComponent},
  {path:"new", component:ReservationFormComponent}
];
