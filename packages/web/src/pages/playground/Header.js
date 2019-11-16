import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuButton from '../../components/MenuButton';

const useStyles = makeStyles(theme => ({
  root: {
    height: '70px',
    width: '100vw',
    backgroundColor: '#14bdac',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MenuButton>
        share match
      </MenuButton>
    </div>
  );
};

export default Header;
