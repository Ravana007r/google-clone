import React from 'react'
// import { Link } from 'react-router-dom'
import SearchPageHeader from '../../components/SearchPageHeader'
import '../cssPages/SearchPage.css'
import { useStateValue } from '../../StateProvider'
import useGooogleSearch from '../../useGoogleSearch';

function SearchPage() {

    const [{ term }] = useStateValue();
    const { data } = useGooogleSearch(term);
    console.log(data);
    return (
        <div>
            <SearchPageHeader />
            {term && (
                <div className='searchPage__Results'>
                    <p className='serachPage__ResultCount'>About {data?.searchInformation.formattedTotalResults
                    } results ({data?.searchInformation.formattedSearchTime}) for {term} </p>
                    {data?.items.map((item) => (

                        <div className='searchPage__Result'>
                            <a href={item.link} className='searchPage__ResultLink'>
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img className='searchPage__ResultImage' src={item.pagemap?.cse_image[0]?.src} alt="" />
                                )}
                                {item.displayLink}
                            </a>
                            <a href={item.link} className='searchPage__ResultTitle'>
                                <h2>{item.title}</h2>
                            </a>
                            <p className='searchPage__ResultDescription'>
                                {item.snippet}
                            </p>
                        </div>
                    ))
            }

                </div>
            )}
        </div>

    )
}

export default SearchPage