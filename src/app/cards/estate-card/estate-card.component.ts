import { Component, Input, OnInit } from '@angular/core';
import {Estate} from '../../model/estate';
import {Router} from '@angular/router';
import {PictureService} from '../../service/picture.service';

@Component({
  selector: 'fest-finder-estate-card',
  templateUrl: './estate-card.component.html',
  styleUrls: ['./estate-card.component.scss']
})
export class EstateCardComponent implements OnInit {

  @Input() estate: Estate;

  picture: any;


  constructor(private router: Router, private pictureService: PictureService) { }

  ngOnInit(): void {
    if (this.estate.pictures.length > 0) {
      this.pictureService.getPicture(this.estate.pictures[0]).subscribe(data => {
        if (data.size !== 0) {
          this.createImageFromBlob(data);
        }
      });
    }
  }

  estateClick(): void {
    this.router.navigate(['./estate/' + this.estate.id]);
  }

  private createImageFromBlob(data: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.picture = reader.result;
    }, false);

    if (data) {
      reader.readAsDataURL(data);
    }
  }

}
