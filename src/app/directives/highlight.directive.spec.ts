import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: '<p appHighlight></p>'
})
class TestHighlightDirectiveComponent {
}

let fixture: ComponentFixture<TestHighlightDirectiveComponent>;
let component: TestHighlightDirectiveComponent;
let paragraph: DebugElement;

describe('HighlightDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHighlightDirectiveComponent, HighlightDirective],
      imports: []
    });
    fixture = TestBed.createComponent(TestHighlightDirectiveComponent);
    component = fixture.componentInstance;
    paragraph = fixture.debugElement.query(By.css('p'));
  });

  it('hightlight p in over', () => {
    paragraph.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    console.log('Over', paragraph);
    expect(paragraph.nativeElement.style.backgroundColor).toBe('red');
    paragraph.triggerEventHandler('mouseleave', null);
    fixture.detectChanges();
    console.log('Out', paragraph);
    expect(paragraph.nativeElement.style.backgroundColor).toBe('');
  });
});
