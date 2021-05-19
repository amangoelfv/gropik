import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonImagesUrl } from '../../../assets/images/ImagesUrl';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private userService: UserService,
    private storageService: StorageService,

    ) { }


    ngOnInit(): void {

    this.getCachedUserData();
  }

  getCachedUserData() {

    const user = this.storageService.getItem('user');
    if (user?.token) {
      this.userService.signin(user)
    }

  }

  features = [
    {
      title: 'No waiting',
      subtitle: 'Say goodbye to waiting for your turn',
      imageUrl: CommonImagesUrl.NOWAIT
    },
    {
      title: 'Prepaid Orders',
      subtitle: 'Dodge the lines by paying up in advance for your cart',
      imageUrl: CommonImagesUrl.PREPAID_ORDER
    },
    {
      title: 'First Priority',
      subtitle: 'You\'ll be notified once the order is packed',
      imageUrl: CommonImagesUrl.FIRST_PRIORITY
    }
  ]
}
