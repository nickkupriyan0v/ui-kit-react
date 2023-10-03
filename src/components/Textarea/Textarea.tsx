import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import './Textarea.css';

type TextareaProps = {
  name?: string;
  id?: string;
  placeholder?: string;
  value?: string;
  minHeight?: number;
  maxHeight?: number;
  className?: string;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textarea: FC<TextareaProps> = ({
  name,
  id,
  placeholder,
  value,
  className,
  disabled,
  onChange,
  minHeight = 60,
  maxHeight = 120,
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [data, setData] = useState(value);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const classes = [
    'nk-textarea-box',
    className,
    focused ? 'focused' : null,
    disabled ? 'disabled' : null,
  ]
    .filter(Boolean)
    .join(' ');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setData(event.target.value);
    onChange && onChange(event);
  };

  useEffect(() => {
    if (textAreaRef?.current) {
      textAreaRef.current.style.height = minHeight + 'px';
      const scrollHeight = textAreaRef.current.scrollHeight;
      if (scrollHeight > maxHeight) {
        textAreaRef.current.style.height = maxHeight + 'px';
      } else {
        textAreaRef.current.style.height = scrollHeight + 'px';
      }
    }
  }, [textAreaRef, data]);

  return (
    <div className={classes}>
      <textarea
        className="nk-textarea"
        ref={textAreaRef}
        style={{ resize: 'none' }}
        name={name}
        id={id}
        placeholder={placeholder}
        value={data}
        disabled={disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default Textarea;