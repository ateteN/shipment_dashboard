import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon fontSize="small"/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={4}/>
            </div>
            <p className="title">Total Sales Today</p>
            <p className="amount">$3.6M</p>
            <p className="desc">Total transactions made today</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                        <div className="itemResult negative">
                        <ArrowDropDownIcon fontSize="small" />
                            <div className="resultAmount">$15.6k</div>
                        </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Yesterday</div>
                        <div className="itemResult positive">
                        <ArrowDropUpIcon fontSize="small" />
                            <div className="resultAmount">$3M</div>
                        </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                        <div className="itemResult positive">
                        <ArrowDropUpIcon fontSize="small" />
                            <div className="resultAmount">$5M</div>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured
