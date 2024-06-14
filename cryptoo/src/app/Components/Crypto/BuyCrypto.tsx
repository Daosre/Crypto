import { CryptoBuy } from '@/Services/crypto'
import { CryptoData } from '@/Utils/types'
import { Box, Modal } from '@mui/material'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import '../../Components/style.css'


export const BuyCryptoModal = ({crypto,isBuyvisible,setisLoading}: {crypto: CryptoData, isBuyvisible: boolean, setisLoading: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const style = {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      border: '2px solid white',
      p: 6,
  }
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [amount, setAmount] = useState(1)

  function HandleCryptoBuy() {
    CryptoBuy(crypto.id, amount)
      .then((res) => {
        handleClose()
        toast.success('Success Buy')
        setisLoading(true)
      })
      .catch((e) => toast.error(e))
  }

  return (
    <div className='m-4'>
      {isBuyvisible && (
        <button
          onClick={handleOpen}
          className="bg-green-600 text-center rounded-lg w-20 p-1 text-sm mt-1 hover:text-white hover:bg-green-500 transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500  border border-black duration-700 ">
          Buy{' '}
        </button>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='rounded-lg bg-gradient-to-t from-amber-500 to-orange-600 '>
          <input
            type="number"
            onChange={(e) => {
              setAmount(Number(e.target.value))
            }}
            className="text-black text-center bg-gray-300 border-2 border-white rounded-full p-2 w-full"
            placeholder="How many tokens will you buy ?"
            required
            defaultValue={1}
          />

          <div className="flex items-center">
            <button
              onClick={handleClose}
              className="bg-red-600 text-white border border-black rounded-md text-center hover:bg-red-500 hover:text-black hover:border-white  duration-700 w-32 p-2 mt-10 mx-4 "
            >
              Cancel
            </button>
            <button
              className="bg-green-600 border border-black hover:bg-green-500 hover:border-white hover:text-black duration-700 text-white rounded-md text-center w-32 p-2 mt-10 mx-4 "
              onClick={() => {
                HandleCryptoBuy()
              }}>
              Buy
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
