
import { Component, OnInit } from '@angular/core';
import { PositionService } from '../../position.service';
import { Position } from '../../models/position';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.scss']
})
export class PositionsComponent implements OnInit {
  positions: Position[] = [];
  displayedColumns: string[] = ['name', 'description', 'actions'];

  constructor(private _positionService: PositionService) { }

  ngOnInit(): void {
    this._positionService.getPositions().subscribe({
      next: (data) => {
        this.positions = data;
      },
      error: (e) => console.error(e)
    });
  }

  editPosition(positionId: any) {

  }

  deletePosition(positionId: any) {
  }
}
