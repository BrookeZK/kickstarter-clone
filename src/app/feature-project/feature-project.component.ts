import { Component, OnInit } from '@angular/core';
import {Project} from '../models/project.model';
import { ProjectService } from '../project.service'; 
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-feature-project',
  templateUrl: './feature-project.component.html',
  styleUrls: ['./feature-project.component.css'],
  providers: [ProjectService]
})
export class FeatureProjectComponent implements OnInit {
  projectToDisplay;

  constructor(private router: Router, private projectService: ProjectService) { }

  title = "Featured Project";

  ngOnInit() {
  this.projectToDisplay = this.projectService.getProjectByFeatured();
  }

  goToDetailPage(clickedProject: Project) {
    this.router.navigate(['projects', clickedProject.$key]);
  }

}
