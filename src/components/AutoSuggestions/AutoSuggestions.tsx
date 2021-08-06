/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Autosuggest from 'react-autosuggest';
import React, { useState, useImperativeHandle, useRef } from 'react';
import propTypes from 'prop-types';
import { useGeolocationState } from 'beautiful-react-hooks';
import Location from '../../assets/img/icons/loc.svg';

const getLocationAutoCompletePrediction = async (searchText: string, position: {
  latitude: number;
  longitude: number;
}) => {
  try {
    const token = 'YOUR_TOKEN';
    let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?types=address&country=us&access_token=${token}`;
    if (position?.latitude && position?.longitude) {
      url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?proximity=${String(position.longitude).substr(0, 7)},${String(position.latitude).substr(0, 7)}&country=us&access_token=${token}`;
    }
    return (
      await fetch(url)
    ).json();
  } catch (err) {
    return err.message;
  }
};

const AutoSuggestions = React.forwardRef((props: any, ref: any) => {
  const [suggestions, setsuggestions] = useState([]);
  const [value, setvalue] = useState('');
  const [notfound, setNotFound] = useState(false);
  const inputRef = useRef();
  const [hightLighted, setHighLighted] = useState<any>();
  const { position } = useGeolocationState();
  const onSuggestionsFetchRequested = async (input: { value: { match: (arg0: RegExp) => any[]; }; }) => {
    const lengthCheck = input.value?.match(/[a-zA-Z0-9,-\s]*/g).join('');
    if (lengthCheck.length > 0) {
      const fetchedSuggestions = await getLocationAutoCompletePrediction(
        `${input.value?.match(/[a-zA-Z0-9,-\s]*/g).join('')}`, { latitude: position?.coords?.latitude, longitude: position?.coords?.longitude },
      );
      const { features } = fetchedSuggestions;
      if (features?.length === 0) {
        setNotFound(true);
        setsuggestions([]);
      } else {
        setNotFound(false);
        setsuggestions(features);
      }
    }
  };
  useImperativeHandle(ref, () => ({
    clear: () => {
      setvalue('');
      setsuggestions([]);
      setNotFound(false);
    },
  }));
  const onSuggestionsClearRequested = () => {
    setsuggestions([]);
    setNotFound(false);
  };
  const getSuggestionValue = (suggestion: any) => suggestion.place_name;
  const onSuggestionClick = (suggestion: any) => {
    setsuggestions([]);
    props.onSuggestionClick(suggestion);
  };
  const renderSuggestion = (suggestion: any) => (
    <div
      onClick={() => {
        onSuggestionClick(suggestion);
      }}
      className="flex flex-row py-3 px-3 bg-blue-710hover text-left cursor-pointer bg-local"
    >
      <img src={Location} alt="React Logo" />
      <p className="px-2">{suggestion.place_name}</p>
    </div>
  );
  const onChange = (event: any, { newValue }: any) => {
    const searchVal = newValue?.match(/[a-zA-Z0-9,-\s]*/g).join('');
    setvalue(searchVal);
  };
  const onSuggestionHighlighted = (suggestion: any) => {
    setHighLighted(suggestion);
  };
  const inputProps = {
    placeholder: 'Search your store location',
    value,
    onChange,
    inputRef,
    onKeyDown: (event: any) => {
      if (event.key === 'Enter') {
        onSuggestionClick(hightLighted?.suggestion);
      }
    },
  };
  const renderSuggestionsContainer = ({ containerProps, children }: any) => (
    <>
      {value.length > 0 && notfound === false && (
        <div {...containerProps} className="absolute shadow-2xl bg-white w-full md:w-1/2 max-h-xs z-10">
          {children}
        </div>
      )}
      {value.length === 0 && notfound === true && (
        <div {...containerProps} className="absolute shadow-2xl bg-white w-full md:w-1/2 max-h-xs z-10">
          Your location could not be found - Add store location manually
        </div>
      )}
    </>
  );
  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      renderInputComponent={props.renderInputComponent}
      renderSuggestionsContainer={renderSuggestionsContainer}
      onSuggestionHighlighted={onSuggestionHighlighted}
    />
  );
});

export default AutoSuggestions;

AutoSuggestions.propTypes = {
  onSuggestionClick: propTypes.func,
  renderInputComponent: propTypes.func,
};

AutoSuggestions.defaultProps = {
  onSuggestionClick: '',
  renderInputComponent: '',
};
