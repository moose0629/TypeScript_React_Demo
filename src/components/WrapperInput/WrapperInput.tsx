import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import { debounce } from 'lodash';

const WrapperInput = (props: any) => {
  const { value, debounceMode, onChange } = props

  const [useKeyIn, setKeyIn] = useState(value);

  const debounceChange = useCallback(debounce((e) => onChange(e.target.value), 500), [])

  const onInputChange = (event: any) => {
    setKeyIn(event.target.value)
    if (debounceMode) {
      debounceChange(event)
    } else {
      onChange(event.target.value)
    }
  }

  useEffect(() => {
    setKeyIn(value)
  }, [value])

  return <Input value={useKeyIn} onChange={onInputChange}/>
}

WrapperInput.propTypes = {
  debounceMode: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string
}

WrapperInput.defaultProps = {
  debounceMode: false,
  onChange: () => null,
  value: null
}

export default WrapperInput;
