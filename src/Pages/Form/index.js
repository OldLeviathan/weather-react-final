import React from 'react';
import StyledForm from "./style";

const Form = (props) => {

  return (
    <>
      <StyledForm/>
      <form onSubmit={props.gettingWeather}>
        <input type="text" name="city" placeholder="Город"/>
        <button >Получить погоду</button>
      </form>
      <div>
        {props.data.city &&
          <div>
            <p>Местоположение: {props.data.city}, {props.data.country}</p>
            <p>Температура: {props.data.temp}</p>
          </div>
        }
        <p>{props.data.error}</p>
      </div>
    </>
  );
};

export default Form;