import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import CryptoJS from 'crypto-js';

export default class RegisterComponent extends Component {
  @tracked Name = '';
  @tracked Username = '';
  @tracked Password = '';
  @tracked ConfirmPassword = '';

  get disableSubmit() {
    return (
      !this.Name.length ||
      !this.Username.length ||
      !(this.Password == this.ConfirmPassword)
    );
  }

  get NamedisableSubmit() {
    return !this.Name.length || !this.Username.length;
  }

  get PassworddisableSubmit() {
    return !(this.Password == this.ConfirmPassword);
  }

  @action async onSubmit() {
    event.preventDefault();
    const data = {
      name: this.Name,
      Username: this.Username,
      Password: Password,
    };
    const response = await fetch(`http://localhost:3000/api/Authors`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log('success');
      alert('Account created Successfully!');
    } else {
      console.log(response);
      alert('Account failed to be created!');
    }
  }
}
