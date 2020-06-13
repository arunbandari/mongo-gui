import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionRendererComponent } from './collection-renderer.component';

describe('CollectionRendererComponent', () => {
  let component: CollectionRendererComponent;
  let fixture: ComponentFixture<CollectionRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
