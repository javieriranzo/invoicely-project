import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarMenu } from './nav-bar-menu';

describe('NavBarMenu', () => {
  let component: NavBarMenu;
  let fixture: ComponentFixture<NavBarMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
