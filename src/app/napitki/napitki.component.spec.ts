import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NapitkiComponent } from './napitki.component';

describe('NapitkiComponent', () => {
  let component: NapitkiComponent;
  let fixture: ComponentFixture<NapitkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NapitkiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NapitkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
