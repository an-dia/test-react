import { Component } from "react";
import classNames from "classnames";
// import classNames from 'classnames/bind';
import s from "./ColorPicker.module.css";

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = (index) => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = (index) => {
    // const cln = classNames.bind(s);
    // const className = cln('option', {optionActive: index === this.state.activeOptionIdx} )
    // console.log(className);
    //Можно сделать инлайн, закинуть в className
    return classNames(`${s.option}`, {
      [`${s.optionActive}`]: index === this.state.activeOptionIdx,
    });

    //Если обычный css  без модулей
    // return classNames(`option`, {'optionActive': index === this.state.activeOptionIdx})

    // Без пакетк classnames
    // const optionClasses = [s.option];

    // if (index === this.state.activeOptionIdx) {
    // optionClasses.push(s.optionActive);
    // }
    // return optionClasses.join(' ')
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];

    return (
      <div className={s.container}>
        <h2 className={s.title}>Color Picker</h2>
        <p>Выбран цвет: {label}</p>
        <div>
          {this.props.options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
