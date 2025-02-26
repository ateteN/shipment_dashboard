import "./widget.scss"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Widget = ({ type }) => {
    let data;
    const Values = {
      user: { amount: 23, percentage: 52 },
      shipment: { amount: 66, percentage: 35 },
      profit: { amount: 56823, percentage: 29 },
      balance: { amount: 785345, percentage: 76 },
    };
  
    switch (type) {
      case "user":
        data = {
          amount: Values.user.amount,
          percentage: Values.user.percentage,
          title: "USERS",
          isMoney: false,
          link: "See all users",
          icon: <InsertEmoticonIcon className="icon" style={{ color: "blue", backgroundColor: "#98ecfb" }} />,
        };
        break;
      case "shipment":
        data = {
          amount: Values.shipment.amount,
          percentage: Values.shipment.percentage,
          title: "SHIPMENTS",
          isMoney: false,
          link: "See your orders",
          icon: <LocalShippingIcon className="icon" style={{ color: "#a3a501", backgroundColor: "lightyellow" }} />,
        };
        break;
      case "profit":
        data = {
          amount: `${Values.profit.amount}`,
          percentage: Values.profit.percentage,
          title: "PROFITS",
          isMoney: true,
          link: "View your profit",
          icon: <AttachMoneyIcon className="icon" style={{ color: "red", backgroundColor: "#ffacac" }} />,
        };
        break;
      case "balance":
        data = {
          amount: `${Values.balance.amount}`,
          percentage: Values.balance.percentage,
          title: "BALANCE",
          isMoney: true,
          link: "Check balance",
          icon: <AccountBalanceIcon className="icon" style={{ color: "green", backgroundColor: "#b6febb" }} />,
        };
        break;
      default:
        break;
    }
  
    return (
      <div className="widget">
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">{data.isMoney && "$"} {data.amount}</span>
          <span className="link">{data.link}</span>
        </div>
        <div className="right">
          <div className="percentage">
            <ArrowDropUpIcon />
            {data.percentage}%
          </div>
          {data.icon}
        </div>
      </div>
    );
  };
  
  export default Widget;