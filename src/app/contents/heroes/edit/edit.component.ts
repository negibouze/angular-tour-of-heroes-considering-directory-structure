import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Hero } from '@app/shared/entities/hero.entity';
import { HeroService } from '@app/core/services/hero.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.styl']
})
export class EditComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  add(name: string): void {
    name = name.trim()
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe((_) => this.goBack())
  }

  goBack(): void {
    this.location.back();
  }
}
