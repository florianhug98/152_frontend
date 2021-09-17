import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./components/error/not-found/not-found.component";
import { SearchComponent } from "./components/content/search/search.component";
import { PlayerDetailComponent } from "./components/content/player-detail/player-detail.component";

const routes: Routes = [
  { path: "search", component: SearchComponent },
  { path: "summoner", component: PlayerDetailComponent },
  { path: "", redirectTo: "search", pathMatch: "full" },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
