import React from 'react';
import './form.css';

class Form extends React.Component<
  object,
  object
  // {
  //   name: { class: string; value: string };
  //   date: { class: string; value: string };
  // }
> {
  inputName: React.RefObject<HTMLInputElement>;
  inputDate: React.RefObject<HTMLInputElement>;
  inputCheckData: React.RefObject<HTMLInputElement>;
  inputFile: React.RefObject<HTMLInputElement>;
  submit: React.RefObject<HTMLInputElement>;
  checkForm: () => void;

  constructor(props: object) {
    super(props);
    this.inputName = React.createRef<HTMLInputElement>();
    this.inputDate = React.createRef<HTMLInputElement>();
    this.inputCheckData = React.createRef<HTMLInputElement>();
    this.inputFile = React.createRef<HTMLInputElement>();
    this.submit = React.createRef<HTMLInputElement>();

    this.checkForm = () => {
      const name = this.inputName.current;
      const date = this.inputDate.current;
      const checkData = this.inputCheckData.current;
      const file = this.inputFile.current;
      if (name?.value && date?.value && checkData?.checked && file?.value) {
        if (this.submit.current) {
          this.submit.current.disabled = false;
        }
        // this.submit.current?.setAttribute(disabled, false);
        this.checkValid();
      }
    };
  }

  checkValid() {
    const validName = /^[a-zA-Z ]+$/;
    const allowedExtensions = ['jpg', 'png', 'gif', 'bmp'];
    const currentDate = Date.now();
    const name = this.inputName.current;
    const date = this.inputDate.current;
    const checkData = this.inputCheckData.current;
    const file = this.inputFile.current;
    const fileExtension = file?.value.split('.').pop();
    if (name && validName.test(name?.value)) {
      name?.classList.remove('mistakes');
    } else {
      name?.classList.add('mistakes');
    }

    if (date && Date.parse(date?.value) <= currentDate) {
      date?.classList.remove('mistakes');
    } else {
      date?.classList.add('mistakes');
    }

    if (checkData?.checked) {
      checkData?.classList.remove('mistakes');
    } else {
      checkData?.classList.add('mistakes');
    }

    if (allowedExtensions.includes(fileExtension as string)) {
      file?.classList.remove('mistakes');
    } else {
      file?.classList.add('mistakes');
    }
  }
  componentDidMount() {
    this.inputName.current?.focus();
  }

  componentDidUpdate() {
    this.checkValid();
  }

  render() {
    const inputHandler = () => {
      this.checkForm();
    };
    const createCards = (event: React.FormEvent) => {
      this.checkValid();
      console.log('Ввод данных');
      console.log(this.inputName, this.inputDate, this.inputCheckData, this.inputFile);
      event?.preventDefault();
    };

    return (
      <form className="form-block" onChange={inputHandler} onSubmit={createCards}>
        <label>
          Name:
          <input type="text" ref={this.inputName} />
        </label>
        <label>
          Your birthday:
          <input type="date" ref={this.inputDate} />
        </label>
        <label>
          I consent to the processing of personal data
          <input type="checkbox" ref={this.inputCheckData} />
        </label>
        <label>
          <input type="file" ref={this.inputFile} />
        </label>
        <input type="submit" value="Submit" className="form-submit" ref={this.submit} disabled />
      </form>
    );
  }
}

export default Form;
