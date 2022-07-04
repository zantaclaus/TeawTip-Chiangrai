/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

interface IModal {
  title: string;
  titleIcon?: React.ReactNode;
  titleTagline: string;
  tabs: React.ReactNode;
}

const theme = createTheme({
  typography: {
    fontFamily: 'sukhumvit',
  },
});

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const Modal: React.FC<IModal> = ({ title, titleIcon, titleTagline, tabs }: IModal): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <button
          onClick={handleClickOpen}
          className='px-6 py-2 mt-4 border-2 border-teal-300 rounded-full sukhumvit hover:bg-teal-300 active:bg-teal-400'
        >
          เพิ่มเติม
        </button>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby='alert-dialog-slide-description'
          maxWidth='xl'
        >
          <div className='px-4 pt-2'>
            <DialogTitle>
              <h1 className='sukhumvit-bold mb-1 text-teal-500'>{title}</h1>
              <h3 className='sukhumvit text-base'>
                <span className='text-teal-500'>{titleIcon}</span> {titleTagline}
              </h3>
            </DialogTitle>
          </div>
          <DialogContent>
            <DialogContentText id='alert-dialog-slide-description' className='sukhumvit'>
              {tabs}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </ThemeProvider>
    </div>
  );
};

export default Modal;
