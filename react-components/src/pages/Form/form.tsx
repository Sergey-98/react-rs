import React from 'react';
import { stateForm, Card } from '../../types/types';
import './form.css';
import FormCards from 'components/FormCards/FormCards';
import downloadIcon from '../../assets/svg/download-icon.svg';
import { validName, validEmail } from '../../Constants/Constants';

class Form extends React.Component<object, stateForm> {
  form: React.RefObject<HTMLFormElement>;
  inputName: React.RefObject<HTMLInputElement>;
  inputSurname: React.RefObject<HTMLInputElement>;
  inputDate: React.RefObject<HTMLInputElement>;
  inputCheckData: React.RefObject<HTMLInputElement>;
  inputFile: React.RefObject<HTMLInputElement>;
  inputMale: React.RefObject<HTMLInputElement>;
  inputFemale: React.RefObject<HTMLInputElement>;
  inputEmail: React.RefObject<HTMLInputElement>;
  submit: React.RefObject<HTMLInputElement>;
  validateForm: () => void;
  validName: RegExp;
  validEmail: RegExp;
  count: number;

  constructor(props: object) {
    super(props);
    this.form = React.createRef<HTMLFormElement>();
    this.inputName = React.createRef<HTMLInputElement>();
    this.inputSurname = React.createRef<HTMLInputElement>();
    this.inputDate = React.createRef<HTMLInputElement>();
    this.inputCheckData = React.createRef<HTMLInputElement>();
    this.inputFile = React.createRef<HTMLInputElement>();
    this.inputMale = React.createRef<HTMLInputElement>();
    this.inputFemale = React.createRef<HTMLInputElement>();
    this.inputEmail = React.createRef<HTMLInputElement>();
    this.submit = React.createRef<HTMLInputElement>();
    this.validName = validName;
    this.validEmail = validEmail;
    this.count = 0;
    this.state = {
      errorName: { message: '', class: 'none' },
      errorSurname: { message: '', class: 'none' },
      errorDate: { message: '', class: 'none' },
      errorCheck: { message: '', class: 'none' },
      errorFile: { message: '', class: 'none' },
      errorGender: { message: '', class: 'none' },
      errorEmail: { message: '', class: 'none' },
      isValid: true,
      buildData: [],
    };

    this.validateForm = () => {
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
          this.setState({
            isValid: false,
          });
        }
      }
    };
  }

  checkValid() {
    const name = this.inputName.current;
    const surname = this.inputSurname.current;
    const date = this.inputDate.current;
    const male = this.inputMale.current;
    const female = this.inputFemale.current;
    const email = this.inputEmail.current;
    const checkData = this.inputCheckData.current;
    const file = this.inputFile.current;
    const fileExtension = file?.value.split('.').pop();

    this.validateNameField(name);
    this.validateLastNameField(surname);
    this.validateDateField(date);
    this.validateEmailField(email);
    this.validateCheckData(checkData);
    this.validateFileLoader(fileExtension);

    const gender = this.validateGender(male, female);

    if (this.count === 7) {
      if (name && surname && date && email && gender && (male || female) && checkData && file) {
        const fileList = file.files as FileList;
        const imgURL = URL.createObjectURL(fileList[0]);
        const Card: Card = {
          name: name.value,
          surname: surname.value,
          gender: gender,
          date: date.value,
          email: email.value,
          check: checkData.checked,
          file: imgURL,
        };
        this.form.current?.reset();
        this.state.buildData.push(Card);
        this.count = 0;
      }
    } else {
      if (this.submit.current) {
        this.setState({
          isValid: true,
        });
        this.validateForm();
        this.count = 0;
      }
    }
  }

  validateNameField(name: HTMLInputElement | null) {
    if (name && this.validName.test(name?.value)) {
      this.count += 1;
      this.setState({
        errorName: { message: '', class: 'none' },
      });
    } else {
      this.setState({
        errorName: { message: 'Убедитесь, что имя состоит из букв!', class: 'error-text' },
      });
    }
  }

  validateLastNameField(surname: HTMLInputElement | null) {
    if (surname && this.validName.test(surname?.value)) {
      this.count += 1;
      this.setState({
        errorSurname: { message: '', class: 'none' },
      });
    } else {
      this.setState({
        errorSurname: { message: 'Убедитесь, что фамилия состоит из букв!', class: 'error-text' },
      });
    }
  }

  validateDateField(date: HTMLInputElement | null) {
    const currentDate = Date.now();
    if (date && Date.parse(date?.value) <= currentDate) {
      this.count += 1;
      this.setState({
        errorDate: { message: '', class: 'none' },
      });
    } else {
      this.setState({
        errorDate: { message: 'Убедитесь, что дата не в будущем!', class: 'error-text' },
      });
    }
  }

  validateEmailField(email: HTMLInputElement | null) {
    if (email && this.validEmail.test(email?.value)) {
      this.count += 1;
      this.setState({
        errorEmail: { message: '', class: 'none' },
      });
    } else {
      this.setState({
        errorEmail: { message: 'Неверно заполнено поле!', class: 'error-text' },
      });
    }
  }

  validateCheckData(checkData: HTMLInputElement | null) {
    if (checkData?.checked) {
      this.count += 1;
      this.setState({
        errorCheck: { message: '', class: 'none' },
      });
    } else {
      this.setState({
        errorCheck: {
          message: 'Для продолжения, необходимо подтвердить согласие!',
          class: 'error-text',
        },
      });
    }
  }

  validateFileLoader(fileExtension: string | undefined) {
    const allowedExtensions = ['jpg', 'png', 'gif', 'bmp'];
    if (allowedExtensions.includes(fileExtension as string)) {
      this.count += 1;
      this.setState({
        errorFile: { message: '', class: '' },
      });
    } else {
      this.setState({
        errorFile: { message: 'Ошибка чтения файла!', class: 'error-text' },
      });
    }
  }

  validateGender(male: HTMLInputElement | null, female: HTMLInputElement | null) {
    let gender = '';
    if (male?.checked) {
      gender = 'male';
      this.count += 1;
      this.setState({
        errorGender: { message: '', class: 'none' },
      });
      return gender;
    } else if (female?.checked) {
      gender = 'female';
      this.count += 1;
      this.setState({
        errorGender: { message: '', class: 'none' },
      });
      return gender;
    } else {
      this.setState({
        errorGender: { message: 'Неверно заполнено поле!', class: 'error-text' },
      });
    }
  }

  componentDidMount() {
    this.inputName.current?.focus();
  }
  handleSubmit = () => {
    this.validateForm();
  };

  render() {
    const {
      errorName,
      errorSurname,
      errorDate,
      errorCheck,
      errorFile,
      errorGender,
      errorEmail,
      isValid,
      buildData,
    } = this.state;

    const onSubmitDataCards = (event: React.FormEvent) => {
      this.checkValid();
      event?.preventDefault();
    };
    return (
      <div className="form-page">
        <form
          className="form-block"
          onChange={this.handleSubmit}
          onSubmit={onSubmitDataCards}
          ref={this.form}
        >
          <label>
            <input
              className="input__text"
              type="text"
              ref={this.inputName}
              autoComplete="off"
              placeholder="First Name"
            />
            <span className={errorName.class}>{errorName.message}</span>
          </label>
          <label>
            <input
              className="input__text"
              type="text"
              ref={this.inputSurname}
              autoComplete="off"
              placeholder="Last Name"
            />
            <span className={errorSurname.class}>{errorSurname.message}</span>
          </label>
          <label>
            Your birthday:
            <input className="input__date" type="date" ref={this.inputDate} />
            <span className={errorDate.class}>{errorDate.message}</span>
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
            <span className={errorGender.class}>{errorGender.message}</span>
          </div>
          <label>
            <input
              className="input__text"
              type="email"
              ref={this.inputEmail}
              autoComplete="off"
              placeholder="e-mail"
            />
            <span className={errorEmail.class}>{errorEmail.message}</span>
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
            <span className={errorFile.class}>{errorFile.message}</span>
          </label>
          <label className="checkbox_label">
            I consent to the processing of personal data
            <input className="input__checkbox" type="checkbox" ref={this.inputCheckData} />
            <span className="checkbox_span"></span>
            <span className={errorCheck.class}>{errorCheck.message}</span>
          </label>
          <input
            type="submit"
            value="Submit"
            className="form-submit"
            ref={this.submit}
            disabled={isValid}
          />
        </form>
        {buildData.length > 0 ? <FormCards {...buildData} /> : null}
      </div>
    );
  }
}

export default Form;
