'use client'
import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { CreatePromoCode } from '@/Services/promosCode';
import { SubmitHandler, useForm } from 'react-hook-form';
import { PromoCodeData } from '@/Utils/types';
import { toast } from 'react-toastify';
import { IoCloseCircleSharp } from "react-icons/io5";
import { ErrorMsg } from '../Error/Error';

const style = {
  position: 'absolute' as 'absolute',
  top: '30%',
  left: '20%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,
  p: 4,
};

export default function PromoCode() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { register, handleSubmit, watch, formState: { errors }, } = useForm<PromoCodeData>({mode:"all"})
    const onSubmit: SubmitHandler<PromoCodeData> = (data) =>
      {console.log(data)
        CreatePromoCode(data.name, data.value).then((res) => {
    
            toast.success('Register Successfully')
            {handleClose}
    }).catch((e) => toast(e))}

    return (
    <div>
      <button onClick={handleOpen} className='bg-white text-black border border-black p-2 rounded-lg hover:bg-orange-600 hover:text-white duration-700'>PromoCode</button>
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}>
        <Fade in={open}>
                  <Box sx={style} className='border rounded-lg bg-gradient-to-r from-fuchsia-200 to-indigo-600'>
                        <div className='relative'>
                            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 text-center'>
                                <IoCloseCircleSharp className='absolute right-0 -top-5 cursor-pointer' size={32} onClick={() => {
                                    handleClose()
                            }}/>

                              <label htmlFor="">Name Code</label>
                                <input type="text" className='rounded-full border-black border-2 text-center text-black'
                                    {...register('name', { required: true })} />
                              {errors.name && <ErrorMsg error={'Need a name'} />}
                              <label htmlFor="">Value of Code</label>
                              <input type="number" className='rounded-full border-2 border-black text-black text-center'
                                  {...register('value', { required: true })} />
                            {errors.name && <ErrorMsg error={'Need a number'}/>}
                                <input type='submit' className='border rounded-lg bg-white text-black hover:bg-green-600 border-black duration-700 mt-10' value={'Create PromoCode'} />
                </form>
            </div>
          </Box>
        </Fade>
     </Modal>
</div>
    )
}