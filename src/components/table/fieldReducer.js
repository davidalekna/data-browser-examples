import React from 'react';
import { Input } from 'react-powerplug';
import { ControlledInput } from '../formElements';

function fieldReducer(fieldValue = '🍔', fieldName) {
  switch (fieldName) {
    case 'username':
      return (
        <Input initial={fieldValue}>
          {({ bind }) => (
            <ControlledInput {...bind} onClick={evt => evt.stopPropagation()} />
          )}
        </Input>
      );
    case 'name':
      return `🌄 ${fieldValue}`;
    case 'email':
      return `📝 ${fieldValue}`;
    case 'album':
      return `${fieldValue.title}`;
    default:
      return fieldValue;
  }
}

export default fieldReducer;
