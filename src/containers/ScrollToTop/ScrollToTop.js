import { Component } from 'react';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    console.log(this.props);
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default ScrollToTop;