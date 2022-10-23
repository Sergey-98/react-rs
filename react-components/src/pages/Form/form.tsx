import React, { useState, useRef } from 'react';
import { Card } from '../../types/types';
import './form.css';
import FormCards from 'components/FormCards/FormCards';
import downloadIcon from '../../assets/svg/download-icon.svg';
import { validName, validEmail, countInput } from '../../Constants/Constants';

export default function Form() {
  const [errorName, setErrorName] = useState({ message: '' });
  const [errorSurname, setErrorSurname] = useState({ message: '' });
  const [errorDate, setErrorDate] = useState({ message: '' });
  const [errorCheck, setErrorCheck] = useState({ message: '' });
  const [errorFile, setErrorFile] = useState({ message: '' });
  const [errorGender, setErrorGender] = useState({ message: '' });
  const [errorEmail, setErrorEmail] = useState({ message: '' });
  const [isValid, setIsValid] = useState(true);
  const [buildData] = useState<Card[]>([]);
  // const dataCards: Card[] = [];

  const form = useRef<HTMLFormElement>(null);
  const inputName = useRef<HTMLInputElement>(null);
  const inputSurname = useRef<HTMLInputElement>(null);
  const inputDate = useRef<HTMLInputElement>(null);
  const inputCheckData = useRef<HTMLInputElement>(null);
  const inputFile = useRef<HTMLInputElement>(null);
  const inputMale = useRef<HTMLInputElement>(null);
  const inputFemale = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const submit = useRef<HTMLInputElement>(null);
  let count = 0;

  const validateForm = () => {
    const name = inputName.current;
    const surname = inputSurname.current;
    const date = inputDate.current;
    const checkData = inputCheckData.current;
    const male = inputMale.current?.checked;
    const female = inputFemale.current?.checked;
    const email = inputEmail.current;
    const file = inputFile.current;
    if (
      name?.value &&
      surname?.value &&
      (male || female) &&
      email &&
      date?.value &&
      checkData?.checked &&
      file?.value
    ) {
      if (submit.current) {
        setIsValid(false);
      }
    }
  };

  function checkValid() {
    const name = inputName.current;
    const surname = inputSurname.current;
    const date = inputDate.current;
    const male = inputMale.current;
    const female = inputFemale.current;
    const email = inputEmail.current;
    const checkData = inputCheckData.current;
    const file = inputFile.current;
    const fileExtension = file?.value.split('.').pop();

    validateNameField(name);
    validateLastNameField(surname);
    validateDateField(date);
    validateEmailField(email);
    validateCheckData(checkData);
    validateFileLoader(fileExtension);

    const gender = validateGender(male, female);

    if (count === countInput) {
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
        form.current?.reset();
        buildData.push(Card);
        count = 0;
      }
    } else {
      if (submit.current) {
        setIsValid(true);
        validateForm();
        count = 0;
      }
    }
  }

  const validateNameField = (name: HTMLInputElement | null) => {
    if (name && validName.test(name?.value)) {
      count += 1;
      setErrorName({ message: '' });
    } else {
      setErrorName({ message: 'Убедитесь, что имя состоит из букв!' });
    }
  };

  const validateLastNameField = (surname: HTMLInputElement | null) => {
    if (surname && validName.test(surname?.value)) {
      count += 1;
      setErrorSurname({ message: '' });
    } else {
      setErrorSurname({ message: 'Убедитесь, что фамилия состоит из букв!' });
    }
  };

  const validateDateField = (date: HTMLInputElement | null) => {
    const currentDate = Date.now();
    if (date && Date.parse(date?.value) <= currentDate) {
      count += 1;
      setErrorDate({ message: '' });
    } else {
      setErrorDate({ message: 'Убедитесь, что дата не в будущем!' });
    }
  };

  const validateEmailField = (email: HTMLInputElement | null) => {
    if (email && validEmail.test(email?.value)) {
      count += 1;
      setErrorEmail({ message: '' });
    } else {
      setErrorEmail({ message: 'Неверно заполнено поле!' });
    }
  };

  const validateCheckData = (checkData: HTMLInputElement | null) => {
    if (checkData?.checked) {
      count += 1;
      setErrorCheck({ message: '' });
    } else {
      setErrorCheck({
        message: 'Для продолжения, необходимо подтвердить согласие!',
      });
    }
  };

  const validateFileLoader = (fileExtension: string | undefined) => {
    const allowedExtensions = ['jpg', 'png', 'gif', 'bmp'];
    if (allowedExtensions.includes(fileExtension as string)) {
      count += 1;
      setErrorFile({ message: '' });
    } else {
      setErrorFile({ message: 'Ошибка чтения файла!' });
    }
  };

  const validateGender = (male: HTMLInputElement | null, female: HTMLInputElement | null) => {
    let gender = '';
    if (male?.checked) {
      gender = 'male';
      count += 1;
      setErrorGender({ message: '' });
      return gender;
    } else if (female?.checked) {
      gender = 'female';
      count += 1;
      setErrorGender({ message: '' });
      return gender;
    } else {
      setErrorGender({ message: 'Неверно заполнено поле!' });
    }
  };

  const onSubmitDataCards = (event: React.FormEvent) => {
    checkValid();
    event?.preventDefault();
  };

  const handleSubmit = () => {
    validateForm();
  };

  return (
    <div className="form-page">
      <form className="form-block" onChange={handleSubmit} onSubmit={onSubmitDataCards} ref={form}>
        <label>
          <input
            className="input__text"
            type="text"
            ref={inputName}
            autoComplete="off"
            placeholder="First Name"
          />
          <span className={errorName.message.length > 0 ? 'error-text' : 'none'}>
            {errorName.message}
          </span>
        </label>
        <label>
          <input
            className="input__text"
            type="text"
            ref={inputSurname}
            autoComplete="off"
            placeholder="Last Name"
          />
          <span className={errorSurname.message.length > 0 ? 'error-text' : 'none'}>
            {errorSurname.message}
          </span>
        </label>
        <label>
          Your birthday:
          <input className="input__date" type="date" ref={inputDate} />
          <span className={errorDate.message.length > 0 ? 'error-text' : 'none'}>
            {errorDate.message}
          </span>
        </label>
        <div className="radio-btn_container">
          <label className="radio-btn_label">
            male
            <input type="radio" name="gender" ref={inputMale} autoComplete="off" />
            <span className="radio-btn_span"></span>
          </label>
          <label className="radio-btn_label">
            female
            <input type="radio" name="gender" ref={inputFemale} autoComplete="off" />
            <span className="radio-btn_span"></span>
          </label>
          <span className={errorGender.message.length > 0 ? 'error-text' : 'none'}>
            {errorGender.message}
          </span>
        </div>
        <label>
          <input
            className="input__text"
            type="email"
            ref={inputEmail}
            autoComplete="off"
            placeholder="e-mail"
          />
          <span className={errorEmail.message.length > 0 ? 'error-text' : 'none'}>
            {errorEmail.message}
          </span>
        </label>
        <input className="input__file" type="file" ref={inputFile} name="file" id="input__flle" />
        <label className="input__file-button" htmlFor="input__flle">
          <span className="input__file-icon-wrapper">
            <img className="input__file-icon" src={downloadIcon} alt="Выбрать файл" width="60" />
          </span>
          <span className="input__file-button-text">Выберите файл</span>
          <span className={errorFile.message.length > 0 ? 'error-text' : 'none'}>
            {errorFile.message}
          </span>
        </label>
        <label className="checkbox_label">
          I consent to the processing of personal data
          <input className="input__checkbox" type="checkbox" ref={inputCheckData} />
          <span className="checkbox_span"></span>
          <span className={errorCheck.message.length > 0 ? 'error-text' : 'none'}>
            {errorCheck.message}
          </span>
        </label>
        <input
          type="submit"
          value="Submit"
          className="form-submit"
          ref={submit}
          disabled={isValid}
        />
      </form>
      {buildData.length > 0 ? <FormCards {...buildData} /> : null}
    </div>
  );
}
