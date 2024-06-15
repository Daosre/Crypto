'use client'
import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AllUserAssetData, CryptoData, MyAssetData, OffertsData } from '@/Utils/types';
import { toast } from 'react-toastify';
import { IoCloseCircleSharp } from "react-icons/io5";
import { ErrorMsg } from '../Error/Error';
import { OfferCreate } from '@/Services/offer';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,
  p: 4,
};

export default function Creationdoffer({ crypto }: { crypto: AllUserAssetData}) {
    const [isLoading, setisLoading] = useState(false)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { register, handleSubmit, watch, formState: { errors }, } = useForm<OffertsData>({ mode: "all" })
    const onSubmit: SubmitHandler<OffertsData> = (data) =>
        OfferCreate(crypto.Crypto.id, Number(watch('amount'))).then((res) => {
            toast.success('Offer Create ✅')
            setisLoading(false)
            handleClose()
        })
    return (
        <div>
            <button onClick={handleOpen} className='border-2 bg-white text-black p-2  ml-40 rounded-full hover:bg-red-600 duration-700 hover:border-black '>Ici</button>
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
                              <label htmlFor="">Amount</label>
                                <input type="number" className='rounded-full border-2 border-black text-black text-center'
                                    {...register('amount', { required: true })} />
                                <input type='submit' className='border rounded-lg bg-white text-black hover:bg-green-600 border-black duration-700 mt-10' value={'Create Offer'}
                                     />
                </form>
            </div>
          </Box>
        </Fade>
     </Modal>
</div>
    )
}