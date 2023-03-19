import React from 'react';

import Password from './Password';
import UserSetting from './UserSetting';

export default function Settings() {
  return (
    <div>
      <UserSetting />
      <Password />
    </div>
  );
}
