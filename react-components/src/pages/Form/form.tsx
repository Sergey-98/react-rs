import React from 'react';
import './form.css';
import { Errors, Card } from '../../types/types';
import FormCards from 'components/FormCards/FormCards';
import downloadIcon from '../../assets/svg/download-icon.svg';

class Form extends React.Component<object, Errors> {
  inputName: React.RefObject<HTMLInputElement>;
  inputSurname: React.RefObject<HTMLInputElement>;
  inputDate: React.RefObject<HTMLInputElement>;
  inputCheckData: React.RefObject<HTMLInputElement>;
  inputFile: React.RefObject<HTMLInputElement>;
  inputMale: React.RefObject<HTMLInputElement>;
  inputFemale: React.RefObject<HTMLInputElement>;
  inputEmail: React.RefObject<HTMLInputElement>;
  submit: React.RefObject<HTMLInputElement>;
  checkForm: () => void;

  constructor(props: object) {
    super(props);
    this.inputName = React.createRef<HTMLInputElement>();
    this.inputSurname = React.createRef<HTMLInputElement>();
    this.inputDate = React.createRef<HTMLInputElement>();
    this.inputCheckData = React.createRef<HTMLInputElement>();
    this.inputFile = React.createRef<HTMLInputElement>();
    this.inputMale = React.createRef<HTMLInputElement>();
    this.inputFemale = React.createRef<HTMLInputElement>();
    this.inputEmail = React.createRef<HTMLInputElement>();
    this.submit = React.createRef<HTMLInputElement>();
    this.state = {
      errorName: { message: '', class: 'none' },
      errorSurname: { message: '', class: 'none' },
      errorDate: { message: '', class: 'none' },
      errorCheck: { message: '', class: 'none' },
      errorFile: { message: '', class: 'none' },
      errorGender: { message: '', class: 'none' },
      errorEmail: { message: '', class: 'none' },
      buildData: [],
    };

    this.checkForm = () => {
      const name = this.inputName.current;
      const surname = this.inputSurname.current;
      const date = this.inputDate.current;
      const checkData = this.inputCheckData.current;
      const male = this.inputMale.current?.checked;
      const female = this.inputFemale.current?.checked;
      const email = this.inputEmail.current;
      const file = this.inputFile.current;
      if (
        name?.value &&
        surname?.value &&
        (male || female) &&
        email &&
        date?.value &&
        checkData?.checked &&
        file?.value
      ) {
        if (this.submit.current) {
          this.submit.current.disabled = false;
        }
      }
    };
  }

  checkValid() {
    let count = 0;
    const validName = /^[a-zA-Zа-яА-Я ]+$/;
    const validEmail =
      /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i;
    const allowedExtensions = ['jpg', 'png', 'gif', 'bmp'];
    const currentDate = Date.now();
    const name = this.inputName.current;
    const surname = this.inputSurname.current;
    const date = this.inputDate.current;
    let gender = '';
    const male = this.inputMale.current;
    const female = this.inputFemale.current;
    const email = this.inputEmail.current;
    const checkData = this.inputCheckData.current;
    const file = this.inputFile.current;
    const fileExtension = file?.value.split('.').pop();
    if (name && validName.test(name?.value)) {
      name?.classList.remove('mistakes');
      count += 1;
      this.setState({
        errorName: { message: '', class: 'none' },
      });
    } else {
      name?.classList.add('mistakes');
      this.setState({
        errorName: { message: 'Неверно заполнено поле!', class: 'error-text' },
      });
    }

    if (surname && validName.test(surname?.value)) {
      surname.classList.remove('mistakes');
      count += 1;
      this.setState({
        errorSurname: { message: '', class: 'none' },
      });
    } else {
      surname?.classList.add('mistakes');
      this.setState({
        errorSurname: { message: 'Неверно заполнено поле!', class: 'error-text' },
      });
    }

    if (date && Date.parse(date?.value) <= currentDate) {
      date?.classList.remove('mistakes');
      count += 1;
      this.setState({
        errorDate: { message: '', class: 'none' },
      });
    } else {
      date?.classList.add('mistakes');
      this.setState({
        errorDate: { message: 'Неверно заполнено поле!', class: 'error-text' },
      });
    }

    if (male?.checked) {
      male?.classList.remove('mistakes');
      female?.classList.remove('mistakes');
      gender = 'male';
      count += 1;
      this.setState({
        errorGender: { message: '', class: 'none' },
      });
    } else if (female?.checked) {
      male?.classList.remove('mistakes');
      female?.classList.remove('mistakes');
      gender = 'female';
      count += 1;
      this.setState({
        errorGender: { message: '', class: 'none' },
      });
    } else {
      console.log('Введите пол');
      male?.classList.add('mistakes');
      female?.classList.add('mistakes');
      this.setState({
        errorGender: { message: 'Неверно заполнено поле!', class: 'error-text' },
      });
    }

    if (email && validEmail.test(email?.value)) {
      email?.classList.remove('mistakes');
      count += 1;
      this.setState({
        errorEmail: { message: '', class: 'none' },
      });
    } else {
      email?.classList.add('mistakes');
      this.setState({
        errorEmail: { message: 'Неверно заполнено поле!', class: 'error-text' },
      });
    }

    if (checkData?.checked) {
      checkData?.classList.remove('mistakes');
      count += 1;
      this.setState({
        errorCheck: { message: '', class: 'none' },
      });
    } else {
      checkData?.classList.add('mistakes');
      this.setState({
        errorCheck: {
          message: 'Для продолжения, необходимо подтвердить согласие!',
          class: 'error-text',
        },
      });
    }

    if (allowedExtensions.includes(fileExtension as string)) {
      file?.classList.remove('mistakes');
      count += 1;
    } else {
      file?.classList.add('mistakes');
      this.setState({
        errorFile: { message: 'Ошибка чтения файла!', class: 'error-text' },
      });
    }

    if (count === 7) {
      console.log(this.inputMale, this.inputFemale);
      if (name && surname && date && email && gender && (male || female) && checkData && file) {
        const fileList = file.files as FileList;
        const imgURL = URL.createObjectURL(fileList[0]);
        console.log(imgURL);
        const Card: Card = {
          name: name.value,
          surname: surname.value,
          gender: gender,
          date: date.value,
          email: email.value,
          check: checkData.checked,
          file: imgURL,
          // file: file.value,
        };
        name.value = '';
        surname.value = '';
        date.value = '';
        email.value = '';
        if (male) {
          male.checked = false;
        }
        if (female) {
          female.checked = false;
        }
        checkData.checked = false;
        file.value = '';
        this.state.buildData.push(Card);
      }
      console.log(this.state.buildData);
    } else {
      if (this.submit.current) {
        this.submit.current.disabled = true;
        this.checkForm();
      }
    }
  }
  componentDidMount() {
    this.inputName.current?.focus();
  }

