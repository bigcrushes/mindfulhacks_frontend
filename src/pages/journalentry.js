import React, { Component }  from 'react';
import { useLocation } from 'react-router-dom';

const JournalEntry = (props) => {
  const location = useLocation();
  const state = location.state;
  const title = state.title;
  const { id } = state.id;
  return (
    <div>
      <h1>{title}</h1>
      <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.

Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
      </p>
    </div>
  );
}

export default JournalEntry;
