import { useState } from 'react'
import { FCurrency } from '../logical/NumberFormat'

export function FilterProduct ({ handleFilter }) {
  //! Establecer un estado para el filtro
  const [range, setRange] = useState(0)
  //! Aplicar el prcio al filtro
  const handleInput = (e) => {
    const newRange = e.target.value
    setRange(newRange)
    handleFilter(previewFilter => ({ ...previewFilter, price: newRange }))
  }
  //! Aplicar la categoria al filtro
  const handleSelect = (e) => handleFilter(previewFilter => ({ ...previewFilter, category: e.target.value }))

  return (
    <div className='row mb-3'>
      <div className='col'>
        <div className='d-flex justify-content-between'>
          <div className='form-floating position-relative'>
            <input type='range' id='customRange1' max='1000' onInput={handleInput} className='form-control form-range border-0' style={{ outline: 'none', boxShadow: 'none' }} />
            <output className='position-absolute top-50 start-100 translate-middle' style={{ paddingTop: '10%', marginLeft: '10%' }}>
              {FCurrency.format(range)}
            </output>
            <label for='floatingInputGrid'>Works with price</label>
          </div>
          <div className='form-floating'>
            <select className='form-select border-0' id='floatingSelectGrid' onInput={handleSelect} style={{ outline: 'none', boxShadow: 'none' }}>
              <option value='all' selected>Todos</option>
              <option value='laptops'>Portatiles</option>
              <option value='smartphones'>Celulares</option>
            </select>
            <label for='floatingSelectGrid'>Works with category</label>
          </div>
        </div>
      </div>
    </div>
  )
}
