import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LoginComponent extends Component {
  @tracked Username = '';
  @tracked Password = '';

  get disableSubmit() {
    return !this.Password.length || !this.Username.length;
  }

  @action async onSubmit() {
    event.preventDefault();
    const response = await fetch(
      `http://localhost:3000/api/Authors?filter=%7B%22where%22%3A%7B%22Username%22%3A%22${this.Username}%22%7D%7D`,
    );
    const data = await response.json();
    if (data.length > 0) {
      //console.log(data);
      //const username = data[0].Username;
      const password = data[0].Password;
      if (password == this.Password) {
        document.location = '/home';
      } else {
        alert('Username or password incorrect');
      }
    } else {
      alert('Username or password incorrect');
    }
  }
}
