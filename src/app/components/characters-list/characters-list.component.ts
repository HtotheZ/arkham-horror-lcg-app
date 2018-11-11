import { Component, Input } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent {

  @Input() characters: Character[];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  editCharacter(id: number) {
    this.router.navigate([`edit-character/${id}`], { relativeTo: this.route });
  }

}
