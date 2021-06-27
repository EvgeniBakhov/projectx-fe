import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EstateService} from '../../service/estate.service';
import {Estate} from '../../model/estate';

@Component({
  selector: 'fest-finder-estate-details',
  templateUrl: './estate-details.component.html',
  styleUrls: ['./estate-details.component.scss']
})
export class EstateDetailsComponent implements OnInit {
  estate: Estate;
  id: number;

  constructor(private activatedRoute: ActivatedRoute, private estateService: EstateService) { }

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.estateService.getEstateById(this.id).subscribe(estate => {
      this.estate = estate;
    });
  }
}
