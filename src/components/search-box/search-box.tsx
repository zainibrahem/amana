import React from 'react';
import {
  StyledForm,
  StyledInput,
  StyledCategoryName,
  StyledSearchButton,
} from './search-box.style';
import { SearchIcon } from 'assets/icons/SearchIcon';
import { KeyboardIcon } from 'assets/icons/Keyboard';
import { DictationIcon } from 'assets/icons/Dictation';

interface Props {
  onEnter: (e: React.SyntheticEvent) => void;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  name: string;
  minimal?: boolean;
  className?: string;
  showButtonText?: boolean;
  shadow?: string;
  [key: string]: unknown;
}

export const SearchBox: React.FC<Props> = ({
  onEnter,
  onChange,
  value,
  name,
  minimal,
  categoryType,
  buttonText,
  className,
  showButtonText = true,
  shadow,
  ...rest
}) => {
  return (
    <StyledForm
      onSubmit={onEnter}
      className={className}
      boxShadow={shadow}
      minimal={minimal}
    >
      {minimal ? (
        <>
          <SearchIcon
            style={{ marginLeft: 16, marginRight: 16, color: '#212121' }}
          />
          <StyledInput
            type='search'
            onChange={onChange}
            value={value}
            name={name}
            {...rest}
          />
          {/* <KeyboardIcon
            style={{ marginLeft: 20,  color: '#212121' }}
          /> */}
          <DictationIcon
            style={{ marginLeft: "16px", marginRight: "16px", color: '#212121' }}
          />
          
        </>
      ) : (
        <>
          {/* <StyledCategoryName>{categoryType}</StyledCategoryName> */}
          <StyledInput
            type='search'
            onChange={onChange}
            value={value}
            name={name}
            {...rest}
          />
           <DictationIcon
            style={{ marginLeft: 16, marginRight: 16, color: '#212121' }}
          />
          
          <StyledSearchButton>
            <SearchIcon style={{ marginRight: 10 }} />
            {showButtonText && buttonText}
          </StyledSearchButton>
        </>
      )}
    </StyledForm>
  );
};
