import { Component, OnInit } from '@angular/core';
import {ProfileListService} from "./profile-list.service";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {

  profileList: any = null;
  page: number = 1;


  constructor( private route: ActivatedRoute, private service: ProfileListService ) { }

  ngOnInit(): void {

    this.getProfileListData();
  }

  getProfileListData( ){
    this.profileList = null;
    this.route.params.subscribe((params) => {
      if (params.hasOwnProperty('page')) {
        this.page = parseInt(params.page);
      }
    });

    let profileListResponse: any = null;
    this.service.getProfileList(this.page).subscribe(
      (response) => {
        profileListResponse = response;
        this.profileList = profileListResponse.data;
      });

  }


}
