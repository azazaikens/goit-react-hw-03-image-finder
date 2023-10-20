import { Component } from "react";
import style from '../../styles.module.css'

export class Modal extends Component {
  handleKeydown = ev => {
    if (ev.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handlOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onCloseModal();
    }
  };

  render() {
    return (
      <div className={style.Overlay} onClick={this.handlOverlayClick}>
            <div className={style.Modal}>
          <img src={this.props.data} alt="somebody" />
        </div>
      </div>
    );
  }
}