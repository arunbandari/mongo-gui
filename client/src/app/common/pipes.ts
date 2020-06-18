import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'type' })
export class Type implements PipeTransform {
  transform(value: any) {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    return value._bsontype || value.constructor.name;
  }
}

@Pipe({ name: 'hasMoreText' })
export class HasMoreText implements PipeTransform {
  transform(value: any) {
    return value.length > 79;
  }
}

@Pipe({ name: 'isExpandable' })
export class IsExpandable implements PipeTransform {
  transform(value) {
    const type = new Type();
    const bsonType = type.transform(value);
    if (bsonType !== 'Object' && bsonType !== 'Array') return false;
    if (bsonType === 'Object') value = Object.keys(value);
    return value.length ? true : false;
  }
}

@Pipe({ name: 'formatValue' })
export class FormatValue implements PipeTransform {
  transform(value) {
    const type = new Type();
    const isExpandable = new IsExpandable();
    const hasMoreText = new HasMoreText();
    const bsonType = type.transform(value); 
    let template;
    switch(bsonType) {
      case 'null': template = 'null';
      break;
      case 'undefined': template = 'undefined';
      break;
      case 'String': template = `"${ hasMoreText.transform(value) ? `${value.substring(0, 79)}...` : value }"`;
      break;
      case 'ObjectID': template = `ObjectId("${value}")`;
      break;
      case 'Date': template = value.toJSON();
      break;
      case 'MinKey': template = 'MinKey()';
      break;
      case 'MaxKey': template = 'MaxKey()';
      break;
      case 'Binary': template = `Binary('${value.toJSON()}', ${ value.sub_type })`;
      break;
      case 'Object': template = `${ isExpandable.transform(value) ? 'Object' : '{}' }`;
      break;
      case 'Array': template = `${ isExpandable.transform(value) ? 'Array['+value.length+']' : '[]' }`;
      break;
      default: template = value;
      break;
    }
    return template;
  }
}
