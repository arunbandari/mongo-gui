import { Component, OnInit, Input } from '@angular/core';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() { }
  clicked(e, row) {
    e.stopPropagation();
    const thisClassList = e.target.classList;
    if (thisClassList.contains('expanded')) {
      thisClassList.replace('expanded', 'collapsed');
    } else {
      thisClassList.replace('collapsed', 'expanded');
    }
    const targetEl =
      e.target.tagName === 'I'
        ? e.target.parentNode.parentNode
        : e.target.parentNode;
    const children =
      targetEl.querySelector('ul') ||
      (targetEl.nextSibling &&
        targetEl.nextSibling.querySelector &&
        targetEl.nextSibling.querySelector('ul'));
    if (children && children.classList) {
      const classList = children.classList;
      if (classList.contains('open')) {
        classList.remove('open');
      } else {
        classList.add('open');
      }
    }
  }
  isEmptyObject(obj) {
    return obj && Object.keys(obj).length === 0;
  }
  originalOrder = (
    a: KeyValue<number, string>,
    b: KeyValue<number, string>
  ): number => {
    return 0;
  }

  showMoreLessText(e, value) {
    e.preventDefault();
    const thisClassList = e.target.classList;
    if (thisClassList.contains('expanded')) {
      thisClassList.replace('expanded', 'collapsed');
    } else {
      thisClassList.replace('collapsed', 'expanded');
    }
    const flag = e.target.previousElementSibling.classList.toggle('full-text');
    if (flag) {
      e.target.previousElementSibling.innerText = `"${value}"`;
    } else {
      e.target.previousElementSibling.innerText = `"${value.substring(0, 79)}..."`;
    }
  }
}
