import './InputField.scss'
import { forwardRef } from 'react'

const InputField = forwardRef(
  (
    { placeholder = '', size, type = 'text', focus = false, label, name, onChange, isValid, classNameModal, ...rest },
    ref,
  ) => {
    function handleFocus(e) {
      if (focus) e.target.setAttribute('type', 'date')
    }
    return (
      <div className={`input__wrapper ${type === 'password' ? 'input__wrapper__password' : ''}`}>
        <label>{label}</label>
        <input
          name={name}
          className={`form-input ${size === 'small' ? 'form-input-small' : ''} ${
            type === 'password' ? 'input__password' : ''
          } ${classNameModal} ${isValid ? '' : 'form-input__error'}`}
          placeholder={placeholder}
          type={type}
          onFocus={e => handleFocus(e)}
          onChange={e => {
            onChange(e)
          }}
          ref={ref}
          {...rest}
        />
      </div>
    )
  },
)

InputField.displayName = 'InputField'
export default InputField