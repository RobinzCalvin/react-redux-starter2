import React from 'react';
import { shallow } from 'enzyme';
import { INotification } from 'shared/types/common';
import { Notification } from '../Notification';

describe('(services/notification) Notification container', () => {
  const notification: INotification = {
    kind: 'error',
    text: 'notification text',
  };
  const component = shallow(<Notification notification={notification} />);

  it('should render notification text', () => {
    expect(component.find('.notification__text').text()).toBe(notification.text);
  });

  it('should not render if no notification provided', () => {
    const emptyNotification = shallow(<Notification notification={null} />);
    expect(emptyNotification.html()).toBeNull();
  });
});
