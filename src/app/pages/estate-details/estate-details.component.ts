import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EstateService} from '../../service/estate.service';
import {Estate} from '../../model/estate';
import {PictureService} from '../../service/picture.service';

@Component({
  selector: 'fest-finder-estate-details',
  templateUrl: './estate-details.component.html',
  styleUrls: ['./estate-details.component.scss']
})
export class EstateDetailsComponent implements OnInit {
  estate: Estate;
  id: number;
  pictures = [];

  constructor(private activatedRoute: ActivatedRoute, private estateService: EstateService, private pictureService: PictureService) { }

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.estateService.getEstateById(this.id).subscribe(estate => {
      this.estate = estate;
      this.loadPictures();
    });
  }

  private loadPictures() {
    for (const picture of this.estate.pictures) {
      this.pictureService.getPicture(picture).subscribe( data => {
        this.createPictureFromBlob(data);
      });
    }
  }

  private createPictureFromBlob(data: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.pictures.push(reader.result);
    }, false);

    if (data) {
      reader.readAsDataURL(data);
    }
  }
}
