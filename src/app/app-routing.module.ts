import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./components/error/not-found/not-found.component";
import { SearchComponent } from "./components/content/search/search.component";
import { ItemComponent } from "./components/content/item/item.component";
import { ChampionsComponent } from "./components/content/champions/champions.component";
import { ChampionDetailComponent } from "./components/content/champions/champion-detail/champion-detail.component";

const routes: Routes = [
  { path: "search", component: SearchComponent },
  { path: "items", component: ItemComponent },
  { path: "champions", component: ChampionsComponent },
  { path: "champions/detail/:id", component: ChampionDetailComponent},
  { path: "champions/detail", redirectTo: "champions"},
  { path: "", redirectTo: "search", pathMatch: "full" },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
