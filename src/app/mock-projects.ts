import { Project } from './models/project.model';

// constructor(public title: string, public author: string, public img: string, public description: string, public featured: boolean = false, public recommended: boolean = false, public genre: string


export const PROJECTS: Project[] = [
new Project('LUMI', 'ROLI', 'https://ksr-static.imgix.net/z83cmcsk-lumi.jpg?ixlib=rb-2.0.0&auto=compress&w=1000&fit=min&s=79ceb61aaec3d5bf1cd2aabe8a15be69', 'A bright new way to learn and play music.', 'music' ),
new Project('An Invite to Eternity: Tales of Nature Disrupted', 'Calque press', 'https://ksr-ugc.imgix.net/assets/025/183/820/305239684359fc35c3aaaf6633c20c09_original.png?ixlib=rb-2.0.0&crop=faces&w=1024&h=576&fit=crop&v=1558179829&auto=format&frame=1&q=92&s=324117904286ff7b1649ecf572d7c785', 'Anthology about ecological uncertainties by international speculative fiction authors.', 'Books' ),
new Project('New York Drawings', 'Lucinda Rogers', 'https://ksr-ugc.imgix.net/assets/024/483/294/fd0fa56d50a615c73b1d6428806db8b4_original.jpg?ixlib=rb-2.0.0&crop=faces&w=352&h=198&fit=crop&v=1553111635&auto=format&frame=1&q=92&s=b664442726d31d7ae4b7b61d739807d9', 'A book revealing NYC in 90 drawings over 30 years through the eyes of artist Lucinda Rogers', 'Art' ),
new Project('TWEEDL', 'TWEEDL', 'https://ksr-ugc.imgix.net/assets/025/277/888/80f1f0c7506133ad445829a6268b7093_original.jpg?ixlib=rb-2.0.0&crop=faces&w=352&h=198&fit=crop&v=1558954877&auto=format&frame=1&q=92&s=7424d6e87bfa2bda41e44f62f0f109ae', 'Where the people select the next hot music ', 'music' ),
]