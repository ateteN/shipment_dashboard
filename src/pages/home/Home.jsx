import Sidebar from '../../components/sidebar/Sidebar';
import "./home.scss"
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widgets/Widget';
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart';

const Home =() => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar/>
                <div className='widgets'>
                    <Widget type="user"/>
                    <Widget type="shipment"/>
                    <Widget type="profit"/>
                    <Widget type="balance"/>
                </div>
                <div className="charts">
                    <Featured/>
                    <Chart/>
                </div>
            </div>
        </div>
    )
}

export default Home