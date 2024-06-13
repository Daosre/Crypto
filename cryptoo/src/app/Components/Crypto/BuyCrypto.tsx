import { CryptoBuy } from '@/Services/crypto'
import { CryptoData } from '@/Utils/types'
import { Box, Modal } from '@mui/material'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import '../../Components/style.css'


export const BuyCryptoModal = ({
  crypto,
  isBuyvisible,
}: {
  crypto: CryptoData
  isBuyvisible: boolean
}) => {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [amount, setAmount] = useState(1)

  function HandleCrypoBuy() {
    CryptoBuy(crypto.id, amount)
      .then((res) => {
        toast.success('Successfully buyed')
        handleClose()
      })
      .catch((e) => toast.error(e))
  }

  return (
    <div className='m-4'>
      {isBuyvisible && (
        <button
          onClick={handleOpen}
          className="bg-red-600 text-center rounded-lg w-20 p-1 text-sm mt-1 ">
          Buy{' '}
        </button>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <input
            type="number"
            onChange={(e) => {
              setAmount(Number(e.target.value))
            }}
            className="text-black indent-3 border-2 border-black  w-full"
            placeholder="how many tokens?"
            required
            defaultValue={1}
          />

          <div className="flex items-center">
            <button
              onClick={handleClose}
              className="bg-red-400 text-white rounded-md text-center w-32 p-2 m-4 "
            >
              Annuler
            </button>
            <button
              className="bg-green-700 text-white rounded-md text-center w-32 p-2 m-4 "
              onClick={() => {
                HandleCrypoBuy()
              }}
            >
              Acheter
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
