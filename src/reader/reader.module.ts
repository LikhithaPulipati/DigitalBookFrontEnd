import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SubscribedbookComponent } from './subscribedbook/subscribedbook.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReadComponent } from './read/read.component';



const routes: Routes = [
  { path: "search", component: SearchComponent },
  { path: "read", component: ReadComponent },
  {path:"subscribedbook",component: SubscribedbookComponent}

];

@NgModule({
  declarations: [
    SearchComponent,
    ReadComponent,
    SubscribedbookComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ]
})
export class ReaderModule { }
