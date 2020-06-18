import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Document } from './document.component';

describe('Document', () => {
  let component: Document;
  let fixture: ComponentFixture<Document>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Document ]
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
