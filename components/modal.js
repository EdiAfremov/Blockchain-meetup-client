import { Component } from 'preact';
import Dialog from 'preact-material-components/Dialog';
import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';
import 'preact-material-components/Theme/style.css';
import 'preact-material-components/Dialog/style.css';
import Success from './registered-success';

export default class Modal extends Component {
  componentDidMount() {
    if (this.props.show) {
      this.modal.MDComponent.show();
    }
  }

  render() {
    return (
      <Dialog
        ref={modal => {
          this.modal = modal;
        }}
      >
        <Dialog.Header />
        <Dialog.Body>
          <Success />
        </Dialog.Body>
        <Dialog.Footer>
          <Button
            onClick={() => {
              this.modal.MDComponent.close();
            }}
            raised
            className="close-modal-bg"
          >
            אישור
          </Button>
        </Dialog.Footer>
      </Dialog>
    );
  }
}
