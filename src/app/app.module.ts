import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FrontendRoadmapService } from 'src/services/frontend-roadmap.service';
import { HttpClientModule } from '@angular/common/http';
import { FrontendRoadmapTableComponent } from 'src/components/frontend-roadmap/frontend-roadmap-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from 'src/components/frontend-roadmap/toolbar/toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReusableButtonComponent } from 'src/components/frontend-roadmap/reusable-component/reusable-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from 'src/components/frontend-roadmap/forms/contact.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule for input fields

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    FrontendRoadmapTableComponent,
    ToolbarComponent,
    ReusableButtonComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FrontendRoadmapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
