'use client'
import { AllCrypto } from '@/Services/crypto'
import { CryptoData } from '@/Utils/types'
import { BarChart, LineChart } from '@mui/x-charts'
import React, { useEffect, useState } from 'react'
import '../../Components/style.css'


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
    <div>
      <BarChart slotProps={{
                loadingOverlay: { message: 'Data should be available soon.' },
                noDataOverlay: { message: 'Select some data to display.' },}}
                series={[{ data: seriesData, color: '#ff8000' }]}
                xAxis={[{ data: nameData, scaleType: 'band'}]}
                height={300}
                margin={{ left: 10, right: 10, top: 10, bottom: 10 }}
                grid={{ vertical: true, horizontal: true }}/>
    </div>
  )
}

export default Diagram
