class AbstractView {
  constructor(props) {
    this.props = props;
  }

  setTitle(title) {
    document.title = title;
  }
}

export default AbstractView;
