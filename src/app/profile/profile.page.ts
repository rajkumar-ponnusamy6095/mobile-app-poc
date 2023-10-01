import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  resultType: CameraResultType.Base64
};
profileImg: any = '../../assets/images/user.svg';

  constructor(
    public dms: DomSanitizer
  ) { }

  ngOnInit() {
  }

  async takePicture() {
    const image = await Camera.getPhoto(this.cameraOptions);
    console.log('image: ',image)
    var imageUrl = image.base64String;
    console.log('imageUrl: ',imageUrl);
    this.profileImg = 'data:image/jpeg;base64,' + imageUrl;
    console.log('this.profileImg: ',this.profileImg);
  }

}
