import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, UrlSegment } from '@angular/router';
import { AppColors } from '../../constants/colors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  appColors = AppColors;
  headerConfig: any;
  commonConfig = {
    backgroundColor: AppColors.white,
    showLogo: true,
    showSearch: true,
    showAuth: true,
    fullWidth: false,
    fixed: true,
    authConfig: {
      signUpButton: {
        fillColor: AppColors.primaryColor,
        textColor: AppColors.white
      },
      signInButton: {
        textColor: AppColors.dark
      }
    }
  }

  homeHeaderConfig = {
    backgroundColor: AppColors.transparent,
    showLogo: false,
    showSearch: false,
    showAuth: true,
    fullWidth: true,
    authConfig: {
      signUpButton: {
        fillColor: AppColors.white,
        textColor: AppColors.dark
      },
      signInButton: {
        textColor: AppColors.white,
      }
    }
  }
  authButtonsConfig: any;
  ngOnInit(): void {
    this.headerConfig = this.commonConfig;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url == '/') {
          this.headerConfig = this.homeHeaderConfig;
          this.authButtonsConfig = this.homeHeaderConfig.authConfig;
        } else {
          this.headerConfig = this.commonConfig;
          this.authButtonsConfig = this.commonConfig.authConfig;
        }
      }
    })
  }

  goToHome() {
    this.router.navigate(['/'])
  }

}
