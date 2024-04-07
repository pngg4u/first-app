import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerClientClassComponent } from './server-client-class.component';

describe('ServerClientClassComponent', () => {
  let component: ServerClientClassComponent;
  let fixture: ComponentFixture<ServerClientClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServerClientClassComponent]
    });
    fixture = TestBed.createComponent(ServerClientClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
