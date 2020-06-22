import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentComponent } from './document.component';

describe('DocumentComponent', () => {
  let component: Document;
  let fixture: ComponentFixture<Document>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Document);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
