import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersWithoutUrlsComponent } from './servers-without-urls.component';

describe('ServersWithoutUrlsComponent', () => {
  let component: ServersWithoutUrlsComponent;
  let fixture: ComponentFixture<ServersWithoutUrlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServersWithoutUrlsComponent]
    });
    fixture = TestBed.createComponent(ServersWithoutUrlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
