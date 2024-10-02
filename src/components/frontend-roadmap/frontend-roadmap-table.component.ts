import { Component, OnInit } from '@angular/core';
import { FrontendRoadmapService } from '../../services/frontend-roadmap.service';

interface FrontendRoadmap {
  core_skills: string[];
  frameworks_libraries: string[];
  tools: string[];
  soft_skills: string[];
}

@Component({
  selector: 'app-frontend-roadmap-table',
  templateUrl: './frontend-roadmap-table.component.html',
  styleUrls: ['./frontend-roadmap-table.component.scss']
})

export class FrontendRoadmapTableComponent implements OnInit {
  roadmapData: { key: string, value: FrontendRoadmap }[] = [];
  displayedColumns: string[] = ['level', 'core_skills', 'frameworks_libraries', 'tools', 'soft_skills'];

  constructor(private roadmapService: FrontendRoadmapService) {}

  ngOnInit(): void {
    this.roadmapService.getFrontendRoadmap().subscribe(data => {
      this.roadmapData = Object.entries(data.frontend_developer_roadmap).map(([key, value]) => ({
        key,
        value: value as FrontendRoadmap
      }));
    });
  }
}