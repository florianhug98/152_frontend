import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SearchComponent } from "./components/content/search/search.component";
import { NotFoundComponent } from "./components/error/not-found/not-found.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { PlayerDetailComponent } from "./components/content/player-detail/player-detail.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { PlayerInfoComponent } from "./components/content/player-info/player-info.component";
import { MatCardModule } from "@angular/material/card";
import { RankInfoComponent } from "./components/content/rank-info/rank-info.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ItemComponent } from "./components/content/item/item.component";
import { ChampionsComponent } from "./components/content/champions/champions.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { LayoutModule } from "@angular/cdk/layout";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatMenuModule } from "@angular/material/menu";
import { PlayerStatsComponent } from './components/content/player-stats/player-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    NotFoundComponent,
    PlayerDetailComponent,
    PlayerInfoComponent,
    RankInfoComponent,
    ItemComponent,
    ChampionsComponent,
    PlayerStatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    FlexLayoutModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
