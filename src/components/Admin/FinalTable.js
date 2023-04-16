import React, { useState } from "react";
import {  useEffect,useContext } from "react";
import Button from "@mui/material/Button";
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import ToggleBtn from './ToggleBtn';
import axios from "axios";
import { Context, server } from "../../index";

const FinalTable = () => {
  
  const { countUser,setCountUser } =useContext(Context);
  const [userget, setUserget] = useState([]);
    
    useEffect(() => {
      axios
        .get(`${server}/users/users`, {
          withCredentials: true,
        })
        .then((res) => {
          // window.alert(res.data.users); 
          setUserget(res.data.users);
          setCountUser(res.data.users.length)
           
        })
        .catch((error) => {
          setUserget([]);
        });
    }, []);
  const [sortKey, setSortKey] = useState(null);
  const [sortDesc, setSortDesc] = useState(false);
  const [page, setPage] = useState(0);
  const pageSize = 15;

  
  const sortedData = [...userget].sort((a, b) => {
    if (sortKey !== null) {
      const aValue = a[sortKey];
      const bValue = b[sortKey];
      if (aValue < bValue) {
        return sortDesc ? 1 : -1;
      } else if (aValue > bValue) {
        return sortDesc ? -1 : 1;
      }
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedData.length / pageSize);
  const currentPageData = sortedData.slice(
    page * pageSize,
    (page + 1) * pageSize
  );

  const handleSortClick = (key) => {
    if (key === sortKey) {
      setSortDesc(!sortDesc);
    } else {
      setSortKey(key);
      setSortDesc(false);
    }
  };

  const handlePrevPageClick = () => {
    setPage(Math.max(page - 1, 0));
  };

  const handleNextPageClick = () => {
    setPage(Math.min(page + 1, totalPages - 1));
  };

  return (
    <div className="mx-1">
    <table>
      <thead>
        <tr>
         
          <th >
            <button >Name</button>
            <div onClick={() => handleSortClick("name")}>
            <ToggleBtn />
            </div>
          </th>
          <th>
            <button onClick={() => handleSortClick("OrderId")}>Email</button>
            <div onClick={() => handleSortClick("OrderId")}>
            <ToggleBtn />
            </div>
          </th>
          <th>
            <button onClick={() => handleSortClick("OrderDate")}>User Type</button>
            <div onClick={() => handleSortClick("OrderDate")}>
            <ToggleBtn />
            </div>
          </th>
          <th>
            <button onClick={() => handleSortClick("Status")}>Current Status</button>
            <div onClick={() => handleSortClick("Status")}>
            <ToggleBtn />
            </div>
          </th>
          <th>
            <button >Total Time </button>
          </th>
          <th>
            <button >
            <AiOutlineLeft disabled={page === 0} onClick={handlePrevPageClick} className='leftright' style={{fontSize:'14px',borderRadius:'50%',border:'solid 0px red',background: '#ffffff',padding:'1px 3px',marginRight:'7px'}} /> <span>
              Page {page + 1}/{totalPages}
            </span> <AiOutlineRight  disabled={page === totalPages - 1}
              onClick={handleNextPageClick} className='leftright'style={{fontSize:'14px',borderRadius:'50%',border:'solid 0px red',background: '#ffffff',padding:'1px 3px',marginLeft:'7px'}} />
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {currentPageData.map((row) => (
          <tr key={row.id}>
          <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.usertype}</td>
            <td>{row.Status}</td>
            <td>{row.Amount}</td>
            <td className='lastcol'>{row.Page}</td>

          </tr>
        ))}
      </tbody>
      
    </table>
    </div>
  );
};
export default FinalTable;
