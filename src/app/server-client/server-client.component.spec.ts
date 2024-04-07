import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerClientComponent } from './server-client.component';

describe('ServerClientComponent', () => {
  let component: ServerClientComponent;
  let fixture: ComponentFixture<ServerClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServerClientComponent]
    });
    fixture = TestBed.createComponent(ServerClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
