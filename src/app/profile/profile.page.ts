import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
cameraOptions = {
  quality: 90,
  allowEditing: true,
  resultType: CameraResultType.Uri
};
profileImg: any = '../../assets/images/user.svg';

  constructor() { }

  ngOnInit() {
  }

  async takePicture() {
    const image = await Camera.getPhoto(this.cameraOptions);
    console.log('image: ',image)
    var imageUrl = image.webPath;
    console.log('imageUrl: ',imageUrl)
    this.profileImg = imageUrl;
  }

}
