import { Component, OnInit } from '@angular/core';
import { DatagetterService } from '../datagetter.service';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { DatasenderService } from '../datasender.service';
import { DatadeleteService } from '../datadelete.service';
import { DataupdateService } from '../dataupdate.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postDataForm = new FormGroup({
    postData: new FormGroup({ 
      author: new FormControl(''), 
      title: new FormControl('') })
  });

  constructor(private datagetterService: DatagetterService, 
              private DatasenderService: DatasenderService,
              private datadeleteService: DatadeleteService,
              private dataupdateService: DataupdateService) { }

  posts:any;

  ngOnInit(): void {
    
  }

  getPosts(){
    // console.log('Muxik');
    this.datagetterService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

  postData(){
    // console.log('posting');
    const data:any = {
      "author":  this.postDataForm.get('postData.author')!.value,
      "title": this.postDataForm.get('postData.title')!.value
    }
    
    this.DatasenderService.httpSend(data);
    // ide jon egy http POST request egy servicebol
    this.postDataForm.reset(); 
    console.log('Data sent');
    this.datagetterService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

  updateLine(id:any){
    this.dataupdateService.log(id);
  }

  deleteLine(id:any){
    this.datadeleteService.delete(id).subscribe(data => {
      console.log(data);
    });
    this.datagetterService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
}
