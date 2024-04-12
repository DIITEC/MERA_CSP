import React from "react";
import "./Assesment.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
const Assesment = ({ user }) => {
  return (
    <div className="assementPannel">
      <Sidebar />

      <div className="assesmentContentSection">
        <Header user={user} />
        <div className="assementMainBox">
          {/* Contents hereee */}
          Name = {user.name}
          <table>
            <thead>
              <th>
                <td>Sno</td>
                <td>Module</td>
                <td>No. of Question</td>
                <td>Marks Obtain</td>
                <td>Exam Status</td>
              </th>
            </thead>
            <tbody>
              <tr>
                <td>dsd</td>
                <td>dsd</td>
                <td>dsd</td>
                <td>dsd</td>
                <td>dsd</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Assesment;
