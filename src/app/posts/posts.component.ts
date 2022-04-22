import { Component, OnInit } from '@angular/core';
import { DatagetterService } from '../datagetter.service';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { DatasenderService } from '../datasender.service';
import { DatadeleteService } from '../datadelete.service';
import { DataupdateService } from '../dataupdate.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postDataForm = new FormGroup({
    postData: new FormGroup({ 
      author: new FormControl(this.router.url), 
      title: new FormControl('Kicsipocsom') })
  });

  constructor(private datagetterService: DatagetterService, 
              private DatasenderService: DatasenderService,
              private datadeleteService: DatadeleteService,
              private dataupdateService: DataupdateService,
              private router : Router) {  }

  public posts:any;

  public url!: String;

  public value!: String;

  public title!: String;
  
  ngOnInit(): void {
  }

    getPosts(){
    this.datagetterService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

  
  
  postData(){
    // console.log('posting');
    let data:any = {
      "author":  this.postDataForm.get('postData.author')!.value,
      "title": this.postDataForm.get('postData.title')!.value
    }
    
    this.DatasenderService.httpSend(data).then(() => {
      console.log('Data sent');
      this.datagetterService.getPosts().subscribe(data => {
        this.posts = data;
      });
    });   
  }
  
  updateLine(id:any){
    this.dataupdateService.log(id);
  }

  deleteLine(id:any){
    this.datadeleteService.delete(id).subscribe(data => {
      this.datagetterService.getPosts().subscribe(data => {
        this.posts = data;
      });
      console.log(data);
    });
  }
}
