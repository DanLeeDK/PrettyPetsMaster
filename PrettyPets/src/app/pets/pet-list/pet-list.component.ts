import { UserService } from './../../user/user.service';
import { Component, OnInit } from '@angular/core';
import { PetService, Pet } from './../pet.service';
import { Image } from '../../shared/Image';


@Component({
  selector: 'pm-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {
petslist: Pet[];
  constructor(private service: PetService) { }

  addFavorit() {
    alert('You added this pet to your list off favorit pets!');
  }

  ngOnInit() {
    this.service.getAllPets().subscribe(data => {
      this.petslist = data;
    });
  }
}
