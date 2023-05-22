import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../components/Search.css'
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Search({hideButtons}) {

  const[{},dispatch] = useStateValue();
  const [input, setInput] = useState('');
const navigate = useNavigate();

  const search = (e)=>{
    e.preventDefault();
    dispatch({
      type:actionTypes.SET_SEARCH_TERM,
      term:input
    })
    navigate('/search');
  }

  return (
    <form className='search'>
        <div className='search__input'>
          <img className='search__image' src="https://tse1.mm.bing.net/th?id=OIP.k2gWA5dZjiTrXjJMA2XlIwAAAA&pid=Api&P=0" alt="" />
            <input value={input} onChange={(e)=>{setInput(e.target.value)}} type="text" />
        </div>

        {
          !hideButtons ? (<div className='search__button'>
          <button type='submit' onClick={search}>google search</button>
          <button type='submit'>i'm felling lucky</button>
      </div>) : (<div className='search__button' style={{display:'none'}}>
          <button type='submit' onClick={search}>google search</button>
      </div>)
        }
        
    </form>
  )
}

export default Search