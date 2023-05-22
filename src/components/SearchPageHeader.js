import React from 'react'
import Search from '../components/Search'
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../components/SearchPageHeader.css'
import { Link } from 'react-router-dom'

function SearchPage_Header() {
  return (
    <div className='searchPage'>
    <div className='searchPage__header'>
        <Link to={'/'} >
        <img className='searchPage__headerImage' src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="" />
        </Link>
    </div>

    <div className='searchPage__headerBody'>
        <Search hideButtons/>

        <div className='searchPage__options'>
            <div className='searchPage__optionsLeft'>
                 <div className='searchPage__option'>
                    <SearchIcon/>
                    <Link to={'/all'}>All</Link>
                </div>   

                <div className='searchPage__option'>
                    <DescriptionIcon/>
                    <Link to={'/all'}>News</Link>
                </div>

                <div className='searchPage__option'>
                    <ImageIcon/>
                    <Link to={'/all'}>Images</Link>
                </div> 
                <div className='searchPage__option'>
                    <LocalOfferIcon/>
                    <Link to={'/all'}>Shopping</Link>
                </div> 
                <div className='searchPage__option'>
                    <RoomIcon/>
                    <Link to={'/all'}>Maps</Link>
                </div> 
                <div className='searchPage__option'>
                    <MoreVertIcon/>
                    <Link to={'/all'}>More</Link>
                </div> 
            </div>

            <div className='searchPage__optionsRight'>
            <div className='searchPage__option'>
                    <Link to={'/settings'}>Settings</Link>
                </div> 
                <div className='searchPage__option'>
                    <Link to={'/tools'}>Tools</Link>
                </div> 
            </div>
        </div>
    </div>
</div>
  )
}

export default SearchPage_Header