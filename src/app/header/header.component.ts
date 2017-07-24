import {Component,OnInit,EventEmitter,Output} from '@angular/core';
import {AuthService} from '../auth/auth.service';
@Component({
  selector:'app-header',
  templateUrl:'./header.component.html'
})

export class HeaderComponent implements OnInit
{
    constructor(private authService:AuthService)
    {

    }
    @Output()
    featureSelected=new EventEmitter<string>();

    onSelect(feature:string)
    {
      this.featureSelected.emit(feature);
    }
    onLogout(){
      this.authService.logout();
    }

    ngOnInit()
    {

    }
}
