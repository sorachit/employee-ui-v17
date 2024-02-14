import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Mode } from '../type/mode';

@Component({
  selector: 'app-employee-save',
  standalone: true,
  imports: [RouterModule,ButtonModule],
  templateUrl: './employee-save.component.html',
  styleUrl: './employee-save.component.scss'
})
export class EmployeeSaveComponent implements OnInit{
  id?: string;
  mode!: Mode;
  activeRoute = inject(ActivatedRoute);
  ngOnInit(): void {
    const { mode } = this.activeRoute.snapshot.data;
    this.mode = mode;
    const { id } = this.activeRoute.snapshot.params;
    this.id = id;
  }

}