  componentDidUpdate() {
    this.checkForm();
  }

  render() {
    const inputHandler = () => {
      this.checkForm();
    };
    const createCards = (event: React.FormEvent) => {
      this.checkValid();
      event?.preventDefault();
    };

    return (
      <div className="form-page">
        <form className="form-block" onChange={inputHandler} onSubmit={createCards}>
          <label>
            <input
              className="input__text"
              type="text"
              ref={this.inputName}
              autoComplete="off"
              placeholder="First Name"
            />
            <span className={this.state.errorName.class}>{this.state.errorName.message}</span>
          </label>
          <label>
            <input
              className="input__text"
              type="text"
              ref={this.inputSurname}
              autoComplete="off"
              placeholder="Last Name"
            />
            <span className={this.state.errorSurname.class}>{this.state.errorSurname.message}</span>
          </label>
          <label>
            Your birthday:
            <input className="input__date" type="date" ref={this.inputDate} />
            <span className={this.state.errorDate.class}>{this.state.errorDate.message}</span>
          </label>
          <div className="radio-btn_container">
            <label className="radio-btn_label">
              male
              <input type="radio" name="gender" ref={this.inputMale} autoComplete="off" />
              <span className="radio-btn_span"></span>
            </label>
            <label className="radio-btn_label">
              female
              <input type="radio" name="gender" ref={this.inputFemale} autoComplete="off" />
              <span className="radio-btn_span"></span>
            </label>
            <span className={this.state.errorGender.class}>{this.state.errorGender.message}</span>
          </div>
          <label>
            <input
              className="input__text"
              type="email"
              ref={this.inputEmail}
              autoComplete="off"
              placeholder="e-mail"
            />
            <span className={this.state.errorEmail.class}>{this.state.errorEmail.message}</span>
          </label>
          <input
            className="input__file"
            type="file"
            ref={this.inputFile}
            name="file"
            id="input__flle"
          />
          <label className="input__file-button" htmlFor="input__flle">
            <span className="input__file-icon-wrapper">
              <img className="input__file-icon" src={downloadIcon} alt="Выбрать файл" width="60" />
            </span>
            <span className="input__file-button-text">Выберите файл</span>
            <span className={this.state.errorFile.class}>{this.state.errorFile.message}</span>
          </label>
          <label className="checkbox_label">
            I consent to the processing of personal data
            <input className="input__checkbox" type="checkbox" ref={this.inputCheckData} />
            <span className="checkbox_span"></span>
            <span className={this.state.errorCheck.class}>{this.state.errorCheck.message}</span>
          </label>
          <input type="submit" value="Submit" className="form-submit" ref={this.submit} disabled />
        </form>
        {this.state.buildData.length > 0 ? <FormCards {...this.state.buildData} /> : null}
      </div>
    );
  }
}

export default Form;
