import React from 'react';
import Modal from 'react-modal';
import LoginFormContainer from '../session_form/login_form_container';
import FormModalStyle from './form_modal_style';

class LoginFormModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.afterModalOpen = this.afterModalOpen.bind(this);
  }
}
