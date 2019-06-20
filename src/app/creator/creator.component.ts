import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css'],
  providers: [ProjectService]
})
export class CreatorComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(title: string, author: string, image: string, genre: string, description: string) {
    var newProject: Project = new Project(title, author, image, description, genre);
    this.projectService.addProject(newProject);
  }

}

