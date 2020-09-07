import { createElement, Component, render } from './toy-react';

class MyComponents extends Component {
  render() {
    return <div><h1>component</h1>{ this.children }</div>
  }
}

render(<MyComponents>123</MyComponents>, document.body);
