import { Component, OnInit } from '@angular/core';
import {Project} from '../models/project.model';
import { ProjectService } from '../project.service'; 
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-recommended-projects',
  templateUrl: './recommended-projects.component.html',
  styleUrls: ['./recommended-projects.component.css'],
  providers: [ProjectService]
})
export class RecommendedProjectsComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  constructor(private router: Router, private projectService: ProjectService) { }
  // currentRoute: string = this.router.url;
  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }


  goToDetailPage(clickedProject: Project) {
    this.router.navigate(['projects', clickedProject.$key]);
  }
}
