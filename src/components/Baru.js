import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import { AiOutlineEye } from 'react-icons/ai';
import "../assets/css/Produk.css"

function Baru() {
  return (
    <>
        <Container className='d-flex my-5'>
            <div className='text-center me-4'>
                <div>
                    <div className='nol'>0</div>
                    <div className='suka'>Suka</div>
                </div>
                <div>
                    <div className='nol2'>0</div>
                    <div className='jawaban'>Jawaban</div>
                </div>
            </div>
            <div>
                <div className='bagaimana'>Bagaimana menggabungkan array ini?</div>
                <p className='setelah'>Setelah membuat pertanyaan, kamu bisa copy-paste link pertanyaan kamu ke grup Telegram atau FB untuk mengasih tahu para member di grup tersebut</p>
            </div>
        </Container>

        <Container className='d-flex mt-4'>
            <div className='d-flex flex-fill gap-2 '>
                <AiOutlineEye style={{fontSize: "20px"}}/>
                <h4> 6</h4>
            </div>
            <div>
                <span> Aktivitas terakhir 3 jam yang lalu</span>
                <div>Fhikry Armand</div>
            </div>
        </Container>
    </>
  )
}

export default Baru