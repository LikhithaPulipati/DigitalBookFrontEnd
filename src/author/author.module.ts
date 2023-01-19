import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

import { BooksComponent } from './books/books.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BlockComponent } from './block/block.component';

const routes: Routes = [
  { path: "create", component: CreateComponent },
  { path: "edit", component: EditComponent },
  { path: "block", component: BlockComponent },
  { path: "books", component: BooksComponent }
];

@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    BooksComponent,
    BlockComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ]
})
export class AuthorModule { }
