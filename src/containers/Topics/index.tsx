import * as React from 'react';
const style = require('./style.css');

class Topics extends React.Component<any, any> {
  public render() {
    return (
      <div className={style.About}>
        <h4>Topics</h4>
      </div>
    );
  }
}

export { Topics }
