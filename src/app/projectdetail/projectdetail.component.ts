import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
// import { Project } from '../models/project.model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ProjectService} from '../project.service';


@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.css'],
  providers: [ProjectService]
})
export class ProjectdetailComponent implements OnInit {
  projectId: string;
  projectToDisplay;
  
  constructor(private route: ActivatedRoute, private location: Location, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.projectToDisplay = this.projectService.getProjectById(this.projectId);
  }

}
