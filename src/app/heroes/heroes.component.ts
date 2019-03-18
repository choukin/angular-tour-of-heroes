import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock.heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes: Hero[] = HEROES;

  selectedHero: Hero;
  constructor() { }



  /**
   * Angular 在创建完组件后很快就会调用 ngOnInit。
   * 这里是放置初始化逻辑的好地方
   */
  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
