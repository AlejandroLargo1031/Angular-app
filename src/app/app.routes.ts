import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./components/hello/hello.component").then(m => m.HelloComponent)
  },
  {
    path: "world",
    loadComponent: () => import("./components/world/world.component").then(m => m.WorldComponent)
  },
  {
    path: "palindromo",
    loadComponent: () => import("./components/palindromo/palindromo.component").then(m => m.PalindromoComponent)
  }
];
