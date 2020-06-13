import { Component, OnInit, Input } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { KeyValue } from '@angular/common';
import { ObjectID, ObjectId } from 'bson';

@Component({
  selector: 'app-json-viewer',
  templateUrl: './json-viewer.component.html',
  styleUrls: ['./json-viewer.component.css'],
})
export class JsonViewerComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit() {}
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
  };
}
@Pipe({ name: 'type' })
export class Type implements PipeTransform {
  transform(value: any) {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    return value._bsontype || value.constructor.name;
  }
}
@Pipe({ name: 'isEmpty' })
export class IsEmpty implements PipeTransform {
  transform(value) {
    let arr = value;
    if (value.constructor.name === 'Object') {
      arr = Object.keys(value);
    }
    return arr.length ? true : false;
  }
}
