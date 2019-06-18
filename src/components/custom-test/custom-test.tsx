import {h, Component, Element} from '@stencil/core';

function Decorator() {
  return (proto, prop) => {
    proto.componentWillLoad = function() {
      console.log('willload', prop);
    }
    proto.componentDidLoad = function() {
      console.log('didload', prop);
    }
    proto.componentDidUpdate = function() {
      console.log('didupdate', prop);
    }
    proto.componentDidUnload = function() {
      console.log('didunload', prop);
    }
    proto.render = function() {
      return <div onClick={() => this.el.remove()}>Hello World</div>
    }
  }
}

@Component({
  tag: 'custom-test'
})
export class CustomTest {
  @Element() el: HTMLElement;
  @Decorator() foo: string;
}
