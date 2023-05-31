import "./products.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        {/* <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title"> Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/12144473/pexels-photo-12144473.jpeg?cs=srgb&dl=pexels-ma%C3%ABl-balland-12144473.jpg&fm=jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle"> Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">98273457</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Eliot garden, 234 , New York
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Coutry:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={2.5 / 1} title="User Spending(Last 6 Months)" />
          </div>
        </div> */}
        <div className="bottom">
          <h1 className="title"> Last Transaction</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
