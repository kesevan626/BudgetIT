import Cards from '../components/Cards';
import OrderTable from '../components/OrderTable';
import RightBar from '../components/RightBar';
import '../styles/index.css';

const AdminPage = () => {
  return (
    <>
        <div className="middle">
            <Cards />
            <OrderTable />
        </div>
        <div className="right">
            <RightBar />
        </div>
    </>
  )
}

export default AdminPage