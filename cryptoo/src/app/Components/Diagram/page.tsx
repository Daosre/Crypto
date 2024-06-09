'use client'
import { AllCrypto } from '@/Services/crypto'
import { CryptoData } from '@/Utils/types'
import { BarChart, LineChart } from '@mui/x-charts'
import React, { useEffect, useState } from 'react'

const Diagram = () => {

  const [cryptoData, setcryptoData] = useState<CryptoData[]>([]);
  const seriesData = cryptoData.map((crypto) => Number(crypto.value))
  const nameData = cryptoData.map((crypto) => crypto.name)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AllCrypto();
        setcryptoData(data.data);
      } catch (e) {(e)}
    };
    fetchData();
  }, []);
  return (
    <div className='border-2 border-white'>
      <BarChart
                series={[{ data: seriesData }]}
                xAxis={[{ data: nameData, scaleType: 'band'}]}
                height={300}
                margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
                grid={{ vertical: true, horizontal: true }}/>
    </div>
  )
}

export default Diagram
