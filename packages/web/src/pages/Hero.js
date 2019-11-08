import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from './menu/Menu';
import Playground from './playground/Playground';

const useStyles = makeStyles(theme => ({}));

const Hero = (props) => {
  const [page, setPage] = useState('menu');

  const optionClicked = () => {
    setPage('playground');
  };

  return (
    <>
      {page === 'menu' && <Menu optionClicked={optionClicked} />}
      {page === 'playground' && <Playground />}
    </>
  );
};

export default Hero;