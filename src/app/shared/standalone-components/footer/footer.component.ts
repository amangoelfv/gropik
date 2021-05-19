import { Component, OnInit } from '@angular/core';
import { commonIconUrls } from '../../../../assets/icons/CommonIconsUrl';
import { AppColors } from '../../constants/colors';
import { IBtnConfig, IBtnTypes } from '../../ui-components/button/button.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  socialLinks = [
    {
      name: 'Facebook',
      icon: commonIconUrls.facebook,
      link: null
    },
    {
      name: 'Twitter',
      icon: commonIconUrls.twitter,
      link: null
    },
    {
      name: 'Instagram',
      icon: commonIconUrls.instagram,
      link: null
    },
  ]

  commonFooterLinkConfig = {
    textColor: AppColors.white,
    type: IBtnTypes.TEXT
  }
  navLinks: IBtnConfig[] = [
    {
      text: 'ABOUT US',
      ...this.commonFooterLinkConfig
    },
    {
      text: 'CONTACT US',
      ...this.commonFooterLinkConfig
    },
    {
      text: 'Become a seller',
      ...this.commonFooterLinkConfig
    },
  ]
  ngOnInit(): void {
  }

}
