import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pool-header',
  styleUrls: ['./pool-header.component.scss'],
  templateUrl: './pool-header.component.html',

})
export class PoolHeaderComponent implements OnInit {
  public buttons: { permissionName: string, name: string, path: string }[];

  constructor(private router: Router) {
  }

  public ngOnInit(): void {
    this.buttons = [
      { permissionName: '', name: 'News', path: 'news' }
    ];
  }

  public goHome() {
    this.router.navigate([`/home`]);
  }

  public goToAdmin() {
    this.router.navigate([`/pool-administration`]);
  }

  public logOut() {
    this.router.navigate([`/logout`]);
  }
}
