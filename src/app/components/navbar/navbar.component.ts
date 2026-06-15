import { Component } from "@angular/core";
import { routes } from "../../app.routes";
import { RouterLink, RouterLinkActive } from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [RouterLink, RouterLinkActive]
})

export class NavbarComponent {

  routes = routes.map(route => {
    return {
      title: route.title ?? '',
      path: route.path ?? ''
    }
  })

}
