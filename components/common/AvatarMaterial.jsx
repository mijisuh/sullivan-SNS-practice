import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  const list = [1, 2, 3];
  const avatarList = list.map((num, index) =>
    (<Avatar key={index} alt="Remy Sharp" src="/static/images/avatar/1.jpg" variant='square'/>));

  return (
    <div className={classes.root}>
      {avatarList}
    </div>
  );
}